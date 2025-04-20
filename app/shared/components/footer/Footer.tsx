import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from '@/components/icons/SocialIcons';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ContactItem {
  icon: React.ReactNode;
  text: string;
  link: string | null;
}

interface SocialNetwork {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
} 

const contactInfo: ContactItem[] = [
  {
    icon: <MapPin className="text-[#FF9900]" size={20} />,
    text: 'La Molina, Lima',
    link: "https://www.google.com/maps/@-12.0657909,-76.9417864,3a,75y,137.06h,90t/data=!3m7!1e1!3m5!1sHOzwT4Q_tx923-Gqrq09Cg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DHOzwT4Q_tx923-Gqrq09Cg%26yaw%3D137.0596!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    icon: <Phone className="text-[#FF9900]" size={20} />,
    text: '+51 944 543 773',
    link: 'tel:+51992552254'
  },
  {
    icon: <Mail className="text-[#FF9900]" size={20} />,
    text: 'Viverovalledelmantaro@gmail.com',
    link: 'mailto:Viverovalledelmantaro@gmail.com'
  },
  {
    icon: <Clock className="text-[#FF9900]" size={20} />,
    text: 'Lunes - Sábados / 9AM - 7:30PM',
    link: null
  },
];

const socialNetworks: SocialNetwork[] = [
  {
    name: 'Facebook',
    icon: <FacebookIcon />,
    url: 'https://www.facebook.com/profile.php?id=61558591529756',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com/vivero_valledelmantaro/',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
  },
  {
    name: 'WhatsApp',
    icon: <WhatsAppIcon />,
    url: 'https://api.whatsapp.com/send/?phone=51944543773&text&type=phone_number&app_absent=0',
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    name: 'TikTok',
    icon: <TikTokIcon />,
    url: 'https://www.tiktok.com/@vivero.valledelmantaro',
    color: 'bg-black hover:bg-gray-800'
  }
];


const Footer = () => (
  <footer className="w-full bg-[#004400] text-white">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1320px] py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Logo y descripción */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-6">
            <img src="/logo.png" alt="Vivero Valle del Mantaro" className="w-full" />
          </div>
          <p className="text-center md:text-left mb-6 max-w-xs">
            Jardinería profesional para un ambiente más verde y saludable.
          </p>
          <Link
            href="https://api.whatsapp.com/send/?phone=51944543773&text&type=phone_number&app_absent=0"
            className="bg-[#99CC66]  text-white py-2 px-6 rounded-full transition-colors duration-300"
          >
            Contáctanos
          </Link>
        </div>

        {/* Columna 2: Información de contacto */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-[#FF9900]">Contacto</h3>
          <ul className="space-y-3">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {item.icon}
                {item.link ? (
                  <a href={item.link} className="hover:underline">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-[#FF9900]">Síguenos</h3>
          <div className="flex space-x-4 mb-6">
            {socialNetworks.map((network) => (
              <a
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${network.color} w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300`}
                aria-label={network.name}
              >
                {network.icon}
              </a>
            ))}
          </div>
        </div>
        </div>

      {/* Derechos de autor */}
      <div className="border-t border-[#ffffff20] mt-10 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} VIVERO VALLE DEL MANTARO | Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
);

export default Footer;
