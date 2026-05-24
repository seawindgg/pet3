import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '萌宠洗护中心 - 专业宠物洗护美容',
  description: '专业宠物洗护美容中心，让每一只毛孩子都能享受SPA级的护理体验。我们用心对待每一个小生命，让它们焕发光彩。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
