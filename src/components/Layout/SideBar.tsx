import { sidebarItems } from "@/data";
import { FaAngleRight } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function SideBar() {
    return (
        <div className="w-64 h-screen fixed bg-zinc-100 text-white ">
            <nav>
                <div className="flex items-start justify-between mt-8 mb-6 px-8">
                    <div className="text-[#0F6C68] text-3xl font-[600]">
                        Harp
                    </div>

                    <div className="hover:scale-95 rounded-2xl bg-white p-2 transition-all duration-300 cursor-pointer group">
                        <FaAngleRight className="text-[#0F6C68] text-2xl group-hover:text-[#111212]" />
                    </div>
                </div>

                <div className="text-zinc-600 font-[600] uppercase text-sm px-8 mb-4"> Menu</div>

                <ul>
                    {sidebarItems.map((section) => (
                        <li key={section.header} className="mb-4">
                            <div className="flex items-center mb-2 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group hover:bg-zinc-200 px-8 py-2">
                                <section.icon className="text-[#0F6C68] text-2xl mr-2" />
                                <span className="text-zinc-800 group-hover:text-[#0F6C68] font-[500]">{section.header}</span>
                                <MdKeyboardArrowDown className="hidden group-hover:block ml-auto text-zinc-500" />
                            </div>
                            {/* <ul>
                                {section.items.map((item) => (
                                    <li key={item.label} className="mb-2">
                                        <a href={item.path} className="text-gray-300 hover:text-white">
                                            <item.icon className="inline-block mr-2" />
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul> */}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );

}