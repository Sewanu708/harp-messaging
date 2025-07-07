import Link from "next/link"

function Settings() {
    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            <div className="py-2 w-full bg-white flex items-center justify-between">
                <div className="text-[#0F6C68] text-2xl">Settings</div>
            </div>
            <Link href={'/settings/api'} className="text-blue-600 underline">Api Keys</Link>
        </section>
    )
}

export default Settings