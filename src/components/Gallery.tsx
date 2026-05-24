"use client";

import { useState, useEffect } from "react";

const slides = [
  { image: "/images/bathing.png", title: "💧 洗浴区", desc: "专业洗浴设备，温和清洁" },
  { image: "/images/styling.png", title: "✂️ 美容区", desc: "时尚造型设计，个性定制" },
  { image: "/images/reception.png", title: "🛋️ 等候区", desc: "舒适休息环境，安心等待" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const move = (dir: number) => setCurrent((prev) => (prev + dir + slides.length) % slides.length);

  return (
    <section className="bg-[#F7F7F7] py-24 px-8" id="gallery">
      <div className="text-center mb-16">
        <span className="inline-block bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(78,205,196,0.1)] text-primary px-5 py-1.5 rounded-full text-sm font-semibold mb-4">📸 环境展示</span>
        <h2 className="text-4xl font-extrabold mb-4">我们的工作环境</h2>
        <p className="text-gray text-lg max-w-xl mx-auto">干净整洁的专业空间，让毛孩子安心享受服务</p>
      </div>
      <div className="max-w-5xl mx-auto relative">
        <div className="overflow-hidden rounded-3xl">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full">
                <img src={slide.image} alt={slide.title} className="w-full h-[500px] object-cover" />
                <div className="bg-white p-6 text-center">
                  <h3 className="text-xl font-bold">{slide.title}</h3>
                  <p className="text-gray mt-1">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 border-none cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all z-10 flex items-center justify-center hover:bg-white hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)] hover:scale-110 left-[-25px] md:left-2.5" onClick={() => move(-1)}>‹</button>
        <button className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 border-none cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all z-10 flex items-center justify-center hover:bg-white hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)] hover:scale-110 right-[-25px] md:right-2.5" onClick={() => move(1)}>›</button>
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, i) => (
            <button key={i} className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all ${i === current ? "bg-primary scale-125" : "bg-[#ECF0F1]"}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          {slides.map((slide, i) => (
            <button key={i} className={`px-5 py-2 rounded-full border-2 cursor-pointer transition-all text-sm font-semibold ${i === current ? "border-primary text-primary bg-[rgba(255,107,107,0.05)]" : "border-[#ECF0F1] text-gray"}`} onClick={() => goTo(i)}>{slide.title}</button>
          ))}
        </div>
      </div>
    </section>
  );
}