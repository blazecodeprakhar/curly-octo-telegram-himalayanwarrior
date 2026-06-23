import { NextResponse } from "next/server";
import { addBooking } from "@/lib/dbServer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { trekId, trekTitle, pricePerPerson, trekDate, fullname, email, phone, guestsCount } = body;
    if (!trekId || !trekTitle || !pricePerPerson || !trekDate || !fullname || !email || !phone || !guestsCount) {
      return NextResponse.json(
        { error: "Missing required booking details" },
        { status: 400 }
      );
    }

    const booking = addBooking({
      trekId,
      trekTitle,
      pricePerPerson: Number(pricePerPerson),
      trekDate,
      fullname,
      email,
      phone,
      guestsCount: Number(guestsCount),
      aadhaarFileName: body.aadhaarFileName,
      healthFileName: body.healthFileName,
    });

    return NextResponse.json({ success: true, booking });
  } catch (err: any) {
    console.error("Booking API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error", message: err.message },
      { status: 500 }
    );
  }
}
