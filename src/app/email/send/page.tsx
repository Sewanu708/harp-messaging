'use client'
import AddDomainPopup from "@/components/AddDomainPopup"
import { Button } from "@/components/ui/button"
import { BoldIcon, Heading1Icon, Heading2Icon, ImageIcon, ItalicIcon, Link2Icon, ListOrdered, SendIcon } from "lucide-react"
import { useContext, useState } from "react";
import { LuLayoutTemplate } from "react-icons/lu";
import { MdClose, MdDomain } from "react-icons/md"
import Link from "next/link";
import ApiCode from "@/components/ApiCode";
import { GlobalContext } from "@/context";
function Email() {
    const [apiGenerator, setApiGenerator] = useState(false)
    const context = useContext(GlobalContext)
    if (!context) return ('context not found')
    const { isAddDomainOpen, selectedDomain, setIsAddDomainOpen, setSelectedDomain } = context
    

    return (
        <section className="h-screen overflow-y-auto">
            <div className="text-xl sm:text-2xl py-4 px-2 sm:px-4 fixed w-full bg-white   text-[#0F6C68] z-10">Send Email</div>
            <section className=" px-2 sm:px-4 w-full relative ">
                {(isAddDomainOpen) && <AddDomainPopup />}

                <div className="mt-24 mb-4 p-2 sm:p-4 bg-zinc-100 rounded-md w-full">
                    <div className="mb-4 flex flex-col items-end justify-end gap-2">
                        {selectedDomain.length > 0 ? (
                            <div className="w-full sm:w-fit flex flex-col sm:flex-row items-stretch sm:items-center justify-between rounded-md border p-2 border-zinc-300 gap-2">
                                <label className="text-sm font-semibold text-zinc-800 border-b sm:border-b-0 sm:border-r border-zinc-300 pr-0 sm:pr-4 pb-2 sm:pb-0">Domain</label>
                                <input type="email" placeholder="Enter recipient's email" className="outline-0 px-4 focus:outline-none flex-1" defaultValue={selectedDomain} disabled />
                                <span><MdClose className="text-zinc-400 hover:text-zinc-600 cursor-pointer" onClick={() =>{ setSelectedDomain(''); setApiGenerator(false)}} /></span>
                            </div>
                        ) : (
                            <>
                                <Button variant={"outline"} onClick={() => setIsAddDomainOpen(true)} className="ml-0 sm:ml-2 cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out w-full sm:w-auto">
                                    <MdDomain /> <span className="ml-2">Add Domain</span>
                                </Button>
                                <p className="text-sm font-semibold text-zinc-600 italic">Add domain to send mail</p>
                            </>
                        )}
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col sm:flex-row border-b items-start sm:items-center gap-2">
                            <label className="text-sm font-semibold text-zinc-800">Recipient:</label>
                            <input type="text" placeholder="Enter recipient's email" className="p-2 border-zinc-300 focus:outline-none w-full sm:w-auto" required disabled={selectedDomain.length === 0} />
                        </div>

                        <div className="flex flex-col sm:flex-row border-b items-start sm:items-center gap-2">
                            <label className="text-sm font-semibold text-zinc-800">Subject:</label>
                            <input type="text" placeholder="Enter subject" className="p-2 disabled:cursor-pointer border-zinc-300 focus:outline-none w-full sm:w-auto" required disabled={selectedDomain.length === 0} autoFocus />
                        </div>

                        <textarea placeholder="Enter your message" className="p-2 focus:outline-none focus:border-[#0F6C68] w-full" rows={5} required disabled={selectedDomain.length === 0}></textarea>

                        <div className="flex flex-wrap items-start p-2 rounded-md bg-white shadow-sm border border-zinc-200 mt-2 gap-2">
                            <Button className="cursor-pointer w-full sm:w-auto" disabled={selectedDomain.length === 0}>
                                Send Email <span className="ml-2"><SendIcon /></span>
                            </Button>

                            <Button variant={"outline"} className="ml-0 sm:ml-2" disabled={selectedDomain.length === 0}>
                                <BoldIcon />
                            </Button>
                            <Button variant={"outline"} className="ml-0 sm:ml-2" disabled={selectedDomain.length === 0}>
                                <ItalicIcon />
                            </Button>
                            <Button variant={"outline"} className="ml-0 sm:ml-2" disabled={selectedDomain.length === 0}>
                                <BoldIcon />
                            </Button>
                            <Button variant={"outline"} className="ml-0 sm:ml-2" disabled={selectedDomain.length === 0}>
                                <Heading1Icon />
                            </Button>
                            <Button variant={"outline"} className="ml-0 sm:ml-2" disabled={selectedDomain.length === 0}>
                                <Heading2Icon />
                            </Button>
                            <Button variant={"outline"} className="ml-0 sm:ml-2" disabled={selectedDomain.length === 0}>
                                <Link2Icon />
                            </Button>
                            <Button variant={"outline"} className="ml-0 sm:ml-2" disabled={selectedDomain.length === 0}>
                                <ImageIcon />
                            </Button>
                            <Button variant={"outline"} className="ml-0 sm:ml-2" disabled={selectedDomain.length === 0}>
                                <ListOrdered />
                            </Button>
                            <Link href="/email/templates" className="cursor-pointer flex items-center py-2 px-4 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition-all ml-0 sm:ml-4 duration-300 ease-in-out w-full sm:w-auto mt-2 sm:mt-0">
                                <span className="mr-2 text-white"><LuLayoutTemplate /></span> <span className=" font-semibold text-white">Choose Template</span>
                            </Link>
                        </div>
                    </form>
                </div>

                <ApiCode selectedDomain={selectedDomain} setApiGenerator={setApiGenerator} apiGenerator={apiGenerator} />
               
            </section>
        </section>

    )
}

export default Email