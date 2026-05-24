export default function Pricing() {
  return (
    <section className="py-24 px-8" id="pricing">
      <div className="text-center mb-16">
        <span className="inline-block bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(78,205,196,0.1)] text-primary px-5 py-1.5 rounded-full text-sm font-semibold mb-4">💰 价格方案</span>
        <h2 className="text-4xl font-extrabold mb-4">选择适合你的套餐</h2>
        <p className="text-gray text-lg max-w-xl mx-auto">多种套餐组合，满足不同需求，让毛孩子享受更全面的呵护</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border-2 border-[#ECF0F1]">
          <div className="text-center mb-6"><div className="text-4xl mb-2">💧</div><h3 className="text-2xl font-bold">基础洗护</h3><div className="text-4xl font-extrabold text-primary mt-4">¥198</div><p className="text-gray mt-2">适合日常基础护理</p></div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3"><span className="text-secondary">✓</span> 基础洗护 × 2次</li><li className="flex items-center gap-3"><span className="text-secondary">✓</span> 梳毛 × 2次</li><li className="flex items-center gap-3"><span className="text-secondary">✓</span> 剪指甲 × 1次</li>
          </ul>
          <a href="#contact" className="block text-center py-3 rounded-full border-2 border-primary text-primary font-semibold no-underline hover:bg-primary hover:text-white transition-all">选择方案</a>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border-2 border-primary relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">🔥 最受欢迎</div>
          <div className="text-center mb-6"><div className="text-4xl mb-2">✨</div><h3 className="text-2xl font-bold">精致套餐</h3><div className="text-4xl font-extrabold text-primary mt-4">¥358</div><p className="text-gray mt-2">全方位精致护理</p></div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3"><span className="text-secondary">✓</span> 深层护理 × 2次</li><li className="flex items-center gap-3"><span className="text-secondary">✓</span> 造型美容 × 1次</li><li className="flex items-center gap-3"><span className="text-secondary">✓</span> 牙齿清洁 × 1次</li><li className="flex items-center gap-3"><span className="text-secondary">✓</span> 驱虫护理 × 1次</li>
          </ul>
          <a href="#contact" className="block text-center py-3 rounded-full bg-primary text-white font-semibold no-underline hover:bg-[#e55a5a] transition-all">选择方案</a>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border-2 border-[#ECF0F1]">
          <div className="text-center mb-6"><div className="text-4xl mb-2">👑</div><h3 className="text-2xl font-bold">尊享套餐</h3><div className="text-4xl font-extrabold text-primary mt-4">¥558</div><p className="text-gray mt-2">至尊VIP护理体验</p></div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3"><span className="text-secondary">✓</span> 所有基础项目 × 无限</li><li className="flex items-center gap-3"><span className="text-secondary">✓</span> 造型美容 × 2次</li><li className="flex items-center gap-3"><span className="text-secondary">✓</span> 牙齿清洁 × 2次</li><li className="flex items-center gap-3"><span className="text-secondary">✓</span> 宠物染色 × 1次</li><li className="flex items-center gap-3"><span className="text-secondary">✓</span> 专车接送服务</li>
          </ul>
          <a href="#contact" className="block text-center py-3 rounded-full border-2 border-primary text-primary font-semibold no-underline hover:bg-primary hover:text-white transition-all">选择方案</a>
        </div>
      </div>
    </section>
  );
}