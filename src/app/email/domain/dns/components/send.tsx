'use client'
import { DataTable } from "@/components/data-table"
import { sendColumn } from "./columns"
import { authenticationRecords } from "@/data"

function SendRecords() {
    const column = sendColumn({ priority: false, purpose: false })
    return (
        <div>
            <div className="font-[600] text-zinc-800 text-lg flex flex-col gap-4">
                Send Records
                <DataTable filterkey="" columns={column} data={authenticationRecords} paginate={true} />

            </div>
        </div>
    )
}

export default SendRecords