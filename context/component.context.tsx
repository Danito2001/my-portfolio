import { createContext, useContext, useState } from "react";

export type ComponentOptions = 'home' | 'habilities' | 'education' | 'technology';

interface ContextProps {
    currentComponent: ComponentOptions;
    setCurrentComponent: (component: ComponentOptions) => void;
    isOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
}

const ComponentContext = createContext<ContextProps>({
    currentComponent: 'home',
    setCurrentComponent: () => {},
    isOpen: false,   
    openSidebar: () => {}, 
    closeSidebar: () => {}
})


export function ComponentProvider({children}: {children: React.ReactNode}) {
    
    const [ currentComponent, setCurrentComponent ] = useState<ComponentOptions>('home')
    const [ isOpen, setIsOpen ] = useState(false)

    const openSidebar = () => { setIsOpen(true) }
    const closeSidebar = () => { setIsOpen(false) }

    return (
        <ComponentContext.Provider value={{ 
            currentComponent, 
            setCurrentComponent, 
            isOpen, 
            openSidebar,
            closeSidebar
        }}>
            {children}
        </ComponentContext.Provider>
    )

}

export const useComponent = (): ContextProps => {
	const context = useContext(ComponentContext);
	if (!context) {
		throw new Error("ComponentContext is not available");
	}
	return context;
};