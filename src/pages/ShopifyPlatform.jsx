import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

export default function ShopifyPlatform() {
  const shopsyServices = [
    { title: "Shopsy Reseller Hub Architecture & Onboarding", desc: "Catalog registration, category taxonomy mapping, price tiering, and high-converting product pages." },
    { title: "Multi-Channel Catalog & Inventory Sync", desc: "Synchronize stock automatically between Shopsy, Amazon FBA, Shiprocket, and central ERP systems." },
    { title: "Margin & Reseller Conversion Optimization", desc: "Set up attractive margin structures for social sellers and optimize dispatch SLA performance." },
    { title: "Shopsy In-App Advertising & Flash Promotions", desc: "Configure targeted Shopsy ad campaigns, deal participation, and category banner positioning." },
    { title: "Analytics & Payout Reconciliation", desc: "Real-time payout tracking, return (RTO) mitigation, and contribution margin reporting." },
    { title: "Fulfillment & Dispatch SLA Maintenance", desc: "Automated order tracking updates, NDR management, and courier partner integration." }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 md:pb-20 relative overflow-hidden border-b border-[#18343C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 px-3.5 py-1 rounded-full border border-[#7C3AED]/30 inline-block shadow-md">
              SHOPSY DESK
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Shopsy Store Management & Growth.
            </h1>
            <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed">
              Unlock millions of hyper-local resellers across India with optimized Shopsy catalog listings, promotional pricing, and fast dispatch execution.
            </p>

            <div className="pt-2">
              <Link to="/contact?platform=shopsy" className="btn-matte-primary px-7 py-3.5 text-xs font-bold tracking-wider">
                GET SHOPSY STORE AUDIT →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Shopsy Services & Capabilities</h2>
            <p className="text-sm text-slate-600 mt-2">Professional management for high-growth reseller marketplace brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopsyServices.map((item, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/30 font-black flex items-center justify-center mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
