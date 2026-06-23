"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Users, Mail, TrendingUp, Calendar, FileText, CheckCircle2, RefreshCw, Eye } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Dialog } from "@/components/ui/Dialog";

type Booking = {
  id: string;
  trekId: string;
  trekTitle: string;
  pricePerPerson: number;
  trekDate: string;
  fullname: string;
  email: string;
  phone: string;
  guestsCount: number;
  aadhaarFileName?: string;
  healthFileName?: string;
  createdAt: string;
};

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"bookings" | "inquiries">("bookings");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const fetchRecords = async () => {
    setLoading(true);
    let serverBookings: Booking[] = [];
    let serverInquiries: Inquiry[] = [];

    // 1. Try to fetch from server API
    try {
      const res = await fetch("/api/admin");
      if (res.ok) {
        const data = await res.json();
        serverBookings = data.bookings || [];
        serverInquiries = data.inquiries || [];
      }
    } catch (e) {
      console.warn("Could not load admin stats from server. Using local storage values.");
    }

    // 2. Fetch from local storage fallback
    let localBookings: Booking[] = [];
    let localInquiries: Inquiry[] = [];
    try {
      localBookings = JSON.parse(localStorage.getItem("himalayanwarrior_bookings") || "[]");
      localInquiries = JSON.parse(localStorage.getItem("himalayanwarrior_contacts") || "[]");
    } catch (e) {
      console.error(e);
    }

    // 3. Merge unique records by ID
    const mergedBookings = [...serverBookings];
    localBookings.forEach((lb) => {
      if (!mergedBookings.some((sb) => sb.id === lb.id)) {
        mergedBookings.push(lb);
      }
    });

    const mergedInquiries = [...serverInquiries];
    localInquiries.forEach((li) => {
      if (!mergedInquiries.some((si) => si.id === li.id)) {
        mergedInquiries.push(li);
      }
    });

    // Sort by creation date desc
    setBookings(mergedBookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    setInquiries(mergedInquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    setLoading(false);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const totalRevenue = bookings.reduce((sum, b) => sum + b.pricePerPerson * b.guestsCount, 0);
  const totalTrekkers = bookings.reduce((sum, b) => sum + b.guestsCount, 0);

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-secondary/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-primary" /> Admin Panel
              </span>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground mt-1">
                Expeditions Dashboard
              </h1>
            </div>
            <Button size="sm" onClick={fetchRecords} className="font-semibold flex items-center gap-1.5">
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh Data
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Stat 1 */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-2">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-bold uppercase tracking-wider">Total Bookings</span>
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <span className="block text-2xl font-black">{bookings.length} slots</span>
            </div>

            {/* Stat 2 */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-2">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-bold uppercase tracking-wider">Total Revenue</span>
                <TrendingUp className="h-5 w-5 text-emerald-500" />
              </div>
              <span className="block text-2xl font-black text-emerald-500">₹{totalRevenue}</span>
            </div>

            {/* Stat 3 */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-2">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-bold uppercase tracking-wider">Total Trekkers</span>
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <span className="block text-2xl font-black">{totalTrekkers} hikers</span>
            </div>

            {/* Stat 4 */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-2">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-bold uppercase tracking-wider">Inquiries Message</span>
                <Mail className="h-5 w-5 text-amber-500" />
              </div>
              <span className="block text-2xl font-black">{inquiries.length} queries</span>
            </div>
          </div>

          {/* Table Tabs */}
          <div className="flex border-b border-border gap-6 mb-8">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`text-sm font-bold uppercase tracking-wider pb-3 border-b-2 transition-all cursor-pointer ${
                activeTab === "bookings" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Bookings Registry ({bookings.length})
            </button>
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`text-sm font-bold uppercase tracking-wider pb-3 border-b-2 transition-all cursor-pointer ${
                activeTab === "inquiries" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Inquiries Contacts ({inquiries.length})
            </button>
          </div>

          {/* Table Container */}
          <div className="border border-border rounded-2xl bg-card overflow-hidden shadow-sm">
            {loading ? (
              <div className="py-20 text-center text-muted-foreground text-xs font-bold flex items-center justify-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin text-primary" /> Loading dashboard records...
              </div>
            ) : activeTab === "bookings" ? (
              bookings.length === 0 ? (
                <div className="py-20 text-center text-muted-foreground text-xs font-semibold">
                  No bookings found in the database.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-secondary/40 text-muted-foreground font-bold uppercase tracking-wider border-b border-border">
                      <tr>
                        <th className="p-4">Booking ID</th>
                        <th className="p-4">Trek Package</th>
                        <th className="p-4">Trek Date</th>
                        <th className="p-4">Lead Hiker</th>
                        <th className="p-4">Guests</th>
                        <th className="p-4">Total Price</th>
                        <th className="p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border font-medium text-foreground">
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-secondary/20 transition-colors">
                          <td className="p-4 font-bold text-primary">{booking.id}</td>
                          <td className="p-4">{booking.trekTitle}</td>
                          <td className="p-4">{booking.trekDate}</td>
                          <td className="p-4">{booking.fullname}</td>
                          <td className="p-4">{booking.guestsCount}</td>
                          <td className="p-4 font-bold">₹{booking.pricePerPerson * booking.guestsCount}</td>
                          <td className="p-4">
                            <button
                              onClick={() => setSelectedBooking(booking)}
                              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-bold cursor-pointer"
                            >
                              <Eye className="h-3.5 w-3.5" /> View Docs
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            ) : inquiries.length === 0 ? (
              <div className="py-20 text-center text-muted-foreground text-xs font-semibold">
                No inquiries found in the database.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-secondary/40 text-muted-foreground font-bold uppercase tracking-wider border-b border-border">
                    <tr>
                      <th className="p-4">Date</th>
                      <th className="p-4">Sender Name</th>
                      <th className="p-4">Contact Details</th>
                      <th className="p-4">Message Query</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border font-medium text-foreground">
                    {inquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-secondary/20 transition-colors">
                        <td className="p-4 text-muted-foreground whitespace-nowrap">
                          {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : "Pending"}
                        </td>
                        <td className="p-4 font-bold">{inq.name}</td>
                        <td className="p-4 space-y-0.5">
                          <span className="block">{inq.email}</span>
                          {inq.phone && <span className="block text-muted-foreground">{inq.phone}</span>}
                        </td>
                        <td className="p-4 text-muted-foreground max-w-sm leading-relaxed">{inq.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* View Booking Documents Dialog */}
      <Dialog
        isOpen={selectedBooking !== null}
        onClose={() => setSelectedBooking(null)}
        title={selectedBooking ? `Details for Booking ${selectedBooking.id}` : "Details"}
        size="md"
      >
        {selectedBooking && (
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4 border border-border p-4 rounded-xl bg-secondary/35 text-xs font-semibold">
              <div>
                <span className="text-muted-foreground block uppercase text-[10px]">Full Name</span>
                <span className="text-foreground text-sm font-bold">{selectedBooking.fullname}</span>
              </div>
              <div>
                <span className="text-muted-foreground block uppercase text-[10px]">Phone Number</span>
                <span className="text-foreground text-sm font-bold">{selectedBooking.phone}</span>
              </div>
              <div className="mt-2">
                <span className="text-muted-foreground block uppercase text-[10px]">Email Address</span>
                <span className="text-foreground">{selectedBooking.email}</span>
              </div>
              <div className="mt-2">
                <span className="text-muted-foreground block uppercase text-[10px]">Created Date</span>
                <span className="text-foreground">
                  {selectedBooking.createdAt ? new Date(selectedBooking.createdAt).toLocaleString() : "Now"}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Uploaded Documents</h4>
              
              <div className="flex flex-col gap-2">
                {/* Aadhaar */}
                <div className="p-3 border border-border rounded-xl bg-card flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <span className="text-xs font-bold block">Aadhaar Card Document</span>
                      <span className="text-[10px] text-muted-foreground">{selectedBooking.aadhaarFileName || "Uploaded_Aadhaar.pdf"}</span>
                    </div>
                  </div>
                  <Badge variant="success">Permit Ready</Badge>
                </div>

                {/* Health Cert */}
                <div className="p-3 border border-border rounded-xl bg-card flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <span className="text-xs font-bold block">Fitness Self-Declaration</span>
                      <span className="text-[10px] text-muted-foreground">{selectedBooking.healthFileName || "Uploaded_Health.pdf"}</span>
                    </div>
                  </div>
                  <Badge variant="success">Verified</Badge>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button size="sm" onClick={() => setSelectedBooking(null)}>Close details</Button>
            </div>
          </div>
        )}
      </Dialog>

      <Footer />
    </>
  );
}
