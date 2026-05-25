export default function Stats() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center py-6">
          <div className="text-4xl font-extrabold text-blue-500 mb-2">10,000+</div>
          <div className="text-gray-500 text-[0.95rem]">服务宠物数量</div>
        </div>
        <div className="text-center py-6">
          <div className="text-4xl font-extrabold text-primary mb-2">98%</div>
          <div className="text-gray-500 text-[0.95rem]">客户满意度</div>
        </div>
        <div className="text-center py-6">
          <div className="text-4xl font-extrabold text-yellow-500 mb-2">8 年</div>
          <div className="text-gray-500 text-[0.95rem]">行业经验</div>
        </div>
        <div className="text-center py-6">
          <div className="text-4xl font-extrabold text-primary mb-2">15+</div>
          <div className="text-gray-500 text-[0.95rem]">专业美容师</div>
        </div>
      </div>
    </div>
  );
}

