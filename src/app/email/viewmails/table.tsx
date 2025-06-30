import { newEmailData } from "@/data";
import { FaCheck } from "react-icons/fa";
import { MdClose, MdOutlineMoreHoriz } from "react-icons/md";
import { TbArrowsSort } from "react-icons/tb";

const headers = ['id', 'subject', 'recipient', 'status', 'sent at', 'opened', 'actions'];

function Table() {
    return (
        <div className="overflow-x-auto rounded-md shadow-lg min-w-[600px] max-w-full">
            <table className="min-w-full bg-zinc-100 rounded-md table-fixed">
                <thead>
                    <tr className="bg-zinc-200 text-zinc-700">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-4 py-3 text-left font-medium capitalize text-sm tracking-wider whitespace-nowrap"
                            >
                                {header}
                                {(header === 'status' || header === 'sent at') && (
                                    <span className="inline-block align-middle ml-1">
                                        <TbArrowsSort />
                                    </span>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {newEmailData.slice(0,9).map((item, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-zinc-50 transition">
                            <td className="px-4 py-2 text-sm truncate max-w-[120px]">{item.messageId}</td>
                            <td className="px-4 py-2 text-[12px] truncate max-w-[200px]">{item.subject}</td>
                            <td className="px-4 py-2 text-sm truncate max-w-[180px]">{item.recipient}</td>
                            <td className="px-4 py-2 text-sm truncate max-w-[120px]">{item.status}</td>
                            <td className="px-4 py-2 text-sm truncate max-w-[180px]">{item.sentAt}</td>
                            <td className="px-4 py-2 text-sm text-center max-w-[60px]">
                                {item.opened ? (
                                    <FaCheck className="text-[#0F6C68] inline" />
                                ) : (
                                    <MdClose className="text-red-500 inline" />
                                )}
                            </td>
                            <td className="px-4 py-2 text-sm text-center max-w-[60px]">
                                <MdOutlineMoreHoriz />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
