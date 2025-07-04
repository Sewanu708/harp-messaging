'use client'
import { createContext, useState } from "react";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
interface GlobalContextType {
    selectedChannel: string;
    setSelectedChannel: (value: string) => void,
    domainData: DomainDataProps,
    setDomainData: (value: DomainDataProps) => void,
    actionDisplay: boolean
    , setActionDisplay: (value: boolean) => void
};


interface DomainDataProps {
    domain: string,
    region: string,
    provider: string,
    ip: string
}
function GlobalState({ children }: { children: React.ReactNode }) {
    const [selectedChannel, setSelectedChannel] = useState('');
    const [domainData, setDomainData] = useState<DomainDataProps>({
        domain: '', region: '', provider: '', ip: ''
    })
    const [actionDisplay, setActionDisplay] = useState(false)

    return (
        <GlobalContext.Provider value={{ selectedChannel, actionDisplay, setActionDisplay, setSelectedChannel, domainData, setDomainData }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;