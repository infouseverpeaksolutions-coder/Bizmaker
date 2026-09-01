export default function Stats({ customData }) {
  const statsList = customData || [
    {
      value: "900+",
      label: "Sellers Managed",
      desc: "Across fashion, electronics, beauty & FMCG categories."
    },
    {
      value: "12M+",
      label: "Orders Managed",
      desc: "Dispatched flawlessly within strict platform SLA targets."
    },
    {
      value: "35%+",
      label: "Average Growth",
      desc: "Consistent quarter-over-quarter revenue velocity increase."
    },
    {
      value: "99%",
      label: "Account Health",
      desc: "Zero-tolerance policy adherence and proactive POA defense."
    }
  ];

  return (
    <section className="bg-[#F8FAFC] text-[#0F172A] py-16 md:py-20 border-y border-slate-200 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
            Built Around Seller Growth.
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
            Data-backed marketplace operations driving consistent revenue expansion for brands across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm text-center relative group hover:border-[#00C9A7] hover:shadow-lg transition-all"
            >
              {/* Corner Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#00C9A7] to-transparent rounded-full opacity-60 group-hover:w-24 transition-all duration-300" />
              
              <div className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight group-hover:text-[#00C9A7] transition-colors">
                {stat.value}
              </div>
              <div className="text-base font-bold text-[#0F172A] mt-2">
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
