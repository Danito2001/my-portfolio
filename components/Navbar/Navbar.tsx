import Sidebar from "../Sidebar/Sidebar";
import { ComponentOptions, useComponent } from "@/context/component.context";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { navItems } from "@/modules/navItems";


export default function Navbar() {

    const { 
        setCurrentComponent, 
        currentComponent,
        isOpen,
        openSidebar,
        closeSidebar
    } = useComponent()

    return (
        <>
            <div
                onClick={ closeSidebar } 
                className={`${isOpen ? 'fixed inset-0 z-10' : ''}`}>
            </div>
            <div>
                <nav className="absolute bg-[#201d1d] w-full p-4">
                    <div className="md:flex justify-between text-[#f5e8c7] px-10">
                                
                        <div className="flex items-center justify-between">
                            <h2 className="font-bold text-xl">Dan<span className="text-[#289435] font-bold">i</span>el Carvajal</h2>
                            <Bars3Icon 
                                onClick={ openSidebar }
                                width={30} 
                                className="md:hidden cursor-pointer"
                            />
                        </div>
                        <div className="hidden md:flex space-x-4 items-center">
                            {
                                navItems.map( ({title, href}, index) => (
                                    <h3 
                                        key={index}
                                        className={`cursor-pointer rounded-lg p-2 ${currentComponent === href ? 'bg-[#289435]' : ''}`} 
                                        onClick={() => setCurrentComponent(href as ComponentOptions)}
                                    >   
                                        {title}
                                    </h3>
                                ))
                            }
                            
                        </div>
                    </div>
                </nav>
                <Sidebar/>
            </div>
        </>
    )

}