// app/dashboard/layout.tsx
import { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
        <Navbar/>
      {/* 사이드바 컴포넌트 */}
      <Sidebar />

      {/* 메인 컨텐츠 */}
      <div style={{ flex: 1 }}>
        {/* 헤더 컴포넌트 */}
        <Header />

        {/* 메인 컨텐츠 (페이지에 따라 변경) */}
        <main style={{ padding: '20px' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
