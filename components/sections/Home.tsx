import { Button } from "@nextui-org/button";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { servicesHabilities } from "@/data/services";
import { ServiceCard } from "../ServiceCard";
import { Divition } from "../Divition";
import Link from "next/link";


export default function Home() {

    return (
        <div className="py-6 text-[#f5e8c7] space-y-20 animate__animated animate__fadeInRight">

            <div className="flex items-center justify-end">
                <div className="flex items-center lg:ml-auto">
                    <div className="space-y-2">
                        <h2 className="font-semibold text-4xl">Hola, Soy un Desarrollador Front End</h2>
                        <p className="opacity-85 w-full md:w-1/2 pb-2">
                            apasionado por crear diseños de aplicaciones web y darles vida usando código y desarrollando diseño móvil
                        </p>
                        <Button 
                            onClick={() => window.open('/cv.pdf', '_blank')}
                            className="bg-[#289435] text-[#f5e8c7]"
                        >
                            Ver CV
                        </Button>
                    </div>
                </div>
                <div className="ml-auto hidden lg:block">
                    <Divition firstPoint={true} secondPoint={false} thirdPoint={false} />
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="space-y-4 lg:ml-auto">
                    <div>
                        <span className="text-[#f5e8c7]">Servicios</span>
                        <h2 className="text-[#227e2d] font-semibold text-3xl">Habilidades</h2>
                        <div className="my-auto border border-t-[#227e2d] w-32"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {
                            servicesHabilities.map( ({icon, content, title}, index) => (
                                <ServiceCard
                                    key={index}
                                    icon={icon}
                                    content={content} 
                                    title={title}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="ml-auto hidden lg:block">
                    <Divition firstPoint={false} secondPoint={true} thirdPoint={false} />
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="space-y-4 lg:ml-auto">
                    <div>
                        <h2 className="text-[#227e2d] font-semibold text-3xl">Contactame</h2>
                        <div className="my-auto border border-t-[#227e2d] w-32"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#1d6b26] cursor-pointer">
                                <Link href={"https://www.instagram.com/dani_manito"}>
                                    <FaInstagram size={60}/>
                                </Link>
                            </div>
                            <span className="text-[#f5e8c7]">Instagram</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#1d6b26] cursor-pointer">
                                <Link href={"https://wa.me/56930388696"}>
                                    <FaWhatsapp size={60}/>
                                </Link>
                            </div>
                            <span className="text-[#f5e8c7]">Whatsapp</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#1d6b26] cursor-pointer">
                                <Link href={"https://www.linkedin.com/in/daniel-carvajal-09b8752a6"}>
                                    <FaLinkedin size={60}/>
                                </Link>
                            </div>
                            <span className="text-[#f5e8c7]">Linkedin</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#1d6b26] cursor-pointer">
                                <Link href={"https://github.com/Danito2001"}>
                                    <FaGithub size={60}/>
                                </Link>
                            </div>
                            <span className="text-[#f5e8c7]">GitHub</span>
                        </div>  
                    </div>
                </div>
                <div className="ml-auto hidden lg:block">
                    <Divition firstPoint={false} secondPoint={false} thirdPoint={true} />
                </div>
            </div>
        </div>
    )

}