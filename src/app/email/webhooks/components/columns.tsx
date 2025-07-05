"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react";
import { WebhookProps } from "@/data";
import { useContext } from "react";
import { addWebhookProps, GlobalContext } from "@/context";


export function columns() {
    const context = useContext(GlobalContext)
    let setAddWebhook: (value: addWebhookProps) => void;
    let setRemoveWebhook: (value: addWebhookProps) => void;
    if (!context) {
        throw new Error("Context not defined");

    } else {
        ({
            setAddWebhook,
            setRemoveWebhook,
        } = context)
    }
    const columns: ColumnDef<WebhookProps>[] = [
        {
            accessorKey: 'id',
            header: 'id',
        },
        {
            accessorKey: 'event',
            header: 'Event',
        },
        {
            header: 'URL',
            accessorKey: 'url',
            cell: ({ row }) => {
                const url = row.getValue('url');
                return url ? url : 'not set';
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const data = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {
                                data.url.length > 0 ? <DropdownMenuItem onClick={() => setRemoveWebhook({ state: true, id: data.id, event: data.event })}>
                                    Remove
                                </DropdownMenuItem> : <DropdownMenuItem onClick={() => setAddWebhook({ state: true, id: data.id, event: data.event })} >
                                    Add
                                </DropdownMenuItem>
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    return columns
}
