'use client'
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { MdOutlineArrowDropDown } from "react-icons/md"
import Table from "./table"
import GetMailbyId from "./GetMailbyId"
import { useEffect, useState } from "react"
import { dataProps, newEmailData } from "@/data"
import { useRouter } from "next/navigation"


function View() {
    const more = ['1', '2', '...', '9', '10'];

    interface ColumnProps<T> {
        header: string,
        accessor: keyof T,
        render?: (value: string) => React.ReactNode
    }

    const columns: ColumnProps<dataProps>[] = [
        { header: 'id', accessor: 'messageId' },
        { header: 'Subject', accessor: 'subject' },
        { header: 'recipient', accessor: 'recipient' },
        { header: 'status', accessor: 'status' },
        { header: 'Sent At', accessor: 'sentAt' }
    ];
    const [filterInput, setFilterInput] = useState<string>('');
    const [data, setData] = useState(newEmailData);
    function handleSorting(accessor: string, sortOrder: string) {
        return () => {

            if (accessor) {
                const sorted = [...data.sort((a, b) => {
                    return (
                        a[accessor as keyof dataProps].toString().localeCompare(
                            b[accessor as keyof dataProps].toString(),
                            'en',
                            { numeric: true }
                        ) * (sortOrder === 'asc' ? 1 : -1)
                    )
                })];

                setData(sorted);
            }
        };
    }
    const navigate = useRouter()
    useEffect(() => {
        if (filterInput.length > 0) {
            const filterData = newEmailData.filter((item) =>
                item.messageId.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())
            );
            setData(filterData);
        } else {
            setData(newEmailData);
        }
    }, [filterInput]);
    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            <div className="py-2 w-full  bg-white  flex items-center justify-between">
                <div className="  font-semibold text-[#0F6C68] text-2xl">
                    View Mails
                </div>
                <div>

                    <Button onClick={()=>navigate.push('/email/send')} className="  mt-4 text-white px-5 py-2 rounded bg-[#0F6C68] cursor-pointer hover:bg-zinc-700">
                        <PlusIcon /> Send New  Email
                    </Button>
                </div>
            </div>

            <div className="flex items-start justify-start flex-wrap mb-4 gap-4 sm:gap-0 ">
                <div className="flex items-center mt-4  border rounded-sm w-fit">
                    <div className="flex p-2  gap-2   items-center cursor-pointer hover:bg-zinc-100 transition-all duration-200">
                        <span className="font-[500] text-zinc-600 text-sm">All Emails</span><MdOutlineArrowDropDown className="text-zinc-600 text-sm" />
                    </div>



                </div>

            </div>
            <GetMailbyId input={filterInput} setInput={setFilterInput} placeholder="search with id" />
            <Table input={filterInput} columns={columns} data={data} maxRow={9} handleSorting={handleSorting} sortDisplay={true} />

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
        </section>
    )
}

export default View 