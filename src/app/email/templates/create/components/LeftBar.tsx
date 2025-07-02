'use client'
import { useState } from "react"
import { FaImage, FaLink, FaPlus } from "react-icons/fa";
import { MdTextFields, MdOutlineHorizontalRule } from "react-icons/md";
import { IoIosRadioButtonOn } from "react-icons/io";
import { PiDotsSixLight } from "react-icons/pi";

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
            icon: MdOutlineHorizontalRule
        },
        {
            type: "text",
            label: "Text",
            icon: MdTextFields
        },
        {
            type: "more",
            label: "More",
            icon: FaPlus
        }
    ];

    return (
        <div className="">
            <div className="bg-zinc-50 flex w-full justify-between items-center gap-2 rounded-md py-2 px-4">
                <div className={` ${propertyToggle === 'content' ? 'bg-white text-[#0F6C68] ' : 'text-zinc-400'}bg-white cursor-pointer rounded-md px-4 py-2 font-semibold`} onClick={() => setpropertyToggle('content')} >
                    Content
                </div>
                <div className={` ${propertyToggle === 'design' ? 'bg-white text-[#0F6C68] ' : 'text-zinc-400'}bg-white rounded-md px-4 py-2 font-semibold  cursor-pointer`} onClick={() => setpropertyToggle('design')}>
                    Design
                </div>
            </div>

            <div className="mt-6  grid grid-cols-2 gap-2 justify-items-center">
                {
                    templateElements.map((elements,index)=>{
                        return (
                            <div key={index} className="w-20 h-fit py-2 px-4 rounded-md bg-zinc-50 flex flex-col items-center justify-center cursor-pointer gap-1 border shadow">
                                <div><PiDotsSixLight /></div>
                                <div className="">
                                    {<elements.icon  className="text-xl text-zinc-500"/>}
                                </div>
                                <div className="text-zinc-700 text-[12px] font-semibold">
                                    {elements.label}
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LeftBar