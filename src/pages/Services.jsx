import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import CTA from '../components/CTA';

export default function Services() {
  const [selectedService, setSelectedService] = useState(servicesData[0].id);

  const activeService = servicesData.find(s => s.id === selectedService) || servicesData[0];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      
      {/* HERO BANNER — IDENTICAL SPACING & BACKGROUND TO HOMEPAGE HERO */}
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 md:pb-20 relative overflow-hidden text-center border-b border-[#18343C]">
        {/* Subtle Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00C9A7]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20 inline-block shadow-md">
            ENTERPRISE SERVICE SUITE
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Complete E-Commerce & Marketplace Management.
          </h1>
          <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From day-to-day seller operations to high-ROAS PPC advertising, catalog SEO, and account health reinstatement — we manage every facet of your marketplace business.
          </p>
        </div>
      </section>

      {/* INTERACTIVE SERVICE EXPLORER & DETAILED LIST */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          
          {/* TAB EXPLORER */}
          <div className="bg-slate-200/80 p-2 rounded-2xl border border-slate-300 mb-12 flex overflow-x-auto gap-2 no-scrollbar">
            {servicesData.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={`px-4 py-3 rounded-xl font-bold text-xs md:text-sm whitespace-nowrap transition-all ${
                  selectedService === s.id
                    ? 'bg-[#041317] text-[#00C9A7] shadow-lg'
                    : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/60'
                }`}
              >
                {s.id}. {s.title}
              </button>
            ))}
          </div>

          {/* ACTIVE SERVICE DETAILED DISPLAY */}
          <div className="bg-white p-8 md:p-12 mb-16 rounded-2xl border border-slate-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-black text-[#00C9A7] bg-[#00C9A7]/10 px-3 py-1 rounded-md border border-[#00C9A7]/20">
                  SERVICE MODULE {activeService.id}
                </span>

                <h2 className="text-2xl md:text-4xl font-semibold text-[#0F172A]">
                  {activeService.title}
                </h2>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {activeService.fullDesc}
                </p>

                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-xs font-bold uppercase text-slate-700 tracking-wider mb-3">
                    Deliverables & Operational Scope:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                    {activeService.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#00C9A7] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to={`/contact?service=${activeService.slug}`}
                    className="btn-matte-primary px-6 py-3 text-xs font-bold tracking-wider"
                  >
                    GET STARTED WITH THIS SERVICE →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 matte-card-dark p-8 rounded-2xl border border-[#18343C] shadow-2xl space-y-4 text-white">
                <div className="flex items-center gap-2 text-[#00C9A7]">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">BIZMAKER SLA GUARANTEE</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Zero Operational Breaches.
                </h3>
                <p className="text-xs text-[#C7D2D9] leading-relaxed">
                  We guarantee 99%+ Account Health metrics, 24-hour SLA dispatch compliance, and real-time support tickets for all service tiers.
                </p>
                <div className="pt-4 border-t border-[#18343C] text-xs text-[#7F929C]">
                  Includes weekly executive summary calls and dedicated WhatsApp operations group.
                </div>
              </div>

            </div>
          </div>

          {/* ALL 8 SERVICES GRID */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-extrabold text-[#0F172A]">Full Service Catalog Breakdown</h2>
            <p className="text-xs text-slate-500 mt-1">Explore all individual core capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((s) => (
              <div key={s.id} id={s.slug} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <span className="text-xs font-bold text-[#00C9A7] bg-[#00C9A7]/10 px-2.5 py-0.5 rounded-md mb-3 inline-block">
                    {s.id}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{s.shortDesc}</p>
                </div>

                <Link
                  to={`/contact?service=${s.slug}`}
                  className="pt-4 border-t border-slate-200 text-xs font-bold text-[#0F172A] hover:text-[#00C9A7] flex items-center justify-between transition-colors"
                >
                  <span>REQUEST CAPABILITY AUDIT</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00C9A7]" />
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
