import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { firmInfo, practiceAreas } from '../data/firmData';

export default function Footer({ setActiveTab, openLegalPage, openConsultation }) {
  const handleNav = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800/80 pt-16 pb-12 relative overflow-hidden text-slate-300">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Consultation CTA Banner inside Footer */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl mb-16 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gold-500" />
          <div>
            <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase bg-navy-900 px-3 py-1 rounded-full border border-gold-500/30">
              استشارة استراتيجية
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              هل تبحث عن صياغة مرِنة أو تمثيلٍ قانوني لمشروعك؟
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              يتلقى مستشارونا طلبات الكيانات التجارية والمستثمرين لتقديم مرئيات نظامية محكمة.
            </p>
          </div>
          <button
            onClick={openConsultation}
            className="whitespace-nowrap bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-gold-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            تواصل مع الفريق القيادي
          </button>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: Brand & Firm Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-900 border border-gold-500/40 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-500" viewBox="0 0 100 100" fill="none">
                  <path d="M50 15 L78 31.16 V68.84 L50 85 L22 68.84 V31.16 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                  <circle cx="50" cy="50" r="6" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <span className="block text-xl font-bold text-white tracking-wide">
                  رَكِــيـن للمحاماة
                </span>
                <span className="block text-xs font-medium text-gold-500">
                  والاستشارات القانونية
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              شركة محاماة سعودية رائدة تتخذ من مركز الملك عبدالله المالي بالرياض مقراً لها. مكرسة لتقديم الاستشارات القانونية عالية القيمة لكبرى الشركات، الكيانات الاستثمارية، والعائلات التجارية.
            </p>
            <div className="pt-2 flex flex-col space-y-1 text-xs text-slate-400">
              <span>ترخيص وزارة العدل رقم: <strong className="text-slate-200">{firmInfo.licenseNo}</strong></span>
              <span>السجل التجاري رقم: <strong className="text-slate-200">{firmInfo.crNumber}</strong></span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 pb-2 border-b border-navy-800 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              صفحات الشركة
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-gold-400 transition-colors">الرئيسية</button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-gold-400 transition-colors">عن رَكِين</button>
              </li>
              <li>
                <button onClick={() => handleNav('practices')} className="hover:text-gold-400 transition-colors">مجالات الممارسة</button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-gold-400 transition-colors">القطاعات الاقتصادية</button>
              </li>
              <li>
                <button onClick={() => handleNav('team')} className="hover:text-gold-400 transition-colors">فريقنا القيادي</button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-gold-400 transition-colors">الآراء والمعرفة</button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-gold-400 transition-colors">تواصل معنا</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Practices Highlights */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 pb-2 border-b border-navy-800 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              أبرز التخصصات
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {practiceAreas.slice(0, 6).map(area => (
                <li key={area.id}>
                  <button 
                    onClick={() => handleNav('practices')}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1 text-right"
                  >
                    <span>{area.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Riyadh Office Contact */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 pb-2 border-b border-navy-800 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              مكتب الرياض
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-1" />
                <span className="text-slate-300 leading-snug">{firmInfo.hq}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`tel:${firmInfo.phone}`} className="dir-ltr text-slate-300 hover:text-gold-400 font-mono">
                  {firmInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`mailto:${firmInfo.email}`} className="text-slate-300 hover:text-gold-400">
                  {firmInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">{firmInfo.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-navy-900/60 p-4 rounded-xl border border-navy-800 text-xs text-slate-400 mb-8 leading-relaxed">
          <span className="font-bold text-slate-300 ml-1">تنويه قانوني:</span>
          المعلومات الواردة على هذا الموقع هي لأغراض تثقيفية وإعلامية عامة فقط ولا تشكل استشارة قانونية رسمية. إن التواصل معنا عبر الموقع أو النماذج المتاحة لا ينشئ علاقة محامٍ وموكل حتى توقيع اتفاقية تقديم خدمات قانونية مستقلة.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-navy-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} شركة رَكِين للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => openLegalPage('privacy')} className="hover:text-gold-400 transition-colors">سياسة الخصوصية</button>
            <button onClick={() => openLegalPage('terms')} className="hover:text-gold-400 transition-colors">الشروط والأحكام</button>
            <button onClick={() => openLegalPage('disclaimer')} className="hover:text-gold-400 transition-colors">إخلاء المسؤولية</button>
            <button onClick={() => openLegalPage('cookies')} className="hover:text-gold-400 transition-colors">ملفات الارتباط</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
