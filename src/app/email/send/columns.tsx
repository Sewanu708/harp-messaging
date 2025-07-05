"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { domainProps } from "@/data";
import { useContext } from "react";
import { GlobalContext } from "@/context";

export function useColumns() {
    const context = useContext(GlobalContext)

    let setSelectedDomain: (value: string) => void
    let setIsAddDomainOpen: (value: boolean) => void
    if (!context) {
        console.error('Error!, context not defined');
    } else {
        ({ setSelectedDomain, setIsAddDomainOpen } = context)
    }


    const columns: ColumnDef<domainProps>[] = [
        {
            accessorKey: 'domain', header: 'Domain',
        },
        { header: 'Verified', accessorKey: 'verified' },
        {
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    > <ArrowUpDown className="text-zinc-500" />
                        Added on

                    </Button>
                )
            }, accessorKey: 'addedOn'
        },
        {
            accessorKey: 'lastUsed', header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    ><ArrowUpDown className="text-zinc-500" />
                        Last used

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
                            <DropdownMenuItem
                                onClick={() => {
                                    setSelectedDomain(data.domain)
                                    setIsAddDomainOpen(false)
                                }
                                }
                            >
                                Add
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ];
    return columns
}
