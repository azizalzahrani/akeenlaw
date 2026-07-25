import React from 'react';
import { ShieldCheck, ArrowLeft, Building2, Award, ChevronDown, CheckCircle2 } from 'lucide-react';
import { firmInfo } from '../data/firmData';

export default function Hero({ onExploreServices, onContactTeam }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-navy-950">
      
      {/* Riyadh KAFD Hero Image Background with Dark Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="مركز الملك عبدالله المالي بالرياض" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-125 opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent" />
        <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />
      </div>

      {/* Decorative Gold Ambient Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-navy-700/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        <div className="max-w-4xl space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-navy-900/80 border border-gold-500/30 px-4 py-2 rounded-full backdrop-blur-md shadow-xl animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gold-300">
              الرياض — مركز الملك عبدالله المالي (KAFD)
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-xs text-slate-300">شريك قانوني استراتيجي</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15]">
              قانونٌ يُدار <span className="text-gold-gradient">برؤية.</span>
            </h1>
            <p className="text-lg sm:text-2xl font-light text-slate-200 leading-relaxed max-w-3xl">
              نصوغ الحلول الهيكلية ونقود الصفقات الاستثمارية المعقدة بنزاهةٍ وحصافة تنظيمية تلائم مكانة كبرى الشركات والعائلات التجارية والجهات الاستراتيجية في المملكة.
            </p>
          </div>

          {/* Quick Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { title: "حماية استثمارية محكمة", desc: "مطابقة كاملة لنظام الاستثمار السعودي المحدث" },
              { title: "سرية وتفرد تنفيذي", desc: "إشراف مباشر من كبار الشركاء بالمكتب" },
              { title: "توافق مع رؤية 2030", desc: "دراية عميقة بالمستجدات التشريعية والهيئات السيادية" }
            ].map((v, i) => (
              <div key={i} className="bg-navy-900/50 backdrop-blur-md border border-navy-800/80 p-4 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">{v.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreServices}
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-gold-500/20 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>تعرّف على خدماتنا</span>
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={onContactTeam}
              className="glass-panel text-white hover:text-gold-300 border border-gold-500/30 hover:border-gold-500 px-8 py-4 rounded-xl text-base font-semibold transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <span>تواصل مع الفريق القيادي</span>
            </button>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-8 border-t border-navy-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {firmInfo.stats.map((stat, idx) => (
            <div key={idx} className="bg-navy-900/40 p-4 rounded-xl border border-navy-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-mono dir-ltr text-right">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
