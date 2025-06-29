'use client'
import KPI from "@/components/Dashboard/KPIs"
import { FiMail } from "react-icons/fi";
import { MdSend, MdOutlineError, MdOutlineArrowDropDown } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdFilterList } from "react-icons/md";
import Barchart from "@/components/Dashboard/BarChart";
import Table from "@/components/Table";
import { emailData } from "@/data";
import Piechart from "@/components/Dashboard/PieChart";
const kpiData = [
    {
        number: 1200,
        percentage: 100,
        icon: <FiMail />,
        metric: "Total Email",
    },
    {
        number: 950,
        percentage: 79,
        icon: <MdSend />,
        metric: "Total Email Sent",
    },
    {
        number: 50,
        percentage: 4,
        icon: <MdOutlineError />,
        metric: "Total Bounce",
    }, {
        number: 50,
        percentage: 4,
        icon: <MdOutlineError />,
        metric: "Total Bounce",
    },
];
const chartData = [
    { month: "January", data: 186, },
    { month: "February", data: 305, },
    { month: "March", data: 237, },
    { month: "April", data: 73, },
    { month: "May", data: 209, },
    { month: "June", data: 214, },
]

const pieData = [
    {
        name: 'Delivered', value: 400, color: '#f5f5f5'
    }, {
        name: 'Opened', value: 280, color: '#0F6C68'
    }
]


function Page() {
    return (
        <section className=" py-4 px-4 w-full h-screen overflow-y-auto">
            <div className="text-[#0F6C68] text-3xl font-semibold">Email Overview</div>

            <div className="flex items-end justify-end flex-wrap gap-4 sm:gap-0 mt-4">
                <div className="flex items-center mt-4  border rounded-sm w-fit">
                    <div className="flex p-2 flex gap-2   items-center cursor-pointer hover:bg-zinc-100 transition-all duration-200">
                        <SlCalender className="text-zinc-600 text-sm" />
                        <span className="font-[500] text-zinc-600 text-sm">Oct 12 - Nov 19</span>
                    </div>
                    <div className="border-l p-2  flex items-center gap-2 cursor-pointer hover:bg-zinc-100 transition-all duration-200 ">
                        <span className="font-[500] text-zinc-600 text-sm">Monthly</span><MdOutlineArrowDropDown className="text-zinc-600 text-sm" />
                    </div>
                </div>
                <div className="flex  py-2 px-2 flex gap-2   items-center cursor-pointer hover:bg-zinc-100 transition-all duration-200 rounded-sm border ml-4">
                    <MdFilterList className="text-zinc-600" />
                    <span className="font-[500] text-zinc-600 text-sm">Filter</span>
                </div>
            </div>

            <div className="flex items-center lg:justify-between gap-4 flex-wrap lg:flex-nowrap mt-2 w-full mb-6">
                {kpiData.map((kpi, index) => (
                    <KPI key={index} {...kpi} />
                ))}
            </div>
            <div className="flex items-center justify-between flex-wrap gap-8 mb-6">
                <div className="flex-1 min-64 min-w-[400px]  max-h-[300px] min-h-auto bg-white rounded-md shadow-lg ">
                    <div className="text-gray-400 font-semibold text-lg mb-4 p-4">Monthly Data Overview</div>
                    <div>
                        <Barchart data={chartData} />
                    </div>
                </div>
                <div className="max-w-240 min-64 max-h-[300px] min-h-auto bg-white rounded-md shadow-lg ">
                    <div className="text-gray-400 font-semibold text-lg mb-2 p-4">Email Engagement Overview</div>
                    <div>
                        <Piechart data={pieData} />
                    </div>

                </div>
            </div>

            <div className=" bg-white rounded-md shadow-lg p-4 overflow-x-auto">
                <div className="p-4 bg-white text-[#0F6C68] font-semibold text-lg rounded-t-md shadow-sm border-b border-zinc-200 mb-2">
                    Recent Activity
                </div>
                <Table headers={['Timestamp', 'Recipient', 'Subject', 'Status', 'Response Code']} data={emailData} />
            </div>



        </section>
    )
}

export default Page