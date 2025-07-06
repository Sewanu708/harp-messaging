'use client'
// import { TableSkeleton } from "@/components/skeleton";
import { useRouter } from "next/navigation";
// import { useCallback, useEffect, useState } from "react";


// interface mailProp {
//     subject: string,
//     recipient: string,
//     sender: string,
//     status: string,
//     type: string,
//     environment: string,
//     sentAt: string,
//     opened: boolean,
//     clicked: boolean,
//     messageId: string,
//     domain: string
// }
function MailPreview() {
    // const [id, setId] = useState('')
    // const [data, setData] = useState<mailProp>()
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState('')
    const navigate = useRouter()
    // async function fetchData() {
    //     setLoading(true)
    //     if (!id) return;
    //     console.log(id)
    //     try {
    //         const response = await fetch(`/email/viewmails/${id}/api`)
    //         if (!response.ok) {
    //             setError('Something went wrong while loading mail')
    //             setLoading(false)
    //             return
    //         }
    //         const feedback = await response.json()
    //         console.log(feedback)
    //         setData(feedback)
    //         setError('')
    //     } catch (err) {
    //         setError(`${err}`)
    //     } finally {
    //         setLoading(false)
    //     }
    // }
    // const memoizeFetch = useCallback(() => { fetchData() }, [id])
    // useEffect(() => {
    //     const paramPromise = async () => {
    //         const paramPromise = await params
    //         setId(paramPromise.id)
    //     }
    //     paramPromise()
    // }, [params])
    // useEffect(() => {
    //     memoizeFetch()
    // }, [memoizeFetch])
    // useEffect(() => {

    //     const id = setTimeout(() => setError(''), 5000)
    //     return () => clearTimeout(id)
    // }, [error])

    return (
        <div className="w-full mx-auto p-6 border  space-y-6">

            <div className="flex justify-between items-center border-b pb-4">
                <button className="text-sm text-gray-500 cursor-pointer" onClick={() => navigate.back()}>&larr; Back</button>
                <h2 className="text-xl">Email Preview</h2>
                <div className="space-x-2">

                </div>
            </div>
            {/* {error && (
                <div className="my-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
                    {error}
                </div>
            )} */}
            {/* {
                loading ? <TableSkeleton /> : <>
                    <div className="text-sm space-y-1">
                        <p>
                            <span className="font-medium">From:</span> {data?.sender}
                        </p>
                        <p>
                            <span className="font-medium">To:</span> {data?.recipient}
                        </p>
                        <p>
                            <span className="font-medium">Subject:</span> {data?.subject}
                        </p>
                    </div>


                    <div className="border rounded-md p-4 space-y-4">
                        <div className="text-center">
                            <div className="w-32 h-16 bg-gray-200 mx-auto flex items-center justify-center text-xs">
                                [Logo]
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p>Hi John,</p>
                            <p>
                                Thank you for signing up! You&apos;re now part of the family.
                            </p>
                            <div className="text-center">
                                <button className="px-4 py-2 bg-[#0F6C68] text-white text-sm rounded-md shadow">
                                    Click Here to Get Started
                                </button>
                            </div>
                            <p className="text-sm text-gray-500">
                                Need help? Contact us at support@site.com
                            </p>
                        </div>
                    </div>


                    <div className="text-xs text-center text-gray-400 border-t pt-4">
                        © 2025 Company Name · Unsubscribe · Privacy Policy
                    </div></>
            } */}
            <>
                    <div className="text-sm space-y-1">
                        <p>
                            <span className="font-medium">From:</span> dummy@mai.com
                        </p>
                        <p>
                            <span className="font-medium">To:</span> dummy@mai.com
                        </p>
                        <p>
                            <span className="font-medium">Subject:</span> Johnny
                        </p>
                    </div>


                    <div className="border rounded-md p-4 space-y-4">
                        <div className="text-center">
                            <div className="w-32 h-16 bg-gray-200 mx-auto flex items-center justify-center text-xs">
                                [Logo]
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p>Hi John,</p>
                            <p>
                                Thank you for signing up! You&apos;re now part of the family.
                            </p>
                            <div className="text-center">
                                <button className="px-4 py-2 bg-[#0F6C68] text-white text-sm rounded-md shadow">
                                    Click Here to Get Started
                                </button>
                            </div>
                            <p className="text-sm text-gray-500">
                                Need help? Contact us at support@site.com
                            </p>
                        </div>
                    </div>


                    <div className="text-xs text-center text-gray-400 border-t pt-4">
                        © 2025 Company Name · Unsubscribe · Privacy Policy
                    </div></>

        </div>
    );
}

export default MailPreview


