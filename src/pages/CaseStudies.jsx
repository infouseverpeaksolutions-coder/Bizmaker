import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import CTA from '../components/CTA';

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      
      {/* HERO BANNER */}
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 md:pb-20 relative overflow-hidden border-b border-[#18343C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00C9A7]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20 inline-block shadow-md">
            PROVEN PERFORMANCE PROOF
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Real Sellers. Real Results.
          </h1>
          <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Explore how BIZMAKER has empowered Indian brand owners and e-commerce sellers to double revenues, slash return rates, and achieve sustainable multi-marketplace profitability.
          </p>
        </div>
      </section>

      {/* DETAILED CASE STUDIES LIST */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom space-y-12">
          {caseStudiesData.map((cs) => (
            <div 
              key={cs.id} 
              id={cs.id}
              className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-[#00C9A7] bg-[#00C9A7]/10 px-3 py-1 rounded-md border border-[#00C9A7]/20">
                      {cs.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {cs.industry} • {cs.marketplace}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A]">
                    {cs.title}
                  </h2>

                  <div className="space-y-4 text-xs md:text-sm text-slate-600">
                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
                      <strong className="text-[#0F172A] block mb-1">The Operational Challenge:</strong>
                      {cs.challenge}
                    </div>

                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
                      <strong className="text-[#0F172A] block mb-1">BIZMAKER Strategic Intervention:</strong>
                      {cs.strategy}
                    </div>

                    <div className="bg-[#00C9A7]/10 p-4 rounded-xl border border-[#00C9A7]/30 text-[#00C9A7]">
                      <strong className="text-[#00C9A7] block mb-1">Measured Business Result:</strong>
                      {cs.result}
                    </div>
                  </div>

                  {/* CLIENT QUOTE */}
                  <div className="p-4 rounded-xl matte-card-dark text-white flex items-start gap-3 border border-[#18343C]">
                    <Quote className="w-6 h-6 text-[#00C9A7] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs md:text-sm italic text-[#C7D2D9] mb-2">
                        "{cs.quote}"
                      </p>
                      <div className="text-xs font-bold text-[#00C9A7]">
                        — {cs.clientName}, <span className="text-[#7F929C] font-normal">{cs.clientRole}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* METRICS DISPLAY COLUMN */}
                <div className="lg:col-span-5 matte-card-dark text-white p-8 rounded-2xl border border-[#18343C] shadow-2xl space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#7F929C] border-b border-[#18343C] pb-3">
                    Key Performance Indicators
                  </h3>

                  <div className="space-y-4">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="bg-[#0B2029] p-4 rounded-xl border border-[#18343C] flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#7F929C]">{m.label}</span>
                        <span className="text-2xl font-black text-[#00C9A7]">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/contact?caseStudy=${cs.id}`}
                    className="btn-matte-primary w-full py-3.5 text-xs font-bold tracking-wider text-center flex justify-center items-center gap-2"
                  >
                    <span>REPLICATE THESE RESULTS</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
