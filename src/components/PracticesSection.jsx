import React, { useState } from 'react';
import { 
  Building2, GitMerge, Landmark, TrendingUp, Scale, Users, ShieldCheck, CheckCircle2, FileText, ArrowLeft, X, Check 
} from 'lucide-react';
import { practiceAreas } from '../data/firmData';

const iconMap = {
  Building2: Building2,
  GitMerge: GitMerge,
  Landmark: Landmark,
  TrendingUp: TrendingUp,
  Scale: Scale,
  Users: Users,
  ShieldCheck: ShieldCheck,
  CheckCircle2: CheckCircle2,
  FileText: FileText
};

export default function PracticesSection({ onSelectPractice, onRequestConsultation }) {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleOpenDetail = (area) => {
    setSelectedArea(area);
  };

  return (
    <div className="py-12 space-y-12">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-gold-500/20">
            تخصصات شركتنا
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
            مجالات الممارسة <span className="text-gold-gradient">القانونية</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            نغطي المنظومة القانونية والتنظيمية الكاملة لكبرى الشركات والمؤسسات المالية والمستثمرين في المملكة العربية السعودية عبر تسعة تخصصات نوعية.
          </p>
        </div>
      </div>

      {/* Grid of 9 Practice Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => {
            const IconComponent = iconMap[area.icon] || Building2;
            return (
              <div
                key={area.id}
                onClick={() => handleOpenDetail(area)}
                className="glass-card p-8 rounded-2xl cursor-pointer group flex flex-col justify-between h-full border border-navy-800 hover:border-gold-500/40 relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-lg">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {area.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-navy-800/80 flex items-center justify-between text-xs font-semibold text-gold-400 group-hover:text-gold-300">
                  <span>استعراض خدمات المجال التفصيلية</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Modal View when an Area is Selected */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="bg-navy-900 border border-gold-500/40 rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto text-right">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-6 left-6 text-slate-400 hover:text-white p-2 rounded-xl bg-navy-800 border border-navy-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gold-500 text-navy-950 flex items-center justify-center shrink-0 shadow-lg shadow-gold-500/20">
                {React.createElement(iconMap[selectedArea.icon] || Building2, { className: "w-7 h-7" })}
              </div>
              <div>
                <span className="text-xs font-semibold text-gold-400">تخصص قانوني نوعي</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedArea.title}</h3>
              </div>
            </div>

            {/* Summary */}
            <p className="text-slate-200 text-base leading-relaxed mb-6 bg-navy-950 p-4 rounded-xl border border-navy-800">
              {selectedArea.heroSummary}
            </p>

            {/* Services Checklist */}
            <div className="space-y-3 mb-6">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                الخدمات والاستشارات المقدمة في هذا المجال:
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {selectedArea.services.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-navy-850 p-3 rounded-xl border border-navy-800 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sectors Served */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-300 mb-2">القطاعات المستفيدة:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedArea.sectorsServed.map((s, idx) => (
                  <span key={idx} className="bg-navy-950 border border-navy-700 text-gold-300 text-xs px-3 py-1.5 rounded-lg">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-navy-950 to-navy-900 p-4 rounded-xl border border-gold-500/20 text-xs text-slate-300 mb-8">
              <strong className="text-gold-400 block text-sm mb-1">لماذا تختار رَكِين لهذا المجال؟</strong>
              {selectedArea.whyChooseUs}
            </div>

            {/* Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-navy-800">
              <button
                onClick={() => {
                  setSelectedArea(null);
                  onRequestConsultation(selectedArea.id);
                }}
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-gold-500/20"
              >
                طلب استشارة في مجال {selectedArea.title}
              </button>
              <button
                onClick={() => setSelectedArea(null)}
                className="w-full sm:w-auto bg-navy-800 hover:bg-navy-700 text-white font-medium px-6 py-3.5 rounded-xl text-sm transition-colors border border-navy-700"
              >
                إغلاق التفاصيل
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
