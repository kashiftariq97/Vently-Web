"use client";
import React, { useState } from "react";
async function postToWaitlist(email) {
  const res = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
    cache: "no-store",
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json?.message || res.statusText || "Failed to join waitlist");
  return json;
}
export function useWaitlist() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", receipt: null, variant: "idle" });
  async function join(email) {
    if (loading) return;
    setStatus({ message: "", receipt: null, variant: "idle" });
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ message: "Please enter a valid email address.", receipt: null, variant: "error" });
      return;
    }
    try {
      setLoading(true);
      const data = await postToWaitlist(email.toLowerCase().trim());
      const receipt = data?.receipt ?? null;
      const message = data?.message ?? (receipt ? `Thanks — your confirmation id is ${receipt}.` : `Thanks! We've received your email.`);
      setStatus({ message, receipt, variant: "success" });
    } catch (err) {
      setStatus({ message: err?.message || "Something went wrong. Please try again.", receipt: null, variant: "error" });
    } finally {
      setLoading(false);
    }
  }
  return { loading, status, join, setStatus };
}
export default function Hero({ active = "girls" }) {
  const [email, setEmail] = useState("");
  const { loading, status, join, setStatus } = useWaitlist();
  async function handleJoin(e) {
    e.preventDefault();
    await join(email);
  }
  const isBoy = active === "boys";
  const ctaColor = isBoy ? "#0047FF" : "#EB473D";
  return (
    <div className="relative">
      <div className=" absolute  pointer-events-none" />
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
        <form onSubmit={handleJoin} className="mt-9 flex items-center justify-center" noValidate>
          <label htmlFor="email" className="sr-only text-[#474747]">Enter Your Email Address</label>
          <div className="relative w-full max-w-[650px]">
            <div className="rounded-full border border-[#D5D5D5]">
              <input
                id="hero-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status?.message) setStatus({ message: "", receipt: null, variant: "idle" });
                }}
                placeholder="Enter Your Email Address"
                aria-label="Email address"
                className="w-full rounded-full bg-transparent text-[12px] sm:text-[12px] md:text-[16px] placeholder-[#474747] text-black px-6 py-5 pr-40 focus:outline-none"
                required
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-3 rounded-full text-white px-2 md:px-4 py-2.5 text-base font-light shadow-md hover:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              style={{ background: ctaColor }}
              disabled={loading}
              aria-busy={loading}
            >
              <span className="whitespace-nowrap text-[12px] md:text-[16px]">{loading ? 'Joining...' : 'Join the Waitlist'}</span>
              <span aria-hidden="true">
                <img src="/button.svg" alt="" className="inline w-5 h-5" />
              </span>
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-slate-700" aria-live="polite">
          {status?.message}
        </p>
      </div>
    </div>
  );
}
