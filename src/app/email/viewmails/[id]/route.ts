import { newEmailData } from "@/data"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const mail = newEmailData.find(d => d.messageId === params.id)

  if (!mail) {
    return NextResponse.json({ error: 'Mail not found' }, { status: 404 })
  }

  return NextResponse.json(mail)
}
