
interface Props {
    icons?: JSX.Element[] | null;
    title: string;
    text: string;
}

export default function HabilitiesComponent({icons, title, text}: Props) {

    return (
        <div className='w-full  bg-[#201d1d] text-[#f5e8c7] rounded-lg p-4'>
            <div className='flex flex-col gap-4 lg:flex-row justify-between '>
                <div>
                    <h4 className='font-semibold'>{title}</h4>
                    <span>{text}</span>
                </div>
                <div className='grid grid-cols-4 sm:grid-cols-7 items-center gap-2'>
                    {
                        (icons === null)
                         ? null
                         : (
                            icons?.map( icon => (
                                <div>{icon}</div>
                            ))
                         )
                       
                    }
                </div>
            </div>
        </div>
    )

}