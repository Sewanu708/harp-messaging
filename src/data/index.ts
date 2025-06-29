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
    pathName: 'email',
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
    pathName: 'message',
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
    pathName: 'whatsapp',
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
    pathName: 'notification',
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

export const emailData = [
  {
    "message_id": "msg_1001",
    "timestamp": "2025-06-28T10:14:22Z",
    "recipient": "jane.doe@example.com",
    "sender": "no-reply@yourapp.com",
    "subject": "Welcome to Our Service",
    "template_used": "welcome_email",
    "status": "Delivered",
    "delivery_time_ms": 320,
    "ip_address": "198.51.100.23",
    "tags": ["welcome", "user"],
    "response_code": "250 ",
    "error_message": null,
    "user_agent": "Mozilla/5.0 (Windows NT 10.0)",
    "geo_location": "USA"
  },
  {
    "message_id": "msg_1002",
    "timestamp": "2025-06-28T10:16:40Z",
    "recipient": "john.smith@example.net",
    "sender": "support@yourapp.com",
    "subject": "Reset Your Password",
    "template_used": "password_reset",
    "status": "Soft Bounce",
    "delivery_time_ms": null,
    "ip_address": "203.0.113.5",
    "tags": ["security", "password"],
    "response_code": "450 ",
    "error_message": "Mailbox temporarily unavailable",
    "user_agent": null,
    "geo_location": "UK"
  },
  {
    "message_id": "msg_1003",
    "timestamp": "2025-06-28T10:18:10Z",
    "recipient": "sally.green@example.org",
    "sender": "billing@yourapp.com",
    "subject": "Your Invoice #INV-202506",
    "template_used": "invoice_email",
    "status": "Delivered",
    "delivery_time_ms": 415,
    "ip_address": "203.0.113.18",
    "tags": ["billing", "invoice"],
    "response_code": "250",
    "error_message": null,
    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X)",
    "geo_location": "Canada"
  },
  {
    "message_id": "msg_1004",
    "timestamp": "2025-06-28T10:19:55Z",
    "recipient": "invaliduser@nonexistent.com",
    "sender": "no-reply@yourapp.com",
    "subject": "Confirm Your Email",
    "template_used": "email_confirmation",
    "status": "Hard Bounce",
    "delivery_time_ms": null,
    "ip_address": "192.0.2.45",
    "tags": ["auth", "confirm"],
    "response_code": "550",
    "error_message": "User does not exist",
    "user_agent": null,
    "geo_location": "Nigeria"
  },
  {
    "message_id": "msg_1005",
    "timestamp": "2025-06-28T10:21:05Z",
    "recipient": "alex.perez@example.com",
    "sender": "no-reply@yourapp.com",
    "subject": "Security Alert: New Login",
    "template_used": "security_alert",
    "status": "Delivered",
    "delivery_time_ms": 288,
    "ip_address": "198.51.100.78",
    "tags": ["security"],
    "response_code": "250 ",
    "error_message": null,
    "user_agent": "Mozilla/5.0 (Android 10)",
    "geo_location": "Mexico"
  }
]