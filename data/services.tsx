import { FaGithub, FaDatabase, FaCode  } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";


export const servicesHabilities = [
    {
        icon: <FaGithub size={30} className="text-[#289435]"/>,
        title: 'Control Versiones Git',
        content: 'Manejo de control de versiones usando Git para gestionar el historial de cambios, colaborar en equipo y optimizar el desarrollo.'
    },
    {
        icon: <FaDatabase size={30} className="text-[#289435]"/>,
        title: 'Desarrollo Backend',
        content: 'Desarrollo de APIs y servicios backend con tecnologías como Node.js y Express, asegurando seguridad en la gestión de datos.'
    },
    {
        icon: <FaCode size={30} className="text-[#289435]"/>,
        title: 'Desarrollo Web',
        content: 'Creación de interfaces web modernas y responsivas, optimizando la experiencia del usuario en cualquier dispositivo.'
    },
    {
        icon: <FaMobileAlt size={30} className="text-[#289435]"/>,
        title: 'Diseño De Aplicaciones',
        content: 'Diseño de interfaces para aplicaciones móviles, centradas en la experiencia del usuario, con elementos intuitivos y estéticamente agradables.'
    }
]