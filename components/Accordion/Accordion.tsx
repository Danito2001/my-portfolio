import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from '@nextui-org/button';
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

interface Props {
	content: string;
	src: string;
	title: string;
	subTitle: string;
}

export default function App({content, src, title, subTitle}: Props) {

	const responsiveTitle = title.replace('Certificado De', '')

	const [ isSmallScreen, setISmallScreen ] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setISmallScreen(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

	const StartComponent = () => {

		return (
			<div className="flex space-x-8">
				<div className="flex justify-center items-center bg-gray-200 rounded-full h-10 w-10 md:h-20 md:w-20">
					{
						(src)
						 ? (
							<Image
								src={src}
								alt="udemy"
								width={100}
								height={100}
							/>
						 	)
						 : <AcademicCapIcon width={50}/>
					}
				</div>
				<div>
					<div className="flex flex-col items-center justify-center space-x-8 text-[#f5e8c7]">
						<h3 className={` ${isSmallScreen ? 'md:text-lg' : 'text-sm'} font-semibold`}>
							{
								(isSmallScreen) ? title : responsiveTitle
							}
						</h3> 
						<span className="text-lg opacity-85">{subTitle}</span> 
					</div> 
				</div>
			</div>
		)
	}

  	return (
    	<Accordion>
      		<AccordionItem 
				className="my-4 bg-[#1b0724] rounded-lg p-2"
				startContent={<StartComponent/>} 
				key="1" 
			>
				<div className="flex flex-col items-center space-y-4 bg-[#201d1d] rounded-lg p-4">
        			<p className="text-[#f5e8c7]">{content}</p>
					<Button className="bg-[#289435] text-[#f5e8c7]">
						Ver certificado
					</Button>
				</div>
      		</AccordionItem>
    	</Accordion>
  	);
}