"use client";
import React from "react";
export default function Showcase({ active = "girls" }) {
  const src = active === "boys" ? "/BoyShowcase.svg" : "/Showcase.svg";
  return (
    <div className="max-w-7xl mx-auto px-4 flex justify-center items-center mt-4">
      <img
        src={src}
        alt="App showcase"
        className="w-full h-auto max-w-6xl object-contain rounded-2xl"
      />
    </div>
  );
}
