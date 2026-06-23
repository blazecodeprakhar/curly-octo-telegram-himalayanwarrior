"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Users, CheckCircle2, Trophy, ArrowRight, Shield, Award, Map, Calendar, ChevronRight, Star, Heart, Mountain } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { TrekCard } from "@/components/TrekCard";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { TREKS, BLOGS } from "@/lib/db";

export default function Home() {
  const [filterDifficulty, setFilterDifficulty] = useState<string>("All");

  const filteredTreks = filterDifficulty === "All"
    ? TREKS
    : TREKS.filter(t => t.difficulty.includes(filterDifficulty) || (filterDifficulty === "Moderate" && t.difficulty === "Easy to Moderate"));

  // Safe unique items matching filter
  const displayTreks = filterDifficulty === "All" 
    ? TREKS 
    : TREKS.filter(t => {
        if (filterDifficulty === "Easy") return t.difficulty === "Easy" || t.difficulty === "Easy to Moderate";
        if (filterDifficulty === "Moderate") return t.difficulty === "Moderate" || t.difficulty === "Moderate to Difficult";
        if (filterDifficulty === "Difficult") return t.difficulty === "Difficult";
        return true;
      });

  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden py-20 px-4">
          {/* Background Image with blur & dark overlay */}
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="/images/hero1.jpg"
              alt="Himalayan Mountain Peaks"
              width={1920}
              height={1080}
              className="w-full h-full object-cover opacity-60 scale-105 transform hover:scale-100 transition-transform duration-[10000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/80" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider"
            >
              <Mountain className="h-4 w-4 text-primary" />
              The Himalayan Trusted & Safest Trekking Organization
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-white"
            >
              Chasing Sunrises & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">
                Conquering Summits.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-medium"
            >
              Explore dramatic pine forests, high-altitude frozen lakes, and legendary mountain passes of the Himalayas under certified local guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
            >
              <Link href="/treks">
                <Button size="lg" className="font-extrabold group">
                  Explore Expedition Packages
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="font-bold text-white border-white/20 bg-transparent hover:bg-white/10">
                  Our Mission
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Curved separator */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#090a0f] to-transparent" />
        </section>

        {/* 2. Brand Impact & Trust Badging (Stats) */}
        <section className="py-12 border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-1">
                <span className="block text-3xl md:text-4xl font-black text-primary">10,000+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Trekkers Guided</span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl md:text-4xl font-black text-primary">25+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Alpine Trails</span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl md:text-4xl font-black text-primary">4.9/5</span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">User Reviews</span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl md:text-4xl font-black text-primary">100%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Safety Record</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Pillars (Why Choose Us) */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Why Himalayan Warrior
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Crafted for Adventure, Anchored in Safety
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trekking in the high Himalayas is an intense, life-changing experience. We ensure your comfort and safety every single step of the way.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Pillar 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="p-8 rounded-2xl border border-border bg-card space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Wilderness First Responders</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our guides are certified by IMF & Nehru Institute of Mountaineering. They carry medical oxygen, stretchers, pulse oximeters, and are trained in high-altitude sickness (AMS) rescue protocols.
                </p>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="p-8 rounded-2xl border border-border bg-card space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="Mountain Community First">Mountain Community Partners</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We empower Uttarakhand's remote base villages. By hiring local cooks, guides, and using native wooden homestays, over 65% of your booking fee directly funds local rural families.
                </p>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="p-8 rounded-2xl border border-border bg-card space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Strict Leave No Trace Policy</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We are passionately dedicated to preserving the pristine Himalayas. Our teams collect and bring back all plastic and organic waste from high-altitude camps for proper recycling.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 4. Featured Trek Packages */}
        <section className="py-20 bg-secondary/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  Featured Packages
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Iconic Himalayan Journeys
                </h2>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Choose from snowy winter summits, monsoon blossom valleys, and challenging high alpine passes.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {["All", "Easy", "Moderate", "Difficult"].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setFilterDifficulty(diff)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer border ${
                      filterDifficulty === diff
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-card border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Trek Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayTreks.slice(0, 6).map((trek) => (
                <TrekCard key={trek.id} trek={trek} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/treks">
                <Button size="lg" variant="outline" className="font-bold">
                  View All {TREKS.length} Trek Packages <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Expedition Flow
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Your Journey from City to Summit
              </h2>
              <p className="text-sm text-muted-foreground">
                Our modern booking system makes it secure and transparent to plan your high-altitude escape.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            >
              {[
                { step: "01", title: "Select Trek", desc: "Browse from easy snow walks to advanced crossover expeditions matching your fitness levels." },
                { step: "02", title: "Book Departure Slot", desc: "Select from scheduled batches and specify number of accompanying guests." },
                { step: "03", title: "Verify Credentials", desc: "Upload copy of Aadhaar Card and a self-declaration health certificate to clear forest permits." },
                { step: "04", title: "Assemble at Dehradun", desc: "Receive booking voucher, gear guide checklist, and assemble at pickup point." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 15 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  className="relative p-6 rounded-2xl bg-card border border-border group hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl font-black text-primary/10 group-hover:text-primary/25 transition-colors absolute top-4 right-4 leading-none">
                    {item.step}
                  </div>
                  <h3 className="text-base font-extrabold text-foreground mb-2 mt-4">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6. High-Quality Testimonials */}
        <section className="py-20 bg-secondary/20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Real Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Voted Safest Guides by Trekkers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Aarav Sharma", loc: "Delhi", review: "Kedarkantha was a dream come true! Walking through deep snow at Juda Ka Talab was magical. Himalayan Warrior's leaders made sure every beginner was warm, well-fed, and safe during the early morning summit climb.", stars: 5 },
                { name: "Meera Sen", loc: "Kolkata", review: "The Rupin Pass crossover was challenging, but the technical crew was top-notch. From anchoring safety ropes at the steep snow gully to hot soup at lower waterfall camp, everything was perfect.", stars: 5 },
                { name: "Amit Negi", loc: "Dehradun", review: "I trek regularly, but Himalayan Warrior's dedication to eco-tourism impressed me. We cleaned up plastic trash along the Har Ki Dun route. A great team with a conscience.", stars: 5 }
              ].map((test, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-sm">
                  <p className="text-xs leading-relaxed text-muted-foreground italic mb-6">
                    "{test.review}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {test.name[0]}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{test.name}</h4>
                      <span className="text-[10px] text-muted-foreground block">{test.loc}</span>
                      <div className="flex items-center gap-0.5 mt-1 text-amber-500">
                        {Array.from({ length: test.stars }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Highlights from Travel Blog */}
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  Travel Blogs
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Trek Guides & Planning Advice
                </h2>
              </div>
              <Link href="/blog">
                <Button variant="outline" size="sm" className="font-bold">
                  View All Articles <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOGS.map((blog) => (
                <div key={blog.id} className="group flex flex-col sm:flex-row rounded-2xl border border-border overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="sm:w-2/5 h-48 sm:h-auto relative bg-muted shrink-0">
                    <ImageWithFallback
                      src={blog.coverImage}
                      alt={blog.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    <Link href={`/blog/${blog.slug}`} className="mt-4 inline-flex items-center text-xs font-extrabold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider">
                      Read Story <ArrowRight className="h-3 w-3 ml-1.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Call to Action Banner */}
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-border">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="/images/hero2.jpg"
              alt="Himalayan Camping"
              width={1200}
              height={600}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Breathe the Crisp Mountain Air?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Book your slot with India's trusted alpine guides. Get certified forest permits, detailed gear checklists, and warm mountain homestays.
            </p>
            <div className="pt-4">
              <Link href="/treks">
                <Button size="lg" className="font-extrabold">
                  Book Your Himalayan Expedition
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
