import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { pricingData } from '../data/pricingData';

export default function PricingPlans() {
  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200" id="pricing">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
            FLEXIBLE ENGAGEMENT
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            Plans Built Around Your Business.
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
            Tailored account management solutions scaled precisely to your catalog size, GMV targets, and marketplace presence.
          </p>
        </div>

        {/* 3 PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-7 md:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#E2E8F0] text-[#0F172A] border-2 border-[#00C9A7] shadow-sm'
                  : 'bg-white text-[#0F172A] border border-slate-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#041317] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full flex items-center gap-1.5 border border-[#00C9A7]/40">
                  <Sparkles className="w-3.5 h-3.5 text-[#00C9A7]" /> MOST POPULAR CHOICE
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md ${
                    plan.popular ? 'bg-white text-[#041317] border border-slate-300' : 'bg-slate-100 text-[#0F172A]'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0F172A]">
                  {plan.name}
                </h3>
                <p className="text-xs mt-1.5 leading-relaxed min-h-[36px] text-slate-600 font-medium">
                  {plan.tagline}
                </p>

                <div className="my-6 pt-6 border-t border-slate-300">
                  <div className="text-xl font-extrabold text-[#0F172A]">
                    Custom Growth Quote
                  </div>
                  <div className="text-xs mt-1 text-slate-600">
                    Performance-driven revenue share or flat retainer model
                  </div>
                </div>

                {/* FEATURE LIST */}
                <ul className="space-y-3.5 text-xs md:text-sm mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full mt-0.5 bg-[#041317] text-[#00C9A7]">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-800 font-semibold">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BUTTON */}
              <Link
                to={plan.ctaLink}
                className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm tracking-wide transition-all flex items-center justify-center gap-2 group btn-matte-primary shadow-md"
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* CUSTOM ADVISORY BANNER */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-[#0F172A]">Have more than 500+ SKUs or high GMV volume?</h4>
            <p className="text-xs text-slate-500">We offer custom enterprise contracts with dedicated key account executives and SLA guarantees.</p>
          </div>
          <Link
            to="/contact?type=enterprise"
            className="btn-matte-primary px-6 py-2.5 text-xs tracking-wider shrink-0"
          >
            REQUEST ENTERPRISE AUDIT
          </Link>
        </div>

      </div>
    </section>
  );
}
