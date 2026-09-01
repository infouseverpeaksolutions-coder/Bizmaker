import { Link } from 'react-router-dom';
import { Target, Eye } from 'lucide-react';
import CTA from '../components/CTA';

export default function About() {
  const values = [
    { title: "Seller First Philosophy", desc: "Every operational decision is made with seller profitability and metric safety as the top priority." },
    { title: "Algorithmic Precision", desc: "We don't guess; we leverage data analytics, search volume trends, and competitor tracking." },
    { title: "100% Transparency", desc: "No obscured ad budgets, hidden commissions, or vague performance numbers." },
    { title: "Turnkey Ownership", desc: "We act as your internal marketplace executive team, removing operational burdens completely." }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      
      {/* HERO BANNER */}
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 md:pb-20 relative overflow-hidden border-b border-[#18343C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00C9A7]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20 inline-block shadow-md">
            OUR PURPOSE & VISION
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            We Help Sellers Build Better Marketplace Businesses.
          </h1>
          <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            BIZMAKER was founded to bridge the gap between product creators and complex e-commerce marketplaces like Amazon, Flipkart, Meesho, Shopsy, eBay, and Etsy.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* MISSION */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 rounded-xl bg-[#041317] text-[#00C9A7] border border-[#18343C] w-fit mb-4">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#00C9A7] uppercase tracking-wider">Our Mission</span>
              <h2 className="text-2xl font-black text-[#0F172A] mt-2 mb-3">
                Simplify & Scale Marketplace Selling.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                "To make marketplace management simpler, more efficient and more scalable for growing sellers."
              </p>
            </div>

            {/* VISION */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="p-3 rounded-xl bg-[#041317] text-[#00C9A7] border border-[#18343C] w-fit mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#00C9A7] uppercase tracking-wider">Our Vision</span>
              <h2 className="text-2xl font-black text-[#0F172A] mt-2 mb-3">
                India's Premier E-Commerce Engine.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower 10,000+ brands and manufacturers to build sustainable, highly profitable direct-to-consumer and marketplace businesses.
              </p>
            </div>

          </div>

          {/* COMPANY STORY */}
          <div className="matte-card-dark p-8 md:p-12 text-white mb-16 relative overflow-hidden shadow-2xl">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-[#00C9A7] uppercase tracking-widest">THE BIZMAKER STORY</span>
              <h2 className="text-3xl font-extrabold text-white">Built by Sellers, for Sellers.</h2>
              <p className="text-[#C7D2D9] text-sm leading-relaxed">
                Running an e-commerce brand today requires mastering dozens of fragmented platforms, policy guidelines, ad bidding engines, and logistics requirements. Most business owners spend 80% of their time handling case logs, suppressed listings, and order SLA breaches instead of building exceptional products.
              </p>
              <p className="text-[#C7D2D9] text-sm leading-relaxed">
                BIZMAKER was established as an enterprise-grade operations consulting firm that assumes full account ownership. With specialized departments for Amazon, Flipkart, Meesho, Shopsy, eBay, and Etsy, we provide sellers with peace of mind and data-backed scale.
              </p>
            </div>
          </div>

          {/* VALUES */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-extrabold text-[#0F172A]">Our Core Values</h2>
            <p className="text-xs text-slate-500 mt-1">The principles that guide our day-to-day client operations</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-black text-[#00C9A7] bg-[#00C9A7]/10 px-2.5 py-1 rounded-md mb-3 inline-block">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTA />
    </main>
  );
}
