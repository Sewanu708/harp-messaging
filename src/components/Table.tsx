

interface TableProps {
    headers: string[],
    data: ItemProps[]
}
interface ItemProps {
    timestamp: string,
    recipient: string,
    subject: string,
    status: string,
    response_code: string
}
function Table({ headers, data }: TableProps) {
    return (
        <div className="overflow-x-auto rounded-md shadow-lg min-w-[600px] max-w-full ">
            <table className="min-w-full bg-zinc-100 rounded-md">
                <thead>
                    <tr className="bg-zinc-200 text-zinc-700">
                        {
                            headers.map((header, index) => <th key={index} className="px-6 py-3 text-left  font-medium capitalize text-sm tracking-wider">{header}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: ItemProps) => {
                        const date = new Date(item.timestamp)
                        const year = date.getFullYear();
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const day = String(date.getDay()).padStart(2, '0')
                        const hours = String(date.getHours()).padStart(2, '0')
                        const minutes = String(date.getMinutes()).padStart(2, '0')
                        const seconds = String(date.getSeconds()).padStart(2, '0')

                        const formatted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                        return (
                            <tr key={item.timestamp} className="bg-white border-b hover:bg-zinc-50 transition">
                                <td className="px-6 py-4">{formatted}</td>
                                <td className="px-6 py-4">{item.recipient}</td>
                                <td className="px-6 py-4">{item.subject}</td>
                                <td className="px-6 py-4 w-16">{item.status}</td>
                                <td className="px-6 py-4 w-48">{item.response_code}</td>
                            </tr>)

                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table