export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-2xl font-extrabold mb-2"><span>🐾</span> 萌宠洗护中心</div>
          <p className="text-white/40 text-sm">用心呵护每一个毛孩子，让它们健康快乐每一天</p>
        </div>
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          <a href="#services" className="text-white/60 hover:text-white no-underline transition-colors">服务项目</a>
          <a href="#pricing" className="text-white/60 hover:text-white no-underline transition-colors">价格方案</a>
          <a href="#gallery" className="text-white/60 hover:text-white no-underline transition-colors">作品展示</a>
          <a href="#testimonials" className="text-white/60 hover:text-white no-underline transition-colors">客户评价</a>
          <a href="#contact" className="text-white/60 hover:text-white no-underline transition-colors">预约咨询</a>
        </div>
        <div className="text-center text-white/40 text-sm">© 2026 萌宠洗护中心 · All Rights Reserved · 用爱服务，用心呵护</div>
      </div>
    </footer>
  );
}