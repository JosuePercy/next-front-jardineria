        
        const WSP_NUMBER = process.env.NEXT_PUBLIC_WSP_NUM || "944543773"; // Fallback por si la variable no está definida

        export const msjWhatsapp = (productName?: string) => {
        const baseNumber = WSP_NUMBER.startsWith("51")
            ? WSP_NUMBER
            : `51${WSP_NUMBER}`; // Asegura el código de país sin duplicar

        const message = encodeURIComponent(
            `🌹🌿☘ *¡Hola Valle del Mantaro!* Quiero información sobre ${
            productName || "este producto"
            }`
        );

        return `https://api.whatsapp.com/send?phone=${baseNumber}&text=${message}`;
        };
