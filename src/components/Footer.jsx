"use client";
import React, { useState } from "react";
import { useWaitlist } from "./Hero"; // adjust path if Hero is in a different location

export default function Footer({ active = "girls" }) {
  const [email, setEmail] = useState("");
  const { loading, status, join, setStatus } = useWaitlist();
  const isBoy = active === "boys";

  async function handleJoin(e) {
    e.preventDefault();
    await join(email);
    // optional: clear input on success
    // if (status?.variant === "success") setEmail("");
  }

  const bg = isBoy ? "#0047FF" : "#EB473D";
  const buttonBg = isBoy ? "#ffffff" : "#ffffff"; // darker blue for contrast when boy; white for girl
  const buttonText = isBoy ? "#000000" : "#000000";

  return (
    <footer className="text-white mt-16" style={{ background: bg }}>
      <div className="max-w-[1420px] mx-auto px-6 py-10 lg:py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
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
          noValidate
        >
          <label htmlFor="footer-email" className="sr-only">
            Enter Your Email Address
          </label>

          <div className="relative w-full max-w-[600px]">
            {/* Input border */}
            <div className="rounded-full border border-white/30 bg-transparent">
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status?.message) setStatus({ message: "", receipt: null, variant: "idle" });
                }}
                placeholder="Enter Your Email Address"
                aria-label="Email address"
                className="w-full rounded-full bg-transparent text-[12px] sm:text-[12px] md:text-[16px] placeholder-white text-white px-6 py-4 md:pr-48 focus:outline-none"
                required
                aria-required="true"
              />
            </div>

            {/* Button inside the pill */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-3 rounded-full px-2 md:px-4 py-2.5 text-base font-medium shadow-md hover:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              style={{ background: buttonBg, color: buttonText }}
              disabled={loading}
              aria-busy={loading}
            >
              <span className="whitespace-nowrap text-[12px] md:text-[16px]">
                {loading ? "Joining..." : "Join the Waitlist"}
              </span>
              <span aria-hidden="true">
                <img src="/Footerbutton.svg" alt="" className="inline w-5 h-5" />
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* status / bottom */}
      <div className="-mt-2 mb-[105px]">
        <div className="max-w-[1420px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-[14px] md:text-[18px]">
          <div className="text-white/90">© 2025 Vently. All rights reserved.</div>

          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:underline text-white/90">Privacy Policy</a>
            <span className="opacity-60">|</span>
            <a href="#" className="hover:underline text-white/90">Terms & Conditions</a>
          </div>
        </div>

        {/* Inline status message under footer (uses the shared status so it's consistent with Hero) */}
        <div className="max-w-[1420px] mx-auto px-6 mt-3">
          <p
            className={`text-sm ${
              status?.variant === "error" ? "text-red-200" : "text-white/80"
            }`}
            aria-live="polite"
          >
            {status?.message}
          </p>
        </div>
      </div>
    </footer>
  );
}