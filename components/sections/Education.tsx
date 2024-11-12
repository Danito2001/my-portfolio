import Link from "next/link";
import { AccordionComponent } from "../Accordion";
import { education, InProcess } from '@/modules/education';
import { CardComponent } from "../Card";
import { SliderComponent } from "../Slider";
import { Divition } from "../Divition";


export default function Education() {

    const scheduleImages = ['login.jpeg', 'reservation.jpeg']
    const todoListImages = ['tasks.jpeg', 'options.jpeg']

    return (
        <div className="flex flex-col items-center py-10 space-y-20 animate__animated animate__fadeInRight">
            <div className="flex flex-col">
                <div className="flex items-center">
                    <div className="flex flex-col justify-center w-full space-y-4 px-2 lg:px-10 lg:ml-auto">
                    <h2 className="text-[#227e2d] font-semibold text-3xl">Proyectos</h2>
                    <div className="my-auto border border-t-[#227e2d] w-28 px-10"></div>
                        <div className="flex flex-col space-y-4 bg-[#201d1d] rounded-lg p-4">
                            <div>
                                <SliderComponent folder="todo" images={todoListImages} />
                            </div>
                            <div className="flex flex-col text-[#f5e8c7]">
                                <span className="text-lg font-semibold">Lista de tareas</span>
                                <p className="opacity-85">
                                    Aplicación que permite a los usuarios crear, editar, eliminar o tachar tareas. Cada tarea puede tener
                                    prioridad (baja, media o alta) ayudando a organizar las tareas. Ademas incluye la función de busqueda
                                    por texto, como tambien opciones para filtrar.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 text-[#f5e8c7] gap-4">
                                <span className="bg-orange-500 p-2 rounded-lg">HTML5</span>
                                <span className="bg-blue-500 p-2 rounded-lg">TypeScript</span>
                                <span className="bg-blue-500 p-2 rounded-lg">React JS</span>
                                <span className="bg-purple-500 p-2 rounded-lg">Redux Toolkit</span>
                                <span className="bg-black p-2 rounded-lg">Next JS</span>
                            </div>
                            <div className="flex underline justify-between">
                                <Link
                                    className="text-[#f5e8c7]"
                                    href={'https://github.com/Danito2001/todo-list'}
                                >
                                    Codigo
                                </Link>
                                <Link
                                    className="text-[#f5e8c7]"
                                    href={'https://dani-todomanagelist.netlify.app'}
                                >
                                    Live Demo
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4 bg-[#201d1d] rounded-lg p-4">
                            <div>
                                <SliderComponent folder="schedule" images={scheduleImages} />
                            </div>                            
                            <div className="flex flex-col text-[#f5e8c7]">
                                <span className="text-lg font-semibold">Agenda medica</span>
                                <p className="opacity-85">
                                    Aplicación de gestión de citas médicas que permite a los usuarios programar, confirmar, cancelar o
                                    reagendar sus citas con médicos de manera sencilla. Ademas una interfaz para los profesionales.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-5 text-[#f5e8c7] gap-4 font-semibold">
                                <span className="bg-green-700 p-2 rounded-lg">Express JS</span>
                                <span className="bg-green-800 p-2 rounded-lg">Prisma</span>
                                <span className="bg-blue-700 p-2 rounded-lg">PostgreSQL</span>
                                <span className="bg-orange-500 p-2 rounded-lg">HTML5</span>
                                <span className="bg-blue-500 p-2 rounded-lg">TailwindCSS</span>
                                <span className="bg-blue-500 p-2 rounded-lg">TypeScript</span>
                                <span className="bg-blue-500 p-2 rounded-lg">React JS</span>
                                <span className="bg-black p-2 rounded-lg">Next JS</span>
                                <span className="bg-purple-500 p-2 rounded-lg">Redux Toolkit</span>
                                <span className="bg-purple-700 p-2 rounded-lg">Axios</span>
                            </div>
                            <div className="grid grid-cols-2 gap-x-2 underline text-[#f5e8c7]">
                                <Link href="https://github.com/Danito2001/medical-schedule" className="justify-self-start">Codigo</Link>
                                <Link href="https://github.com/Danito2001/medical-schedule_backend" className="justify-self-end">Codigo Backend</Link>
                                <Link className="col-span-2 text-center justify-self-center" href="https://dani-medicalschedule.netlify.app">Live Demo</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto hidden lg:block">
                        <Divition firstPoint={true} secondPoint={false} thirdPoint={false} />
                    </div>
                </div>

            </div>
            <div className='flex flex-col space-y-20'>

                <div className="flex items-center">
                    <div className="w-full px-2 lg:px-10">
                        <h2 className="text-[#227e2d] font-semibold text-3xl">Educación</h2>
                        <div className="my-auto border border-t-[#227e2d] w-32"></div>
                        {
                            education.map( (e, index) => (
                                <AccordionComponent
                                    key={index}
                                    content={e.content}
                                    src={e.src}
                                    title={e.title}
                                    subTitle={e.subTitle}
                                    certificate={e.certificate}
                                />
                            ))
                        }
                    </div>
                    <div className="ml-auto hidden lg:block">
                        <Divition firstPoint={false} secondPoint={true} thirdPoint={false} />
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="px-2 lg:px-10">
                        <h2 className="text-[#227e2d] font-semibold text-3xl">En Proceso</h2>
                        <div className="my-auto border border-t-[#227e2d] w-32"></div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            {
                                InProcess.map(({ title, plataform, description }, index) => (
                                    <CardComponent
                                        key={index}
                                        title={title}
                                        plataform={plataform}
                                        description={description}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="ml-auto hidden lg:block">
                        <Divition firstPoint={false} secondPoint={false} thirdPoint={true} />
                    </div>
                </div>
            </div>
        </div>
    )

}
