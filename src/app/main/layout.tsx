import { ReactNode } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main">{children}</main>
      </div>
    </div>
  );
}