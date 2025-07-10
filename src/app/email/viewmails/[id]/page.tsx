'use client'
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function MailPreview() {

    const navigate = useRouter()

    return (
        <div className="w-full mx-auto p-6 border  space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
                <button className="text-sm text-gray-500 cursor-pointer" onClick={() => navigate.back()}>  <MdOutlineKeyboardArrowLeft /></button>
                <h2 className="text-xl">Email Preview</h2>
                <div className="space-x-2">

                </div>
            </div>
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


