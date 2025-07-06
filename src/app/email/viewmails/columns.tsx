"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { useRouter } from "next/navigation";

export interface dataProps {
    subject: string,
    recipient: string,
    sender: string,
    status: string,
    type: string,
    environment: string,
    sentAt: string,
    opened: boolean,
    clicked: boolean,
    messageId: string,
    domain: string,
}
export function useColumns(){
    const navigate = useRouter()
    const mainDataColumns: ColumnDef<dataProps>[] = [
        {
            accessorKey: 'messageId', header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        id
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        },
        { header: 'Subject', accessorKey: 'subject' },
        { header: 'Recipient', accessorKey: 'recipient' },
        {
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            }, accessorKey: 'status'
        },
        {
            accessorKey: 'sentAt', header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Sent At
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        }, {
            id: "actions",
            cell: ({ row }) => {
                const data = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">

                            <DropdownMenuItem onClick={()=>navigate.push(`/email/viewmails/${data.messageId}`)}
                            >
                                Preview
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ];

    return mainDataColumns
}
