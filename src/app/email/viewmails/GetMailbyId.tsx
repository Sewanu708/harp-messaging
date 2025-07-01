import { SearchIcon } from "lucide-react"

interface MailProps {
    input: string,
    placeholder: string,
    setInput: (value: string) => void
}
function GetMailbyId({ input, setInput, placeholder }: MailProps) {
    return (
        <div className="bg-white flex items-center justify-start border gap-2 border-zinc-300 rounded-md shadow-lg py-2 px-4  w-full mb-2">
            <div className="text-2xl text-zinc-600"><SearchIcon /></div>
            <input type="text" placeholder={placeholder} className="outline-0 focus:outline-0 border-  rounded-md w-full max-w-md" value={input} onInput={(e) => {
                const value = (e.target as HTMLInputElement).value
                setInput(value)
            }} />
        </div>
    )
}

export default GetMailbyId