'use client'
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { dataProps } from "@/data"
import { useRouter } from "next/navigation"
import { useColumns } from "@/app/email/viewmails/columns"
import { DataTable } from "@/components/data-table"
import { useEffect, useState } from "react"
import { TableSkeleton } from "@/components/skeleton"

function View() {
    const navigate = useRouter()
    const [data, setData] = useState<dataProps[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const columns = useColumns()
    async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch('/email/viewmails/api')
            if (!response.ok) {
                setError('Error! Failed to load emails.')
                setLoading(false)
                return
            }
            const feedback = await response.json()
            setData(feedback)
            setError('')
        } catch (err) {

            setError(`Something went wrong while loading emails., ${err}`)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        const id = setTimeout(() => setError(''), 5000)
        return () => clearTimeout(id)
    }, [error])

    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            <div className="py-2 w-full bg-white flex items-center justify-between">
                <div className="text-[#0F6C68] text-2xl">View Mails</div>
                <Button
                    onClick={() => navigate.push('/email/send')}
                    className="mt-4 text-white px-5 py-2 rounded bg-[#0F6C68] hover:bg-zinc-700"
                >
                    <PlusIcon className="mr-2" /> Send New Email
                </Button>
            </div>


            {error && (
                <div className="my-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            {loading ? (
                <TableSkeleton columns={5} rows={5} showFilter={true} showPagination={true} />
            ) : (
                <DataTable filterkey="messageId" columns={columns} data={data} />
            )}
        </section>
    )
}

export default View
