"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "@/components/ImageWithFallback";

type GalleryItem = {
  id: number;
  title: string;
  category: "Summits" | "Passes" | "Lakes";
  image: string;
  location: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Kedarkantha Snowy Summit climb",
    category: "Summits",
    image: "/images/treks/kedarkantha.jpg",
    location: "Kedarkantha Peak, Uttarkashi"
  },
  {
    id: 2,
    title: "Crossing the Rupin Pass Gullies",
    category: "Passes",
    image: "/images/treks/bali-pass.jpg",
    location: "Rupin Pass, Uttarakhand"
  },
  {
    id: 3,
    title: "Brahmatal Frozen Lake Shore",
    category: "Lakes",
    image: "/images/treks/brahmatal.jpg",
    location: "Brahmatal Lake, Chamoli"
  },
  {
    id: 4,
    title: "Har Ki Dun Autumn Canopy walk",
    category: "Summits",
    image: "/images/treks/har-ki-dun.jpg",
    location: "Har Ki Dun Valley, Garhwal"
  },
  {
    id: 5,
    title: "Juda Ka Talab Snow Camp",
    category: "Lakes",
    image: "/images/treks/kedarkantha.jpg",
    location: "Juda Ka Talab Campsite"
  },
  {
    id: 6,
    title: "Valley of Flowers Monsoon Bloom",
    category: "Passes",
    image: "/images/treks/dayara-bugyal.jpg",
    location: "Valley of Flowers Biosphere"
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredItems = filter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx === 0 ? filteredItems.length - 1 : selectedIdx - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx === filteredItems.length - 1 ? 0 : selectedIdx + 1);
  };

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              Visual Stories
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Media Gallery
            </h1>
            <p className="text-sm text-muted-foreground">
              A curated collection of nature captures, summits, high-altitude camps, and trail snapshots.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {["All", "Summits", "Passes", "Lakes"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setSelectedIdx(null);
                }}
                className={`px-4.5 py-1.5 rounded-full text-xs font-bold tracking-wide border transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-card border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSelectedIdx(idx)}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-64 w-full overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80" />
                </div>

                {/* Caption Details */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-md mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-base font-extrabold truncate">{item.title}</h3>
                  <p className="text-[10px] text-gray-300 mt-0.5">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox Dialog Overlay */}
          <AnimatePresence>
            {selectedIdx !== null && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                onClick={() => setSelectedIdx(null)}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 sm:left-8 p-3 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Image & Caption block */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="max-w-4xl w-full flex flex-col items-center justify-center gap-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ImageWithFallback
                    src={filteredItems[selectedIdx].image}
                    alt={filteredItems[selectedIdx].title}
                    width={800}
                    height={600}
                    className="max-h-[70vh] rounded-xl object-contain max-w-full shadow-2xl border border-slate-800"
                  />
                  <div className="text-center text-white space-y-1">
                    <h3 className="text-lg font-black tracking-tight">{filteredItems[selectedIdx].title}</h3>
                    <p className="text-xs text-gray-400">{filteredItems[selectedIdx].location} • {filteredItems[selectedIdx].category}</p>
                  </div>
                </motion.div>

                {/* Right navigation */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 sm:right-8 p-3 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </>
  );
}
