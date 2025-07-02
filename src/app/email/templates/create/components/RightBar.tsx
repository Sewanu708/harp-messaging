'use client'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { CiTextAlignCenter, CiTextAlignJustify, CiTextAlignLeft, CiTextAlignRight } from "react-icons/ci"

function RightBar() {
  const [selectedType, setSelectedType] = useState('Heading 1')
  const [selectedFont, setSelectedFont] = useState('Arial')

  return (
    <div className=" overflow-auto">
      <div className="mb-6">
        <p className="text-zinc-800 text-xl font-semibold">Set a Logo</p>
        <p className="text-zinc-600 text-sm mt-2 mb-4">Upload your logo and we will apply it automatically anywhere a logo appears</p>

        <Button variant='outline' className="w-full font-semibold">Select your logo</Button>
      </div>

      <div>
        <p className="font-semibold text-zinc-800">Text option</p>
        <div className="flex flex-col items-start justify-start">
          <label htmlFor="text" className="text-zinc-700 mt-4 mb-2 font-semibold">Type</label>
          <select name="text" id="text" value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="h-auto rounded-md shadow-sm border w-full py-2 px-4">
            <option value="hedading1">Heading 1</option>
            <option value="heading2">Heading 2  </option>
            <option value="heading3">Heading 3  </option>
            <option value="heading4">Heading 4  </option>
            <option value="heading5">Heading 5  </option>
            <option value="heading6">Heading 6  </option>
            <option value="paragraph">Paragraph</option>
          </select>
        </div>
        <div className="flex flex-col items-start justify-start">
          <label htmlFor="font" className="text-zinc-700 mt-4 mb-2 font-semibold">Font</label>
          <select name="font" id="font" value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)} className="h-auto rounded-md shadow-sm border w-full py-2 px-4">
            <option value="Arial" >Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Lucida Console">Lucida Console</option>
          </select>
        </div>
        <div>
          <div className="text-zinc-700 mt-4 mb-2 font-semibold">Text align</div>
          <div className="flex items-center gap-2 justify-between px-2 py-1 rounded-md ">
            <button className="p-2 bg-zinc-200 rounded">
              <CiTextAlignLeft size={22} />
            </button>
            <button className="p-2 bg-zinc-200 rounded">
              <CiTextAlignCenter size={22} />
            </button>
            <button className="p-2 bg-zinc-200 rounded">
              <CiTextAlignRight size={22} />
            </button>
            <button className="p-2 bg-zinc-200 rounded">
              <CiTextAlignJustify size={22} />
            </button>
          </div>
        </div>

        <div>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex flex-col items-center">
              <label htmlFor="bcolor" className="text-zinc-700 font-semibold mb-2">Background Color</label>
              <input
                type="color"
                id="bcolor"

                title="Pick background color"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="tcolor" className="text-zinc-700 font-semibold mb-2">Text Color</label>
              <input id="tcolor" type="color" />
            </div>
          </div>
        </div>



      </div>
      <div className="mt-32" />

    </div>
  )
}

export default RightBar