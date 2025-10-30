// src/components/Hero.jsx
"use client";
import React, { useState } from "react";

export default function Hero({ active = "girls" }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleJoin(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMsg("Please enter a valid email address.");
      return;
    }
    setMsg("Thanks! You're on the waitlist.");
  }

  const isBoy = active === "boys";
  const ctaColor = isBoy ? "#0047FF" : "#EB473D";

  return (
    <div className="relative">
      {/* background grid (kept) */}
      <div className=" absolute  pointer-events-none" />

      {/* color overlay when boy active */}
      {isBoy && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        />
      )}

      <div className="relative max-w-5xl mx-auto px-4 py-10 md:py-9 text-center">
        <h1 className="font-medium text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] leading-tight tracking-tight text-slate-900">
          Vently helps Girls express what's in<br /> their heart without sounding harsh or misunderstood.
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-[#474747] text-base font-light md:text-[18px]">
          Vently helps you transform your raw emotions into calm, clear messages so you can<br /> express what you mean, not just what you feel.
        </p>

        {/* EMAIL PILL */}
        <form onSubmit={handleJoin} className="mt-9 flex items-center justify-center">
          <label htmlFor="email" className="sr-only text-[#474747]">Enter Your Email Address</label>

          <div className="relative w-full max-w-[650px]">
            <div className="rounded-full border border-[#D5D5D5]">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setMsg(""); }}
                placeholder="Enter Your Email Address"
                aria-label="Email address"
                className="w-full rounded-full bg-transparent text-[12px] sm:text-[12px] md:text-[16px] placeholder-[#474747] text-black px-6 py-5 pr-40 focus:outline-none"
              />
            </div>

            {/* CTA button (color changes with theme) */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-3 rounded-full text-white px-2 md:px-4 py-2.5 text-base font-light shadow-md hover:brightness-95 transition"
              style={{ background: ctaColor }}
            >
              <span className="whitespace-nowrap text-[12px] md:text-[16px]">Join the Waitlist</span>
              <span aria-hidden="true">
                <img src="/button.svg" alt="" className="inline w-5 h-5" />
              </span>
            </button>
          </div>
        </form>

        {msg && <p className="mt-4 text-sm text-slate-700">{msg}</p>}
      </div>
    </div>
  );
}
