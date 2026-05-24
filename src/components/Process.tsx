export default function Process() {
  return (
    <section className="bg-[#F7F7F7] py-24 px-8" id="process">
      <div className="text-center mb-16">
        <span className="inline-block bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(78,205,196,0.1)] text-primary px-5 py-1.5 rounded-full text-sm font-semibold mb-4">📋 服务流程</span>
        <h2 className="text-4xl font-extrabold mb-4">简单四步，轻松预约</h2>
        <p className="text-gray text-lg max-w-xl mx-auto">标准化的服务流程，确保每一次服务都品质如一</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl mx-auto mb-4">📱</div>
          <h4 className="text-lg font-bold mb-2">在线预约</h4><p className="text-gray text-sm">通过网站或电话预约您方便的时间</p>
        </div>
        <div className="text-center relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-4xl mx-auto mb-4">💬</div>
          <h4 className="text-lg font-bold mb-2">需求沟通</h4><p className="text-gray text-sm">美容师了解您的需求和宠物情况</p>
        </div>
        <div className="text-center relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-4xl mx-auto mb-4">✨</div>
          <h4 className="text-lg font-bold mb-2">专业服务</h4><p className="text-gray text-sm">专业团队为毛孩子提供贴心服务</p>
        </div>
        <div className="text-center relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl mx-auto mb-4">🎉</div>
          <h4 className="text-lg font-bold mb-2">满意交付</h4><p className="text-gray text-sm">焕然一新的毛孩子回到您身边</p>
        </div>
      </div>
    </section>
  );
}