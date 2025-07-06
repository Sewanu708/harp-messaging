import { newEmailData } from "@/data";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                NextResponse.json(newEmailData)
            )
        }, 2000
        );
    }
    )
}



