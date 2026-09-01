import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { blogData } from '../data/blogData';
import CTA from '../components/CTA';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = blogData.find(a => a.slug === slug) || blogData[0];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      
      {/* HEADER BANNER */}
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-14 border-b border-[#18343C]">
        <div className="container-custom max-w-4xl mx-auto">
          <Link to="/resources" className="inline-flex items-center gap-2 text-xs font-bold text-[#00C9A7] mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> BACK TO ALL RESOURCES
          </Link>

          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20 block w-fit">
            {article.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-xs text-[#7F929C]">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#00C9A7]" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#00C9A7]" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00C9A7]" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY CONTENT */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-md prose max-w-none text-slate-700 leading-relaxed space-y-6">
            <p className="text-lg font-semibold text-[#0F172A] border-l-4 border-[#00C9A7] pl-4 italic">
              "{article.excerpt}"
            </p>

            <div 
              className="space-y-4"
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />

            <div className="pt-8 mt-8 border-t border-slate-200 flex items-center justify-between">
              <div className="text-xs font-bold text-slate-500">
                Published by BIZMAKER Knowledge Desk
              </div>
              <Link to="/contact" className="btn-matte-primary px-5 py-2 text-xs font-bold">
                TALK TO AN EXPERT
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
