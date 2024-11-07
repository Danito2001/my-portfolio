

export default function Divition({
    firstPoint, 
    secondPoint, 
    thirdPoint
}: {
    firstPoint: boolean
    secondPoint: boolean
    thirdPoint: boolean
}) {

    const complete = 'bg-white'
    const inComplete = 'border border-white' 

    return (
        <div className="flex flex-col items-center">
            <div className={`h-4 w-4 ${firstPoint ? complete : inComplete} rounded-full`}></div>
            <div className="mx-auto border-l-4 border-l-green-500 h-20"></div>
            <div className={`h-4 w-4 ${secondPoint ? complete : inComplete} rounded-full`}></div>
            <div className="mx-auto border-l-4 border-l-green-500 h-20"></div>
            <div className={`h-4 w-4 ${thirdPoint ? complete : inComplete} rounded-full`}></div>

        </div>
    )
}