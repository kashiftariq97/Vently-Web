"use client";
import React, { useState } from "react";
import TopTicker from "../components/TopTicker";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
export default function HomePage() {
  const [active, setActive] = useState("girls");
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <section
        className="relative bg-white"
        style={{
          backgroundImage: "url('/Hero.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10">
          <TopTicker active={active} />
          <Header active={active} setActive={setActive} />
          <Hero active={active} />
        </div>
      </section>
      <main className="flex-1">
        <section className="mt-[21px] md:mt-[92px]">
          <Showcase active={active} />
        </section>
      </main>
      <Footer active={active} />
    </div>
  );
}
