'use client'
import { domainTableData, webhookdata, WebhookProps, Webhooks } from "@/data"
import { SelectDemo } from "./components/select"
import { DataTable } from "@/components/data-table"
import { useColumns } from "./components/columns"
import { GlobalContext } from "@/context"
import { useContext, useEffect, useState } from "react"
import { AddWebhook } from "./addwebhook"
import Delete from "@/components/delete"

function handleData(webhookSelectedDomain: string) {

    const data = webhookdata.find(data => data.id === webhookSelectedDomain)?.metadata;

    const Webhooks = [{
        id: '1',
        event: 'delivered',
        url: data?.delivered ?? "",
    }, {
        id: '2',
        event: 'opened',
        url: data?.opened ?? "",
    }, {
        id: '3',
        event: 'clicked',
        url: data?.clicked ?? "",
    }, {
        id: '4',
        event: 'bounced',
        url: data?.bounced ?? "",
    }, {
        id: '5',
        event: 'complained',
        url: data?.complained ?? "",
    }, {
        id: '6',
        event: 'unsubscribed',
        url: data?.unsubscribed ?? "",
    }]
    return Webhooks
}
function Webhook() {
    const [data, setData] = useState<WebhookProps[]>(Webhooks);
    const [input, setInput] = useState('')
    const context = useContext(GlobalContext)
    const datacolumns = useColumns()
    useEffect(() => {
        setData(handleData(webhookSelectedDomain))
    }, [context?.webhookSelectedDomain])
    if (!context) return <div>Context not defined</div>
    const { webhookSelectedDomain, addWebhook, setAddWebhook, removeWebhook, setRemoveWebhook } = context;



    function deletehook() {
        const index = webhookdata.findIndex(data => data.id === webhookSelectedDomain);
        if (index > -1) {
            const existing = webhookdata[index]
            const newdata = {
                ...existing,
                metadata: {
                    ...existing.metadata, [removeWebhook.event]: ''
                }
            }
            webhookdata.splice(index, 1, newdata);
            setData(handleData(webhookSelectedDomain))
            setRemoveWebhook({ state: false, id: '', event: '' })
        };

    }
    function addhook() {
        const index = webhookdata.findIndex(data => data.id === webhookSelectedDomain);
        if (index > -1) {
            const existing = webhookdata[index]
            const newdata = {
                ...existing,
                metadata: {
                    ...existing.metadata, [addWebhook.event]: input
                }
            }
            webhookdata.splice(index, 1, newdata);
            setData(handleData(webhookSelectedDomain))
            setAddWebhook({ state: false, id: '', event: '' })
        };

    }
    function closeFunc() {
        setRemoveWebhook({ state: false, id: '', event: '' })
    }
    const domainName = domainTableData.find(data => data.id === webhookSelectedDomain)?.domain

    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            <div className="py-2 w-full  bg-white  flex items-center justify-between">
                <div className="  text-[#0F6C68] text-2xl">
                    Webhook
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4   bg-white">
                <div className="max-w-xl text-sm text-gray-700 leading-relaxed">
                    <span className="font-medium text-gray-900">What is a webhook?</span><br />
                    A webhook lets your app automatically receive updates from Harp whenever something important happens — like an email is delivered, opened, or clicked.
                    Instead of manually checking for updates, Harp sends the data to your app in real-time.
                    All you need to do is provide a URL where you want to receive the event data.
                </div>

                <div className="w-full md:w-auto">
                    <SelectDemo />
                </div>
            </div>
            {
                webhookSelectedDomain.length > 0 ? <DataTable filterkey="" columns={datacolumns} data={data} /> : <h2 className=" mt-16 text-xl text-center  text-zinc-600 font-bold">Select a domain to get started</h2>

            }


            {(addWebhook.state) && <AddWebhook details={addWebhook} input={input} setInput={setInput} handleSubmit={addhook} onClose={setAddWebhook} domain={domainName} />}
            {removeWebhook.state && <Delete text="Are you sure you want to remove this" deletefunc={deletehook} closeFunc={closeFunc} actionWord="Remove" />}
        </section>

    )
}

export default Webhook