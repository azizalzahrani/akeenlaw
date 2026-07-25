import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, FileText, Send, Calendar, User, Mail, Phone, Building } from 'lucide-react';
import { practiceAreas } from '../data/firmData';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    clientType: 'corporate',
    practiceArea: 'corporate-investment',
    message: '',
    preferredDate: '',
    acceptTerms: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="bg-navy-900 border border-gold-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 text-slate-400 hover:text-white p-2 rounded-lg bg-navy-800 border border-navy-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-gold-400 text-xs font-semibold tracking-wider">
                سرية مطلقة ومباشرة
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              طلب استشارة قانونية استراتيجية
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              يرجى تزويدنا بتفاصيل طلبكم، وسيتواصل معكم شريك متخصص من مكتبنا بالرياض خلال ساعات العمل الرسمية.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-right">
              
              {/* Client Type Toggle */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">صفة المتقدم</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'corporate', label: 'شركة / مؤسسة' },
                    { id: 'investor', label: 'مستثمر أجنبي/محلي' },
                    { id: 'family', label: 'مجموعة عائلية' },
                    { id: 'govt', label: 'جهة حكومية/شبه حكومية' }
                  ].map(t => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setFormData({ ...formData, clientType: t.id })}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                        formData.clientType === t.id
                          ? 'bg-gold-500/20 border-gold-500 text-gold-300 font-bold'
                          : 'bg-navy-950 border-navy-800 text-slate-400 hover:border-navy-700'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">الاسم الكامل *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="الأستاذ / د."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-navy-950 border border-navy-700 rounded-xl pr-9 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">اسم الجهة / الشركة</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    <input
                      type="text"
                      placeholder="شركة..."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-navy-950 border border-navy-700 rounded-xl pr-9 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">البريد الإلكتروني المهني *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.sa"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-navy-950 border border-navy-700 rounded-xl pr-9 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 dir-ltr text-right"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">رقم الهاتف التواصل *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+966 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-navy-950 border border-navy-700 rounded-xl pr-9 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 dir-ltr text-right"
                    />
                  </div>
                </div>
              </div>

              {/* Practice Area Select */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">مجال الممارسة المطلوبة</label>
                <select
                  value={formData.practiceArea}
                  onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500"
                >
                  {practiceAreas.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">ملخص موضوع الاستشارة</label>
                <textarea
                  rows="3"
                  placeholder="يرجى كتابة لمحة مختصرة دون التطرق لبيانات سرية للغاية قبل توقيع الاتفاقية..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-500 resize-none"
                ></textarea>
              </div>

              {/* Notice */}
              <div className="text-[11px] text-slate-400 bg-navy-950 p-3 rounded-lg border border-navy-800 leading-snug">
                تنبيه: تقديم الطلب لا ينشئ علاقة محامٍ وموكل حتى توقيع اتفاقية الخدمات القانونية. تضمن ركين السرية التامة لكافة المعلومات المرسلة.
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-3.5 rounded-xl shadow-lg shadow-gold-500/20 transition-all flex items-center justify-center gap-2 text-base"
              >
                <Send className="w-4 h-4" />
                <span>إرسال طلب الاستشارة</span>
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-500 text-gold-400 flex items-center justify-center mx-auto shadow-lg shadow-gold-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">تم إرسال طلبكم بنجاح</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              نشكر تواصلكم مع شركة رَكِين للمحاماة بالرياض. تم تحويل طلبكم إلى قسم الاستشارات المختص، وسيتواصل معكم مستشار أول في أقرب وقت.
            </p>
            <div className="bg-navy-950 p-4 rounded-xl border border-navy-800 text-xs text-gold-400 inline-block font-mono dir-ltr">
              Ref ID: RAK-2026-{Math.floor(1000 + Math.random() * 9000)}
            </div>
            <div>
              <button
                onClick={handleReset}
                className="bg-navy-800 hover:bg-navy-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors mt-4 border border-navy-700"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
