'use client'
import { createContext, useState } from "react";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
interface GlobalContextType {
    collapseSidebar: boolean;
    setCollapseSidebar: (value: boolean) => void
};
function GlobalState({ children }: { children: React.ReactNode }) {
    const [collapseSidebar, setCollapseSidebar] = useState(false);
    return (
        <GlobalContext.Provider value={{ collapseSidebar, setCollapseSidebar }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;