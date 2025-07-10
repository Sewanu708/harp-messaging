import { MdOutlineNotifications } from 'react-icons/md';
import { FiMail } from "react-icons/fi";
import { RiMessage2Line } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { Api } from '@/app/settings/api/columns';
import { MdSend, MdOutlineError } from "react-icons/md";
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
];

export const domainTableData = [
  {
    id: '1',
    domain: "harp.io",
    verified: "Verified",
    spf: "Pass",
    dkim: "Fail",
    addedOn: "2025-06-25",
    lastUsed: "2025-06-28 10:30",
    actions: ["Edit", "Logs"]
  },
  {
    id: '2',
    domain: "sandbox.harpmail.org",
    verified: "Pending",
    spf: "Pass",
    dkim: "Pass",
    addedOn: "2025-06-20",
    lastUsed: "N/A",
    actions: ["Verify", "Delete"]
  },
  {
    id: '3',
    domain: "mail.harpexample.com",
    verified: "Verified",
    spf: "Pass",
    dkim: "Pass",
    addedOn: "2025-05-12",
    lastUsed: "2025-06-27 16:42",
    actions: ["Edit", "Logs"]
  },
  {
    id: '4',
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
export const emailCategories = [
  { value: "welcome", label: "Welcome" },
  { value: "onboarding", label: "Onboarding" },
  { value: "promotion", label: "Promotion" },
  { value: "newsletter", label: "Newsletter" },
  { value: "transactional", label: "Transactional" },
  { value: "reminder", label: "Reminder" },
  { value: "feedback", label: "Survey / Feedback" },
  { value: "reengagement", label: "Re-engagement" },
  { value: "abandoned-cart", label: "Abandoned Cart" },
  { value: "notification", label: "Alert / Notification" },
  { value: "event-invitation", label: "Event Invitation" },
  { value: "thank-you", label: "Thank You" },
  { value: "password-reset", label: "Password Reset" },
  { value: "account-update", label: "Account Update" }
];

export const emailTags = [
  { value: "important", label: "Important" },
  { value: "new-user", label: "New User" },
  { value: "automation", label: "Automation" },
  { value: "manual", label: "Manual" },
  { value: "marketing", label: "Marketing" },
  { value: "system", label: "System" },
  { value: "user-action", label: "User Action" },
  { value: "sale", label: "Sale" },
  { value: "announcement", label: "Announcement" },
  { value: "update", label: "Update" },
  { value: "feedback-request", label: "Feedback Request" },
  { value: "internal", label: "Internal" },
  { value: "external", label: "External" },
  { value: "test", label: "Test" },
  { value: "draft", label: "Draft" }
];


export const api: Api[] = [

];



export const webhookdata = [
  {
    id: '1',
    metadata: {
      delivered: "https://your-api.com/webhooks/delivered",
      opened: "https://your-api.com/webhooks/opened",
      clicked: '',
      bounced: '',
      complained: '',
      unsubscribed: '',
    }
  },
  {
    id: '2',
    metadata: {
      delivered: "https://your-api.com/webhooks/delivered",
      opened: "",
      clicked: 'https://your-api.com/webhooks/clicked',
      bounced: '',
      complained: '',
      unsubscribed: 'https://your-api.com/webhooks/unsubscribed',
    }
  },
  {
    id: '3',
    metadata: {
      delivered: "https://your-api.com/webhooks/delivered",
      opened: "",
      clicked: 'https://your-api.com/webhooks/clicked',
      bounced: '',
      complained: '',
      unsubscribed: 'https://your-api.com/webhooks/unsubscribed',
    }
  },
  {
    id: '4',
    metadata: {
      delivered: "https://your-api.com/webhooks/delivered",
      opened: "",
      clicked: 'https://your-api.com/webhooks/clicked',
      bounced: '',
      complained: '',
      unsubscribed: 'https://your-api.com/webhooks/unsubscribed',
    }
  }
];



export interface WebhookProps {
  id: string,
  event: string,
  url: string,
}


export const Webhooks = [{
  id: '1',
  event: 'delivered',
  url: '',
}, {
  id: '2',
  event: 'opened',
  url: '',
}, {
  id: '3',
  event: 'clicked',
  url: '',
}, {
  id: '4',
  event: 'bounced',
  url: '',
}, {
  id: '5',
  event: 'complained',
  url: '',
}, {
  id: '6',
  event: 'unsubscribed',
  url: '',
}]

export interface AuthenticationRecordsProps {
  id: string,
  domainId: string,
  type: string,
  name: string,
  value: string,
  status: string

}

export interface TrackingRecordsProps {
  id: string,
  domainId: string,
  type: string,
  name: string,
  value: string,
  status: string,
  purpose: string,

}

export interface ReceivingRecordssProps {
  id: string,
  domainId: string,
  type: string,
  name: string,
  value: string,
  priority: number,
  status: string,

}
export const authenticationRecords = [
  {
    id: "auth_01",
    domainId: "domain001",
    type: "SPF",
    name: "mg.example.com",
    value: "v=spf1 include:mailgun.org ~all",
    status: "Unverified",
  },
  {
    id: "auth_02",
    domainId: "domain001",
    type: "DKIM",
    name: "krs._domainkey.mg.example.com",
    value: "k=rsa; p=MIIBIjANBgkq...",
    status: "Unverified",
  },
  {
    id: "auth_03",
    domainId: "domain001",
    type: "DMARC",
    name: "_dmarc.mg.example.com",
    value: "v=DMARC1; p=none; rua=mailto:dmarc@example.com",
    status: "Unverified",
  }
];

export const trackingRecords = [
  {
    id: "track_01",
    domainId: "domain001",
    type: "CNAME",
    name: "email.mg.example.com",
    value: "mailgun.org",
    status: "Verified",
    purpose: "Click Tracking",
  },
  {
    id: "track_02",
    domainId: "domain001",
    type: "CNAME",
    name: "open.mg.example.com",
    value: "mailgun.org",
    status: "Verified",
    purpose: "Open Tracking",
  }
];
export interface RecordProps {
  id: string,
  domainId: string,
  type: string,
  name: string,
  value: string,
  status: string,
  purpose?: string,
  priority?: number
}

export const receivingRecords = [
  {
    id: "recv_01",
    domainId: "domain001",
    type: "MX",
    name: "mg.example.com",
    value: "mxa.mailgun.org",
    priority: 10,
    status: "Pending",
  },
  {
    id: "recv_02",
    domainId: "domain001",
    type: "MX",
    name: "mg.example.com",
    value: "mxb.mailgun.org",
    priority: 10,
    status: "Pending",
  }
];



export const kpiData = [
    {
        number: 1200,
        percentage: 100,
        Icon: FiMail,
        metric: "Total Email",
    },
    {
        number: 950,
        percentage: 79,
        Icon: MdSend ,
        metric: "Total Email Sent",
    },
    {
        number: 50,
        percentage: 4,
        Icon: MdOutlineError ,
        metric: "Total Bounce",
    }, {
        number: 50,
        percentage: 4,
        Icon: MdOutlineError,
        metric: "Total Bounce",
    },
];
export const chartData = [
    { month: "January", data: 186, },
    { month: "February", data: 305, },
    { month: "March", data: 237, },
    { month: "April", data: 73, },
    { month: "May", data: 209, },
    { month: "June", data: 214, },
]

export const pieData = [
    {
        name: 'Delivered', value: 400, color: '#f5f5f5'
    }, {
        name: 'Opened', value: 280, color: '#0F6C68'
    }
]


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