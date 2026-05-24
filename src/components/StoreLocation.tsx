export default function StoreLocation() {
  return (
    <section className="bg-gradient-to-br from-[#FFF5F5] via-[#FFF0E6] to-[#F0FFF4] py-24 px-8 relative overflow-hidden" id="store">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <div className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[6px] before:bg-gradient-to-r from-primary via-secondary to-accent">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-dashed border-accent">
            <span className="text-5xl animate-bounce">🐾</span>
            <h3 className="text-3xl font-bold text-primary">萌宠洗护中心</h3>
          </div>
          <div className="space-y-6 mb-8">
            <div className="flex gap-4 items-start">
              <span className="text-3xl min-w-8">📍</span>
              <div>
                <strong className="block text-dark">门店地址</strong>
                <p className="text-gray">北京市朝阳区建国路 88 号萌宠大厦 1 层</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-3xl min-w-8">📞</span>
              <div>
                <strong className="block text-dark">预约电话</strong>
                <p className="text-gray">400-888-6666</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-3xl min-w-8">💬</span>
              <div>
                <strong className="block text-dark">微信咨询</strong>
                <p className="text-gray">mengchong_xihu</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-3xl min-w-8">🕐</span>
              <div>
                <strong className="block text-dark">营业时间</strong>
                <p className="text-gray">周一至周日 9:00 - 21:00（节假日不休）</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold no-underline hover:bg-[#e55a5a] transition-all">📅 立即预约</a>
            <a href="tel:4008886666" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold no-underline hover:bg-primary hover:text-white transition-all">📞 拨打电话</a>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] bg-white p-2.5">
          <div className="h-[450px] rounded-[20px] overflow-hidden">
            <img src="/images/store-map.png" alt="萌宠洗护中心地图 - 北京市朝阳区建国路 88 号" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-5 right-5 flex gap-2">
            <span className="text-2xl animate-float bg-white rounded-full p-2 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">🐾</span>
            <span className="text-2xl animate-float bg-white rounded-full p-2 shadow-[0_4px_15px_rgba(0,0,0,0.1)]" style={{animationDelay:"0.5s"}}>🐶</span>
            <span className="text-2xl animate-float bg-white rounded-full p-2 shadow-[0_4px_15px_rgba(0,0,0,0.1)]" style={{animationDelay:"1s"}}>🐱</span>
          </div>
        </div>
      </div>
    </section>
  );
}
