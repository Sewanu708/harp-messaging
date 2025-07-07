import React, { useState } from 'react'
import { Button } from './ui/button'
import { MdClose } from 'react-icons/md'

interface ApiCodeProps {
    selectedDomain: string,

    apiGenerator: boolean
    , setApiGenerator: (value: boolean) => void
}
interface TabItem {
    name: string,
    status: boolean
}
function ApiCode({ selectedDomain, apiGenerator, setApiGenerator }: ApiCodeProps) {
    const languages = ['curl', 'python', 'Javascript', 'PHP',]
    const [activeTab, setActiveTab] = useState<TabItem[]>([{
        name: 'Curl',
        status: true
    }
        , {
        name: 'python',
        status: false
    },
    {
        name: 'Javascript',
        status: false
    },
    {
        name: 'PHP',
        status: false
    }])
    function Generator() {
        const activeObject = activeTab.filter(item => item.status)
        if (activeObject.length > 0) return activeObject[0].name

    }
    function handleTab(name: string) {
        setActiveTab(prev =>
            prev.map((item: TabItem) => ({
                ...item,
                status: item.name === name
            }))
        );
    }
    return (
        <div>
            <Button onClick={() => setApiGenerator(true)} className="bg-zinc-900 " disabled={selectedDomain.length === 0}>
                Send via API
            </Button>

            {apiGenerator && <div className="absolute flex flex-col items-center justify-center inset-0 z-40">
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className='relative'>
                    <div
                        onClick={() => setApiGenerator(false)}
                        className="w-full flex items-center justify-end cursor-pointer text-2xl text-end relative px-4 py-2 rounded ml-4"
                    >
                        <MdClose/>
                    </div>
                    <div className="flex p-0  items-center justify-between  rounded-t-sm bg-zinc-900 w-128">
                        {languages.map((language) => (
                            <div
                                key={language}
                                className="cursor-pointer flex items-center justify-center w-64 py-2 px-4 text-zinc-100 hover:bg-zinc-300 transition-all ml-4 duration-300 ease-in-out" onClick={() => handleTab(language)}
                            >
                                {language}
                            </div>
                        ))}
                    </div>
                    <div className="h-64 p-2 bg-zinc-400 rounded-b-sm">
                        <pre>
                            <Generator />
                        </pre>
                    </div>
                </div>

            </div>}
                        
        </div>
    )
}

export default ApiCode