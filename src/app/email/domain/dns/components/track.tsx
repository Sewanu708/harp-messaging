'use client'
import { DataTable } from "@/components/data-table"
import { sendColumn } from "./columns"
import {  trackingRecords } from "@/data"

function TrackRecords() {
     const column = sendColumn({ priority: false, purpose: true })
    return (
        <div>
            <div className="font-[600] text-zinc-800 text-lg flex flex-col gap-4">
                Tracking Records
                <DataTable filterkey="" columns={column}  data={trackingRecords} paginate={true}/>

            </div>
        </div>
    )
}

export default TrackRecords