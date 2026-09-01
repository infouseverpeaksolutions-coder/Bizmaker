import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BeforeAfter() {
  const beforeList = [
    "Manual Operations & Constant Daily Chaos",
    "Inconsistent Listings & Unindexed Keywords",
    "Stock-outs & Frequent Inventory Breaches",
    "Unoptimized Ads Bleeding ACoS Budget",
    "No Clear Profitability or Return Reporting",
    "Overwhelmed Seller Handling Everything Alone"
  ];

  const afterList = [
    "Fully Managed Turnkey Marketplace Operations",
    "SEO-Optimized Catalog & Rich A+ EBC Content",
    "Automated Inventory Monitoring & Restock Alerts",
    "High-ROAS Optimized Advertising Campaigns",
    "Transparent Weekly Profit & Loss Performance Reports",
    "Dedicated Team of Senior Marketplace Managers"
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
            THE BIZMAKER ADVANTAGE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            From Marketplace Chaos to Managed Growth.
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
            See the transformative difference between running your seller account manually versus having enterprise experts at your side.
          </p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
          
          {/* BEFORE COLUMN */}
          <div className="lg:col-span-5 bg-white p-7 md:p-8 rounded-2xl border border-red-200 shadow-md relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-red-100">
              <div className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-lg font-extrabold uppercase tracking-wide">BEFORE BIZMAKER</h3>
              </div>
              <span className="text-xs font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                Unmanaged Chaos
              </span>
            </div>

            <ul className="space-y-4">
              {beforeList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 border border-red-200 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ARROW CONNECTOR */}
          <div className="lg:col-span-1 flex justify-center items-center my-2 lg:my-0">
            <div className="w-12 h-12 rounded-full bg-[#041317] text-[#00C9A7] border border-[#18343C] flex items-center justify-center shadow-lg transform lg:rotate-0 rotate-90">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

          {/* AFTER COLUMN */}
          <div className="lg:col-span-5 bg-[#041317] text-white p-7 md:p-8 rounded-2xl border border-[#00C9A7]/40 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#18343C]">
              <div className="flex items-center gap-2 text-[#00C9A7]">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">AFTER BIZMAKER</h3>
              </div>
              <span className="text-xs font-bold text-[#041317] bg-[#00C9A7] px-2.5 py-1 rounded-md">
                Predictable Growth
              </span>
            </div>

            <ul className="space-y-4">
              {afterList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#C7D2D9] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#00C9A7] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
