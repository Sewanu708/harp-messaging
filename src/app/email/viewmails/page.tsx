'use client'
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { newEmailData } from "@/data"
import { useRouter } from "next/navigation"
import { mainDataColumns } from "@/app/email/viewmails/columns"
import { DataTable } from "@/components/data-table"


function View() {
    const navigate = useRouter()
    
    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            <div className="py-2 w-full  bg-white  flex items-center justify-between">
                <div className="  text-[#0F6C68] text-2xl">
                    View Mails
                </div>
                <div>   

                    <Button onClick={()=>navigate.push('/email/send')} className="  mt-4 text-white px-5 py-2 rounded bg-[#0F6C68] cursor-pointer hover:bg-zinc-700">
                        <PlusIcon /> Send New  Email
                    </Button>
                </div>
            </div>
            <DataTable filterkey="messageId" columns={mainDataColumns} data={newEmailData}/>

            
        </section>
    )
}

export default View 