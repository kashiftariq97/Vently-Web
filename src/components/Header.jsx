"use client";
import React from "react";
export default function Header({ active, setActive }) {
  const girlColor = "#EB473D"; 
  const boyColor = "#0047FF"; 
  return (
    <header className="pt-[42px]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mx-auto w-36 h-12 sm:w-40 sm:h-14 md:w-[212px] md:h-[99px]">
          <img
            src="/Logo.svg"
            alt="Vently logo"
            className="w-full h-full object-contain mx-auto"
          />
        </div>
        <div className="mt-[41px] flex items-center justify-center">
          <div
            role="tablist"
            aria-label="Select audience"
            className="relative inline-flex items-center bg-slate-100 rounded-full"
            style={{ padding: "5px" }}
          >
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
            <button
              role="tab"
              aria-pressed={active === "girls"}
              onClick={() => setActive("girls")}
              className="relative z-10 w-[110px] sm:w-[110px] md:w-[110px] px-2 py-1.5 rounded-full text-[13px] md:text-[14px] font-light flex items-center justify-center gap-2 focus:outline-none transition-colors"
            >
              <span className={active === "girls" ? "text-white" : "text-[#606476]"}>
                For Girls
              </span>
              <img
                src="/GirlButton.svg"
                alt=""
                aria-hidden="true"
                className="w-4 h-4 md:w-5 md:h-5"
                style={{
                  filter: active === "girls" ? "brightness(0) invert(1)" : "none",
                }}
              />
            </button>
            <button
              role="tab"
              aria-pressed={active === "boys"}
              onClick={() => setActive("boys")}
              className="relative z-10 w-[110px] sm:w-[110px] md:w-[110px] px-2 py-1.5 rounded-full text-[14px] font-light flex items-center justify-center gap-2 focus:outline-none transition-colors"
            >
              <span className={active === "boys" ? "text-white" : "text-[#606476]"}>
                For Boys
              </span>
              <img
                src="/BoyButton.svg"
                alt=""
                aria-hidden="true"
                className="w-4 h-4 md:w-5 md:h-5"
                style={{
                  filter: active === "boys" ? "brightness(0) invert(1)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
