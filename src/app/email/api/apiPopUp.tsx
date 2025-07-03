'use client'
import { Copy, CopyCheck } from 'lucide-react'
import React, { useState } from 'react'
import { dateGenerator, idGenerator } from '../../../utils'
import { Button } from '@/components/ui/button'
import { api } from '@/data'
import { Api } from './columns'

interface Props {
    close: (value: boolean) => void,
    description: string,
    setData: React.Dispatch<React.SetStateAction<Api[]>>
}
function PopUp({ close, description ,setData}: Props) {
    const [copy, setCopy] = useState(false)
    function hanndleCopy(text: string) {
        navigator.clipboard.writeText(text)
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 2000)
    }

    function handleNewApi( ) {
        const id = new Date().getMilliseconds().toString()
        const newApi = {
            id,
            description,
            createdAt: dateGenerator()
        }
       
        setData((prev: Api[]) => ([...prev, newApi]))
        api.push(newApi)
    }
    const random = idGenerator()
    return (
        <div className="absolute bg-transparent inset-0 flex flex-col w-full items-center justify-center z-50">
            <div className="w-96 h-64 rounded-lg bg-white shadow-lg flex flex-col justify-between p-6">
                <div className="text-gray-700 text-sm mb-4">
                    This API key is displayed only once. Copy and keep this key somewhere safe but accessible. If you lose this key, you can delete it and generate a new one.
                </div>
                <div>
                    <p className="text-xs text-gray-500 mb-2 font-semibold">API Key</p>
                    <div className="flex items-center bg-gray-100 rounded px-3 py-2">
                        <span className="font-mono text-sm text-gray-800 flex-1 select-all">{random}</span>
                        {!copy ? (
                            <Copy
                                className="ml-2 cursor-pointer text-gray-500 hover:text-[#0F6C68] transition-colors"
                                size={20}
                                onClick={() => hanndleCopy(random)}

                            />
                        ) : (
                            <CopyCheck className="ml-2 text-green-500" size={20} />
                        )}
                    </div>
                    {copy && (
                        <span className="text-green-600 text-xs mt-2 block animate-fade-in">
                            Copied to clipboard!
                        </span>
                    )}
                </div>
                <Button variant={"outline"} onClick={() => {
                    close(false)
                    handleNewApi()
                    }} className="cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out">
                    Done
                </Button>
            </div>
        </div>
    )
}

export default PopUp