

interface Skill {
    src: string;
    title: string;
    description: string;
}

export type Categories = 'languages' | 'frameworks' | 'others';


export const skills: { [category in Categories]: Skill[] } = {
    languages: [
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            title: "HTML5",
            description: "htmlIcon"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" ,
            title: "JavaScript",
            description: "javascriptIcon"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" ,
            title: "TypeScript",
            description: "typescriptIcon"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" ,
            title: "CSS3",
            description: "cssIcon"
        },
    ],
    frameworks: [

        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            title: "ReactJS",
            description: "reactIcon"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" ,
            title: "NextJS",
            description: "nextIcon"
        },
        {
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            title: "TailwindCSS",
            description: "tailwindIcon"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
            title: "Redux",
            description: "reduxIcon"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            title: "ExpressJS",
            description: "expressIcon"
        }
    ],
    others: [

        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" ,
            title: "Axios",
            description: "axiosIcon"
        },
        
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" ,
            title: "Prisma",
            description: "prismaIcon"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"  ,
            title: "Git",
            description: "gitICon"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" ,
            title: "PostgreSQL",
            description: "postgreSQLicon"
        },
    ]
    
}

export const softSkills:Skill[] = [
    {
        src: "/imgs/adaptability.png",
        title: "Adaptabilidad",
        description: "empathyImage"
    },
    {
        src: "/imgs/empathy.png",
        title: "Empatía",
        description: "adaptabilityImage"
    },
]
