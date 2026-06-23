import fs from "fs";
import path from "path";
import { Booking, Inquiry } from "./db";

// JSON DB Persistence Config
const DB_FILE_PATH = path.join(process.cwd(), "src/data/db.json");

// Helper to initialize DB file
function ensureDbExists() {
  try {
    const dirPath = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE_PATH)) {
      fs.writeFileSync(
        DB_FILE_PATH,
        JSON.stringify({ bookings: [], inquiries: [] }, null, 2),
        "utf-8"
      );
    }
  } catch (e) {
    // Fail silently in environments with no FS access (like serverless or static export compilation)
  }
}

// Read database
export function readDb(): { bookings: Booking[]; inquiries: Inquiry[] } {
  try {
    ensureDbExists();
    if (fs.existsSync(DB_FILE_PATH)) {
      const data = fs.readFileSync(DB_FILE_PATH, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn("Could not read file-based database, returning empty simulation storage.");
  }
  return { bookings: [], inquiries: [] };
}

// Write database
export function writeDb(data: { bookings: Booking[]; inquiries: Inquiry[] }) {
  try {
    ensureDbExists();
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.warn("Could not write to file-based database.");
    return false;
  }
}

// DB Operations
export function getAllBookings(): Booking[] {
  return readDb().bookings;
}

export function addBooking(bookingData: Omit<Booking, "id" | "status" | "bookingDate" | "totalPrice">): Booking {
  const db = readDb();
  const newBooking: Booking = {
    ...bookingData,
    id: "HW-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    status: "Confirmed", // auto-confirm in this demo build
    bookingDate: new Date().toISOString(),
    totalPrice: bookingData.pricePerPerson * bookingData.guestsCount
  };
  
  db.bookings.push(newBooking);
  writeDb(db);
  return newBooking;
}

export function getAllInquiries(): Inquiry[] {
  return readDb().inquiries;
}

export function addInquiry(inquiryData: Omit<Inquiry, "id" | "date">): Inquiry {
  const db = readDb();
  const newInquiry: Inquiry = {
    ...inquiryData,
    id: "HW-INQ-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toISOString()
  };

  db.inquiries.push(newInquiry);
  writeDb(db);
  return newInquiry;
}
