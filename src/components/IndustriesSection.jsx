import React, { useState } from 'react';
import { 
  Building, Cpu, Zap, Activity, ShoppingBag, DollarSign, Shield, ArrowLeft, CheckCircle2 
} from 'lucide-react';
import { industries } from '../data/firmData';

const iconMap = {
  Building: Building,
  Cpu: Cpu,
  Zap: Zap,
  Activity: Activity,
  ShoppingBag: ShoppingBag,
  DollarSign: DollarSign,
  Shield: Shield
};

export default function IndustriesSection({ onRequestConsultation }) {
  const [activeIndustryId, setActiveIndustryId] = useState(industries[0].id);

  const activeIndustry = industries.find(i => i.id === activeIndustryId) || industries[0];

  return (
    <div className="py-12 space-y-12">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-gold-500/20">
            التخصص القطاعي
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
            القطاعات <span className="text-gold-gradient">الاقتصادية الاستراتيجية</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            نجمع بين التخصص التنظيمي وتفهم التحديات التجارية الحقيقية لكل قطاع اقتصادي في المملكة لضمان استقرار المشروعات وتسريع وتيرة النمو.
          </p>
        </div>
      </div>

      {/* Interactive Tabs + Showcase Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Industry Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-navy-800">
          {industries.map((ind) => {
            const IconComponent = iconMap[ind.icon] || Building;
            const isActive = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`whitespace-nowrap px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2.5 shrink-0 ${
                  isActive
                    ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20 font-bold'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-navy-800'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail View */}
        <div className="mt-8 glass-panel p-8 sm:p-12 rounded-3xl border border-gold-500/30 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6 text-right">
              
              <div className="inline-flex items-center gap-3 bg-navy-950 border border-gold-500/30 px-4 py-2 rounded-full">
                {React.createElement(iconMap[activeIndustry.icon] || Building, { className: "w-5 h-5 text-gold-400" })}
                <span className="text-xs font-bold text-gold-300">{activeIndustry.subtitle}</span>
              </div>

              <h3 className="text-3xl font-extrabold text-white leading-tight">
                التغطية القانونية والتنظيمية لقطاع <span className="text-gold-400">{activeIndustry.title}</span>
              </h3>

              <p className="text-base text-slate-200 leading-relaxed bg-navy-950/60 p-6 rounded-2xl border border-navy-800">
                {activeIndustry.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 bg-navy-900 p-3 rounded-xl border border-navy-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>دراية مستمرة بالتعاميم واللوائح الجديدة</span>
                </div>
                <div className="flex items-center gap-2 bg-navy-900 p-3 rounded-xl border border-navy-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>علاقات مهنية رصينة مع الهيئات التنظيمية</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onRequestConsultation(activeIndustry.title)}
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-xl shadow-gold-500/20 inline-flex items-center gap-2"
                >
                  <span>استشارة قانونية لقطاع {activeIndustry.title}</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

            </div>

            <div className="lg:col-span-4 hidden lg:block text-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-gold-500/20 via-navy-900 to-navy-950 border-2 border-gold-500/40 flex items-center justify-center mx-auto shadow-2xl">
                {React.createElement(iconMap[activeIndustry.icon] || Building, { className: "w-20 h-20 text-gold-400" })}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
