'use client'
import { createContext, useState } from "react";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
interface GlobalContextType {
    selectedChannel: string;
    setSelectedChannel: (value: string) => void,
    domainData: DomainDataProps,
    setDomainData: (value: DomainDataProps) => void,
    actionDisplay: boolean
    , setActionDisplay: (value: boolean) => void,
    selectedDomain: string,
    setSelectedDomain: (value: string) => void,
    isAddDomainOpen: boolean,
    setIsAddDomainOpen: (value: boolean) => void,
    webhookSelectedDomain: string,
    setWebhookSelectedDomain: (value: string) => void,
    addWebhook: addWebhookProps,
    setAddWebhook: (value: addWebhookProps) => void, removeWebhook: addWebhookProps,
    setRemoveWebhook: (value: addWebhookProps) => void,
};


interface DomainDataProps {
    domain: string,
    region: string,
    provider: string,
    ip: string
}
export interface addWebhookProps {
    state: boolean,
    id: string,
    event: string,
}
function GlobalState({ children }: { children: React.ReactNode }) {
    const [selectedChannel, setSelectedChannel] = useState('');
    const [selectedDomain, setSelectedDomain] = useState('');
    const [domainData, setDomainData] = useState<DomainDataProps>({
        domain: '', region: '', provider: '', ip: ''
    })
    const [webhookSelectedDomain, setWebhookSelectedDomain] = useState('')
    const [isAddDomainOpen, setIsAddDomainOpen] = useState(false);
    const [actionDisplay, setActionDisplay] = useState(false)
    const [addWebhook, setAddWebhook] = useState<addWebhookProps>({ id: '', event: '', state: false })
    const [removeWebhook, setRemoveWebhook] = useState<addWebhookProps>({ id: '', event: '', state: false })

    return (
        <GlobalContext.Provider value={{
            selectedChannel, actionDisplay, isAddDomainOpen, setIsAddDomainOpen, setActionDisplay, setSelectedChannel, selectedDomain, setSelectedDomain, domainData, setDomainData, webhookSelectedDomain, setWebhookSelectedDomain, addWebhook, setAddWebhook, removeWebhook, setRemoveWebhook
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;