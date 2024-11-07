'use client'

import { useComponent } from '@/context/component.context';
import Education from '@/components/sections/Education';
import Habilities from '@/components/sections/Habilities';
import Home from '@/components/sections/Home';
import Technologies from '@/components/sections/Technologies';
import Navbar from '@/components/Navbar/Navbar';



export default function MainPage() {

    const { currentComponent } = useComponent()

    const renderedComponent = () => {

        switch (currentComponent) {
            case 'home':
                return <Home/>
        
            case 'habilities':
                return <Habilities/>
            
            case 'education':
                return <Education/>

            case 'technology':
                return <Technologies/>
        }

    }

    return (
        <>
            <Navbar/>
            <div className='px-4 lg:px-20 pt-[80px]'>
                {renderedComponent()}
            </div>
        </>
    )
    
}


