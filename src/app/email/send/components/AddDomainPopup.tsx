import { Button } from "../../../../components/ui/button";
import { useRouter } from "next/navigation";
import { domainTableData } from "@/data";
import { DataTable } from "../../../../components/data-table";
import { useColumns } from "@/app/email/send/components/columns";
import { GlobalContext } from "@/context";
import { useContext } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";



function AddDomainPopup() {

    const navigator = useRouter();
    const columns = useColumns()
    const context = useContext(GlobalContext)
    if (!context) return ('context not found')
    const { setIsAddDomainOpen } = context
    return (
        <div className="absolute h-screen bg-white inset-0 flex flex-col w-full items-center justify-start z-50">

            <div className="overflow-x-auto rounded-md  w-full p-8">
                <div className="w-full flex item-end justify-between">
                    <MdOutlineKeyboardArrowLeft onClick={() => setIsAddDomainOpen(false)} className="cursor-pointer"/>
                    <Button variant={"outline"} onClick={() => navigator.push('/email/domain/create')} className="cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out">
                        Add New Domain
                    </Button>

                </div>

                <DataTable filterkey="domain" columns={columns} data={domainTableData} />
            </div>

        </div>
    )
}

export default AddDomainPopup