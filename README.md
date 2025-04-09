
import imagesConfig from "./config/images.json"  
type Images = {
    defaultImage1: string;
    defaultImage2: string;
    customImage: string;
    fallbackImage: string;
};

const defaultImageStrategy = (condition: boolean, images: Images): string => {
    return condition ? images.defaultImage1 : images.defaultImage2;
};

const customImageStrategy = (_condition: boolean, customImage: string): string => {
    return customImage;
};


const createStrategy = (useCustomImage: boolean) => {
    return useCustomImage ? customImageStrategy : defaultImageStrategy;
};


const images: Images = imagesConfig;


const getImageToDisplay = (
    condition: boolean,
    customImage: string,
    strategy: (condition: boolean, images: any) => string,
    images: Images
): string => {
    return strategy(condition, customImage || images);
};

# Manejo de errores al cargar imagenes en tiempo de ejecucion 
const loadImage = (imageUrl: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const img = new Image();  # Crea un elemento de imagen
        img.src = imageUrl;  # Asigna la URL de la imagen
        img.onload = () => resolve(img);  # Si la imagen carga, resuelve la promesa
        img.onerror = () => reject(images.fallbackImage);  # Si hay error, muestra la imagen de fallback
    });
};

const useCustomImage: boolean = true;  # Esto podría ser una variable de entorno
const strategy = createStrategy(useCustomImage);
const condition: boolean = true;
const customImage: string = images.customImage;

const imageToDisplay: string = getImageToDisplay(condition, customImage, strategy, images);

loadImage(imageToDisplay)
    .then((img: HTMLImageElement) => {
        document.getElementById("image-container")?.appendChild(img);
    })
    .catch((fallback: string) => {
        const container = document.getElementById("image-container");
        if (container) {
            container.src = fallback;
        }
    });