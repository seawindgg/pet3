export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#FFF5F5] via-[#FFF0E6] to-[#F0FFF4] relative overflow-hidden pt-[70px]" id="home">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-[1]">
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">给毛孩子<br /><span className="text-primary">最温柔的</span>呵护</h1>
          <p className="text-lg text-gray mb-8 leading-relaxed">专业宠物洗护美容中心，让每一只毛孩子都能享受SPA级的护理体验。我们用心对待每一个小生命，让它们焕发光彩。</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-[14px] rounded-full text-base font-semibold no-underline transition-all duration-300 cursor-pointer border-none bg-primary text-white shadow-[0_4px_15px_rgba(255,107,107,0.4)] hover:bg-[#e55a5a] hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(255,107,107,0.5)]">📅 立即预约</a>
            <a href="#services" className="inline-flex items-center gap-2 px-8 py-[14px] rounded-full text-base font-semibold no-underline transition-all duration-300 cursor-pointer border-2 border-[#ECF0F1] hover:border-primary hover:text-primary hover:-translate-y-0.5">了解更多 →</a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-[450px] h-[450px] rounded-full bg-gradient-to-br from-primary to-secondary flex justify-center items-center animate-float">
            <span className="text-[10rem]">🐕</span>
            <div className="absolute top-5 -right-5 bg-white rounded-[20px] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center gap-2 font-semibold text-sm animate-float-badge">⭐<span>4.9 分好评</span></div>
            <div className="absolute bottom-10 -left-8 bg-white rounded-[20px] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center gap-2 font-semibold text-sm animate-float-badge" style={{animationDelay:"2s"}}>🏆<span>8年专业经验</span></div>
            <div className="absolute top-1/2 -right-12 bg-white rounded-[20px] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center gap-2 font-semibold text-sm animate-float-badge" style={{animationDelay:"1s"}}>💝<span>10000+ 服务</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}