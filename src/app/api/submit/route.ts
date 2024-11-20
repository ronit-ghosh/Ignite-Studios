import prisma from "@/config/db.config";
import { dataSchema } from "@/config/zod";
import { NextRequest, NextResponse } from "next/server";

interface Data {
    firstName: string;
    lastName: string;
    email: string;
}

export async function POST(req: NextRequest) {
    const body: Data = await req.json();
    const parsedValue = dataSchema.safeParse({ firstName: body.firstName, lastName: body.lastName, email: body.email });
    if (!parsedValue.success) {
        return NextResponse.json({ msg: parsedValue.error.issues[0].message }, { status: 401 }); 
    }
    try {
        const existingData = await prisma.clientData.findMany({ where: { email: body.email, firstName: body.firstName, lastName: body.lastName } });
        if (existingData){
            return NextResponse.json({ message: "You Already Contacted Us, We'll Reach to You as Soon as Possible 💖!" }, { status: 401 });
        }
        const alldata = await prisma.clientData.create({
            data: {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email
            }
        })
        return NextResponse.json({ message: "Thank You for Contacting Us 💖", alldata });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something Went Wrong 😭! Please Try Again 😅" }, { status: 401 });
    }
}
