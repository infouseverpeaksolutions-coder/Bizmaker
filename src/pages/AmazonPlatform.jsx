import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

export default function AmazonPlatform() {
  const amazonServices = [
    { title: "Amazon Seller & Vendor Central Management", desc: "Full ownership of daily operations, case logs, brand gating, and policy compliance." },
    { title: "SEO Listing Optimization & A+ Content", desc: "Indexed titles, keyword bullet points, Brand Story modules, and high-converting A+ EBC graphics." },
    { title: "Amazon PPC Advertising (Sponsored Ads)", desc: "Sponsored Products, Sponsored Brands, Video Ads, and DSP campaigns optimized for target ACoS & TACoS." },
    { title: "FBA Restock & Inventory Management", desc: "Prevent stock-outs, manage restock limits, avoid long-term storage fees, and streamline inbound shipments." },
    { title: "Buy Box Win Rate Maximization", desc: "Strategic repricing, MAP enforcement, reseller tracking, and automated competitor monitoring." },
    { title: "Account Health & POA Suspension Defense", desc: "24/7 ODR/LDR metric auditing and custom Plan of Action writing for suppressed ASINs." }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      
      {/* HERO BANNER */}
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 md:pb-20 relative overflow-hidden border-b border-[#18343C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900] bg-[#FF9900]/10 px-3.5 py-1 rounded-full border border-[#FF9900]/30 inline-block shadow-md">
              AMAZON EXPERT DESK
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Amazon Seller & Vendor Account Management.
            </h1>
            <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed">
              Master the Amazon algorithm, win the Buy Box, and scale your Amazon store profitably with BIZMAKER's dedicated Amazon operations team.
            </p>

            <div className="pt-2">
              <Link to="/contact?platform=amazon" className="btn-matte-primary px-7 py-3.5 text-xs font-bold tracking-wider">
                GET AMAZON ACCOUNT AUDIT →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-12 bg-white text-[#0F172A] border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-3xl md:text-4xl font-extrabold text-[#00C9A7]">+42%</div>
              <div className="text-xs text-slate-600 font-medium mt-1">Average Organic Revenue Lift</div>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-3xl md:text-4xl font-extrabold text-[#FF9900]">17.2%</div>
              <div className="text-xs text-slate-600 font-medium mt-1">Average Optimized PPC ACoS</div>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-3xl md:text-4xl font-extrabold text-[#18D6B5]">99.4%</div>
              <div className="text-xs text-slate-600 font-medium mt-1">Account Health Maintenance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Dedicated Amazon Management Solutions</h2>
            <p className="text-sm text-slate-600 mt-2">Comprehensive execution across every Amazon Seller Central module.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amazonServices.map((item, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/20 font-black flex items-center justify-center mb-4">
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
