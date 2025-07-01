import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { domainTableData } from "@/data";

const domainTableHeaders = [
    "Domain",
    "Verified",

    "Added On",
    "Last Used",
    "Actions"
];

interface DomainProps {
    setSelectedDomain: (value: string) => void,
    onClose: () => void
}
function AddDomainPopup({ setSelectedDomain, onClose }: DomainProps) {
    const navigator = useRouter();
    const more = ['1', '2', '...', '9', '10']
    return (
        <div className="absolute backdrop-blur inset-0 flex flex-col w-full items-center justify-center z-50">
            <div className="bg-white flex items-center justify-start border  border-zinc-300 rounded-md shadow-lg p-2  w-full max-w-3xl">
                <div className="text-2xl"><SearchIcon /></div>
                <input type="text" placeholder="Search Domain" className="p-2  rounded-md w-full max-w-md" />
            </div>
            <div className="overflow-x-auto rounded-md shadow-lg min-w-[600px] max-w-full p-8">
                <table className=" bg-zinc-100 rounded-md overflow-x-auto shadow-lg min-w-[600px] max-w-full">
                    <thead>
                        <tr className="bg-zinc-200 text-zinc-700">
                            {
                                domainTableHeaders.map((header, index) => <th key={index} className="px-6 py-3 text-left  font-medium capitalize text-sm tracking-wider">{header}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {domainTableData.map((item) => {
                            // if (!(item.verified === "Verified")) return null;
                            return (
                                <tr key={item.addedOn} className="bg-white border-b hover:bg-zinc-50 transition">
                                    <td className="px-6 py-2">{item.domain}</td>
                                    <td className="px-6 py-2">{item.verified}</td>
                                    <td className="px-6 py-2">{item.addedOn}</td>
                                    <td className="px-6 py-2">{item.lastUsed}</td>
                                    <td className="px-6 py-2">
                                        <Button className=" hover:bg-zinc-600 cursor-pointer transition-all duration-300 ease-in-out" onClick={() => { setSelectedDomain(item.domain); onClose(); }}>
                                            Add
                                        </Button>
                                    </td>
                                </tr>)

                        })}
                    </tbody>
                </table>


                <div className="w-full flex items-center justify-between mt-4">
                    <Button disabled>
                        Previous
                    </Button>
                    <div>
                        {more.map((item, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                className={`ml-2${item === '...' ? ' shadow-0' : ''}`}
                                disabled={item === '...'}
                            >
                                {item}
                            </Button>
                        ))}
                    </div>
                    <Button>
                        Next
                    </Button>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <Button variant={"outline"} onClick={onClose} className="cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out">
                        Close
                    </Button>
                    <Button variant={"outline"} onClick={() => navigator.push('/email/domain/create')} className="cursor-pointer hover:bg-zinc-100 transition-all duration-300 ease-in-out">
                        Add New Domain
                    </Button>

                </div>

            </div>

        </div>
    )
}

export default AddDomainPopup