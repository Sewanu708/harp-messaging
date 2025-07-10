import { FormEvent } from "react"
import Tiptap from "./editor"

interface Props {
    handleSubmit: (value: FormEvent) => void,
    error: { to: string, html: string },
    setError: (value: { to: string, html: string }) => void,
    setData: (value: { to: string, html: string, subject: string }) => void,
    data: { to: string, subject: string, html: string },
    selectedDomain: string,
    loading: boolean,
}
function TextArea({ handleSubmit,loading, error, setError, setData, data, selectedDomain }: Props) {
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row border-b items-start sm:items-center gap-2">
                <label className="text-sm font-semibold text-zinc-800">Recipient:</label>
                <input type="text" placeholder="Enter recipient's email" className="p-2 border-zinc-300 focus:outline-none w-full sm:w-auto" required onInput={(e) => {
                    const { value } = (e.target as HTMLInputElement)
                    if (value === '') {

                        setError({ ...error, to: '' })
                        return
                    }
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        setError({ ...error, to: 'Recipient address does not match format' })
                        return
                    }
                    setData({ ...data, to: value })
                    setError({ ...error, to: '' })
                }} disabled={selectedDomain.length === 0} />
            </div>
            {error.to.length > 0 && <p className="text-sm text-red-500">{error.to}</p>}

            <div className="flex flex-col sm:flex-row border-b items-start sm:items-center gap-2">
                <label className="text-sm font-semibold text-zinc-800">Subject:</label>
                <input type="text" placeholder="Enter subject" className="p-2 disabled:cursor-pointer border-zinc-300 focus:outline-none w-full sm:w-auto" required disabled={selectedDomain.length === 0} autoFocus onInput={(e) => {
                    const { value } = (e.target as HTMLInputElement)
                    setData({ ...data, subject: value })
                }} />
            </div>

            {error.html.length > 0 && <p className="text-sm text-red-500">{error.html}</p>}
            <Tiptap setHtmlContent={setData} setError={setError} error={error} htmlContent={data} loading={loading} domain={selectedDomain} />


        </form>
    )
}

export default TextArea