import { NextResponse } from "next/server";
import { addInquiry } from "@/lib/dbServer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const inquiry = addInquiry({
      name,
      email,
      phone: body.phone,
      message,
    });

    return NextResponse.json({ success: true, inquiry });
  } catch (err: any) {
    console.error("Inquiries API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error", message: err.message },
      { status: 500 }
    );
  }
}
