import React from 'react';
import { Shield, Target, Eye, Award, CheckCircle2, Building, Scale, ArrowLeft } from 'lucide-react';
import { firmInfo } from '../data/firmData';

export default function AboutSection({ onOpenConsultation }) {
  const values = [
    {
      title: "النزاهة والأصالة النظامية",
      desc: "نلتزم بأعلى قواعد السلوك المهني والشرعي في تقديم المشورة القانونية دون مجاملة أو تهاون."
    },
    {
      title: "السرية المطلقة والتفرد",
      desc: "نحيط كافة بيانات وقضايا صفقات العملاء بسياجٍ حصين من التكتم والاحترافية العالية."
    },
    {
      title: "الاستباقية والدقة الهيكلية",
      desc: "نقرأ التحولات التشريعية قبل صدورها لتجنب النزاعات وصياغة بنود تحمي المستقبل المالي."
    },
    {
      title: "الشراكة الاستراتيجية",
      desc: "لا نتعامل كطرف خارجي، بل كأحد أركان التخطيط الاستراتيجي في المنشأة لضمان نموها."
    }
  ];

  const approachPillars = [
    {
      number: "01",
      title: "الدقة والصياغة المحكمة",
      desc: "تفكيك أدق التفاصيل النظامية وصياغة العقود بلغة قانونية لا تحتمل التأويل وتضمن قوة الموقف القضائي."
    },
    {
      number: "02",
      title: "السرية والخصوصية المطبقة",
      desc: "الالتزام التام ببروتوكولات الأمان وحظر الإفصاح وفق التشريعات السعودية وأعلى المعايير الدولية."
    },
    {
      number: "03",
      title: "الوضوح والحلول الناجزة",
      desc: "تقديم مرئيات ونتائج مباشرة بدون تعقيد لفظي، متبوعة بتوصيات استراتيجية قابلة للتطبيق."
    }
  ];

  return (
    <div className="space-y-24 py-12">
      
      {/* Brand Story & Position */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 bg-navy-900 border border-gold-500/30 px-3.5 py-1.5 rounded-full">
              <Building className="w-4 h-4" />
              <span>مكانة مرموقة في قلب الرياض</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              نحنُ <span className="text-gold-gradient">رَكِين</span>... صرحٌ قانوني يستند إلى الرصانة والخبرة السيادية
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              تأسست شركة "رَكِين للمحاماة والاستشارات القانونية" لتكون الشريك الموثوق لكبرى الشركات والقطاعات الاستراتيجية والعائلات التجارية الكبرى في المملكة العربية السعودية. اتخذنا من مركز الملك عبدالله المالي بالرياض (KAFD) مقراً رئيساً لنكون في قلب المركز المالي والتنظيمي للمملكة.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              نحن لا نكتفي بتقديم الرأي القانوني التقليدي، بل نربطه بالرؤية الاستثمارية الشاملة ورؤية المملكة 2030، حيث يلتقي التجديد التشريعي بالخبرة الفقهية والنظامية العميقة.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="bg-navy-900 p-4 rounded-xl border border-navy-800">
                <div className="text-gold-400 font-bold text-lg mb-1">الرؤية والرسالة</div>
                <div className="text-xs text-slate-300 leading-snug">
                  أن نكون المرجع القيادي الأول للاستشارات القانونية والصفقات الكبرى بالرياض والمنطقة.
                </div>
              </div>
              <div className="bg-navy-900 p-4 rounded-xl border border-navy-800">
                <div className="text-gold-400 font-bold text-lg mb-1">الحوكمة والتفرد</div>
                <div className="text-xs text-slate-300 leading-snug">
                  إشراف مباشر من كبار الشركاء على كافة ملفات وقضايا عملاء الشركة.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl group">
              <img 
                src="/images/boardroom.jpg" 
                alt="قاعة الاجتماعات الرئيسية في شركة ركين بالرياض" 
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 right-6 left-6 p-4 glass-panel rounded-xl border border-gold-500/30">
                <div className="text-white font-bold text-base">مقر المكتب بالرياض</div>
                <div className="text-xs text-gold-400 font-mono mt-0.5">{firmInfo.hq}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Our Approach (منهجنا القانوني) */}
      <div className="bg-navy-900/60 py-16 border-y border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest bg-navy-950 px-4 py-1.5 rounded-full border border-gold-500/20">
              منهجية العمل
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
              منهجنا القانوني: <span className="text-gold-gradient">دقةٌ، سريةٌ، ووضوح</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              ثلاث قواعد جوهرية تحكم طريقة معالجتنا لكل عقد، صفقة، أو قضية تجارية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachPillars.map((p, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                <div className="text-5xl font-extrabold text-gold-500/20 mb-4 font-mono dir-ltr text-right group-hover:text-gold-500/40 transition-colors">
                  {p.number}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {p.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Values Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right mb-12">
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1 rounded-full border border-gold-500/20">
            دستور العمل
          </span>
          <h3 className="text-3xl font-extrabold text-white mt-3">
            قيمنا الجوهرية
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-navy-900 border border-navy-800 p-6 rounded-2xl hover:border-gold-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{v.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-gold-500/20 transition-all inline-flex items-center gap-2"
          >
            <span>حجز استشارة مع الشريك الرئيس</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
}
