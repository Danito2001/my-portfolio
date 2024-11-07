import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function CardComponent({
    title,
    plataform,
    description,
}: {
    title: string;
    plataform: string;
    description: string;
}) {
    
    return (
        <div className="flex flex-col my-4 rounded-lg bg-[#201d1d] p-4 w-full">
            <div className="flex flex-col items-center px-4 relative">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center bg-[#289435] rounded-full w-14 h-14">
                        <AcademicCapIcon width={35} className="text-white"/>
                    </div>
                    <div className="flex flex-col space-y-2 text-[#f5e8c7]">
                        <span className="text-center"><b>{title}</b></span>
                        <span><b>Plataforma: </b> {plataform}</span>
                        <p><b>Descripción: </b> {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
