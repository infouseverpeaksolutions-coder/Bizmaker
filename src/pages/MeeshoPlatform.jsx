import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

export default function MeeshoPlatform() {
  const meeshoServices = [
    { title: "Meesho Supplier Panel Onboarding & Setup", desc: "Fast-track supplier registration, bank verification, GST mapping, and tax compliance." },
    { title: "Bulk Catalog Uploads & Price Tiering", desc: "Upload multi-variant product lines with optimized titles, imagery, and wholesale volume pricing." },
    { title: "RTO & Return Mitigation Strategies", desc: "Analyze return patterns, implement buyer verification steps, and protect profit margins." },
    { title: "Meesho Ad Campaign Management", desc: "Leverage Meesho's internal bidding algorithm for maximum catalog impressions and order velocity." },
    { title: "Fulfillment & Dispatch SLA Maintenance", desc: "Track pending orders, coordinate courier handoffs, and maintain 4.5★ supplier ratings." },
    { title: "Payment Settlement & Margin Audit", desc: "Audit bi-weekly payouts, zero-commission calculations, and logistics deduction statements." }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 md:pb-20 relative overflow-hidden border-b border-[#18343C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F43397]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F43397] bg-[#F43397]/10 px-3.5 py-1 rounded-full border border-[#F43397]/30 inline-block shadow-md">
              MEESHO EXPERT DESK
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Meesho Supplier Account Management.
            </h1>
            <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed">
              Tap into India's vast Tier 2/3 consumer base with zero-commission pricing strategies, bulk upload management, and high fulfillment velocity.
            </p>

            <div className="pt-2">
              <Link to="/contact?platform=meesho" className="btn-matte-primary px-7 py-3.5 text-xs font-bold tracking-wider">
                GET MEESHO ACCOUNT AUDIT →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Meesho Scale Solutions</h2>
            <p className="text-sm text-slate-600 mt-2">Tailored operations for high-volume social e-commerce success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meeshoServices.map((item, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F43397]/10 text-[#F43397] border border-[#F43397]/30 font-black flex items-center justify-center mb-4">
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
