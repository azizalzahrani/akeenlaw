import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2, Building, MessageSquare } from 'lucide-react';
import { firmInfo, practiceAreas } from '../data/firmData';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    clientType: 'corporate',
    practiceArea: 'corporate-investment',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-12">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-gold-500/20">
            المكتب الرئيسي
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
            تواصل مع <span className="text-gold-gradient">فريقنا بالرياض</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            يسعدنا استقبال استفسارات الكيانات التجارية والمستثمرين لتقديم التوصيات القانونية المناسبة لحجم ونوع أعمالكم.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Office Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-right">
            
            <div className="glass-panel p-8 rounded-2xl border border-gold-500/30 space-y-6">
              
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Building className="w-6 h-6 text-gold-400" />
                <span>مقر شركة رَكِين بالرياض</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3 bg-navy-950 p-4 rounded-xl border border-navy-800">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white mb-1">العنوان الوطني:</strong>
                    <span>{firmInfo.hq}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-navy-950 p-4 rounded-xl border border-navy-800">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <strong className="block text-white mb-0.5">الهاتف المباشر:</strong>
                    <a href={`tel:${firmInfo.phone}`} className="dir-ltr text-gold-300 font-mono">
                      {firmInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-navy-950 p-4 rounded-xl border border-navy-800">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <strong className="block text-white mb-0.5">البريد الإلكتروني المباشر:</strong>
                    <a href={`mailto:${firmInfo.consultationEmail}`} className="text-gold-300">
                      {firmInfo.consultationEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-navy-950 p-4 rounded-xl border border-navy-800">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-0.5">ساعات العمل:</strong>
                    <span>{firmInfo.workingHours}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Riyadh Dark Map Visual Representation */}
            <div className="glass-panel p-4 rounded-2xl border border-navy-800 relative overflow-hidden h-64 flex items-center justify-center text-center">
              <div className="absolute inset-0 subtle-grid opacity-50" />
              <div className="relative z-10 space-y-2">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-500 flex items-center justify-center text-gold-400 mx-auto shadow-lg">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <h4 className="text-lg font-bold text-white">مركز الملك عبدالله المالي (KAFD)</h4>
                <p className="text-xs text-gold-400 font-mono">24.7661° N, 46.6432° E</p>
                <div className="text-[11px] text-slate-400 bg-navy-950/80 px-3 py-1 rounded-full border border-navy-700 inline-block">
                  الرياض، المملكة العربية السعودية
                </div>
              </div>
            </div>

          </div>

          {/* Consultation Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-gold-500/30 text-right">
              
              {!submitted ? (
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-6 h-6 text-gold-400" />
                    <h3 className="text-2xl font-bold text-white">نموذج طلب الاستشارة القانونية</h3>
                  </div>

                  <p className="text-sm text-slate-300 mb-6">
                    يرجى تعبئة الحقول التالية، وسيقوم الفريق المعني بدراسة الطلب والتواصل معكم فوراً.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">صفة المتقدم</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { id: 'corporate', label: 'شركة / كيان تجاري' },
                          { id: 'investor', label: 'مستثمر محلي/أجنبي' },
                          { id: 'family', label: 'مجموعة عائلية' },
                          { id: 'govt', label: 'جهة حكومية' }
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">الاسم الكامل *</label>
                        <input
                          type="text"
                          required
                          placeholder="الاسم الثلاثي..."
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">اسم المنشأة / الشركة</label>
                        <input
                          type="text"
                          placeholder="شركة..."
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">البريد الإلكتروني *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.sa"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 dir-ltr text-right"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">رقم الجوال التواصل *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+966 50 000 0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 dir-ltr text-right"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">التخصص المطلوب</label>
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

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">تفاصيل الاستشارة</label>
                      <textarea
                        rows="4"
                        placeholder="اكتب لمحة موجزة عن الموضوع المطلوب..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-navy-950 border border-navy-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-500 resize-none"
                      ></textarea>
                    </div>

                    <div className="bg-navy-950 p-3 rounded-lg border border-navy-800 text-[11px] text-slate-400">
                      تنويه نظامي: تعبئة هذا النموذج لا تنشئ علاقة محامٍ وموكل حتى التوقيع على الاتفاقية الرسمية.
                    </div>

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
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-500 text-gold-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">تم استقبال طلبكم بنجاح</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    شكراً لتواصلكم مع شركة رَكِين للمحاماة والاستشارات القانونية. سيتواصل معكم المستشار المختص خلال ساعات الدوام الرسمية.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-navy-800 hover:bg-navy-700 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-colors border border-navy-700 mt-4"
                  >
                    إرسال طلب جديد
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
