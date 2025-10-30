// src/components/Footer.jsx
"use client";
import React, { useState } from "react";

export default function Footer({ active = "girls" }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const isBoy = active === "boys";

  function handleJoin(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMsg("Enter a valid email.");
      return;
    }
    setMsg("Joined the waitlist — thanks!");
  }

  const bg = isBoy ? "#0047FF" : "#EB473D";
  const buttonBg = isBoy ? "#002FBB" : "#ffffff"; // darker blue for contrast when boy; white for girl
  const buttonText = isBoy ? "#ffffff" : "#000000";

  return (
    <footer className="text-white mt-16" style={{ background: bg }}>
      <div className="max-w-[1420px] mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">
        {/* Left side: Logo + Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:w-1/2">
          <div className="w-[159px] md:-mt-3">
            <img src="/FooterLogo.svg" alt="logo" className="w-[159px] h-[73px]" />
          </div>
          <div className="text-[14px] md:text-[18px] max-w-[440px] font-light text-center md:text-left">
            Vently helps you rephrase your messages in real-time so your emotions are expressed clearly, not harshly.
          </div>
        </div>

        {/* Right side: Email form */}
        <form
          onSubmit={handleJoin}
          className="flex justify-center md:justify-end w-full md:w-1/2"
        >
          <label htmlFor="email" className="sr-only">
            Enter Your Email Address
          </label>

          <div className="relative w-full max-w-[600px]">
            {/* Input border */}
            <div className="rounded-full border border-white/30 bg-transparent">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMsg("");
                }}
                placeholder="Enter Your Email Address"
                aria-label="Email address"
                className="w-full rounded-full bg-transparent text-[12px] sm:text-[12px] md:text-[16px] placeholder-white text-white px-6 py-4  md:pr-48 focus:outline-none"
              />
            </div>

            {/* Button inside the pill */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-3 bg-white text-black rounded-full px-2 md:px-4 py-2.5 text-base font-medium shadow-md hover:brightness-95 transition"
              
            >
              <span className="whitespace-nowrap text-[12px] md:text-[16px]">Join the Waitlist</span>
              <span aria-hidden="true">
                <img src="/Footerbutton.svg" alt="" className="inline w-5 h-5" />
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Section */}
      <div className="-mt-2 mb-[105px]">
        <div className="max-w-[1420px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-[14px] md:text-[18px] text-white/90">
          <div>© 2025 Vently. All rights reserved.</div>
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="opacity-60">|</span>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
