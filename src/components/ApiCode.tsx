import React, { useState } from 'react'
import { Button } from './ui/button'

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
        if (activeObject.length >0 ) return activeObject[0].name
        
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
            <Button onClick={() => setApiGenerator(true)} className="bg-zinc-900 mb-4" disabled={selectedDomain.length === 0}>
                Send via API
            </Button>

            {apiGenerator && <div className="min-w-64 max-w-128 shadow-2xl">
                <div className="flex p-0 border-b items-center justify-between rounded-t-xl bg-zinc-900">
                    {languages.map((language) => (
                        <div
                            key={language}
                            className="cursor-pointer flex items-center justify-center w-64 py-2 px-4 text-zinc-100 hover:bg-zinc-300 transition-all ml-4 duration-300 ease-in-out" onClick={()=>handleTab(language)}
                        >
                            {language}
                        </div>
                    ))}
                </div>
                <div className="h-64 p-2">
                    <pre>
                        <Generator/>
                    </pre>
                </div>
            </div>}
        </div>
    )
}

export default ApiCode