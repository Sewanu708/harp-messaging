import { MdOutlineNotifications } from 'react-icons/md';
import { FiMail } from "react-icons/fi";
import { RiMessage2Line } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
export const sidebarItems = [
  {
    header: "Email",
    icon: FiMail,
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
        items: [
          {
            label: "Manage Domains",
            path: "/email/domains"
          }
        ]
      },
      {
        label: "API Keys",
        items: [
          {
            label: "Manage Keys",
            path: "/email/api-keys"
          }
        ]
      },
      {
        label: "Templates",
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
    items: [
      {
        label: "Send SMS",
        path: "/sms/send"
      },
      {
        label: "Templates",
        items: [
          {
            label: "SMS Templates",
            path: "/sms/templates"
          }
        ]
      },
      {
        label: "Webhooks",
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
    items: [
      {
        label: "Send WhatsApp",
        path: "/whatsapp/send"
      },
      {
        label: "Templates",
        items: [
          {
            label: "WhatsApp Templates",
            path: "/whatsapp/templates"
          }
        ]
      },
      {
        label: "Webhooks",
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
    items: [
      {
        label: "Send Notification",
        path: "/push/send"
      },
      {
        label: "Templates",
        items: [
          {
            label: "Notification Templates",
            path: "/push/templates"
          }
        ]
      },
      {
        label: "Webhooks",
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
