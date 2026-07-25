import React from 'react';
import { ShieldCheck, ArrowLeft, Building2, Award, ChevronDown, CheckCircle2, Sparkles, MapPin, Scale } from 'lucide-react';
import { firmInfo } from '../data/firmData';

export default function Hero({ onExploreServices, onContactTeam }) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-navy-950">
      
      {/* Background Image: Riyadh KAFD with Luxury Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="مركز الملك عبدالله المالي بالرياض" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-125 opacity-30 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent" />
        <div className="absolute inset-0 subtle-grid opacity-40 pointer-events-none" />
      </div>

      {/* Ambient Gold & Navy Glow Orbs */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-navy-700/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right w-full">
        <div className="max-w-4xl space-y-9">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-navy-900/90 border border-gold-500/35 px-4 py-2 rounded-full backdrop-blur-xl shadow-2xl animate-fade-in group hover:border-gold-500/60 transition-colors cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gold-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              الرياض — مركز الملك عبدالله المالي (KAFD)
            </span>
            <span className="text-navy-700">|</span>
            <span className="text-xs text-slate-300 font-medium">شريك قانوني استراتيجي</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15]">
              قانونٌ يُدار <span className="text-gold-gradient">برؤيةٍ وحصافة.</span>
            </h1>
            <p className="text-lg sm:text-2xl font-light text-slate-200 leading-relaxed max-w-3xl">
              نصوغ الحلول القانونية الهيكلية ونقود الصفقات الاستثمارية الكبرى بنزاهةٍ وخبرة نظامية تلائم مكانة كبرى الشركات والعائلات التجارية في المملكة.
            </p>
          </div>

          {/* Quick Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { title: "حماية استثمارية متكاملة", desc: "مطابقة كاملة لنظام الاستثمار السعودي المحدث رؤية 2030" },
              { title: "سرية وتفرد تنفيذي", desc: "إشراف مباشر وحصري من الشركاء القياديين" },
              { title: "خبرة قضائية ونظامية", desc: "دراية عميقة بالبيئة التشريعية والهيئات السيادية" }
            ].map((v, i) => (
              <div key={i} className="glass-card p-4 rounded-xl flex items-start gap-3 border border-navy-800/90 hover:border-gold-500/30 transition-all">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">{v.title}</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-normal">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreServices}
              className="bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-gold-500/25 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none" />
              <span>استكشف مجالات الممارسة</span>
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </button>

            <button
              onClick={onContactTeam}
              className="glass-panel text-white hover:text-gold-300 border border-gold-500/30 hover:border-gold-500 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 transform hover:-translate-y-1 shadow-lg"
            >
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <span>طلب استشارة قانونية</span>
            </button>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-8 border-t border-navy-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {firmInfo.stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-5 rounded-2xl border border-navy-800/90 hover:border-gold-500/30 transition-all text-right">
              <div className="text-2xl sm:text-4xl font-extrabold text-gold-400 font-mono dir-ltr text-right">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1.5 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
