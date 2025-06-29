import { Cell, Pie, PieChart} from "recharts"

interface PieProps {
    data: dataProps[]
}
interface dataProps {
    name: string,
    value: number,
    color: string
}
const chartConfig = {
    data: {
        label: 'Data',
        color: '#0F6C68',
    }
}

function Piechart({ data }: PieProps) {
    return (
        <div className={"max-w-128 min-64 h-60 bg-white  p-4"}>
            <PieChart width={300} height={200}>
                <Pie data={data} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={75} fill="#8884d8" label>
                    {
                        data.map((item: dataProps) => <Cell key={item.name} fill={item.color} />)
                    }
                </Pie>


            </PieChart>
        </ div>


    )
}

export default Piechart