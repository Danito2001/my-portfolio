import { FaHtml5, FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux, SiExpress, SiPrisma, SiAxios, SiReactrouter  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";


export default function Technologies() {

    return (
        <div className="py-10 min-h-screen animate__animated animate__fadeInRight">
            <div className="flex flex-col space-y-10 text-[#f5e8c7]">
                <div>
                    <h2 className="text-[#227e2d] font-semibold text-3xl">Front end</h2>
                    <div className="my-auto border border-t-[#227e2d] w-28"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-[#201d1d] p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold">Lenguajes</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="flex flex-col items-center">
                                <IoLogoJavascript className="text-yellow-500" size={40} />
                                <span>JavaScript</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiTypescript className="text-blue-500" size={40} />
                                <span>TypeScript</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaCss3Alt className="text-blue-500" size={40} />
                                <span>CSS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaHtml5 className="text-orange-500" size={40} />
                                <span>HTML</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#201d1d] p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold">Frameworks/Librerias</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="flex flex-col items-center">
                                <FaReact className="text-blue-500" size={40} />
                                <span>React</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <RiNextjsFill className="text-black-500" size={40} />
                                <span>Next.js</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiReactrouter className="text-red-500" size={40} />
                                <span>React Router</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#201d1d] p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold">Gestión de estados</h3>
                        <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                                <SiRedux className="text-blue-500" size={40} />
                                <span>Redux</span>
                                <span>Redux Toolkit</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#201d1d] p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold">Estilos</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center">
                                <FaCss3Alt className="text-blue-500" size={40} />
                                <span>CSS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <RiTailwindCssFill className="text-blue-500" size={40} />
                                <span>TailwindCSS</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#201d1d] p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold">Obtención de datos</h3>
                        <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                                <SiAxios  className="text-purple-500" size={40} />
                                <span>Axios</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-[#227e2d] font-semibold text-3xl">Back end</h2>
                    <div className="my-auto border border-t-[#227e2d] w-28"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-[#201d1d] p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold">Lenguajes</h3>
                        <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                                <IoLogoJavascript className="text-yellow-500" size={40} />
                                <span>JavaScript</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#201d1d] p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold">Frameworks y Librerías</h3>
                        <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                                <SiExpress className="text-black" size={40} />
                                <span>Express</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaNodeJs className="text-green-500" size={40} />
                                <span>Node.js</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#201d1d] p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold">Base de datos</h3>
                        <div className="flex space-x-4">
                            <div className="flex flex-col items-center">
                                <SiPrisma className="text-green-500" size={40} />
                                <span>Prisma</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <BiLogoPostgresql className="text-blue-500" size={40} />
                                <span>PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}