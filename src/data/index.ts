import { MdOutlineNotifications } from 'react-icons/md';
import { FiMail } from "react-icons/fi";
import { RiMessage2Line } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
function randomId() {
  return new Date().getTime() + Math.random().toString(36).substring(2, 9);
}
export const sidebarItems = [
  {
    header: "Email",
    icon: FiMail,
    pathName:'email',
    items: [
      {
        label: "Send Mail",
        path: "/email/send"
      },
      {
   
        label: "View Mails",
        path: "/email/list"
      },
      {
        label: "Domains",
        id: randomId(),
        items: [
          { 
            label: "Manage Domains",
            path: "/email/domains"
          }
        ]
      },
      {
        label: "API Keys",
        id: randomId(),
        items: [
          {
            label: "Manage Keys",
            path: "/email/api-keys"
          }
        ]
      },
      {
        label: "Templates",
        id: randomId(),
        items: [
          {
            label: "Email Templates",
            path: "/email/templates"
          },
          {
            label: "Send with Template",
            path: "/email/template-send"
          }
        ]
      },
      {
        label: "Webhooks",
        id: randomId(),
        items: [
          {
            label: "Manage Webhooks",
            path: "/email/webhooks"
          }
        ]
      }
    ]
  },
  {
    header: "SMS",
    icon: RiMessage2Line,
    pathName:'message',
    items: [
      {
        label: "Send SMS",
        path: "/sms/send"
      },
      {
        label: "Templates",
        id: randomId(),
        items: [
          {
            label: "SMS Templates",
            path: "/sms/templates"
          }
        ]
      },
      {
        label: "Webhooks",
        id: randomId(),
        items: [
          {
            label: "Manage Webhooks",
            path: "/sms/webhooks"
          }
        ]
      }
    ]
  },
  {
    header: "WhatsApp",
    icon: BsWhatsapp,
    pathName:'whatsapp',
    items: [
      {
        label: "Send WhatsApp",
        path: "/whatsapp/send"
      },
      {
        label: "Templates",
        id: randomId(),
        items: [
          {
            label: "WhatsApp Templates",
            path: "/whatsapp/templates"
          }
        ]
      },
      {
        label: "Webhooks",
        id: randomId(),
        items: [
          {
            label: "Manage Webhooks",
            path: "/whatsapp/webhooks"
          }
        ]
      }
    ]
  },
  {
    header: "Push Notification",
    icon: MdOutlineNotifications,
    pathName:'notification',
    items: [
      {
        label: "Send Notification",
        path: "/push/send"
      },
      {
        label: "Templates",
        id: randomId(),
        items: [
          {
            label: "Notification Templates",
            path: "/push/templates"
          }
        ]
      },
      {
        label: "Webhooks",
        id: randomId(),
        items: [
          {
            label: "Manage Webhooks",
            path: "/push/webhooks"
          }
        ]
      }
    ]
  }
];
