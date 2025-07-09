"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Copy } from "lucide-react";
import {  RecordProps } from "@/data";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

interface colprops{
    priority:boolean,
    purpose:boolean
}
export function useColumn({priority,purpose}:colprops) {

    const [copyName, setCopyName] = useState('')
    const [copyValue, setCopyValue] = useState('')
    useEffect(() => {
        const id = setTimeout(() => {
            setCopyName(''); setCopyValue('')
        }, 2000)

        return () => clearTimeout(id)
    }, [copyName, copyValue])

    
    const columns: ColumnDef<RecordProps>[] = [
        {
            accessorKey: 'status', header: 'Status',
        },
        {
            accessorKey: 'type', header: 'Type',
        },
        {
            header: 'Host/Name', accessorKey: 'name', cell: ({ row }) => {
                const data = row.original
                return (
                    <div className="bg-zinc-200 text-zinc-800 px-4 py-2 flex items-center justify-between ">
                        <div className="w-[70%] truncate">
                            {data.name}
                        </div>
                        <div onClick={() => {
                            setCopyName(data.id)
                            navigator.clipboard.writeText(data.name)
                        }}>
                            {
                                copyName === data.id ? <FaCheck size={10} color="#0F6C68" /> : <Copy size={10} />
                            }

                        </div>
                    </div>
                )
            }
        },
        {
            header: 'Value', accessorKey: 'value', cell: ({ row }) => {
                const data = row.original
                return (
                    <div className="bg-zinc-200 text-zinc-800 px-4 py-2 flex items-center justify-between ">
                        <div className="w-[70%] truncate">
                            {data.value}
                        </div>
                        <div onClick={() => {
                            setCopyValue(data.id)
                            navigator.clipboard.writeText(data.value)
                        }}>
                            {
                                copyValue === data.id ? <FaCheck size={10} color="#0F6C68" /> : <Copy size={10} />
                            }

                        </div>
                    </div>
                )
            }
        },
        
    ];
     const column2: ColumnDef<RecordProps>[] = [
        {
            accessorKey: 'status', header: 'Status',
        },
        {
            accessorKey: 'type', header: 'Type',
        },
        {
            header: 'Host/Name', accessorKey: 'name', cell: ({ row }) => {
                const data = row.original
                return (
                    <div className="bg-zinc-200 text-zinc-800 px-4 py-2 flex items-center justify-between ">
                        <div className="w-[70%] truncate">
                            {data.name}
                        </div>
                        <div onClick={() => {
                            setCopyName(data.id)
                            navigator.clipboard.writeText(data.name)
                        }}>
                            {
                                copyName === data.id ? <FaCheck size={10} color="#0F6C68" /> : <Copy size={10} />
                            }

                        </div>
                    </div>
                )
            }
        },
        {
            header: 'Value', accessorKey: 'value', cell: ({ row }) => {
                const data = row.original
                return (
                    <div className="bg-zinc-200 text-zinc-800 px-4 py-2 flex items-center justify-between ">
                        <div className="w-[70%] truncate">
                            {data.value}
                        </div>
                        <div onClick={() => {
                            setCopyValue(data.id)
                            navigator.clipboard.writeText(data.value)
                        }}>
                            {
                                copyValue === data.id ? <FaCheck size={10} color="#0F6C68" /> : <Copy size={10} />
                            }

                        </div>
                    </div>
                )
            }
        },
        {
            accessorKey: 'purpose', header: 'Purpose',
        },
    ];
      const column3: ColumnDef<RecordProps>[] = [
        {
            accessorKey: 'status', header: 'Status',
        },
        {
            accessorKey: 'type', header: 'Type',
        },
        {
            header: 'Host/Name', accessorKey: 'name', cell: ({ row }) => {
                const data = row.original
                return (
                    <div className="bg-zinc-200 text-zinc-800 px-4 py-2 flex items-center justify-between ">
                        <div className="w-[70%] truncate">
                            {data.name}
                        </div>
                        <div onClick={() => {
                            setCopyName(data.id)
                            navigator.clipboard.writeText(data.name)
                        }}>
                            {
                                copyName === data.id ? <FaCheck size={10} color="#0F6C68" /> : <Copy size={10} />
                            }

                        </div>
                    </div>
                )
            }
        },
        {
            header: 'Value', accessorKey: 'value', cell: ({ row }) => {
                const data = row.original
                return (
                    <div className="bg-zinc-200 text-zinc-800 px-4 py-2 flex items-center justify-between ">
                        <div className="w-[70%] truncate">
                            {data.value}
                        </div>
                        <div onClick={() => {
                            setCopyValue(data.id)
                            navigator.clipboard.writeText(data.value)
                        }}>
                            {
                                copyValue === data.id ? <FaCheck size={10} color="#0F6C68" /> : <Copy size={10} />
                            }

                        </div>
                    </div>
                )
            }
        },
        {
            accessorKey: 'priority', header: 'Priority',
        },
        
    ];
    if (priority) return column3
    if (purpose) return column2
    return columns
} 
