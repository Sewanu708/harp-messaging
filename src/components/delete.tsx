'use client'
import { useContext } from "react";
import { Button } from "./ui/button";
import { GlobalContext } from "@/context";

interface DeleteProps {
    id: string,
    
}
function Delete({ id }: DeleteProps) {
    const context = useContext(GlobalContext)
    if (!context) return 'Context not defined'
    const {setActionDisplay} = context
    return (
        <div className="absolute inset-0 z-50 bg-transparent flex w-full flex-col items-center justify-center ">
            <div className="flex h-auto w-fit flex-col justify-between rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 text-sm text-gray-700">
                Are you sure you want to delete <span>{id}</span>
            </div>
            <div className="flex gap-2">
                <Button
                variant="outline"
                className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-zinc-100"
                onClick={() => setActionDisplay(false)}
                >
                Cancel
                </Button>
                <Button
                variant="destructive"
                className="cursor-pointer transition-all duration-300 ease-in-out "
                >
                Delete
                </Button>
            </div>
            </div>
        </div>
    )
}

export default Delete