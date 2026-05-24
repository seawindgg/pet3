export default function Testimonials() {
  return (
    <section className="py-24 px-8" id="testimonials">
      <div className="text-center mb-16">
        <span className="inline-block bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(78,205,196,0.1)] text-primary px-5 py-1.5 rounded-full text-sm font-semibold mb-4">💬 客户评价</span>
        <h2 className="text-4xl font-extrabold mb-4">听听他们怎么说</h2>
        <p className="text-gray text-lg max-w-xl mx-auto">真实客户反馈，见证我们的专业服务</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">李</div><div><h4 className="font-bold">李小姐</h4><p className="text-gray text-sm">金毛犬主人</p></div></div>
          <div className="text-accent mb-3">⭐⭐⭐⭐⭐</div><p className="text-gray leading-relaxed">&ldquo;我家金毛每次来这里都特别开心，美容师手法温柔，洗完澡香喷喷的，毛发也顺滑多了！&rdquo;</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white text-xl font-bold">王</div><div><h4 className="font-bold">王先生</h4><p className="text-gray text-sm">布偶猫主人</p></div></div>
          <div className="text-accent mb-3">⭐⭐⭐⭐⭐</div><p className="text-gray leading-relaxed">&ldquo;猫咪比较怕生，但这里的美容师特别有耐心，慢慢安抚，最终完成了造型，非常专业！&rdquo;</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-xl font-bold">张</div><div><h4 className="font-bold">张女士</h4><p className="text-gray text-sm">泰迪犬主人</p></div></div>
          <div className="text-accent mb-3">⭐⭐⭐⭐⭐</div><p className="text-gray leading-relaxed">&ldquo;环境干净整洁，服务透明，价格公道。我家泰迪在这里做了造型后，出门总被夸可爱！&rdquo;</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">刘</div><div><h4 className="font-bold">刘先生</h4><p className="text-gray text-sm">柯基犬主人</p></div></div>
          <div className="text-accent mb-3">⭐⭐⭐⭐⭐</div><p className="text-gray leading-relaxed">&ldquo;预约方便，准时服务，不用排队等待。美容师还会主动沟通宠物的情况，很贴心。&rdquo;</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-xl font-bold">陈</div><div><h4 className="font-bold">陈女士</h4><p className="text-gray text-sm">英短猫主人</p></div></div>
          <div className="text-accent mb-3">⭐⭐⭐⭐⭐</div><p className="text-gray leading-relaxed">&ldquo;猫咪洗澡后不再掉毛了，皮肤问题也改善了。深层护理效果真的很好，强烈推荐！&rdquo;</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-xl font-bold">赵</div><div><h4 className="font-bold">赵先生</h4><p className="text-gray text-sm">哈士奇主人</p></div></div>
          <div className="text-accent mb-3">⭐⭐⭐⭐⭐</div><p className="text-gray leading-relaxed">&ldquo;我家哈士奇毛发厚重，每次洗完都要很久，但这里效率很高，而且吹得特别蓬松，非常满意！&rdquo;</p>
        </div>
      </div>
    </section>
  );
}