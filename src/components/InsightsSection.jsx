import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowLeft, X, Mail, BookOpen, Share2 } from 'lucide-react';
import { insightsArticles } from '../data/firmData';

export default function InsightsSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const categories = ['all', 'الأنظمة والتطوير التشريعي', 'حوكمة الشركات', 'العقار والبنية التحتية', 'التقاضي والتحكيم'];

  const filteredArticles = insightsArticles.filter(art => {
    const matchesSearch = art.title.includes(searchQuery) || art.excerpt.includes(searchQuery) || art.author.includes(searchQuery);
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <div className="py-12 space-y-12">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-gold-500/20">
            التحليلات والدراسات
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
            الآراء والمعرفة <span className="text-gold-gradient">التنظيمية</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            مقالات وأحاث قانونية رصينة يكتبها شرفاء ومستشارو ركين، لقراءة اتجاهات البيئة التنظيمية والتعديلات التشريعية بالمملكة.
          </p>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-4 rounded-2xl border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
            <input
              type="text"
              placeholder="البحث في المقالات والأبحاث..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-950 border border-navy-700 rounded-xl pr-10 pl-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gold-500 text-navy-950 font-bold'
                    : 'bg-navy-950 text-slate-300 hover:text-white border border-navy-800'
                }`}
              >
                {cat === 'all' ? 'جميع التصنيفات' : cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Articles Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group border border-navy-800 hover:border-gold-500/40 transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-navy-950">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <span className="absolute top-4 right-4 bg-gold-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {article.category}
                </span>
              </div>

              <div className="p-6 space-y-4 text-right flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-500" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-500" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-800/80 flex items-center justify-between text-xs font-semibold text-gold-400 group-hover:text-gold-300">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    بقلم: {article.author}
                  </span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold-500/30 text-center max-w-4xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mx-auto">
            <Mail className="w-7 h-7" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            اشترك في <span className="text-gold-gradient">النشرة التنظيمية لرَكِين</span>
          </h3>

          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            احصل شهرياً على تحليلات مركزة للتعديلات التشريعية، قرارات مجلس الوزراء، والأنظمة الصادرة حديثاً في المملكة العربية السعودية.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="أدخل بريدك الإلكتروني المهني..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-navy-950 border border-navy-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 dir-ltr text-right"
              />
              <button
                type="submit"
                className="w-full sm:w-auto whitespace-nowrap bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-lg shadow-gold-500/20"
              >
                اشتراك
              </button>
            </form>
          ) : (
            <div className="bg-navy-950 p-4 rounded-xl border border-gold-500/30 text-gold-400 text-sm font-semibold max-w-md mx-auto">
              شُكراً لاشتراككم. ستصلكم النشرة التنظيمية القادمة فور صدورها.
            </div>
          )}
        </div>
      </div>

      {/* Full Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="bg-navy-900 border border-gold-500/40 rounded-2xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[92vh] overflow-y-auto text-right">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 left-6 text-slate-400 hover:text-white p-2 rounded-xl bg-navy-800 border border-navy-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Article Top Meta */}
            <div className="space-y-4 mb-8">
              <span className="bg-gold-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full inline-block">
                {selectedArticle.category}
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-2 border-b border-navy-800 pb-4">
                <span className="flex items-center gap-1.5 text-gold-300 font-semibold">
                  <User className="w-4 h-4 text-gold-400" />
                  بقلم: {selectedArticle.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gold-400" />
                  {selectedArticle.readTime}
                </span>
              </div>
            </div>

            {/* Article HTML Content */}
            <div 
              className="prose prose-invert max-w-none text-slate-200 text-base leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-8 border-t border-navy-800 mt-8">
              <div className="text-xs text-slate-400">
                شركة رَكِين للمحاماة والاستشارات القانونية — قسم الأبحاث والتطوير التشريعي
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-lg"
              >
                إغلاق المقال
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
