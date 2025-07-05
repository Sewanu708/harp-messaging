'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { GlobalContext } from "@/context"
import { domainTableData } from "@/data"
import { useContext } from "react"

export function SelectDemo() {
    const context = useContext(GlobalContext)
    if (!context) return <div>Context not defined</div>
    const { setWebhookSelectedDomain} = context;
    return (
        <Select onValueChange={(value) => {
            setWebhookSelectedDomain(value)
            console.log(value)
        }}>
            <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="Select domain" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Domains</SelectLabel>
                    {
                        domainTableData.map(domain => (
                            <SelectItem value={domain.id} key={domain.id} >      {domain.domain}</SelectItem>

                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
