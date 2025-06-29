interface KPIProps {
    number:number,
    percentage:number,
    icon: React.ReactNode,
    metric:string
}
function KPI({number,percentage,icon,metric }: KPIProps) {
    return (
        <div className="shadow-sm rounded-sm cursor-pointer hover:scale-99 transition-all duration-200 ease-in-out p-4 min-w-48 w-full">
            <div className="w-full">
                <div className="w-full flex items-center justify-center gap-8 relative">
                    <div className="w-full text-zinc-700 font-bold text-2xl">{number}</div>
                    <div className="text-[#0F6C68] text-end font-bold absolute right-0 bottom-[-5px]">{percentage}%</div>
                </div>
                <div className="text-zinc-300 w-full flex items-center justify-center gap-2 mt-2">
                    <div>{icon}</div>
                    <div className="text-sm m font-bold ">{metric}</div>
                </div>
            </div>

        </div>
    )
}

export default KPI