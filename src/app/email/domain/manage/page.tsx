'use client'
import GetMailbyId from "../../viewmails/GetMailbyId"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react";
import Table from "../../viewmails/table";
import { useEffect, useState } from "react";
import { domainProps, domainTableData } from "@/data";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useRouter } from "next/navigation";
function Manage() {
    const navigate = useRouter()
    const more = ['1', '2', '...', '9', '10'];
    const [filterInput, setFilterInput] = useState('');
    const [data, setData] = useState(domainTableData)
    interface ColumnProps<T> {
        header: string,
        accessor: keyof T,
        render?: (value: string) => React.ReactNode
    }

    const columns: ColumnProps<domainProps>[] = [
        { header: 'id', accessor: 'id' },
        { header: 'Domain', accessor: 'domain' },
        { header: 'Verification Status', accessor: 'verified' },
        { header: 'SPF', accessor: 'spf' },
        { header: 'DKIM', accessor: 'dkim' },
        { header: 'Added on', accessor: 'addedOn' },
        { header: 'Last Used', accessor: 'lastUsed' },
        { header: '', accessor: 'actions', render: () => <BiDotsHorizontalRounded /> }
    ];
    useEffect(() => {
        if (filterInput.length > 0) {
            const filterData = domainTableData.filter((item) =>
                item.id.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())
            );
            setData(filterData);
        } else {
            setData(domainTableData);
        }
    }, [filterInput]);
    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            <div className="py-2 w-full  bg-white  flex items-center justify-between">
                <div className="  font-semibold text-[#0F6C68] text-2xl">
                    Manage Domains
                </div>
                <div>

                    <Button onClick={() => navigate.push('/email/domain/create')} className=" capitalize mt-4 text-white px-5 py-2 rounded bg-[#0F6C68] cursor-pointer hover:bg-zinc-700">
                        <PlusIcon />Add new domain
                    </Button>
                </div>
            </div>

            <div className="mt-6" />
            <GetMailbyId input={filterInput} setInput={setFilterInput} placeholder={'Search with id'} />
            <Table columns={columns} data={data} maxRow={9} sortDisplay={false} />

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

export default Manage