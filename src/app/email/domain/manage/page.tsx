'use client'
import GetMailbyId from "../../../../components/GetMailbyId"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react";
import {  domainTableData } from "@/data";;
import { useRouter } from "next/navigation";
import { DataTable } from "../../../../components/data-table";
import { columns } from "./columns";
function Manage() {
    const navigate = useRouter()
    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            <div className="py-2 w-full  bg-white  flex items-center justify-between">
                <div className="  font-semibold text-[#0F6C68] text-2xl">
                    Manage Domains
                </div>
                <div>

                    <Button onClick={() => navigate.push('/email/domain/create')} className=" capitalize mt-4 text-white px-5 py-2 rounded bg-[#0F6C68] cursor-pointer hover:bg-zinc-700">
                        <PlusIcon />Add new domain
                    </Button>
                </div>
            </div>

            <div className="mt-6" />
           
            <DataTable columns={columns} data={domainTableData} filterkey="id"/>
        </section>
    )
}

export default Manage