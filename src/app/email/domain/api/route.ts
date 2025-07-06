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
