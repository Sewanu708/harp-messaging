import { newEmailData } from "@/data"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const {id} = await params
  const mail = newEmailData.find(d => d.messageId === id)

  if (!mail) {
    return NextResponse.json({ error: 'Mail not found' }, { status: 404 })
  }

  return NextResponse.json(mail)
}
