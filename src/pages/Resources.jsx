import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { blogData } from '../data/blogData';
import CTA from '../components/CTA';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Amazon Strategy', 'Account Management', 'Listing Optimization', 'Flipkart Strategy', 'Meesho Strategy', 'Advertising', 'Operations'];

  const filteredPosts = blogData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      
      {/* HERO BANNER */}
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 md:pb-20 relative overflow-hidden border-b border-[#18343C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20 inline-block shadow-md">
            KNOWLEDGE & STRATEGY HUB
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Marketplace Resources & Guides.
          </h1>
          <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Actionable strategies, algorithm updates, PPC playbooks, and account health compliance guides from BIZMAKER intelligence experts.
          </p>

          {/* SEARCH BAR */}
          <div className="pt-4 relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 mt-2" />
            <input 
              type="text"
              placeholder="Search articles e.g. Amazon PPC, Flipkart Assured..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 text-white placeholder-slate-400 border border-white/20 focus:outline-none focus:border-[#00C9A7] text-sm"
            />
          </div>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          
          {/* CATEGORY FILTER */}
          <div className="flex overflow-x-auto gap-2 mb-10 pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#041317] text-[#00C9A7]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-[#00C9A7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ARTICLES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((article) => (
              <div key={article.id} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-3">
                    <span className="text-[#00C9A7] bg-[#00C9A7]/10 px-2.5 py-0.5 rounded-md border border-[#00C9A7]/20">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#00C9A7] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <Link
                  to={`/resources/${article.slug}`}
                  className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#0F172A] group-hover:text-[#00C9A7] transition-colors"
                >
                  <span>READ FULL ARTICLE</span>
                  <ArrowRight className="w-4 h-4 text-[#00C9A7] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTA />
    </main>
  );
}
