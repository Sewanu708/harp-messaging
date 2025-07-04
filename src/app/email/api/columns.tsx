"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, } from "lucide-react";
import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "@/context";

export interface Api {
    id: string;
    description: string;
    createdAt: string;
}

export function APIColumn() {
    const context = useContext(GlobalContext);

    let setActionDisplay: (value: boolean) => void
    if (context) {
        ({ setActionDisplay } = context)
      
    } else { 'Context is undefined'; }

    const columns: ColumnDef<Api>[] = [
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
            cell: () => {
                
                return (
                    <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => {
                        
                            setActionDisplay?.(true);
                          
                        }}>
                        <MdDeleteOutline className="h-4 w-4"  />
                    </Button>
                )
            },
        },
    ];
    return columns
}

