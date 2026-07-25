import React, { useState } from 'react';
import { Award, GraduationCap, Globe, BookOpen, ArrowLeft, X, ShieldCheck } from 'lucide-react';
import { teamMembers } from '../data/firmData';

export default function TeamSection({ onRequestConsultation }) {
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <div className="py-12 space-y-12">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-gold-500/20">
            النخبة القانونية
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
            فريقنا <span className="text-gold-gradient">القيادي بالرياض</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            يضم مكتبنا نخبة من الشركاء والمستشارين السعوديين الذين يجمعون بين المؤهلات الأكاديمية الرفيعة والخبرة القضائية والنظامية الممتدة لعقود في صياغة المشهد القانوني للمملكة.
          </p>
        </div>
      </div>

      {/* Team Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedPartner(member)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group border border-navy-800 hover:border-gold-500/40 transition-all flex flex-col justify-between"
            >
              {/* Partner Image */}
              <div className="relative h-80 overflow-hidden bg-navy-950">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-navy-950/80 backdrop-blur-md border border-gold-500/30 px-3 py-1 rounded-full text-[11px] font-semibold text-gold-300">
                  خبرة {member.experienceYears}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4 bg-navy-900/60 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-gold-400">{member.title}</p>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {member.shortBio}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-800 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((exp, idx) => (
                      <span key={idx} className="bg-navy-950 border border-navy-800 text-slate-300 text-[10px] px-2.5 py-1 rounded-md">
                        {exp}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-gold-400 group-hover:text-gold-300 pt-2">
                    <span>السيرة الذاتية والمؤهلات</span>
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Partner Bio Detailed Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="bg-navy-900 border border-gold-500/40 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto text-right">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-5 left-5 text-slate-400 hover:text-white p-2 rounded-xl bg-navy-800 border border-navy-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
              
              {/* Partner Portrait Image inside Modal */}
              <div className="md:col-span-4 rounded-xl overflow-hidden border border-gold-500/30 shadow-xl">
                <img
                  src={selectedPartner.image}
                  alt={selectedPartner.name}
                  className="w-full h-64 md:h-80 object-cover object-top"
                />
              </div>

              {/* Partner Quick Credentials */}
              <div className="md:col-span-8 space-y-4">
                <span className="text-xs font-semibold text-gold-400 bg-navy-950 px-3 py-1 rounded-full border border-gold-500/30">
                  خبرة استشارية {selectedPartner.experienceYears}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedPartner.name}</h3>
                <p className="text-sm font-semibold text-gold-400">{selectedPartner.title}</p>

                <div className="space-y-2 bg-navy-950 p-4 rounded-xl border border-navy-800 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span><strong>المؤهلات الأكاديمية:</strong> {selectedPartner.credentials}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span><strong>اللغات:</strong> {selectedPartner.languages.join(' • ')}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Full Biography Narrative */}
            <div className="space-y-4 mb-6">
              <h4 className="text-base font-bold text-white border-r-4 border-gold-500 pr-3">
                نبذة عن المسيرة المهنية والإشراف القانوني:
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-navy-950 p-4 rounded-xl border border-navy-800">
                {selectedPartner.fullBio}
              </p>
            </div>

            {/* Publications & Papers */}
            {selectedPartner.publications && (
              <div className="space-y-2 mb-8">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  الأبحاث والمؤلفات القانونية المنشورة:
                </h4>
                <div className="space-y-2">
                  {selectedPartner.publications.map((pub, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-navy-850 p-3 rounded-lg border border-navy-800 text-xs text-gold-300 font-medium">
                      <BookOpen className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{pub}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-navy-800">
              <button
                onClick={() => {
                  const partnerName = selectedPartner.name;
                  setSelectedPartner(null);
                  onRequestConsultation(partnerName);
                }}
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-gold-500/20"
              >
                حجز استشارة مع {selectedPartner.name}
              </button>
              <button
                onClick={() => setSelectedPartner(null)}
                className="w-full sm:w-auto bg-navy-800 hover:bg-navy-700 text-white font-medium px-6 py-3.5 rounded-xl text-sm transition-colors border border-navy-700"
              >
                إغلاق النافذة
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
