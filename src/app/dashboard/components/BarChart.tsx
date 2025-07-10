'use client'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

interface BarChartProps {
    data: { month: string; data: number }[];
}

export default function Barchart({ data }: BarChartProps) {
    return (
        <div className="w-full h-60 bg-white p-4 rounded-md ">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="month" stroke="#888888" />
                    <Tooltip />
                    <Bar dataKey="data" fill="#0F6C68" />
                </BarChart>
            </ResponsiveContainer>
        </div>)
}