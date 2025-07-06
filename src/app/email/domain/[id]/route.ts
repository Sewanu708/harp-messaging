import { domainTableData } from "@/data"
import { NextResponse } from "next/server"

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = domainTableData.findIndex(domain => domain.id === params.id)

  if (index === -1) {
    return NextResponse.json({ error: "Email not found" }, { status: 404 })
  }

  domainTableData.splice(index, 1)

  return NextResponse.json({ message: "Email deleted successfully" }, { status: 200 })
}
