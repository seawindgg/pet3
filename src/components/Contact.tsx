"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [preferredTime, setPreferredTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const message = preferredTime 
      ? `预约成功！我们会尽快与您联系确认。\n期望到店时间：${preferredTime}`
      : "预约成功！我们会尽快与您联系确认。";
    alert(message);
    (e.target as HTMLFormElement).reset();
    setPreferredTime("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 px-8" id="contact">
      <div className="text-center mb-16">
        <span className="inline-block bg-gradient-to-r from-[rgba(255,107,107,0.1)] to-[rgba(78,205,196,0.1)] text-primary px-5 py-1.5 rounded-full text-sm font-semibold mb-4">📓 预约咨询</span>
        <h2 className="text-4xl font-extrabold mb-4">立即预约</h2>
        <p className="text-gray text-lg max-w-xl mx-auto">填写下方表单，我们会尽快与您联系确认预约</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex gap-4 items-start"><div className="text-3xl">📍</div><div><h4 className="font-bold">门店地址</h4><p className="text-gray">北京市朝阳区建国路 88 号萌宠大厦 1 层</p></div></div>
          <div className="flex gap-4 items-start"><div className="text-3xl">📞</div><div><h4 className="font-bold">预约电话</h4><p className="text-gray">400-888-6666（9:00-21:00）</p></div></div>
          <div className="flex gap-4 items-start"><div className="text-3xl"></div><div><h4 className="font-bold">微信咨询</h4><p className="text-gray">微信号：mengchong_xihu</p></div></div>
          <div className="flex gap-4 items-start"><div className="text-3xl">🕒</div><div><h4 className="font-bold">营业时间</h4><p className="text-gray">周一至周日 9:00 - 21:00（节假日不休息）</p></div></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="您的姓名" required className="px-5 py-3 rounded-xl border-2 border-[#ECF0F1] focus:border-primary outline-none transition-colors" />
            <input 
              type="datetime-local" 
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="px-5 py-3 rounded-xl border-2 border-[#ECF0F1] focus:border-primary outline-none transition-colors" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="tel" placeholder="联系电话" required className="px-5 py-3 rounded-xl border-2 border-[#ECF0F1] focus:border-primary outline-none transition-colors" />
            <input type="text" placeholder="宠物名字 & 品种" className="px-5 py-3 rounded-xl border-2 border-[#ECF0F1] focus:border-primary outline-none transition-colors" />
          </div>
          <div>
            <select required className="w-full px-5 py-3 rounded-xl border-2 border-[#ECF0F1] focus:border-primary outline-none transition-colors bg-white">
              <option value="" disabled selected>选择服务套餐</option>
              <option>基础洗护 - ¥68 起</option>
              <option>造型美容 - ¥128 起</option>
              <option>基础套餐 - ¥198</option>
              <option>精致套餐 - ¥358</option>
              <option>尊享套餐 - ¥558</option>
            </select>
          </div>
          <textarea placeholder="备注信息（宠物的特殊情况、偏好时间等）" rows={4} className="w-full px-5 py-3 rounded-xl border-2 border-[#ECF0F1] focus:border-primary outline-none transition-colors resize-none" />
          <button type="submit" className="w-full py-3 rounded-full bg-primary text-white font-semibold no-underline hover:bg-[#e55a5a] transition-all border-none cursor-pointer text-lg">🎉 提交预约</button>
        </form>
      </div>
    </section>
  );
}