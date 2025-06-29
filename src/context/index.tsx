'use client'
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
interface GlobalContextType {
    selectedChannel: string;
    setSelectedChannel: (value: string) => void,
    width: number,
    setWidth: (value: number) => void
};


function GlobalState({ children }: { children: React.ReactNode }) {
    const [selectedChannel, setSelectedChannel] = useState('');
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        document.addEventListener('resize', handleResize)

        return () => {
            document.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <GlobalContext.Provider value={{ selectedChannel, setSelectedChannel, width, setWidth }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;