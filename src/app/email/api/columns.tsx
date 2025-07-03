"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, } from "lucide-react";
import { MdDeleteOutline } from "react-icons/md";
import { api } from "@/data";

export interface Api {
    id: string;
    description: string;
    createdAt: string;
}

export const columns: ColumnDef<Api>[] = [
    {
        accessorKey: 'id', header: ({ column }) => {
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
    { header: 'Description', accessorKey: 'description' },
    {
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Created At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }, accessorKey: 'createdAt'
    }, {
        id: "actions",
        cell: ({ row }) => {
            const data = row.original
            return (
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <MdDeleteOutline className="h-4 w-4" onClick={() => {
                        const index = api.findIndex(item => item.id === data.id);
                        if (index !== -1) {
                            api.splice(index, 1);
                        }
                    }} />
                </Button>
            )
        },
    },
];
