'use client'
import AddDomainPopup from "@/components/AddDomainPopup"
import { Button } from "@/components/ui/button"
import { BoldIcon, Heading1Icon, Heading2Icon, Image, ItalicIcon, Link2Icon, ListOrdered, SendIcon } from "lucide-react"
import { useState } from "react";
import { LuLayoutTemplate } from "react-icons/lu";
import { MdClose, MdDomain } from "react-icons/md"
import Link from "next/link";
function Email() {
    const [isAddDomainOpen, setIsAddDomainOpen] = useState(false);
    const toggleAddDomainPopup = () => {
        setIsAddDomainOpen(!isAddDomainOpen);
    }

    const [selectedDomain, setSelectedDomain] = useState<string>('');
    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            {isAddDomainOpen && <AddDomainPopup setSelectedDomain={setSelectedDomain} onClose={toggleAddDomainPopup} />}
            <div className="text-2xl py-2 w-full bg-white fixed font-semibold text-[#0F6C68]">Send Email</div>
            <div></div>
            <div className=" mt-16 p-4 bg-zinc-100 rounded-md">
                <div className="mb-4 flex flex-col items-end justify-end gap-2">
                    {/* <div className="text-sm font-semibold text-zinc-600">Domain</div> */}

                    {/*  */}
                    {selectedDomain.length > 0 ? (
                        <div className="w-fit flex items-center justify-between rounded-md border p-2  border-zinc-300">
                            <label className="text-sm font-semibold text-zinc-800 border-r border-zinc-300 pr-4">Domain</label>
                            <input type="email" placeholder="Enter recipient's email" className="outline-0 px-4 focus:outline-none " defaultValue={selectedDomain} disabled />
                            <span><MdClose className="text-zinc-400 hover:text-zinc-600 cursor-pointer" onClick={() => setSelectedDomain('')} /></span>
                        </div>
                    ) : (
                        <>
                            <Button variant={"outline"} onClick={toggleAddDomainPopup} className="ml-2 cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out">
                                <MdDomain /> <span className="ml-2">Add Domain</span>
                            </Button>
                            <p className="text-sm font-semibold text-zinc-600 italic">Add domain to send mail</p>
                        </>
                    )}
                </div>

                <form className="flex flex-col gap-4">
                    <div className="flex border-b items-center gap-2">
                        <label className="text-sm font-semibold text-zinc-800">Recipient:</label>
                        <input type="text" placeholder="Enter recipient's email" className="p-2 border-zinc-300 focus:outline-none" required disabled={selectedDomain.length === 0} />
                    </div>

                    <div className="flex border-b items-center gap-2">
                        <label className="text-sm font-semibold text-zinc-800">Subject:</label>
                        <input type="text" placeholder="Enter subject" className="p-2 disabled:cursor-pointer border-zinc-300 focus:outline-none" required disabled={selectedDomain.length === 0} autoFocus />
                    </div>

                    <textarea placeholder="Enter your message" className="p-2  focus:outline-none focus:border-[#0F6C68]" rows={5} required disabled={selectedDomain.length === 0}></textarea>

                    <div className="flex items-start p-2 rounded-md bg-white shadow-sm border border-zinc-200 mt-2">
                        <Button className="cursor-pointer" disabled={selectedDomain.length === 0}>
                            Send Email <span className="ml-2"><SendIcon /></span>
                        </Button>
                        
                        <Button variant={"outline"} className="ml-2" disabled={selectedDomain.length === 0}>
                            <BoldIcon />
                        </Button>
                        <Button variant={"outline"} className="ml-2" disabled={selectedDomain.length === 0}>
                            <ItalicIcon />
                        </Button>
                        <Button variant={"outline"} className="ml-2" disabled={selectedDomain.length === 0}>
                            <BoldIcon />
                        </Button>
                        <Button variant={"outline"} className="ml-2" disabled={selectedDomain.length === 0}>
                            <Heading1Icon />
                        </Button>
                        <Button variant={"outline"} className="ml-2" disabled={selectedDomain.length === 0}>
                            <Heading2Icon />
                        </Button>
                        <Button variant={"outline"} className="ml-2" disabled={selectedDomain.length === 0}>
                            <Link2Icon />
                        </Button>
                        <Button variant={"outline"} className="ml-2" disabled={selectedDomain.length === 0}>
                            <Image />
                        </Button>
                        <Button variant={"outline"} className="ml-2" disabled={selectedDomain.length === 0}>
                            <ListOrdered />
                        </Button>
                         <Link href="/email/templates" className="cursor-pointer flex items-center py-2 px-4 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition-all ml-4 duration-300 ease-in-out">
                            <span className="mr-2 text-white"><LuLayoutTemplate /></span> <span className=" font-semibold text-white">Choose Template</span>
                        </Link>
                    </div>
                </form>
            </div>

        </section >
    )
}

export default Email