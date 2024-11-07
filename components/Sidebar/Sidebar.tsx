import { ComponentOptions, useComponent } from "@/context/component.context"
import { navItems } from "@/modules/navItems"


export default function Sidebar() {

    const {
        isOpen,
        setCurrentComponent,
        currentComponent,
        closeSidebar
    } = useComponent()

    return (
        <nav
            className={`fixed z-50 top-0 right-0 h-[40%] w-64 bg-[#201d1d] transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

            <div className="flex flex-col justify-center text-center text-[#f5e8c7] space-y-6 py-4 rounded-xl">
                {
                    navItems.map(({ title, href }) => (
                        <h3
                            className={`cursor-pointer rounded-lg p-2 ${currentComponent === href ? 'bg-[#289435]' : ''}`}
                            onClick={() => {
                                setCurrentComponent(href as ComponentOptions);
                                closeSidebar();
                            }}
                        >
                            {title}
                        </h3>
                    ))
                }
            </div>

        </nav>
    )

}