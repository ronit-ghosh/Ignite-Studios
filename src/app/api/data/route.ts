import prisma from "@/config/db.config";
import { NextResponse } from "next/server";

interface Data {
    firstName: string;
    lastName: string;
    email: string;
}

export async function GET() {
    try {
        const data: Data[] = await prisma.clientData.findMany()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ message: "Something Went Wrong 😭! Please Try Again Later 😅" })
    }
}
