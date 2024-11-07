import { habilitiesContent } from '@/data/habilities';
import { HabilitiesComponent } from '../Habilities';


export default function Habilities() {

    return (
        <div className='py-10 space-y-6 animate__animated animate__fadeInRight'>

            {/* Habilities */}
                <div className='flex flex-col space-y-8 ml-auto'>
                    <div>
                        <h2 className="text-[#227e2d] font-semibold text-3xl">Habilidades</h2>
                        <div className="my-auto border border-t-[#227e2d] w-32"></div>
                    </div>
                    {
                        habilitiesContent.habilities.map( (hability, index) => (
                            <HabilitiesComponent
                                key={index}
                                icons={hability.icons} 
                                title={hability.title} 
                                text={hability.text}
                            />
                        ))
                    }
                </div>
                    
            {/* Skills and soft skills */}
            <div className='flex flex-col space-y-8 py-10'>

                <div>
                    <h2 className="text-[#227e2d] font-semibold text-3xl">Habilidades Pasivas</h2>
                    <div className="my-auto border border-t-[#227e2d] w-60"></div>
                </div>
                {
                    habilitiesContent.softHabilities.map( (hability, index) => (
                        <HabilitiesComponent
                            key={index}
                            title={hability.title} 
                            text={hability.text}
                        />
                    ))
                }
            </div>
        </div>
    )

}