interface KPIProps {
    number:number,
    percentage:number,
    icon: React.ReactNode,
    metric:string
}
function KPI({number,percentage,icon,metric }: KPIProps) {
    return (
        <div className="border rounded-sm cursor-pointer py-2 px-4 min-w-48 w-full">
            <div className="w-full">
                <div className="w-full flex items-center justify-center gap-8 relative">
                    <div className="w-full text-zinc-600 font-semibold text-xl">{number}</div>
                    <div className="text-[#0F6C68] text-end text-sm absolute right-0 bottom-[-5px]">{percentage}%</div>
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