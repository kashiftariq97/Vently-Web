// src/components/Header.jsx
"use client";
import React from "react";

export default function Header({ active, setActive }) {
  const girlColor = "#EB473D"; // red
  const boyColor = "#0047FF";  // blue

  return (
    <header className="pt-[42px]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mx-auto w-36 h-12 sm:w-40 sm:h-14 md:w-[212px] md:h-[99px]">
          <img
            src="/Logo.svg"
            alt="Vently logo"
            className="w-full h-full object-contain mx-auto"
          />
        </div>

        {/* Compact Gender Toggle */}
        <div className="mt-[41px] flex items-center justify-center">
          <div
            role="tablist"
            aria-label="Select audience"
            className="relative inline-flex items-center bg-slate-100 rounded-full"
            style={{ padding: "5px" }}
          >
            {/* Active sliding pill */}
            <div
              aria-hidden="true"
              className="absolute inset-y-1 left-1 rounded-full transition-transform duration-300 ease-out"
              style={{
                width: "calc(50% - 6px)",
                transform: active === "girls" ? "translateX(0%)" : "translateX(100%)",
                background: active === "girls" ? girlColor : boyColor,
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            />

            {/* Girls button */}
            <button
              role="tab"
              aria-pressed={active === "girls"}
              onClick={() => setActive("girls")}
              className="relative z-10 w-[110px] sm:w-[110px] md:w-[110px] px-2 py-1.5 rounded-full  text-[13px] md:text-[14px] font-light flex items-center justify-center gap-2 focus:outline-none transition-colors"
            >
              <span className={active === "girls" ? "text-white" : "text-[#606476]"}>
                For Girls
              </span>

              <span
                aria-hidden="true"
                className="text-base"
                style={{
                  color: active === "girls" ? "#ffffff" : girlColor,
                }}
              >
                ♀
              </span>
            </button>

            {/* Boys button */}
            <button
              role="tab"
              aria-pressed={active === "boys"}
              onClick={() => setActive("boys")}
              className="relative z-10 w-[110px] sm:w-[110px] md:w-[110px] px-2 py-1.5 rounded-full text-[14px] font-light flex items-center justify-center gap-2 focus:outline-none transition-colors"
            >
              <span className={active === "boys" ? "text-white" : "text-[#606476]"}>
                For Boys
              </span>

              <span 
                aria-hidden="true"
                className="text-base"
                style={{
                  color: active === "boys" ? "#ffffff" : boyColor,
                }}
              >
                ♂
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
