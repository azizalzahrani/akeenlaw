import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronDown, ShieldCheck } from 'lucide-react';
import { firmInfo } from '../data/firmData';

export default function Navbar({ activeTab, setActiveTab, openConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'عن رَكِين' },
    { id: 'practices', label: 'مجالات الممارسة' },
    { id: 'industries', label: 'القطاعات' },
    { id: 'team', label: 'فريقنا القيادي' },
    { id: 'insights', label: 'الآراء والمعرفة' },
    { id: 'contact', label: 'تواصل معنا' }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-navy-950/90 backdrop-blur-xl border-b border-navy-800 shadow-2xl py-3.5' 
        : 'bg-gradient-to-b from-navy-950/95 to-navy-950/0 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-right focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500 transition-colors shadow-lg shadow-navy-950">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gold-500 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                <path d="M50 15 L78 31.16 V68.84 L50 85 L22 68.84 V31.16 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                <path d="M50 28 L67 37.8 V62.2 L50 72 L33 62.2 V37.8 Z" stroke="currentColor" strokeWidth="2.5" opacity="0.6"/>
                <circle cx="50" cy="50" r="6" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-gold-400 transition-colors">
                رَكِــيـن
              </span>
              <span className="block text-[10px] sm:text-xs font-medium text-gold-500 tracking-wide">
                للمحاماة والاستشارات القانونية
              </span>
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 bg-navy-900/60 p-1.5 rounded-full border border-navy-800 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-gold-500 text-navy-950 font-semibold shadow-md shadow-gold-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-navy-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={openConsultation}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:from-gold-400 hover:to-gold-500 transition-all duration-200 shadow-lg shadow-gold-500/20 hover:scale-105 active:scale-95"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>طلب استشارة</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-navy-900 border border-navy-800 text-slate-200 hover:text-gold-400 focus:outline-none"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-navy-950/98 backdrop-blur-2xl border-b border-navy-800 p-6 shadow-2xl transition-all duration-300 animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-right px-4 py-3 rounded-xl font-medium text-base transition-all ${
                    isActive
                      ? 'bg-gold-500 text-navy-950 font-bold'
                      : 'text-slate-200 hover:bg-navy-900 hover:text-gold-400'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-navy-800 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gold-500 text-navy-950 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-gold-500/20"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>طلب استشارة قانونية</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
