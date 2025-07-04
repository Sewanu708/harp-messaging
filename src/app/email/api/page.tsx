'use client'
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { api } from "@/data"
import { DataTable } from "@/components/data-table"
import { useContext, useState } from "react"
import DescriptionPopUp from "./descriptionPopUp"
import PopUp from "./apiPopUp"
import { APIColumn } from "./columns"
import { GlobalContext } from "@/context"
import Delete from "@/components/delete"


function APIManager() {
    const [description, setDescription] = useState('')
    const [createApiDescription, setCreateApiDescription] = useState(false)
    const [createAPI, setCreateAPI] = useState(false)
    const [data, setData] = useState(api)
    const context = useContext(GlobalContext);
    if (!context) return 'Context not defined'
    const { actionDisplay } = context
    const columns = APIColumn();
    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            <div className="py-2 w-full  bg-white  flex items-center justify-between">
                <div className="  font-semibold text-[#0F6C68] text-2xl">
                    API
                </div>
                <div>

                    <Button onClick={() => setCreateApiDescription(true)} className="  mt-4 text-white px-5 py-2 rounded bg-[#0F6C68] cursor-pointer hover:bg-zinc-700">
                        <PlusIcon /> Create new API
                    </Button>
                </div>
            </div>
            <DataTable filterkey="id" columns={columns} data={data} />
            {
                createApiDescription && (
                    <DescriptionPopUp description={setDescription} display={setCreateApiDescription} createAPI={setCreateAPI} />
                )
            }

            {
                createAPI && (
                    <PopUp close={setCreateAPI} description={description} setData={setData} />
                )
            }
            {actionDisplay && (
                <Delete id="undedfinedID" />
            )

            }


        </section>
    )
}

export default APIManager 