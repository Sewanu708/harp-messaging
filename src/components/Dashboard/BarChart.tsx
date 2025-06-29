'use client'
import { BarChart, Bar } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"



interface BarChartProps {
    data: { month: string, data: number }[]
}

const chartConfig = {
    data: {
        label: 'Data',
        color: '#0F6C68',
    }
}
export default function Barchart({ data }: BarChartProps) {
    return (

        <ChartContainer config={chartConfig} className="w-full h-60 bg-white p-4">
            <BarChart data={data} width={0} height={0} style={{ width: '100%', height: '100%' }}>
            <Bar dataKey="data" fill={chartConfig.data.color} />
            <ChartTooltip content={<ChartTooltipContent />} />  
            </BarChart>
        </ChartContainer>

    )
}