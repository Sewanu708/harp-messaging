'use client'
import AddDomainPopup from "@/app/email/send/components/AddDomainPopup"
import { Button } from "@/components/ui/button"
import { FormEvent, useContext, useEffect, useState } from "react";
import { MdClose, MdDomain } from "react-icons/md"
import ApiCode from "@/components/ApiCode";
import { GlobalContext } from "@/context";
import TextArea from "./components/form";
function Email() {
    const [apiGenerator, setApiGenerator] = useState(false)
    const [data, setData] = useState({
        to: '', subject: '', html: '',

    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
        to: '', html: ''
    })
    const [response, setResponse] = useState('')
    useEffect(() => {
        const clearId = setTimeout(() => {
            setResponse('')
        }, 5000)

        return () => clearTimeout(clearId)
    }, [response])
    const context = useContext(GlobalContext)
    if (!context) return ('context not found')
    const { isAddDomainOpen, selectedDomain, setIsAddDomainOpen, setSelectedDomain } = context

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        if ((error.to.length > 1)) return;
        if ((data.html.length < 1) || (data.html === '<p></p>')) {
            setError(prev => ({ ...prev, html: 'No content added' }))
            return;
        }
        PostData()
    }
    function PostData() {
        setLoading(true)
        setTimeout(() => {
            setResponse(" Email sent successfully!");
            setLoading(false)
        }, 3000)
    }



    return (
        <section className="h-screen relative">
            <div>
                <div className="text-xl sm:text-2xl py-4 px-2 sm:px-4  w-full bg-white text-[#0F6C68] z-10">Send Email</div>
                <div className="flex items-center justify-end space-x-2 sm:px-4">
                    {selectedDomain.length > 0 ? (
                        <div className="w-fit flex items-center justify-between rounded-md border p-2 border-zinc-300 gap-2">
                            <label className="text-sm font-semibold text-zinc-800 border-b-0 border-r border-zinc-300  pr-4 pb-0">Domain</label>
                            <input type="email" placeholder="Enter recipient's email" className="outline-0 px-4 focus:outline-none flex-1" defaultValue={selectedDomain} disabled />
                            <span><MdClose className="text-zinc-400 hover:text-zinc-600 cursor-pointer" onClick={() => { setSelectedDomain(''); setApiGenerator(false) }} /></span>
                        </div>
                    ) : (
                        <>
                            <Button variant={"outline"} onClick={() => setIsAddDomainOpen(true)} className="ml-0 w-fit sm:ml-2 cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out">
                                <MdDomain /> <span className="ml-2 text-black">Add Domain</span>
                            </Button>
                        </>
                    )}
                    <ApiCode selectedDomain={selectedDomain} setApiGenerator={setApiGenerator} apiGenerator={apiGenerator} />
                </div>
            </div>

            <section className=" px-2 sm:px-4 w-full  ">
                {(isAddDomainOpen) && <AddDomainPopup />}

                <div className="mt-4 mb-4 p-2 sm:p-4  bg-zinc-100 rounded-md w-full">
                   
                    <TextArea handleSubmit={handleSubmit} loading={loading} error={error} setError={setError} setData={setData} data={data} selectedDomain={selectedDomain} />
                </div>
            </section>
            {
                response.length > 0 && <div className="fixed top-4 right-4 z-50 bg-[#0F6C68] text-white px-4 py-3 rounded-lg shadow-lg animate-fade-in-down">
                    <span className="font-medium">{response}</span>
                </div>
            }
        </section>

    )
}

export default Email