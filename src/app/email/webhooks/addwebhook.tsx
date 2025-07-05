import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AddWebhookProps {
    onClose: (value: { state: boolean, id: string, event: string }) => void,
    details: { state: boolean, id: string, event: string },
    domain: string | undefined,
    input: string,
    setInput: (value: string) => void,
    handleSubmit: () => void
}

export function AddWebhook({ details, onClose, domain, input, setInput, handleSubmit }: AddWebhookProps) {
    const [error, setError] = useState('')
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;

    return (<div className="absolute inset-0 z-50 flex items-center justify-center bg-transparent ">
        <form onSubmit={(e) => {
            e.preventDefault();
            if (!urlRegex.test(input)) {
                setError('Enter a valid url')
                return;
            }
            handleSubmit()
        }}
            className="w-full max-w-md rounded-xl bg-white shadow-2xl flex flex-col p-8">
            <div className=" ">
                <div className="grid grid-cols-[1fr_3fr]">
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                        Domain
                    </div>
                    <div className="w-full px-2 font-medium text-gray-700 text-sm">
                        {domain}
                    </div>

                </div>
                <div className="grid grid-cols-[1fr_3fr]">
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                        Event
                    </div>
                    <div className="w-full px-2 font-medium text-gray-700 text-sm">
                        {details.event}
                    </div>

                </div>
                <div className="grid grid-cols-[1fr_3fr] items-center justify-content-center">
                    <div className="block text-sm font-medium text-gray-700 mb-2 mt-2">
                        URL
                    </div>
                    <input
                        type="text"
                        id="describe"
                        name="describe"
                        placeholder="Enter your url"
                        className="w-full  text-sm border-b   focus:outline-none focus:border-0 transition"
                        onInput={(e) => {
                            const { value } = (e.target as HTMLInputElement)
                            setInput(value)
                            setError('')
                        }}
                        required
                    />
                </div>
                {error?.length > 0 && <p>{error}</p>}

                <div className="grid grid-cols-[1fr_3fr] items-center justify-content-center">
                    <div

                        className="inline-block text-sm font-medium text-[#0F6C68] underline hover:text-[#0c5a58] transition-colors duration-200 cursor-pointer"
                    >
                        Test URL
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4 mt-4">
                <Button
                    type="button"
                    variant="outline"
                    className="px-5 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition" onClick={() => onClose({ state: false, id: '', event: '' })}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="default"
                    className="px-5 py-2 rounded-md bg-[#0F6C68] text-white hover:bg-[#0F6C68] transition"
                >
                    Set Webhook URL
                </Button>
            </div>
        </form>
    </div>)
}