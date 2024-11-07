import { FaHtml5, FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux, SiExpress, SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

export const habilitiesContent = {
    habilities: [
        {
            title: 'Lenguajes de programación',
            text: 'Conocimiento en lenguajes como JavaScript, TypeScript.',
            icons: [
                <IoLogoJavascript className='text-[#227e2d]' size={30} />, 
                <SiTypescript className='text-[#227e2d]' size={26} />
            ]
        },
        {
            title: 'Habilidades Front end',
            text: 'Desarrollo de interfaces de usuario: HTML, CSS, JavaScript y frameworks como React, Next.js y bibliotecas como Redux.',
            icons: [ 
                <FaHtml5 className='text-[#227e2d]' size={30} />,
                <FaCss3Alt className='text-[#227e2d]' size={30} />,
                <IoLogoJavascript className='text-[#227e2d]' size={30} />,
                <SiTypescript className='text-[#227e2d]' size={26} />,
                <FaReact className='text-[#227e2d]' size={30} />,
                <RiNextjsFill className='text-[#227e2d]' size={30} />,
                <SiRedux className='text-[#227e2d]' size={30} /> 
            ]
        },
        {
            title: 'Habilidades Back end',
            text: 'Manejo de lógica del servidor: Node.js, JavaScript, y frameworks como Express.',
            icons: [ 
                <FaNodeJs className='text-[#227e2d]' size={30} />,
                <IoLogoJavascript className='text-[#227e2d]' size={30} />,
                <SiExpress className='text-[#227e2d]' size={30} />
            ]
        },
        {
            title: 'Habilidades en Bases de Datos',
            text: 'Conocimiento en Prisma como ORM para manejar bases de datos relacionales con PostgreSQL.',
            icons: 
            [
                <SiPrisma className='text-[#227e2d]' size={30} />,
                <BiLogoPostgresql className='text-[#227e2d]' size={30} />
            ]
        }
    ],
    softHabilities: [
        {
            title: 'Aprendizaje continuo',
            text: 'Compromiso con el aprendizaje continuo, trabajo en equipo, resolución de problemas y adaptación a nuevas tecnologías.'
        },
        {
            title: 'Adaptabilidad',
            text: 'Flexibilidad para ajustarse a nuevos entornos, tecnologías o cambios en las circunstancias.'
        },
        {
            title: 'Manejo del estrés',
            text: 'Capacidad para mantener la calma y el enfoque en situaciones de presión o bajo plazos ajustados.'
        },
        {
            title: 'Empatía',
            text: 'Habilidad para comprender y considerar las emociones y perspectivas de los demás, fomentando relaciones positivas.'
        }
    ]
}