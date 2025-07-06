"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { useContext } from "react";
import {  GlobalContext } from "@/context";

export interface domainProps {
    id: string,
    domain: string,
    verified: string,
    spf: string,
    dkim: string,
    addedOn: string,
    lastUsed: string,
    actions: string[]
}


export function useColumns() {
    const context = useContext(GlobalContext)
    let setDeleteDomain: (value: { id: string, state: boolean }) => void;

    if (!context) {
        throw new Error("Context not defined");

    } else {
        ({

            setDeleteDomain,
        } = context)
    }

    

    const columns: ColumnDef<domainProps>[] = [
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
        { header: 'Domain', accessorKey: 'domain' },
        { header: 'Verification Status', accessorKey: 'verified' },
        {
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        SPF
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            }, accessorKey: 'spf'
        }, {
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        DKIM
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            }, accessorKey: 'dkim'
        },
        {
            accessorKey: 'addedOn', header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Added on
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        }, {
            accessorKey: 'lastUsed', header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Last Used
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
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="text-red-500" onClick={() => setDeleteDomain({ id: data.id, state: true })}
                            >
                                Delete
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {
                                data.verified.toLocaleLowerCase() === 'verified' ? '' : <DropdownMenuItem>Verify</DropdownMenuItem>
                            }

                            <DropdownMenuItem>Logs</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ];
    return columns
}
