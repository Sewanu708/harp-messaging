'use client'
import { useState } from "react"
import { FaImage, FaLink, FaPlus } from "react-icons/fa";
import { IoIosRadioButtonOn } from "react-icons/io";
import { PiDotsSixLight } from "react-icons/pi";
import { GrTextAlignCenter } from "react-icons/gr";
import { LuLetterText } from "react-icons/lu";

function LeftBar() {
    const [propertyToggle, setpropertyToggle] = useState('content')

    const templateElements = [
        {
            type: "image",
            label: "Image",
            icon: FaImage
        },
        {
            type: "button",
            label: "Button",
            icon: IoIosRadioButtonOn
        },
        {
            type: "link",
            label: "Link",
            icon: FaLink
        },
        {
            type: "divider",
            label: "Divider",
            icon: GrTextAlignCenter
        },
        {
            type: "text",
            label: "Text",
            icon: LuLetterText
        },
        {
            type: "more",
            label: "More",
            icon: FaPlus
        }
    ];
    const layoutElements = [{
        layout: 1,
        style:
            <div className="w-16 h-3 rounded-sm bg-zinc-400"></div>

    }, {
        layout: 2,
        style:
            <div className="grid grid-cols-2 gap-1 w-16"><div className="w-full h-3 rounded-sm bg-zinc-400"></div> <div className="w-full h-3 rounded-sm bg-zinc-400"></div></div>
    }, {
        layout: 3,
        style:
            <div className="grid grid-cols-3 gap-1 w-16"><div className="w-full h-3 rounded-sm bg-zinc-400"></div> <div className="w-full h-3 rounded-sm bg-zinc-400"></div> <div className="w-full h-3 rounded-sm bg-zinc-400"></div></div>
    }, {
        layout: 4,
        style:
            <div className="grid grid-cols-[1fr_2fr] gap-1 w-16 "><div className="w-full h-3 rounded-sm bg-zinc-400"></div> <div className="w-full h-3 rounded-sm bg-zinc-400"></div></div>
    }, {
        layout: 5,
        style:
            <div className="grid grid-cols-[2fr_1fr] gap-1 w-16 "><div className="w-full h-3 rounded-sm bg-zinc-400"></div> <div className="w-full h-3 rounded-sm bg-zinc-400"></div></div>
    }, {
        layout: 6,
        style:
            <div className="grid grid-cols-4 gap-1 w-16"><div className="w-full h-3 rounded-sm bg-zinc-400"></div> <div className="w-full h-3 rounded-sm bg-zinc-400"></div> <div className="w-full h-3 rounded-sm bg-zinc-400"></div> <div className="w-full h-3 rounded-sm bg-zinc-400"></div></div>
    }]
    return (
        <div className=" overflow-auto">
            <div className="bg-zinc-50 flex w-full justify-between items-center gap-2 rounded-md py-2 px-2">
                <div className={` ${propertyToggle === 'content' ? 'bg-white text-[#0F6C68] ' : 'text-zinc-400'}bg-white cursor-pointer rounded-md px-2 py-2 font-semibold`} onClick={() => setpropertyToggle('content')} >
                    Content
                </div>
                <div className={` ${propertyToggle === 'design' ? 'bg-white text-[#0F6C68] ' : 'text-zinc-400'}bg-white rounded-md px-2 py-2 font-semibold  cursor-pointer`} onClick={() => setpropertyToggle('design')}>
                    Design
                </div>
            </div>

            <div className="mt-6  grid grid-cols-2 gap-2 justify-items-center">
                {
                    templateElements.map((elements, index) => {
                        return (
                            <div key={index} className="w-20 h-fit py-2 px-4 rounded-md bg-zinc-50 flex flex-col items-center justify-center cursor-pointer gap-1 border shadow">
                                <div><PiDotsSixLight /></div>
                                <div className="">
                                    {<elements.icon className="text-xl text-zinc-500" />}
                                </div>
                                <div className="text-zinc-700 text-[12px] font-semibold">
                                    {elements.label}
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <div className="mt-6">
                <div className="mb-2 text-[#0F6C68] text-xl font-semibold">Layouts</div>
                <div className="mt-6  grid grid-cols-2 gap-2 justify-items-center">
                    {
                        layoutElements.map((elements, index) => {
                            return (
                                <div key={index} className="w-20 h-fit py-2 px-4 rounded-md bg-zinc-50 flex flex-col items-center justify-center cursor-pointer gap-1 border shadow">
                                    <div><PiDotsSixLight /></div>
                                    {elements.style}
                                    <div className="text-zinc-700 text-[12px] font-semibold">
                                        {elements.layout}
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className="mt-32"/>
        </div>
    )
}

export default LeftBar