import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const IconComponent = Icons[service.icon] || Icons.CheckCircle;

  return (
    <Link 
      to={`/services#${service.slug}`} 
      className="bg-white p-6 md:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group relative overflow-hidden focus:outline-none hover:shadow-xl hover:border-[#00C9A7] transition-all duration-300"
    >
      {/* Subtle Top Border Highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#00C9A7] transition-colors duration-300" />

      <div>
        {/* TOP ROW: Number & Icon Container */}
        <div className="flex items-center justify-between mb-5">
          {/* WHITE NUMBER PILL BACKGROUND DEFAULT — TURNS GREY ON HOVER */}
          <span className="text-sm font-black text-[#0F172A] bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-sm group-hover:bg-[#E2E8F0] group-hover:border-slate-300 group-hover:text-[#00C9A7] transition-all duration-300">
            {service.id}
          </span>

          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#0F172A] group-hover:bg-[#E2E8F0] group-hover:border-slate-300 group-hover:text-[#00C9A7] transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
          </div>
        </div>

        {/* TITLE — CLEAN SEMIBOLD HEADING WITHOUT HEAVY BOLDNESS */}
        <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] group-hover:text-[#00C9A7] transition-colors leading-snug">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
          {service.shortDesc}
        </p>
      </div>

      {/* FOOTER LINK */}
      <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0F172A] group-hover:text-[#00C9A7] transition-colors">
        <span className="tracking-wider">LEARN MORE</span>
        <ArrowRight className="w-4 h-4 text-[#00C9A7] transition-transform group-hover:translate-x-1.5" />
      </div>
    </Link>
  );
}
