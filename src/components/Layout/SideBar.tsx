'use client';
import { GlobalContext } from "@/context";
import { sidebarItems } from "@/data";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineDashboard } from "react-icons/md";

export default function SideBar() {

    const [activeDropdown, setActiveDropdown] = useState<string>('');
    const [activeInnerDropdown, setActiveInnerDropdown] = useState<string>('');
    const [collapseSidebar, setCollapseSidebar] = useState(false);
    const context = useContext(GlobalContext)
        useEffect(() => {
        if (width < 850) {
            setCollapseSidebar(true);
            console.log(width)
        } else {
            setCollapseSidebar(false);
            console.log(width)
        }
    }, [context?.width])
    if (!context) return 'Error, Context is undefined'
    const { setSelectedChannel, selectedChannel, width } = context
    const handleDropdownToggle = (header: string) => {
        if (activeDropdown === header) {
            setActiveDropdown('');
        } else {
            setActiveDropdown(header)
        }
    };

    const handleInnerDropdownToggle = (label: string) => {
        if (activeInnerDropdown === label) {
            setActiveInnerDropdown('');
        } else {
            setActiveInnerDropdown(label);
        }
    };
    const handleDropdown = (header: string) => {
        return activeDropdown === header;
    };




    return (
        <div className={`h-screen min-w-16 relative bg-white shadow-xl text-white overflow-y-hidden ${collapseSidebar ? 'w-16' : 'w-64'} transition-all duration-300 flex justify-between flex-col`}>
            <button className={`hover:scale-95 absolute top-3.5 rounded-xl text-[#0F6C68] z-50 bg-white right-[5px] p-2 transition-all duration-300 cursor-pointer group ${collapseSidebar ? 'left-10 ' : 'right-0 rotate-180'}`} onClick={() => {
                setCollapseSidebar(!collapseSidebar)

            }}>
                <FaAngleRight className="text-[#0F6C68] text-[18px] rotate-180" />
            </button>

            <div className="flex-shrink-0">
                {!collapseSidebar ? (
                    <div className="flex items-center justify-between px-8 py-4">
                        <div className="text-[#0F6C68] text-3xl font-[600]">
                            Harp
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center relative justify-between px-4 py-4">
                        <div className="text-[#0F6C68] text-3xl font-[600]">
                            H
                        </div>
                    </div>
                )}
            </div>


            <div className=" overflow-hidden">
                <div className="h-full overflow-y-auto">
                    {!collapseSidebar && (
                        <div className="text-zinc-500 font-[600] text-[12px] uppercase mt-8 px-8 mb-2">
                            Main Menu
                        </div>
                    )}
                    <Link href={'/dashboard'} className={`gap-2 flex items-center mb-2 cursor-pointer group py-2 ${collapseSidebar
                        ? 'justify-center px-4'
                        : 'px-2 justify-start mx-4 rounded-lg hover:shadow-sm hover:bg-[#0F6C68]/5'
                        } ${handleDropdown('dashboard') ? 'bg-zinc-200' : ''}`} onClick={() => {
                            setSelectedChannel('dashboard')
                            setActiveDropdown('dashboard');
                            setActiveInnerDropdown('');
                        }}>
                        <div className="flex items-center rounded-lg bg-[#0F6C68]/10 justify-center w-10 h-10">
                            <MdOutlineDashboard className="text-[#0F6C68] text-2xl" />
                        </div>
                        {!collapseSidebar && (
                            <>
                                <span className="text-[#0F6C68] transition-all duration-300 font-[600]">
                                    Dashboard
                                </span>
                                {
                                    selectedChannel === 'dashboard' && <div className="absolute left-0 w-1 h-8 bg-[#0F6C68] rounded-r-full opacity-100"></div>
                                }
                            </>

                        )}
                    </Link>

                    <div>
                        {!collapseSidebar && (
                            <div className="text-zinc-500 font-[600] text-[12px] uppercase mt-8 px-8 mb-2">
                                Transactionals
                            </div>
                        )}


                        <div>
                            {sidebarItems.map((section) => (
                                <div key={section.header} className="group">
                                    <div
                                        className={`gap-2 flex items-center mb-2 cursor-pointer group py-2 ${collapseSidebar
                                            ? 'justify-center px-4'
                                            : 'px-2 justify-start mx-4 rounded-lg relative hover:shadow-xl'
                                            } ${handleDropdown(section.header) ? 'bg-zinc-200' : ''}`}
                                        onClick={() => {
                                            setCollapseSidebar(false)
                                            setSelectedChannel(section.pathName)
                                            handleDropdownToggle(section.header)
                                        }}
                                    >
                                        <div className="flex items-center rounded-lg bg-[#0F6C68]/10 justify-center w-10 h-10">
                                            <section.icon className="text-[#0F6C68] text-2xl" />
                                        </div>
                                        {!collapseSidebar && (
                                            <>
                                                <span className="text-[#0F6C68] transition-all duration-300 font-[600]">
                                                    {section.header}
                                                </span>
                                                <MdKeyboardArrowDown
                                                    className={`transition-all duration-300 ml-auto text-zinc-500 ${handleDropdown(section.header) ? 'rotate-180' : ''
                                                        }`}
                                                />
                                                {selectedChannel === section.pathName && (
                                                    <div className="absolute left-0 w-1 h-8 bg-[#0F6C68] rounded-r-full opacity-100"></div>
                                                )}
                                            </>
                                        )}

                                    </div>

                                    {handleDropdown(section.header) && !collapseSidebar && (
                                        <ul className="ml-4 pl-4 border-l border-zinc-200">
                                            {section.items.map((item) => {

                                                return (item.items ? <li key={item.label} className="mb-2">
                                                    <div className="group/item" onClick={() => { handleInnerDropdownToggle(item.label) }}>
                                                        <div className="flex items-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#0F6C68]/5 relative">
                                                            <div className="w-2 h-2 rounded-full bg-gray-300 group-hover/item:bg-[#0F6C68] transition-colors"></div>
                                                            <span className="ml-3 text-sm text-gray-600 group-hover/item:text-[#0F6C68] font-medium transition-colors">
                                                                {item.label}
                                                            </span>
                                                            {item.items && (
                                                                <MdKeyboardArrowDown className="ml-auto text-gray-300 group-hover/item:text-[#0F6C68] text-sm transition-colors" />
                                                            )}
                                                        </div>
                                                        {
                                                            item.items && activeInnerDropdown.includes(item.label) && (
                                                                item.items.map((sub, index) => (
                                                                    <ul className="ml-4 pl-4 border-l border-zinc-200" key={sub.label || index}>
                                                                        <div className="flex items-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#0F6C68]/5 relative">
                                                                            <div className="w-2 h-2 rounded-full bg-gray-300 group-hover/item:bg-[#0F6C68] transition-colors"></div>
                                                                            <span className="ml-3 text-sm text-gray-600 group-hover/item:text-[#0F6C68] font-medium transition-colors">
                                                                                {sub.label}
                                                                            </span>
                                                                        </div>
                                                                    </ul>
                                                                ))
                                                            )
                                                        }
                                                    </div>

                                                </li> : <Link href={section.pathName} key={item.label} className="mb-2">
                                                    <div className="group/item">
                                                        <div className="flex items-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#0F6C68]/5 relative">
                                                            <div className="w-2 h-2 rounded-full bg-gray-300 group-hover/item:bg-[#0F6C68] transition-colors"></div>
                                                            <span className="ml-3 text-sm text-gray-600 group-hover/item:text-[#0F6C68] font-medium transition-colors">
                                                                {item.label}
                                                            </span>

                                                        </div>
                                                    </div>
                                                </Link>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="p-4 border-t border-gray-100 flex-shrink-0">
                {!collapseSidebar ? (
                    <div className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="w-8 h-8 rounded-full bg-[#0F6C68] flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">U</span>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700">User Profile</p>
                            <p className="text-xs text-gray-400">user@example.com</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#0F6C68] flex items-center justify-center cursor-pointer">
                            <span className="text-white text-sm font-semibold">U</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}