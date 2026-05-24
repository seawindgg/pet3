'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-[70px]">
        <a href="#" className="text-2xl font-extrabold text-primary flex items-center gap-2 no-underline">
          <span className="text-[1.8rem]">🐾</span> 萌宠洗护
        </a>
        <ul className={`hidden md:flex list-none gap-8 ${mobileOpen ? 'flex flex-col absolute top-[70px] left-0 right-0 bg-white p-4 shadow-lg' : ''}`} id="navLinks">
          <li><a href="#services" className="no-underline text-dark font-medium text-[0.95rem] transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMobileOpen(false)}>服务项目</a></li>
          <li><a href="#pricing" className="no-underline text-dark font-medium text-[0.95rem] transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMobileOpen(false)}>价格方案</a></li>
          <li><a href="#gallery" className="no-underline text-dark font-medium text-[0.95rem] transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMobileOpen(false)}>作品展示</a></li>
          <li><a href="#testimonials" className="no-underline text-dark font-medium text-[0.95rem] transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMobileOpen(false)}>客户评价</a></li>
          <li><a href="#process" className="no-underline text-dark font-medium text-[0.95rem] transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMobileOpen(false)}>服务流程</a></li>
          <li><a href="#store" className="no-underline text-dark font-medium text-[0.95rem] transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMobileOpen(false)}>门店位置</a></li>
          <li><a href="#contact" className="no-underline text-dark font-medium text-[0.95rem] transition-colors duration-300 relative hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full" onClick={() => setMobileOpen(false)}>预约咨询</a></li>
        </ul>
        <button className="md:hidden bg-none border-none text-[1.5rem] cursor-pointer text-dark" onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
      </div>
    </nav>
  );
}
