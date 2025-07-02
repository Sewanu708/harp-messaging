import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import LeftBar from "./components/LeftBar"
import MainContent from "./components/MainContent"
import RightBar from "./components/RightBar"

function CreateTemplate() {
    return (
        <section className="h-screen overflow-y-auto">
            <header className="w-full h-16 p-4 border-b shadow">
                <div className="text-zinc-700 flex items-center justify-start gap-2 font-semibold">
                    <MdOutlineKeyboardArrowLeft />
                    Back to Template
                </div>
            </header>
            <div className="h-full grid grid-cols-[0.75fr_2fr_1fr]">

                <div className="h-full border-r shadow p-4">
                    <LeftBar />
                </div>
                <div className="p-4">
                    <MainContent />
                </div>
                <div className="h-full border-l shadow p-4">
                    <RightBar />
                </div>
            </div>
        </section>
    )
}

export default CreateTemplate