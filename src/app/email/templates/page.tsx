'use client'
import GetMailbyId from "@/components/GetMailbyId"
import { Button } from "@/components/ui/button"
import { PlusIcon, } from "lucide-react"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { emailTemplates } from "@/data"
import { useRouter } from "next/navigation"





function Template() {
  const navigate = useRouter()
  const [input, setInput] = useState('')
  return (
    <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
      <div className="py-2 w-full  bg-white  flex items-center justify-between">
        <div className="  font-semibold text-[#0F6C68] text-2xl">
          Templates
        </div>

      </div>
      <div className="mt-6 mb-2 flex items-center justify-between">
        <div className="  font-semibold text-zinc-600 text-xl">
          All Templates (12)
        </div>
        <div>

       
        </div>
      </div>

      <GetMailbyId input={input} setInput={setInput} placeholder="Find your templates by id" />

      <div className=" flex flex-wrap item-start justify-start gap-4">
        <Card onClick={()=>navigate.push('/email/templates/create')} className="w-full md:w-[250px] shadow-md hover:shadow-lg transition-all p-4 duration-200 border-zinc-200">
          <CardContent className="text-sm  h-32 rounded-md bg-zinc-200 text-zinc-700 flex items-center justify-center cursor-pointer">
            <PlusIcon />
          </CardContent>
          <div className="flex flex-col w-full md:w-[350px] items-start justify-start">
            <p className="text-lg text-zinc-800 font-semibold">Blank Template</p>
            <p className="text-sm text-zinc-500">Create a new blank template</p>
          </div>
        </Card>
        {
          emailTemplates.map((template) => (
            <Card key={template.id} className="w-full md:w-[350px] shadow-md hover:shadow-lg transition-all cursor-pointer duration-200 border-zinc-200">
              <CardHeader>
                <CardTitle className="text-lg text-zinc-800">{template.name}</CardTitle>
                <CardDescription className="text-sm text-zinc-500">{template.subject}</CardDescription>
              </CardHeader>

              <CardContent className="text-sm text-zinc-700">
                <p>Category: <span className="text-zinc-600 italic">{template.category}</span></p>
                <p>Status: <span className={`font-semibold ${template.status === "active" ? "text-green-600" : "text-yellow-600"}`}>{template.status}</span></p>
                <p>Used: {template.usageCount}x</p>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <Button variant="outline" className="text-xs cursor-pointer">Preview</Button>
                <Button variant="default" className="text-xs cursor-pointer bg-[#0F6C68]">Use Template</Button>
              </CardFooter>
            </Card>
          ))
        }


      </div>


    </section>
  )
}

export default Template