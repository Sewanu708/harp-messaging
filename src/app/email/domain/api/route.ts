import { domainTableData } from "@/data"
import { NextResponse } from "next/server"

export async function GET():Promise<NextResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                NextResponse.json(domainTableData)
            )
        },2000)
    })
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = domainTableData.findIndex(domain => domain.id === params.id)

  if (index === -1) {
    return NextResponse.json({ error: "Domain not found" }, { status: 404 })
  }

  domainTableData.splice(index, 1)

  return NextResponse.json({ message: "Domain deleted successfully" }, { status: 200 })
}
