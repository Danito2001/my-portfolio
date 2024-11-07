
export default function ServiceCard({
    icon, 
    content, 
    title
}:{
    icon: JSX.Element;
    content: string;
    title: string;
} ) {

    return (
        <div className="bg-[#201d1d] p-4 space-y-4 min-w-[280px] lg:w-[400px]">
            {icon}
            <div className="space-y-2 content-[#f5e8c7]">
                <h4 className="font-semibold">{title}</h4>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}