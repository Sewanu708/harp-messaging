'use client'
import KPI from "@/app/dashboard/components/KPIs"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdFilterList } from "react-icons/md";
import Barchart from "@/app/dashboard/components/BarChart";
import { chartData, kpiData, newEmailData, pieData } from "@/data";
import Piechart from "@/app/dashboard/components/PieChart";
import { DataTable } from "@/components/data-table";
import { columns } from "./components/column";


function Page() {
    return (
        <section className=" py-4 px-4 w-full h-screen overflow-y-auto">
            <div className="text-[#0F6C68] text-2xl  ">Email Overview</div>

            <div className="flex items-end justify-end flex-wrap gap-4 sm:gap-0 mt-4">
                <div className="flex items-center mt-4  border rounded-sm w-fit">
                    <div className="flex p-2 gap-2 items-center cursor-pointer hover:bg-zinc-100 transition-all duration-200">
                        <SlCalender className="text-zinc-600 text-sm" />
                        <span className="font-[500] text-zinc-600 text-sm">Oct 12 - Nov 19</span>
                    </div>
                    <div className="border-l p-2  flex items-center gap-2 cursor-pointer hover:bg-zinc-100 transition-all duration-200 ">
                        <span className="font-[500] text-zinc-600 text-sm">Monthly</span><MdOutlineArrowDropDown className="text-zinc-600 text-sm" />
                    </div>
                </div>
                <div className="flex  py-2 px-2  gap-2   items-center cursor-pointer hover:bg-zinc-100 transition-all duration-200 rounded-sm border ml-4">
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
                <div className="flex-1 min-64 min-w-[400px]  max-h-[300px] min-h-auto bg-white rounded-md shadow-sm ">
                    <div className="text-lg mb-4 text-[#0F6C68] p-4">Monthly Data Overview</div>
                    <div>
                        <Barchart data={chartData} />
                    </div>
                </div>
                <div className="max-w-240 min-64 max-h-[300px] min-h-auto bg-white rounded-md shadow-lg ">
                    <div className=" text-[#0F6C68] text-lg mb-2 p-4">Email Engagement Overview</div>
                    <div>
                        <Piechart data={pieData} />
                    </div>

                </div>
            </div>

            <div className=" bg-white rounded-md shadow-lg p-4 overflow-x-auto">
                <div className="p-4 bg-white text-[#0F6C68] font-semibold text-lg rounded-t-md shadow-sm border-b border-zinc-200 mb-2">
                    Recent Activity
                </div>
                <DataTable  filterkey="" columns={columns} data={newEmailData} paginate={true}/>
            </div>



        </section>
    )
}

export default Page