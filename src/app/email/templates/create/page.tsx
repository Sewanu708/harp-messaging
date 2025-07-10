'use client'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import LeftBar from "./components/LeftBar"
import MainContent from "./components/MainContent"
import RightBar from "./components/RightBar"
import { Button } from "@/components/ui/button"
import { FaCode } from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"
import Save from "./components/save"

function CreateTemplate() {
    const [save, setSave] = useState(false);
    return (
        <section className=" h-screen relative">
            <header className="w-full h-12 p-4 border-b shadow sticky top-0 bg-white flex items-center justify-between">
                <Link href={'/email/templates'} className="text-zinc-700 flex items-center justify-start gap-2 font-semibold ">
                    <MdOutlineKeyboardArrowLeft />
                    Back to Template
                </Link>
                <div className="flex gap-2">
                    <Button variant={'outline'}>Desktop</Button>
                    <Button>Mobile</Button>

                </div>

                <div className="flex gap-2">

                    <Button variant={'outline'}><FaCode />
                    </Button>

                    <Button onClick={() => setSave(true)} variant={'outline'}>Save Template</Button>

                </div>

            </header>
            <div className="h-full grid grid-cols-[0.75fr_2fr_1fr] ">

                <div className="h-screen overflow-auto border-r shadow p-4">
                    <LeftBar />
                </div>
                <div className="p-4 h-screen overflow-auto">
                    <MainContent />
                </div>
                <div className="h-screen overflow-auto border-l shadow p-4">
                    <RightBar />
                </div>
            </div>

            {
                save && <Save saveProp={setSave} />
            }
        </section>
    )
}

export default CreateTemplate