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
    pathName: '/email/send',
    description: "Send beautiful transactional emails",
    items: [
      {
        label: "Send Mail",
        path: "/email/send"
      },
      {

        label: "View Mails",
        path: "/email/viewmails"
      },
      {
        label: "Domains",
        id: randomId(),
        items: [
          {
            label: "Manage Domains",
            path: "/email/domain/manage"
          }
          , {
            label: "Add Domain",
            path: "/email/domain/create"
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
            label: "View Template",
            path: "/email/templates"
          },
          {
            label: "Create Templates",
            path: "/email/templates/create"
          },
         
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
    description: "Reach users with instant text alerts",
    pathName: 'message',
    items: [
      {
        label: "Send SMS",
        path: "/message"
      },

    ]
  },
  {
    header: "WhatsApp",
    icon: BsWhatsapp,
    pathName: 'whatsapp',
    description: "Engage via personalized messages",
    items: [
      {
        label: "Send WhatsApp",
        path: "/whatsapp"
      },

    ]
  },
  {
    header: "Push Notification",
    icon: MdOutlineNotifications,
    pathName: 'notification',
    description: "Trigger in-app or browser pushes",
    items: [
      {
        label: "Send Notification",
        path: "/notification"
      }
    ]
  }
];


export interface dataProps {
  subject: string,
  recipient: string,
  sender: string,
  status: string,
  type: string,
  environment: string,
  sentAt: string,
  opened: boolean,
  clicked: boolean,
  messageId: string,
  domain: string,
}
export const newEmailData = [
  {
    subject: "Password Reset Request",
    recipient: "john.smith@mail.com",
    sender: "support@harp.io",
    status: "Opened",
    type: "Password Reset",
    environment: "Production",
    sentAt: "2025-06-28 09:45",
    opened: true,
    clicked: true,
    messageId: "msg_002",
    domain: "harp.io",
  },
  {
    subject: "Verify Your Email Address",
    recipient: "user123@clientmail.com",
    sender: "noreply@harp.io",
    status: "Bounced",
    type: "Verification",
    environment: "Staging",
    sentAt: "2025-06-27 18:20",
    opened: false,
    clicked: false,
    messageId: "msg_003",
    domain: "sandbox.harpmail.org",
  },
  {
    subject: "Invoice #45678",
    recipient: "billing@company.org",
    sender: "billing@harp.io",
    status: "Sent",
    type: "Invoice",
    environment: "Production",
    sentAt: "2025-06-26 14:00",
    opened: true,
    clicked: true,
    messageId: "msg_004",
    domain: "harp.io",
  },
  {
    subject: "Important System Notification",
    recipient: "admin@company.org",
    sender: "alerts@harp.io",
    status: "Failed",
    type: "System Alert",
    environment: "Production",
    sentAt: "2025-06-25 22:50",
    opened: false,
    clicked: false,
    messageId: "msg_005",
    domain: "harp.io",
  }, {
    subject: "Welcome to Harp Messaging!",
    recipient: "jane.doe@example.com",
    sender: "noreply@harp.io",
    status: "Sent",
    type: "Welcome Email",
    environment: "Production",
    sentAt: "2025-06-28 10:05",
    opened: true,
    clicked: false,
    messageId: "msg_001",
    domain: "harp.io",
  },
  {
    subject: "Password Reset Request",
    recipient: "john.smith@mail.com",
    sender: "support@harp.io",
    status: "Opened",
    type: "Password Reset",
    environment: "Production",
    sentAt: "2025-06-28 09:45",
    opened: true,
    clicked: true,
    messageId: "msg_002",
    domain: "harp.io",
  },
  {
    subject: "Verify Your Email Address",
    recipient: "user123@clientmail.com",
    sender: "noreply@harp.io",
    status: "Bounced",
    type: "Verification",
    environment: "Staging",
    sentAt: "2025-06-27 18:20",
    opened: false,
    clicked: false,
    messageId: "msg_003",
    domain: "sandbox.harpmail.org",
  },
  {
    subject: "Invoice #45678",
    recipient: "billing@company.org",
    sender: "billing@harp.io",
    status: "Sent",
    type: "Invoice",
    environment: "Production",
    sentAt: "2025-06-26 14:00",
    opened: true,
    clicked: true,
    messageId: "msg_004",
    domain: "harp.io",
  },
  {
    subject: "Important System Notification",
    recipient: "admin@company.org",
    sender: "alerts@harp.io",
    status: "Failed",
    type: "System Alert",
    environment: "Production",
    sentAt: "2025-06-25 22:50",
    opened: false,
    clicked: false,
    messageId: "msg_005",
    domain: "harp.io",
  }, {
    subject: "Welcome to Harp Messaging!",
    recipient: "jane.doe@example.com",
    sender: "noreply@harp.io",
    status: "Sent",
    type: "Welcome Email",
    environment: "Production",
    sentAt: "2025-06-28 10:05",
    opened: true,
    clicked: false,
    messageId: "msg_001",
    domain: "harp.io",
  },
  {
    subject: "Password Reset Request",
    recipient: "john.smith@mail.com",
    sender: "support@harp.io",
    status: "Opened",
    type: "Password Reset",
    environment: "Production",
    sentAt: "2025-06-28 09:45",
    opened: true,
    clicked: true,
    messageId: "msg_002",
    domain: "harp.io",
  },
  {
    subject: "Verify Your Email Address",
    recipient: "user123@clientmail.com",
    sender: "noreply@harp.io",
    status: "Bounced",
    type: "Verification",
    environment: "Staging",
    sentAt: "2025-06-27 18:20",
    opened: false,
    clicked: false,
    messageId: "msg_003",
    domain: "sandbox.harpmail.org",
  },
  {
    subject: "Invoice #45678",
    recipient: "billing@company.org",
    sender: "billing@harp.io",
    status: "Sent",
    type: "Invoice",
    environment: "Production",
    sentAt: "2025-06-26 14:00",
    opened: true,
    clicked: true,
    messageId: "msg_004",
    domain: "harp.io",
  },
  {
    subject: "Important System Notification",
    recipient: "admin@company.org",
    sender: "alerts@harp.io",
    status: "Failed",
    type: "System Alert",
    environment: "Production",
    sentAt: "2025-06-25 22:50",
    opened: false,
    clicked: false,
    messageId: "msg_005",
    domain: "harp.io",
  }, {
    subject: "Welcome to Harp Messaging!",
    recipient: "jane.doe@example.com",
    sender: "noreply@harp.io",
    status: "Sent",
    type: "Welcome Email",
    environment: "Production",
    sentAt: "2025-06-28 10:05",
    opened: true,
    clicked: false,
    messageId: "msg_001",
    domain: "harp.io",
  },
  {
    subject: "Password Reset Request",
    recipient: "john.smith@mail.com",
    sender: "support@harp.io",
    status: "Opened",
    type: "Password Reset",
    environment: "Production",
    sentAt: "2025-06-28 09:45",
    opened: true,
    clicked: true,
    messageId: "msg_002",
    domain: "harp.io",
  },
  {
    subject: "Verify Your Email Address",
    recipient: "user123@clientmail.com",
    sender: "noreply@harp.io",
    status: "Bounced",
    type: "Verification",
    environment: "Staging",
    sentAt: "2025-06-27 18:20",
    opened: false,
    clicked: false,
    messageId: "msg_003",
    domain: "sandbox.harpmail.org",
  },
  {
    subject: "Invoice #45678",
    recipient: "billing@company.org",
    sender: "billing@harp.io",
    status: "Sent",
    type: "Invoice",
    environment: "Production",
    sentAt: "2025-06-26 14:00",
    opened: true,
    clicked: true,
    messageId: "msg_004",
    domain: "harp.io",
  },
  {
    subject: "Important System Notification",
    recipient: "admin@company.org",
    sender: "alerts@harp.io",
    status: "Failed",
    type: "System Alert",
    environment: "Production",
    sentAt: "2025-06-25 22:50",
    opened: false,
    clicked: false,
    messageId: "msg_005",
    domain: "harp.io",
  }, {
    subject: "Welcome to Harp Messaging!",
    recipient: "jane.doe@example.com",
    sender: "noreply@harp.io",
    status: "Sent",
    type: "Welcome Email",
    environment: "Production",
    sentAt: "2025-06-28 10:05",
    opened: true,
    clicked: false,
    messageId: "msg_001",
    domain: "harp.io",
  },
  {
    subject: "Password Reset Request",
    recipient: "john.smith@mail.com",
    sender: "support@harp.io",
    status: "Opened",
    type: "Password Reset",
    environment: "Production",
    sentAt: "2025-06-28 09:45",
    opened: true,
    clicked: true,
    messageId: "msg_002",
    domain: "harp.io",
  },
  {
    subject: "Verify Your Email Address",
    recipient: "user123@clientmail.com",
    sender: "noreply@harp.io",
    status: "Bounced",
    type: "Verification",
    environment: "Staging",
    sentAt: "2025-06-27 18:20",
    opened: false,
    clicked: false,
    messageId: "msg_003",
    domain: "sandbox.harpmail.org",
  },
  {
    subject: "Invoice #45678",
    recipient: "billing@company.org",
    sender: "billing@harp.io",
    status: "Sent",
    type: "Invoice",
    environment: "Production",
    sentAt: "2025-06-26 14:00",
    opened: true,
    clicked: true,
    messageId: "msg_004",
    domain: "harp.io",
  },
  {
    subject: "Important System Notification",
    recipient: "admin@company.org",
    sender: "alerts@harp.io",
    status: "Failed",
    type: "System Alert",
    environment: "Production",
    sentAt: "2025-06-25 22:50",
    opened: false,
    clicked: false,
    messageId: "msg_005",
    domain: "harp.io",
  }, {
    subject: "Welcome to Harp Messaging!",
    recipient: "jane.doe@example.com",
    sender: "noreply@harp.io",
    status: "Sent",
    type: "Welcome Email",
    environment: "Production",
    sentAt: "2025-06-28 10:05",
    opened: true,
    clicked: false,
    messageId: "msg_001",
    domain: "harp.io",
  },
  {
    subject: "Password Reset Request",
    recipient: "john.smith@mail.com",
    sender: "support@harp.io",
    status: "Opened",
    type: "Password Reset",
    environment: "Production",
    sentAt: "2025-06-28 09:45",
    opened: true,
    clicked: true,
    messageId: "msg_002",
    domain: "harp.io",
  },
  {
    subject: "Verify Your Email Address",
    recipient: "user123@clientmail.com",
    sender: "noreply@harp.io",
    status: "Bounced",
    type: "Verification",
    environment: "Staging",
    sentAt: "2025-06-27 18:20",
    opened: false,
    clicked: false,
    messageId: "msg_003",
    domain: "sandbox.harpmail.org",
  },
  {
    subject: "Invoice #45678",
    recipient: "billing@company.org",
    sender: "billing@harp.io",
    status: "Sent",
    type: "Invoice",
    environment: "Production",
    sentAt: "2025-06-26 14:00",
    opened: true,
    clicked: true,
    messageId: "msg_004",
    domain: "harp.io",
  },
  {
    subject: "Important System Notification",
    recipient: "admin@company.org",
    sender: "alerts@harp.io",
    status: "Failed",
    type: "System Alert",
    environment: "Production",
    sentAt: "2025-06-25 22:50",
    opened: false,
    clicked: false,
    messageId: "msg_005",
    domain: "harp.io",
  },
];

export const domainTableData = [
  {
    id: randomId(),
    domain: "harp.io",
    verified: "Verified",
    spf: "Pass",
    dkim: "Fail",
    addedOn: "2025-06-25",
    lastUsed: "2025-06-28 10:30",
    actions: ["Edit", "Logs"]
  },
  {
    id: randomId(),
    domain: "sandbox.harpmail.org",
    verified: "Pending",
    spf: "Pass",
    dkim: "Pass",
    addedOn: "2025-06-20",
    lastUsed: "N/A",
    actions: ["Verify", "Delete"]
  },
  {
    id: randomId(),
    domain: "mail.harpexample.com",
    verified: "Verified",
    spf: "Pass",
    dkim: "Pass",
    addedOn: "2025-05-12",
    lastUsed: "2025-06-27 16:42",
    actions: ["Edit", "Logs"]
  },
  {
    id: randomId(),
    domain: "test.harplabs.net",
    verified: "Unverified",
    spf: "Fail",
    dkim: "Fail",
    addedOn: "2025-04-30",
    lastUsed: "N/A",
    actions: ["Verify", "Delete"]
  }
];

export interface domainProps {
  id: string,
  domain: string,
  verified: string,
  spf: string,
  dkim: string,
  addedOn: string,
  lastUsed: string,
  actions: string[]
}

// export interface TemplateProps {
//   id: string,
//   name: string,
//   subject: string,
//   category: string,
//   createdBy: string,
//   createdAt: string,
//   lastEdited: string,
//   status: string,
//   usageCount: number,
//   tags: string[],
//   content: string,
// }
export const emailTemplates = [
  {
    id: "temp_001",
    name: "Welcome Email",
    subject: "Welcome to Harp, {{user.firstName}}!",
    category: "User Onboarding",
    createdBy: "Pelz",
    createdAt: "2024-07-20T09:45:00Z",
    lastEdited: "2024-07-28T13:20:00Z",
    status: "active",
    usageCount: 148,
    tags: ["welcome", "onboarding", "new user"],
    content: `
      <h1>Welcome to Harp, {{user.firstName}}!</h1>
      <p>We’re excited to have you. Explore our platform and start sending notifications right away.</p>
    `,
  },
  {
    id: "temp_002",
    name: "Password Reset",
    subject: "Reset your password",
    category: "Security",
    createdBy: "Pelz",
    createdAt: "2024-07-15T12:00:00Z",
    lastEdited: "2024-07-25T10:10:00Z",
    status: "active",
    usageCount: 89,
    tags: ["password", "security", "user"],
    content: `
      <p>Hello {{user.firstName}},</p>
      <p>You requested a password reset. Click the link below to proceed:</p>
      <a href="{{resetLink}}">Reset Password</a>
    `,
  },
  {
    id: "temp_003",
    name: "Monthly Summary",
    subject: "Here’s your monthly report, {{user.firstName}}",
    category: "Reports",
    createdBy: "Pelz",
    createdAt: "2024-07-01T10:10:00Z",
    lastEdited: "2024-07-26T16:45:00Z",
    status: "draft",
    usageCount: 27,
    tags: ["report", "monthly", "summary"],
    content: `
      <h2>Monthly Summary</h2>
      <p>Hi {{user.firstName}}, here’s a breakdown of your usage this month.</p>
      <ul>
        <li>Emails sent: {{stats.emails}}</li>
        <li>Open rate: {{stats.openRate}}%</li>
      </ul>
    `,
  },
];