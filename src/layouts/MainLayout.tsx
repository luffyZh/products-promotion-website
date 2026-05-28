import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Sun, Moon, Phone, QrCode } from 'lucide-react';

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    if (document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '电子哨兵 (GuardX)', path: '/products/guardx' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Global Header */}
      <header className="sticky top-0 z-[100] w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/cetc-haikang.png" alt="CETC" className="w-24" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="h-16 hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`h-16 flex items-center justify-center text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 ${
                  location.pathname === link.path ? 'text-emerald-600 dark:text-emerald-400 border-b-4 border-emerald-600 dark:border-emerald-400' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleDark} 
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-yellow-400 transition-all"
              title="切换主题"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-4">
                联系销售
              </button>
              {/* Dropdown for Contact Sales */}
              <div className="absolute right-0 top-full mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center">
                  <div className="w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-700">
                    <QrCode className="w-12 h-12 text-slate-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white mb-4">扫码添加销售微信</p>
                  <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-4"></div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <Phone className="w-4 h-4" />
                    <a href="tel:13051891212" className="font-semibold tracking-wide">130 5189 1212</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleDark} 
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-yellow-400"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 text-slate-600 dark:text-slate-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100 dark:border-slate-800" />
              <div className="flex flex-col gap-4 py-2">
                <span className="text-sm font-medium text-slate-900 dark:text-white">联系销售</span>
                <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded flex items-center justify-center border border-slate-200 dark:border-slate-700 shrink-0">
                    <QrCode className="w-8 h-8 text-slate-400" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400">扫码添加微信，或致电：</span>
                    <a href="tel:13051891212" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                      <Phone className="w-4 h-4" />
                      130 5189 1212
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer className="w-full bg-slate-950 py-12 border-t border-slate-900 text-slate-400 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-100">TechCorp</span>
            </div>
            <p className="text-sm leading-relaxed">
              致力于为各行业提供智能、高效、可靠的前沿科技产品与解决方案。
            </p>
          </div>
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">产品</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/guardx" className="hover:text-emerald-400 transition-colors">
                  GuardX 电子哨兵
                </Link>
              </li>
              <li>
                <span className="text-slate-600 cursor-not-allowed">更多产品敬请期待</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">关于我们</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">公司简介</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">新闻动态</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">加入我们</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-100 font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-sm">
              <li>服务热线：400-123-4567</li>
              <li>商务合作：business@techcorp.com</li>
              <li>地址：科技创新园区 A 栋</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-900 text-sm text-center">
          <p>© {new Date().getFullYear()} TechCorp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}