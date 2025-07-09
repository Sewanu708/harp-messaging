import { Button } from '@/components/ui/button'
import React from 'react'
import SendRecords from './components/send'
import ReceiveRecords from './components/Receive'
import TrackRecords from './components/track'
import Link from 'next/link'

function ConfigureDomain() {
    return (
        <section className="py-4 px-4 w-full relative h-screen overflow-y-auto">
            <div className="font-semibold text-[#0F6C68] text-2xl">
                Configure Your Domain
            </div>
            <div className="w-full flex items-start items-center justify-between gap-4 p-4   bg-white">

                <div className="w-[70%] text-sm text-gray-700 leading-relaxed">
                    To start sending/receiving/tracking email from this domain, add the following DNS records  to your domain provider (e.g Namecheap, GoDaddy). Once done, click 'Verify' below.
                </div>
                <div className="">
                    <Button className='bg-[#0F6C68] hover:bg-zinc-600'>Verify</Button>
                </div>
            </div>
            <div className='p-4'>
                <SendRecords />
            </div>
            <div className='p-4'>
                <ReceiveRecords />
            </div>
            <div className='p-4'>
                <TrackRecords />
            </div>

            <div className="w-full text-sm text-center text-gray-700 leading-relaxed">
                Need help adding DNS records? See <Link href={''} className='text-[#0F6C68]  font-semibold underline'>Setup Guide</Link> or contact support
            </div>

        </section>
    )
}

export default ConfigureDomain