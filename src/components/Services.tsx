export default function Services() {
  return (
    <section className="bg-[#F7F7F7] py-24 px-8" id="services">
      <div className="text-center mb-16">
        <span className="inline-block bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(78,205,196,0.1)] text-primary px-5 py-1.5 rounded-full text-sm font-semibold mb-4">🛁 专业服务</span>
        <h2 className="text-4xl font-extrabold mb-4">我们的服务项目</h2>
        <p className="text-gray text-lg max-w-xl mx-auto">从基础洗护到专业造型，全方位满足毛孩子的需求</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300">
          <div className="text-5xl mb-4">🛁</div><h3 className="text-xl font-bold mb-3">基础洗护</h3><p className="text-gray mb-4">包含洗澡、吹干、梳毛、剪指甲、清洁耳朵等基础护理，让毛孩子清爽干净。</p><div className="text-primary font-bold"><span className="text-sm text-gray">起</span> ¥68</div>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300">
          <div className="text-5xl mb-4">✂️</div><h3 className="text-xl font-bold mb-3">造型美容</h3><p className="text-gray mb-4">专业美容师根据犬种特点和主人喜好，打造专属时尚造型，让宝贝成为焦点。</p><div className="text-primary font-bold"><span className="text-sm text-gray">起</span> ¥128</div>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300">
          <div className="text-5xl mb-4">🧴</div><h3 className="text-xl font-bold mb-3">深层护理</h3><p className="text-gray mb-4">使用天然植物配方的护理产品，深层清洁毛发和皮肤，改善毛发干枯问题。</p><div className="text-primary font-bold"><span className="text-sm text-gray">起</span> ¥98</div>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300">
          <div className="text-5xl mb-4">🦷</div><h3 className="text-xl font-bold mb-3">牙齿清洁</h3><p className="text-gray mb-4">超声波洁牙服务，有效去除牙结石和口腔异味，守护宠物口腔健康。</p><div className="text-primary font-bold"><span className="text-sm text-gray">起</span> ¥158</div>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300">
          <div className="text-5xl mb-4">🌿</div><h3 className="text-xl font-bold mb-3">驱虫护理</h3><p className="text-gray mb-4">专业体外驱虫和药浴服务，有效预防跳蚤、蜱虫等寄生虫，保护宠物健康。</p><div className="text-primary font-bold"><span className="text-sm text-gray">起</span> ¥88</div>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300">
          <div className="text-5xl mb-4">🎨</div><h3 className="text-xl font-bold mb-3">宠物染色</h3><p className="text-gray mb-4">使用安全无毒的植物染料，为宠物打造个性化彩色造型，安全无害。</p><div className="text-primary font-bold"><span className="text-sm text-gray">起</span> ¥188</div>
        </div>
      </div>
    </section>
  );
}