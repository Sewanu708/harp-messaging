"use client"

import { ColumnDef } from "@tanstack/react-table"
import { dataProps } from "@/data";

export const columns: ColumnDef<dataProps>[] = [
    { header: 'id', accessorKey: 'messageId' },
    { header: 'Subject', accessorKey: 'subject' },
    { header: 'recipient', accessorKey: 'recipient' },
    { header: 'status', accessorKey: 'status' },
    { header: 'Sent At', accessorKey: 'sentAt' }
];

