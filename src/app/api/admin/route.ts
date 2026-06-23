import { NextResponse } from "next/server";
import { getAllBookings, getAllInquiries } from "@/lib/dbServer";

export async function GET() {
  try {
    const bookings = getAllBookings();
    const inquiries = getAllInquiries();
    return NextResponse.json({ bookings, inquiries });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Could not retrieve records", message: err.message },
      { status: 500 }
    );
  }
}
