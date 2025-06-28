'use client'
import SideBar from '@/components/Layout/SideBar'
import React, { useContext } from 'react'
import WhatsApp from '../../Pages/WhatsApp'
import Notification from '../../Pages/PushNotification'
import Sms from '../../Pages/Message/Sms'
import Email from '../../Pages/Email'
import { GlobalContext } from '@/context'

function Page() {
    const context = useContext(GlobalContext)
    if (!context) return 'Error, Context is undefined'
    const {  selectedChannel } = context
    let content;
    switch (selectedChannel) {
        case 'Email':
            content = <Email />
            break;
        case 'SMS':
            content = <Sms />
            break;
        case 'Push Notification':
            content = <Notification />
            break;
        case 'WhatsApp':
            content = <WhatsApp />
            break;

        default:
            content = null;
            break;
    }
    return (
        <main className="flex">
            <SideBar />
            {content}
        </main>
    );
}

export default Page