"use client";
import React from "react";
import { Inter_Tight } from "next/font/google";
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
export default function TopTicker({ active = "girls" }) {
  const items = [
    "Speak with Clarity, Not Chaos",
    "Say It Right, Even When You're Not Feeling Right",
    "Your Emotion Filter for Every Conversation",
    "Be the First to Try the Future of Emotionally Smart Chat",
  ];
  const bgColor = active === "boys" ? "#0047FF" : "#EB473D";
  return (
    <div className="w-full text-white text-sm overflow-hidden" style={{ background: bgColor }}>
      <div className="flex whitespace-nowrap py-[11px] md:py-[17px]">
        <div className="flex gap-8 px-4 animate-marquee">
          {items.map((it, idx) => (
            <div key={idx} className={`${interTight.className} flex font-light items-center gap-6 shrink-0`}>
              <span className="text-[18px]">✦</span>
              <span>{it}</span>
            </div>
          ))}

          {items.map((it, idx) => (
            <div key={`dup-${idx}`} className={`${interTight.className} flex font-light items-center gap-6 shrink-0`}>
              <span className="text-[18px]">✦</span>
              <span>{it}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
