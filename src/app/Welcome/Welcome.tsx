'use client'
import { BiDownArrowCircle } from "react-icons/bi";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "@/context";
import { sidebarItems } from "@/data";

export default function Welcome() {
    const context = useContext(GlobalContext)
    if (!context) return 'Context is undefined'
    const { setSelectedChannel } = context
    return (
        <div className="bg-zinc-50 h-screen overflow-y-auto  flex flex-col items-center justify-start px-4 py-10">
            <div className="text-center mb-2 text-[36px]">
                Welcome to <span className="font-[400]">Harp Messaging</span>

            </div>

            <div className="text-center text-lg sm:text-xl text-zinc-600 italic mb-10 flex justify-center items-center gap-2">
                <div>Choose a messaging channel to get started</div>
                <div className="text-2xl mt-[10px] animate-bounce"><BiDownArrowCircle /></div>
            </div>

            <div className="mt-16" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
                {sidebarItems.map((item, index) => (
                    <Link href={item.pathName} onClick={() => setSelectedChannel(item.header)} key={index}>
                        <Card

                            className="hover:shadow-md transition-shadow  cursor-pointer   duration-300 bg-white rounded-md"
                        >
                            <CardHeader className="flex  items-center justify-start gap-x-2">
                                <item.icon className="text-xl text-[#0F6C68]" />
                                <CardTitle className="text-lg">{item.header}</CardTitle>
                            </CardHeader>
                            <CardContent className="h-8">
                                <CardDescription>{item.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button className="text-[#0F6C68] cursor-pointer hover:scale-105 transition-all duration-200 ease-in" variant={'outline'}>
                                    Get Started
                                </Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
