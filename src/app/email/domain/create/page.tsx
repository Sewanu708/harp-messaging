'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

function CreateDomain() {
    const navigate = useRouter()
    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">

            <div className="text-2xl py-2 w-full bg-white fixed font-semibold text-[#0F6C68]">Domain</div>

            <div className="w-full  shadow-md p-4 mt-16 bg-zinc-50" >
                <h2 className="text-2xl text-zinc-700">Add New Domain</h2>

                <form className="my-4 bg-white p-4" onSubmit={(e)=>e.preventDefault()}>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <label htmlFor="domain" className="text font-semibold">
                            Domain Name
                        </label>
                        <input id="domain" name="domain" placeholder="e.g mail.harp.io" className="border border-[#0F6C68] focus:border-black rounded-md p-2 max-w-128 min-w-96" />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="font-semibold mb-2">Region</label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="reg"
                                    value="us"
                                    className="accent-[#0F6C68] w-4 h-4"
                                />
                                <span className="text-zinc-700">US</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="reg"
                                    value="EU"
                                    className="accent-[#0F6C68] w-4 h-4"
                                />
                                <span className="text-zinc-700">EU</span>
                            </label>
                        </div>
                    </div>


                    <div className="mt-4 flex flex-col">
                        <label htmlFor="dns" className="font-semibold mb-2">
                            DNS Provider
                        </label>
                        <input list="dns-providers" placeholder="Choose or type provider" className="border border-[#0F6C68] focus:border-black rounded-md p-2 max-w-128 min-w-96" />
                        <datalist id="dns-providers">
                            <option value="GoDaddy" />
                            <option value="Cloudflare" />
                            <option value="Namecheap" />
                            <option value="Google Domains" />
                            <option value="Others (please specify)" />
                        </datalist>
                    </div>
                    <div className="mt-4 flex flex-col">
                        <label htmlFor="ip" className="font-semibold mb-2">
                            IP assignment 
                        </label>
                        
                        <select id="ip" className="w-64 border p-2 rounded-md border-[#0F6C68]">
                            <option value="shared">Shared IP</option>
                            <option value="private">Private IP</option>
                        </select>
                    </div>

                    <Button className=" mt-4 text-white px-5 py-2 rounded bg-[#0F6C68] cursor-pointer hover:bg-zinc-700" onClick={()=>{

                        navigate.push('/email/domain/dns')}}>
                        Add Domain
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default CreateDomain