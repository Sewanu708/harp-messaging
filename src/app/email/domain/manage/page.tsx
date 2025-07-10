'use client'

import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react";
import { domainProps, domainTableData } from "@/data";;
import { useRouter } from "next/navigation";
import { DataTable } from "../../../../components/data-table";
import { useColumns } from "./columns";
import { useContext, useEffect, useState } from "react";
import { TableSkeleton } from "@/components/skeleton";
import Delete from "@/components/delete";
import { GlobalContext } from "@/context";
function Manage() {
    const navigate = useRouter()
    const [data, setData] = useState<domainProps[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [deleteText, setDeleteText] = useState('')
    const columns = useColumns()
    useEffect(() => {
        const loadId = setTimeout(() => {
            setData(domainTableData)
            setLoading(false)
        }, 4000)

        return () => clearTimeout(loadId)
    },[])
    useEffect(() => {
        const id = setTimeout(() => { setError(''); setDeleteText('') }, 5000)
        return () => clearTimeout(id)
    }, [error, deleteText])
    const context = useContext(GlobalContext)
    if (!context) return 'Context not defined'
    const { deleteDomain, setDeleteDomain } = context

    function closeFunc() {
        setDeleteDomain({ id: '', state: false })
    }
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
            {error && (
                <div className="my-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            {deleteText && (
                <div className="my-4 p-4 bg-[#0F6C68] border border[#0F6C68] text-green-300 rounded-md">
                    {deleteText}
                </div>
            )}

            <div className="mt-6" />


            {loading ? (
                <TableSkeleton columns={5} rows={5} showFilter={true} showPagination={true} />
            ) : <DataTable columns={columns} data={data} filterkey="id" />}
            {deleteDomain?.state && <Delete text="Are you sure you want to remove this" deletefunc={() => { }} closeFunc={closeFunc} actionWord="Remove" />}
        </section>
    )
}

export default Manage