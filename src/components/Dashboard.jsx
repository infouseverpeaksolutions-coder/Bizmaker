import { useState } from 'react';
import { TrendingUp, ShoppingBag, CheckCircle2, ShieldCheck, ArrowUpRight, BarChart2 } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('7d');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Subtle Glow Behind Dashboard */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#0BC5AD]/20 to-[#081936] rounded-3xl blur-2xl opacity-60" />

      {/* Main 3D Matte Frame */}
      <div className="relative dashboard-3d-frame p-5 md:p-6 text-white overflow-hidden">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#0BC5AD] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              BIZMAKER Core Suite • Live Operations
            </span>
          </div>

          <div className="flex items-center bg-black/40 rounded-lg p-1 border border-white/10 text-xs">
            {['24h', '7d', '30d'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-md transition-all font-semibold ${
                  activeTab === tab 
                    ? 'bg-[#0BC5AD] text-[#07142C] shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {/* TOTAL SALES */}
          <div className="bg-[#07142C]/90 p-3.5 rounded-xl border border-white/10 shadow-inner">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Total Sales</div>
            <div className="text-xl md:text-2xl font-extrabold text-white mt-1">₹12.8L</div>
            <div className="flex items-center text-[11px] font-bold text-[#0BC5AD] mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +32.4% vs last mo
            </div>
          </div>

          {/* ORDERS */}
          <div className="bg-[#07142C]/90 p-3.5 rounded-xl border border-white/10 shadow-inner">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Orders</div>
            <div className="text-xl md:text-2xl font-extrabold text-white mt-1">3,842</div>
            <div className="flex items-center text-[11px] font-bold text-[#0BC5AD] mt-1">
              <ShoppingBag className="w-3 h-3 mr-1" />
              99.4% Fulfillment
            </div>
          </div>

          {/* CONVERSION */}
          <div className="bg-[#07142C]/90 p-3.5 rounded-xl border border-white/10 shadow-inner">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Conversion</div>
            <div className="text-xl md:text-2xl font-extrabold text-[#0BC5AD] mt-1">4.82%</div>
            <div className="flex items-center text-[11px] font-medium text-slate-400 mt-1">
              <ArrowUpRight className="w-3 h-3 mr-1 text-[#0BC5AD]" />
              Top 2% Benchmark
            </div>
          </div>

          {/* ACCOUNT HEALTH */}
          <div className="bg-[#07142C]/90 p-3.5 rounded-xl border border-white/10 shadow-inner">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Account Health</div>
            <div className="text-xl md:text-2xl font-extrabold text-white mt-1">98%</div>
            <div className="flex items-center text-[11px] font-bold text-emerald-400 mt-1">
              <ShieldCheck className="w-3 h-3 mr-1" />
              Zero Policy Risk
            </div>
          </div>
        </div>

        {/* GRAPH SECTION */}
        <div className="bg-[#07142C]/80 p-4 rounded-xl border border-white/10 mb-5 relative">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <BarChart2 className="w-4 h-4 text-[#0BC5AD]" />
              Revenue Velocity Trend (₹ Lakhs)
            </span>
            <span className="text-[11px] text-[#0BC5AD] bg-[#0BC5AD]/10 px-2 py-0.5 rounded-full font-medium">
              Peak: ₹1.45L/day
            </span>
          </div>

          {/* SVG Sales Trend Graph */}
          <div className="h-32 w-full relative pt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0BC5AD" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0BC5AD" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
              <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
              <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />

              {/* Gradient Fill */}
              <path
                d="M 0,90 Q 60,70 100,55 T 200,35 T 300,45 T 400,10 L 400,100 L 0,100 Z"
                fill="url(#tealGradient)"
              />

              {/* Main Line */}
              <path
                d="M 0,90 Q 60,70 100,55 T 200,35 T 300,45 T 400,10"
                fill="none"
                stroke="#0BC5AD"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Interactive Data Dots */}
              <circle cx="100" cy="55" r="4" fill="#07142C" stroke="#0BC5AD" strokeWidth="2" />
              <circle cx="200" cy="35" r="4" fill="#07142C" stroke="#0BC5AD" strokeWidth="2" />
              <circle cx="300" cy="45" r="4" fill="#07142C" stroke="#0BC5AD" strokeWidth="2" />
              <circle cx="400" cy="10" r="6" fill="#0BC5AD" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-medium">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* FLOATING MARKETPLACE STATUS CARDS */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* AMAZON */}
          <div className="bg-[#07142C]/90 p-2.5 rounded-lg border border-white/10 flex items-center justify-between transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-bold text-slate-200">Amazon</span>
            </div>
            <span className="text-[10px] font-extrabold text-[#0BC5AD] bg-[#0BC5AD]/10 px-2 py-0.5 rounded-md flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Healthy
            </span>
          </div>

          {/* FLIPKART */}
          <div className="bg-[#07142C]/90 p-2.5 rounded-lg border border-white/10 flex items-center justify-between transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs font-bold text-slate-200">Flipkart</span>
            </div>
            <span className="text-[10px] font-extrabold text-[#0BC5AD] bg-[#0BC5AD]/10 px-2 py-0.5 rounded-md flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Healthy
            </span>
          </div>

          {/* MEESHO */}
          <div className="bg-[#07142C]/90 p-2.5 rounded-lg border border-white/10 flex items-center justify-between transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-400" />
              <span className="text-xs font-bold text-slate-200">Meesho</span>
            </div>
            <span className="text-[10px] font-extrabold text-[#0BC5AD] bg-[#0BC5AD]/10 px-2 py-0.5 rounded-md flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Healthy
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
