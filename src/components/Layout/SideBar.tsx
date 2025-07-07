'use client';
import { GlobalContext } from "@/context";
import { sidebarItems } from "@/data";
import { Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineDashboard } from "react-icons/md";
import logo from '../../../public/logo.svg'
export default function SideBar() {
    const pathName = usePathname()
    const [activeDropdown, setActiveDropdown] = useState<string>('');
    const [activeInnerDropdown, setActiveInnerDropdown] = useState<string>('');
    const [collapseSidebar, setCollapseSidebar] = useState(false);

    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const context = useContext(GlobalContext)
    useEffect(() => {
        if (width < 850) {
            setCollapseSidebar(true);

        } else {
            setCollapseSidebar(false);

        }
    }, [width])


    if (!context) return 'Error, Context is undefined'
    const { setSelectedChannel, selectedChannel } = context


    const handleDropdownToggle = (header: string) => {
        if (activeDropdown === header) {
            setActiveDropdown('');

        } else {
            setActiveDropdown(header);
            setSelectedChannel(header);
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

    const shouldShowDropdown = (header: string) => {
        return activeDropdown === header && !collapseSidebar;
    };


    return (
        <>
            <div className={`h-screen min-w-16 relative bg-white shadow-xl z-20  text-white overflow-y-hidden ${collapseSidebar ? 'w-16' : 'w-64'} transition-all duration-300 flex justify-between flex-col`}>


                <div className="flex-shrink-0">
                    {!collapseSidebar ? (
                        <div className="flex items-center justify-between px-8 py-4">

                            <Image src={logo} alt="harp" className="w-32 h-auto" />

                        </div>
                    ) : (
                        <div className="flex items-center  justify-between px-4 z-50 py-4">

                            <Image src={logo} alt="harp" className="w-16 h-auto" />
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
                            : 'px-2 justify-start mx-4 rounded-lg  hover:bg-zinc-50'
                            } ${selectedChannel === 'dashboard' ? 'bg-zinc-50' : ''} `} onClick={() => {
                                setSelectedChannel('dashboard')
                                setActiveDropdown('');
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
                                        selectedChannel === 'dashboard' && <div className="absolute left-4 w-1 h-8 bg-[#0F6C68] rounded-r-full opacity-100"></div>
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
                                                : 'px-2 justify-start mx-4 rounded-lg relative hover:bg-zinc-50'
                                                } ${selectedChannel === section.header ? 'bg-zinc-50' : ''}`}
                                            onClick={() => {
                                                setCollapseSidebar(false)
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
                                                    {selectedChannel === section.header && (
                                                        <div className="absolute left-0 w-1 h-8 bg-[#0F6C68] rounded-r-full opacity-100"></div>
                                                    )}
                                                </>
                                            )}

                                        </div>

                                        {shouldShowDropdown(section.header) && (
                                            <ul className="ml-4 pl-4 border-l border-zinc-200">
                                                {section.items.map((item) => {

                                                    return (item.items ? <li key={item.label} className="mb-2">
                                                        <div className="group/item" onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleInnerDropdownToggle(item.label)
                                                        }}>
                                                            <div className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#0F6C68]/5 relative `}>

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
                                                                        <div className="ml-4 pl-4 border-l border-zinc-200" key={sub.label || index}>
                                                                            <Link href={sub.path} className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#0F6C68]/5 relative ${(pathName === sub.path) ? 'bg-[#0F6C68]/5 ' : ''}`} onClick={(e) => e.stopPropagation()}>

                                                                                <span className="ml-3 text-sm text-gray-600 group-hover/item:text-[#0F6C68] font-medium transition-colors">
                                                                                    {sub.label}
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    ))
                                                                )
                                                            }
                                                        </div>

                                                    </li> : <Link href={item.path} key={item.label} className="mb-2">
                                                        <div className="group/item">
                                                            <div className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#0F6C68]/5 relative ${(pathName === item.path) ? 'bg-[#0F6C68]/5 ' : ''}`}>

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


                <div>
                    <Link href={'/settings'} className="p-4 border-t border-gray-100 items-center flex w-full flex-shrink-0">
                        {!collapseSidebar ? (
                            <div className="flex items-center px-3  rounded-lg cursor-pointer transition-colors">
                                <div className="w-8 h-8 rounded-full bg-[#0F6C68] flex items-center justify-center">
                                    <Settings className="text-white w-4 h-4" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-700">Settings</p>
                                    <p className="text-xs text-gray-400">Manage preferences</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center">
                                <div className="w-8 h-8 rounded-full bg-[#0F6C68] flex items-center justify-center cursor-pointer">
                                    <Settings className="text-white w-4 h-4" />
                                </div>
                            </div>
                        )}
                    </Link>
                    <div className="p-4  border-gray-100 flex-shrink-0 group">
                        {!collapseSidebar ? (
                            <div className="flex items-center px-3 rounded-lg  cursor-pointer transition-colors">
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

            </div>
            <button className={`hover:scale-95 w-fit absolute top-3.5 rounded-xl text-[#0F6C68] z-50 bg-white right-[5px]  transition-all duration-300 cursor-pointer group ${collapseSidebar ? 'left-13 top-2 z-50' : 'left-62 top-4 rotate-180'}`} onClick={() => {
                setCollapseSidebar(!collapseSidebar)

            }}>
                <FaAngleRight className="text-[#0F6C68] text-[18px] rotate-180" />
            </button>
        </>

    );
}