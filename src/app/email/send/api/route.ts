
import { NextRequest, NextResponse } from "next/server";
import { newEmailData } from "@/data";

            
function generateMessageId() {
  return "msg_" + Math.floor(Math.random() * 10000);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();

  return new Promise((resolve) => {
    setTimeout(() => {
      const newEmail = {
        subject: body.subject,
        recipient: body.to,
        sender: body.from,
        status: "Sent",
        type: "Custom",
        environment: "Production",
        sentAt: new Date().toISOString(),
        opened: false,
        clicked: false,
        messageId: generateMessageId(),
        domain: body.from.split("@")[1],
      };

      newEmailData.push(newEmail); 

      resolve(
        NextResponse.json({
          success: true,
          message: "Email sent!",
          data: newEmail,
        })
      );
    }, 2000); 
  });
}
