import React from 'react';
import { X, Shield, FileText, Lock, Cookie } from 'lucide-react';
import { legalPagesContent } from '../data/firmData';

export default function LegalPagesModal({ activePage, onClose }) {
  if (!activePage) return null;

  const pageData = legalPagesContent[activePage] || legalPagesContent.privacy;

  const iconMap = {
    privacy: Shield,
    terms: FileText,
    disclaimer: Lock,
    cookies: Cookie
  };

  const IconComp = iconMap[activePage] || Shield;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bg-navy-900 border border-gold-500/40 rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto text-right">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 text-slate-400 hover:text-white p-2 rounded-xl bg-navy-800 border border-navy-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
            <IconComp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-gold-400 font-semibold">وثيقة تنظيمية</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{pageData.title}</h3>
          </div>
        </div>

        <div className="text-xs text-slate-400 mb-6 bg-navy-950 px-3 py-1.5 rounded-lg border border-navy-800 inline-block font-mono">
          آخر تحديث: {pageData.lastUpdated}
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {pageData.sections.map((sec, idx) => (
            <div key={idx} className="bg-navy-950/60 p-5 rounded-xl border border-navy-800 space-y-2">
              <h4 className="text-base font-bold text-gold-300">{sec.heading}</h4>
              <p className="text-sm text-slate-200 leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="pt-6 border-t border-navy-800 mt-8 text-left">
          <button
            onClick={onClose}
            className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-lg"
          >
            إغلاق الوثيقة
          </button>
        </div>

      </div>
    </div>
  );
}
