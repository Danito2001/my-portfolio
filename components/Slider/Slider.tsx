import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


export default function Slider({images, folder}: {images: string[]; folder: string;}) {

    const [image, setImage] = useState(0)
    const [src, setSrc] = useState(images[0])

    const [ isLoading, setIsLoading ] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        const timeout = setTimeout(() => {
            setSrc(images[image])
            setIsLoading(false)
        }, 500);

        return () => clearTimeout(timeout); 

    }, [image])


    const ChangeImage = () => {
        return (
            <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
                <div className="flex">
                    <div 
                        className="flex items-center cursor-pointer bg-[#292727] hover:bg-[#363232] transition-colors rounded-l-lg"
                        onClick={() => setImage((prev) => (prev === 0) ? images.length - 1 : prev - 1)}
                    >
                        <ChevronLeftIcon width={30} className="text-[#227e2d]"/>
                    </div>
                    <div>
                        <Image
                            src={`/imgs/${folder}/${src}`}
                            alt="Empathy"
                            width={1000}
                            height={300}
                            quality={100}
                            className={`min-h-[200px] transition-opacity duration-1000 ease-in-out border backdrop:border-gray-500 
                                ${isLoading ? 'opacity-0' : 'opacity-100'}
                            `}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div 
                        className="flex items-center cursor-pointer bg-[#292727] hover:bg-[#363232] transition-colors rounded-r-lg"
                        onClick={() => setImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    >
                        <ChevronRightIcon width={30} className="text-[#227e2d]"/>
                    </div>
                </div>
            </div>
        )
    }

    return <ChangeImage />

}