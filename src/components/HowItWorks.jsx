import { Search, Sparkles, Sliders, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "ANALYZE",
      icon: Search,
      desc: "We understand your products, marketplace accounts and current performance with a deep technical audit.",
      phase: "PHASE 1 OF 4"
    },
    {
      num: "02",
      title: "OPTIMIZE",
      icon: Sparkles,
      desc: "We identify immediate opportunities across catalog SEO, pricing models, inventory rules and PPC campaigns.",
      phase: "PHASE 2 OF 4"
    },
    {
      num: "03",
      title: "MANAGE",
      icon: Sliders,
      desc: "Our dedicated marketplace operations team handles your day-to-day dispatch SLAs, case logs, and health.",
      phase: "PHASE 3 OF 4"
    },
    {
      num: "04",
      title: "GROW",
      icon: TrendingUp,
      desc: "You get streamlined operations, higher product visibility, and a scalable multi-marketplace revenue stream.",
      phase: "PHASE 4 OF 4"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
            OUR OPERATIONAL FRAMEWORK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            How We Work With You.
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
            A battle-tested 4-step framework designed to eliminate marketplace chaos and unlock predictable sales velocity.
          </p>
        </div>

        {/* 4 STEPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -z-0 -translate-y-12" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="bg-[#F8FAFC] p-7 rounded-2xl border border-slate-200 shadow-sm relative z-10 flex flex-col justify-between group hover:shadow-xl hover:border-[#00C9A7] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* WHITE NUMBER PILL BACKGROUND DEFAULT — TURNS GREY ON HOVER */}
                    <span className="text-xs font-black text-[#0F172A] bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-sm group-hover:bg-[#E2E8F0] group-hover:border-slate-300 group-hover:text-[#00C9A7] transition-all duration-300">
                      {step.num}
                    </span>

                    {/* TOP-RIGHT ICON CONTAINER */}
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-[#0F172A] group-hover:bg-[#E2E8F0] group-hover:border-slate-300 group-hover:text-[#00C9A7] transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  {/* TITLE — CLEAN SEMIBOLD HEADING WITHOUT HEAVY BOLDNESS */}
                  <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#00C9A7] transition-colors mb-2 tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-2 text-[11px] font-extrabold text-[#00C9A7]">
                  <span className="w-2 h-2 rounded-full bg-[#00C9A7]" />
                  <span>{step.phase}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
