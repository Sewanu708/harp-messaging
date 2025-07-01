'use client'
import { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";

interface ColumnProps<T> {
    header: string,
    accessor: keyof T,
    render?: (value: string) => React.ReactNode
}

interface TableProps<T> {
    input: string,
    data: T[],
    columns: ColumnProps<T>[],
    maxRow?: number,
    sortDisplay: boolean,
    handleSorting?: (accessor: string, sortOrder: string) => () => void
}

function Table<T>({ input, columns, data, maxRow, handleSorting ,sortDisplay}: TableProps<T>) {
    const [sortField, setSortField] = useState('');
    const [order, setOrder] = useState('asc');

    function handleSortingChange(accessor: string) {
        const sortOrder = (accessor === sortField && order === 'asc') ? 'desc' : 'asc';
        setSortField(accessor);
        setOrder(sortOrder);

        if (handleSorting) {
            handleSorting(accessor, sortOrder)();
        }
    }

    return (
        <div className="overflow-x-auto rounded-md shadow-lg min-w-[600px] max-w-full">
            <table className="min-w-full bg-zinc-100 rounded-md table-fixed">
                <thead>
                    <tr className="bg-zinc-200 text-zinc-700">
                        {columns.map((column: ColumnProps<T>) => {
                            const isSortable = column.header === 'status' || column.header === 'Sent At';
                            return (
                                <th
                                    key={column.header}
                                    onClick={() => handleSortingChange(String(column.accessor))}
                                    className={`px-4 py-2 cursor-pointer text-left font-medium capitalize text-sm tracking-wider whitespace-nowrap`}
                                >
                                    <div className="flex gap-2 items-center">
                                        {(isSortable && sortDisplay) && (
                                            <span className="ml-1">
                                                <TbArrowsSort />
                                            </span>
                                        )}
                                        {column.header}
                                    </div>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {(data).slice(0,maxRow).map((item, index) => (
                        <tr key={index} className="bg-white border-b px-2 hover:bg-zinc-50 transition">
                            {columns.map((col: ColumnProps<T>) => {
                                return (
                                    <td key={String(col.accessor)} className="px-4 py-2 text-sm truncate max-w-64">
                                        {col.render ?
                                            col.render(String((item as T)[col.accessor])) :
                                            String((item as T)[col.accessor])
                                        }
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;