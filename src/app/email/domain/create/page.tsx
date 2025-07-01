'use client'
import { Button } from "@/components/ui/button"
import { GlobalContext } from "@/context";
import { domainTableData } from "@/data";
import { Verified } from "lucide-react";
import { useRouter } from "next/navigation"
import { useContext, useState } from "react";

function CreateDomain() {
    const navigate = useRouter();
    const [error, setError] = useState({
        domain: 'Input your domain',
        dns: 'Add your DNS Provider',
        region: 'Select your region'
    });
    const [anyError, setAnyError] = useState(false);
    const context = useContext(GlobalContext);
    if (!context) return 'Error context not defined';
    const { domainData, setDomainData } = context;

    function handleError(value: string, id: string) {
        if (value.length === 0) setError(prev => ({ ...prev, [id]: 'Empty Field' }));

        if (id === 'domain') {
            if (
                !/^(?=.{1,253}$)(?!\-)(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/.test(
                    value
                )
            ) {
                setError(prev => ({ ...prev, [id]: 'Domain name does not match format' }));
            } else {
                setDomainData({ ...domainData, [id]: value });
                setError(prev => ({ ...prev, [id]: '' }));
            }
        } else if (id === 'reg') {
            setDomainData({ ...domainData, region: value });
            setError(prev => ({ ...prev, region: '' }));
        } else if (id === 'dns') {
            if (value.length === 0) {
                setError(prev => ({ ...prev, dns: 'Add your DNS Provider' }));
                return;
            }
            setDomainData({ ...domainData, provider: value });
            setError(prev => ({ ...prev, dns: '' }));
        }
    }
    function postData() {

        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = (date.getDay()).toString().padStart(2, '0')
        const hour = (date.getHours()).toString().padStart(2, '0')
        const minutes = (date.getMinutes()).toString().padStart(2, '0')
        const seconds = (date.getSeconds()).toString().padStart(2, '0')

        const formatted = `${year}-${day}-${month}  ${hour}:${minutes}:${seconds}`
        const data = {
            domain: domainData.domain, verified: 'pending', spf: 'fail', dkim: 'fail', addedOn: formatted, lastUsed: 'N/A', actions: ['Edit', 'Logs']

        }
        domainTableData.push(data)
    }
    
    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            <div className="text-2xl py-2 w-full bg-white fixed font-semibold text-[#0F6C68]">
                Domain
            </div>

            <div className="w-full shadow-md p-4 mt-16 bg-zinc-50">
                <h2 className="text-xl text-zinc-700">Add New Domain</h2>

                <form
                    className="my-4 bg-white p-4"
                    onSubmit={e => {
                        e.preventDefault();
                        if (
                            error.dns.length > 0 ||
                            error.domain.length > 0 ||
                            error.region.length > 0 ||
                            !domainData.domain ||
                            !domainData.region ||
                            !domainData.provider
                        ) {
                            setAnyError(true);
                            return;
                        }

                        postData()
                        navigate.push('/email/domain/dns');
                    }}
                >
                    <div className="flex flex-col items-start justify-start gap-[2px]">
                        <div className="flex flex-col items-start justify-start gap-2">
                            <label htmlFor="domain" className="text font-semibold">
                                Domain Name
                            </label>
                            <input
                                id="domain"
                                name="domain"
                                placeholder="e.g mail.harp.io"
                                type="text"
                                className="border border-[#0F6C68] focus:border-black rounded-md p-2 max-w-128 min-w-96"
                                required
                                onInput={e => {
                                    const value = (e.target as HTMLInputElement).value;
                                    const id = (e.target as HTMLInputElement).id;
                                    handleError(value, id);
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-4">
                        <label className="font-semibold mb-2">Region</label>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="reg"
                                    value="us"
                                    className="accent-[#0F6C68] w-4 h-4"
                                    onChange={e => handleError(e.target.value, 'reg')}
                                />
                                <span className="text-zinc-700">US</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="reg"
                                    value="EU"
                                    className="accent-[#0F6C68] w-4 h-4"
                                    onChange={e => handleError(e.target.value, 'reg')}
                                />
                                <span className="text-zinc-700">EU</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex flex-col">
                            <label htmlFor="dns" className="font-semibold mb-2">
                                DNS Provider
                            </label>
                            <input
                                list="dns-providers"
                                placeholder="Choose or type provider"
                                id="dns"
                                name="dns"
                                className="border border-[#0F6C68] focus:border-black rounded-md p-2 max-w-128 min-w-96"
                                onInput={e => {
                                    const value = (e.target as HTMLInputElement).value;
                                    const id = (e.target as HTMLInputElement).id;
                                    handleError(value, id);
                                }}
                            />
                            <datalist id="dns-providers">
                                <option value="GoDaddy" />
                                <option value="Cloudflare" />
                                <option value="Namecheap" />
                                <option value="Google Domains" />
                                <option value="Others (please specify)" />
                            </datalist>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col">
                        <label htmlFor="ip" className="font-semibold mb-2">
                            IP assignment
                        </label>
                        <select
                            id="ip"
                            className="w-64 border p-2 rounded-md border-[#0F6C68]"
                            onChange={e => {
                                const value = (e.target as HTMLSelectElement).value;

                                setDomainData({ ...domainData, ip: value });
                            }}
                        >
                            <option value="shared">Shared IP</option>
                            <option value="private">Private IP</option>
                        </select>
                    </div>

                    <Button
                        type="submit"
                        className="mt-4 text-white px-5 py-2 rounded bg-[#0F6C68] cursor-pointer hover:bg-zinc-700"
                    >
                        Add Domain
                    </Button>
                </form>
            </div>

            {(anyError && (error.domain || error.region || error.dns)) && (
                <div className="mb-4 p-3 absolute top-32 left-[30%] rounded bg-red-100 text-red-700 text-sm">
                    <ul className="list-disc pl-5">
                        {error.domain && <li>{error.domain}</li>}
                        {error.region && <li>{error.region}</li>}
                        {error.dns && <li>{error.dns}</li>}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default CreateDomain;