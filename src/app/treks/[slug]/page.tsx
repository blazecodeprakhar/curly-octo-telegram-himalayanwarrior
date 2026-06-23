import React from "react";
import { TREKS } from "@/lib/db";
import TrekDetailPageClient from "@/components/TrekDetailPageClient";
import { Metadata } from "next";

// Pre-render static paths during output export compilation
export function generateStaticParams() {
  return TREKS.map((trek) => ({
    slug: trek.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

// Custom dynamic page SEO tags
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const trek = TREKS.find((t) => t.slug === slug);
  
  if (!trek) return { title: "Trek Packages | Himalayan Warrior" };

  return {
    title: `${trek.title} | Himalayan Warrior`,
    description: trek.subtitle,
    keywords: [trek.title, trek.location, "Himalayan trek", "trek registration", "trek safety"],
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const trek = TREKS.find((t) => t.slug === slug) || null;

  return <TrekDetailPageClient trek={trek} />;
}
