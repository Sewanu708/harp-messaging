'use client'
import { createContext, useState } from "react";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
interface GlobalContextType {
    selectedChannel: string;
    setSelectedChannel: (value: string) => void,
    
};


function GlobalState({ children }: { children: React.ReactNode }) {
    const [selectedChannel, setSelectedChannel] = useState('');
    

    return (
        <GlobalContext.Provider value={{ selectedChannel, setSelectedChannel, }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;