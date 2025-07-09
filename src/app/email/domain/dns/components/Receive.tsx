'use client'
import { DataTable } from "@/components/data-table"
import { useColumn } from "./columns"
import {  receivingRecords } from "@/data"

function ReceiveRecords() {
     const column = useColumn({ priority: true, purpose: false })
    return (
        <div>
            <div className="font-[600] text-zinc-800 text-lg flex flex-col gap-4">
                Receive Records
                <DataTable filterkey="" columns={column}  data={receivingRecords} paginate={true}/>
            </div>
        </div>
    )
}

export default ReceiveRecords