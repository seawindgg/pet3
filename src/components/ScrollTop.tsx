"use client";

import { useState, useEffect } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white shadow-[0_4px_15px_rgba(255,107,107,0.4)] hover:bg-[#e55a5a] hover:-translate-y-0.5 transition-all z-50 flex items-center justify-center text-xl border-none cursor-pointer"
    >
      ↑
    </button>
  );
}