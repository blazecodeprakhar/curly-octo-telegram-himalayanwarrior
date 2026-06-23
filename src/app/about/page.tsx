"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mountain, Shield, Users, Heart, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
              <Mountain className="h-4 w-4 text-primary" />
              Our Mission & Story
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
              About Himalayan Warrior
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are a dedicated collective of professional mountaineers, environmentalists, and local guides, bringing explorers closer to the pristine Uttarakhand peaks.
            </p>
          </div>

          {/* Intro Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Beyond Business: Cherishing & Preserving the Sacred Heights
              </h2>
              <blockquote className="border-l-4 border-primary pl-4 text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
                "Our mission is not only money making but to give better perspective about nature, save wildlife and awareness to preserve and cherish Himalayas so that our environmental heritage can be experienced in its purest form."
              </blockquote>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Himalayan Warrior was founded in Dehradun, Uttarakhand, as a safe, eco-responsible platform for high-altitude trekking. We realized that true adventure lies in respecting the heights. Whether scaling the 12,500 ft summit of Kedarkantha or crossing the challenging 15,250 ft Rupin Pass, we maintain the highest standards of safety, quality equipment, and community-first practices.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We hire locally, source fresh organic mountain grains from village farms, and train mountain youngsters as certified guides. When you walk with us, you are supporting Uttarakhand's fragile mountain economies directly.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-foreground">Zero-Waste Expeditions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-foreground">IMF/NIM Certified Leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-foreground">Community Tourism</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-foreground">Oxygen Cylinder Backups</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden border border-border shadow-md bg-muted">
              <ImageWithFallback
                src="/images/hero1.jpg"
                alt="Mountaineers climbing snowy peak"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Pillars Section */}
          <div className="border-t border-border pt-20 mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight mb-12">
              Our Pillars of Mountain Safety & Care
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Safety */}
              <div className="p-8 rounded-2xl border border-border bg-card space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-primary flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Uncompromising Safety</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High altitude demands respect. We maintain a 1:8 leader-to-trekker ratio. Our teams are equipped with medical-grade oxygen cylinders, oximeters, specialized rescue stretchers, and cold weather gear to counter AMS immediately.
                </p>
              </div>

              {/* Community */}
              <div className="p-8 rounded-2xl border border-border bg-card space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Sustainable Livelihoods</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We employ local villagers from base camps like Sankri, Lohajung, and Govindghat. By funding village wooden lodges and organic cooks, we secure livelihoods and keep mountain communities thriving.
                </p>
              </div>

              {/* Passion */}
              <div className="p-8 rounded-2xl border border-border bg-card space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Nature Conservation</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We educate our trekkers on wildlife preservation. Our groups participate in active garbage cleanups on trails, prohibit single-use plastics at campsites, and strictly enforce the Leave No Trace principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
