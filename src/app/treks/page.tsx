"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrekCard } from "@/components/TrekCard";
import { TREKS } from "@/lib/db";
import { Mountain, Search, Filter, HelpCircle } from "lucide-react";

export default function TreksPage() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [season, setSeason] = useState("All");

  // Get unique seasons
  const seasons = ["All", "Winter", "Spring", "Summer", "Monsoon", "Autumn"];

  // Filtering Logic
  const filteredTreks = TREKS.filter((trek) => {
    const matchesSearch = trek.title.toLowerCase().includes(search.toLowerCase()) || 
                          trek.description.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty = difficulty === "All" || trek.difficulty === difficulty || 
                              (difficulty === "Moderate" && trek.difficulty === "Easy to Moderate") ||
                              (difficulty === "Moderate" && trek.difficulty === "Moderate to Difficult");
    const matchesSeason = season === "All" || trek.season === season;

    return matchesSearch && matchesDifficulty && matchesSeason;
  });

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
              <Mountain className="h-4 w-4 text-primary" />
              Himalayan Expeditions
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              All Trekking Packages
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore Uttarakhand's highest peaks, frozen glacial lakes, and dense oak forests. Handpicked itineraries with certified safety and NIM-trained guides.
            </p>
          </div>

          {/* Search and Filters panel */}
          <div className="p-6 rounded-2xl border border-border bg-card shadow-sm mb-12 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
              <Filter className="h-4 w-4 text-primary" /> Filter Expeditions
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Bar */}
              <div className="md:col-span-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                  <Search className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search by trek name, key highlights..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
                />
              </div>

              {/* Difficulty Dropdown */}
              <div>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all cursor-pointer"
                >
                  <option value="All">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Difficult">Difficult</option>
                </select>
              </div>

              {/* Season Dropdown */}
              <div>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all cursor-pointer"
                >
                  <option value="All">All Seasons</option>
                  {seasons.filter(s => s !== "All").map((seas) => (
                    <option key={seas} value={seas}>
                      {seas}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Treks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredTreks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>

          {/* Empty State */}
          {filteredTreks.length === 0 && (
            <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-card">
              <Mountain className="h-12 w-12 text-muted-foreground/45 mx-auto mb-3 animate-pulse" />
              <p className="text-sm font-semibold text-foreground">No expedition packages found.</p>
              <p className="text-xs text-muted-foreground mt-1">Try resetting the search terms or change filters.</p>
            </div>
          )}

          {/* General FAQ Section */}
          <div className="mt-24 border-t border-border pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <HelpCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Expedition General FAQs</h2>
              <p className="text-xs text-muted-foreground">Essential safety instructions and guidelines for high-altitude trekking.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { q: "How do we handle Acute Mountain Sickness (AMS)?", a: "Our guides track oxygen levels twice daily. If AMS symptoms are observed, we administer acclimating drugs or descend the trekker immediately to base camp under helper guidance. Oxygen cylinders are always available on the trail." },
                { q: "What is the meeting coordinate in Dehradun?", a: "Unless specified, pick-ups are scheduled from Dehradun Railway Station or ISBT Bus Terminal at 6:30 AM on Day 1. Complete coordinator contact information is sent via SMS and email 48 hours prior." },
                { q: "What trekking gear can I rent at base camp?", a: "Sankri and other base stations have fully stocked equipment rental centers. You can easily rent premium trekking boots, high-quality fleece coats, ponchos, and double-support hiking poles at nominal charges." },
                { q: "Are dynamic permit registrations handled by you?", a: "Yes. Forest permissions, wildlife national park entrance slots, and eco-taxes are managed by Himalayan Warrior and are included in the package price. Trekkers only need to upload their ID proof." }
              ].map((faq, idx) => (
                <div key={idx} className="space-y-2 p-5 rounded-xl border border-border bg-card">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {faq.q}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-3">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
