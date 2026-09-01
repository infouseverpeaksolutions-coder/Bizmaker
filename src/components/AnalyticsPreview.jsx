import { useState } from 'react';
import { ShoppingCart, CheckCircle2, ShieldCheck, Activity, TrendingUp, Award, Zap, BarChart2 } from 'lucide-react';

export default function AnalyticsPreview() {
  const [selectedView, setSelectedView] = useState('orders');
  const [hoveredPoint, setHoveredPoint] = useState(8); // Default to latest month

  // Growth Pillars that attract sellers to BIZMAKER
  const growthPillars = [
    { 
      name: "SEO Cataloging & A+ EBC Content", 
      badge: "Organic Search Ranking", 
      metric: "+420% Visibility", 
      progress: 96, 
      color: "#00C9A7",
      desc: "Full keyword indexing & high-converting product pages"
    },
    { 
      name: "PPC Advertising & ACoS Reduction", 
      badge: "ROAS Optimization", 
      metric: "14.2% ACoS", 
      progress: 88, 
      color: "#38BDF8",
      desc: "Precision bidding & negative keyword isolation"
    },
    { 
      name: "Order SLA & Fulfillment Setup", 
      badge: "FBA / FBF Logistics", 
      metric: "99.8% On-Time", 
      progress: 98, 
      color: "#A855F7",
      desc: "Smart inventory restock alerts & zero dispatch breaches"
    },
    { 
      name: "Account Health & Policy Defense", 
      badge: "POA & Suspension Guard", 
      metric: "0 Policy Warnings", 
      progress: 100, 
      color: "#96BF48",
      desc: "24/7 account monitoring & instant case resolution"
    }
  ];

  // Dynamic Graph Datasets based on View Mode
  const graphDatasets = {
    orders: [
      { month: 'Jan', val: 40, amazon: '1,200', flipkart: '650', meesho: '320', shopsy: '180', total: '2,350 Orders', y: 120 },
      { month: 'Feb', val: 55, amazon: '1,850', flipkart: '920', meesho: '480', shopsy: '250', total: '3,500 Orders', y: 102 },
      { month: 'Mar', val: 50, amazon: '1,700', flipkart: '880', meesho: '420', shopsy: '220', total: '3,220 Orders', y: 108 },
      { month: 'Apr', val: 75, amazon: '2,900', flipkart: '1,450', meesho: '780', shopsy: '390', total: '5,520 Orders', y: 82 },
      { month: 'May', val: 70, amazon: '2,750', flipkart: '1,380', meesho: '710', shopsy: '360', total: '5,200 Orders', y: 88 },
      { month: 'Jun', val: 92, amazon: '4,100', flipkart: '2,100', meesho: '1,150', shopsy: '580', total: '7,930 Orders', y: 62 },
      { month: 'Jul', val: 88, amazon: '3,900', flipkart: '1,980', meesho: '1,080', shopsy: '540', total: '7,500 Orders', y: 68 },
      { month: 'Aug', val: 115, amazon: '5,800', flipkart: '3,100', meesho: '1,650', shopsy: '850', total: '11,400 Orders', y: 38 },
      { month: 'Sep (Live)', val: 135, amazon: '7,420', flipkart: '4,110', meesho: '2,180', shopsy: '1,140', total: '14,850 Orders', y: 18 }
    ],
    buybox: [
      { month: 'Jan', val: 35, amazon: '42%', flipkart: '38%', meesho: '45%', shopsy: '40%', total: '41.2% Win Rate', y: 130 },
      { month: 'Feb', val: 48, amazon: '55%', flipkart: '49%', meesho: '52%', shopsy: '48%', total: '51.0% Win Rate', y: 110 },
      { month: 'Mar', val: 52, amazon: '58%', flipkart: '52%', meesho: '56%', shopsy: '53%', total: '54.7% Win Rate', y: 105 },
      { month: 'Apr', val: 68, amazon: '72%', flipkart: '66%', meesho: '70%', shopsy: '68%', total: '69.0% Win Rate', y: 85 },
      { month: 'May', val: 72, amazon: '76%', flipkart: '70%', meesho: '74%', shopsy: '71%', total: '72.8% Win Rate', y: 80 },
      { month: 'Jun', val: 84, amazon: '88%', flipkart: '82%', meesho: '85%', shopsy: '83%', total: '84.5% Win Rate', y: 60 },
      { month: 'Jul', val: 88, amazon: '91%', flipkart: '86%', meesho: '89%', shopsy: '87%', total: '88.2% Win Rate', y: 50 },
      { month: 'Aug', val: 94, amazon: '95%', flipkart: '92%', meesho: '93%', shopsy: '94%', total: '93.5% Win Rate', y: 30 },
      { month: 'Sep (Live)', val: 98, amazon: '97.2%', flipkart: '94.1%', meesho: '93.8%', shopsy: '95.0%', total: '95.0% Win Rate', y: 18 }
    ],
    health: [
      { month: 'Jan', val: 85, amazon: '92.0%', flipkart: '88.5%', meesho: '86.0%', shopsy: '89.0%', total: '88.8% Health', y: 100 },
      { month: 'Feb', val: 88, amazon: '94.5%', flipkart: '91.0%', meesho: '89.0%', shopsy: '91.5%', total: '91.5% Health', y: 90 },
      { month: 'Mar', val: 90, amazon: '96.0%', flipkart: '93.0%', meesho: '91.0%', shopsy: '93.0%', total: '93.2% Health', y: 80 },
      { month: 'Apr', val: 94, amazon: '98.2%', flipkart: '95.5%', meesho: '94.0%', shopsy: '96.0%', total: '95.9% Health', y: 65 },
      { month: 'May', val: 95, amazon: '98.5%', flipkart: '96.2%', meesho: '95.0%', shopsy: '96.8%', total: '96.6% Health', y: 60 },
      { month: 'Jun', val: 97, amazon: '99.1%', flipkart: '98.0%', meesho: '97.2%', shopsy: '98.1%', total: '98.1% Health', y: 45 },
      { month: 'Jul', val: 98, amazon: '99.4%', flipkart: '98.8%', meesho: '98.0%', shopsy: '98.5%', total: '98.7% Health', y: 35 },
      { month: 'Aug', val: 99, amazon: '99.7%', flipkart: '99.2%', meesho: '98.9%', shopsy: '99.1%', total: '99.2% Health', y: 25 },
      { month: 'Sep (Live)', val: 100, amazon: '99.9%', flipkart: '99.7%', meesho: '99.5%', shopsy: '99.6%', total: '99.7% Health', y: 15 }
    ]
  };

  const currentDataset = graphDatasets[selectedView] || graphDatasets.orders;
  const activeData = currentDataset[hoveredPoint !== null ? hoveredPoint : 8];

  return (
    <section className="py-20 bg-[#041317] text-white relative overflow-hidden border-t border-[#18343C]">
      
      {/* GLOWING AMBIENT BACKGROUND LIGHTING */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[#00C9A7]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#061B21] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* HEADER BADGE & TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#00C9A7]/15 text-[#00C9A7] px-4 py-1.5 rounded-full border border-[#00C9A7]/30 text-xs font-extrabold uppercase tracking-widest shadow-lg backdrop-blur-md">
            <Activity className="w-3.5 h-3.5 animate-pulse text-[#00C9A7]" />
            <span>OPERATIONAL EXCELLENCE & SELLER GROWTH ENGINE</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            How We Scale & Protect Your Seller Accounts.
          </h2>

          <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From catalog SEO indexing to Buy Box ownership and zero-breach SLA dispatches, our operations team handles every operational milestone for your brand.
          </p>
        </div>

        {/* MAIN FUTURISTIC ANIMATED DASHBOARD ENGINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT 8 COLS — ANIMATED HIGH-TECH GRAPH BOARD */}
          <div className="lg:col-span-8 matte-card-dark p-6 md:p-8 rounded-2xl border border-[#18343C] shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            {/* GRAPH TOP BAR */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#18343C]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black text-white">Multi-Channel Operations Growth</h3>
                  <span className="bg-[#00C9A7]/20 text-[#00C9A7] text-[10px] font-bold px-2 py-0.5 rounded border border-[#00C9A7]/30">
                    SELLER INSIGHTS
                  </span>
                </div>
                <p className="text-xs text-[#7F929C] mt-0.5">Track account scale, Buy Box ownership, and operational health metrics</p>
              </div>

              {/* VIEW SWITCHER BUTTONS */}
              <div className="flex items-center bg-[#0B2029] p-1 rounded-xl border border-[#18343C] text-xs">
                {[
                  { key: 'orders', label: 'Order Velocity' },
                  { key: 'buybox', label: 'Buy Box %' },
                  { key: 'health', label: 'Account Health' }
                ].map((tab) => (
                  <button 
                    key={tab.key}
                    onClick={() => {
                      setSelectedView(tab.key);
                      setHoveredPoint(8);
                    }}
                    className={`px-3 py-1.5 rounded-lg font-bold text-[11px] transition-all duration-200 ${
                      selectedView === tab.key 
                        ? 'bg-[#00C9A7] text-[#041317] shadow-md' 
                        : 'text-[#7F929C] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* LIVE DYNAMIC BREAKDOWN BAR */}
            <div className="bg-[#0B2029] p-3 rounded-xl border border-[#00C9A7]/30 mb-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C9A7] animate-ping" />
                <span className="font-extrabold text-white">
                  {activeData.month} {selectedView === 'orders' ? 'Order Scale' : selectedView === 'buybox' ? 'Buy Box Win Rate' : 'Health Score'}:
                </span>
                <span className="text-base font-black text-[#00C9A7]">{activeData.total}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold">
                <span className="text-[#00C9A7]">Amazon: <strong className="text-white">{activeData.amazon}</strong></span>
                <span className="text-[#38BDF8]">Flipkart: <strong className="text-white">{activeData.flipkart}</strong></span>
                <span className="text-[#A855F7]">Meesho: <strong className="text-white">{activeData.meesho}</strong></span>
                <span className="text-[#96BF48]">Shopsy: <strong className="text-white">{activeData.shopsy}</strong></span>
              </div>
            </div>

            {/* DYNAMIC SVG ANIMATED AREA GRAPH CANVAS */}
            <div className="h-72 w-full relative pt-4 pb-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 540 180" preserveAspectRatio="none">
                
                {/* SVG DEFINITIONS & GRADIENTS */}
                <defs>
                  <linearGradient id="tealGlowGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="#00C9A7" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#00C9A7" stopOpacity="0.0" />
                  </linearGradient>
                  
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                  </linearGradient>

                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* HORIZONTAL GRID LINES */}
                <line x1="0" y1="20" x2="540" y2="20" stroke="#18343C" strokeDasharray="3 3" opacity="0.6" />
                <line x1="0" y1="60" x2="540" y2="60" stroke="#18343C" strokeDasharray="3 3" opacity="0.6" />
                <line x1="0" y1="100" x2="540" y2="100" stroke="#18343C" strokeDasharray="3 3" opacity="0.6" />
                <line x1="0" y1="140" x2="540" y2="140" stroke="#18343C" strokeDasharray="3 3" opacity="0.6" />

                {/* FILLED AREA UNDER CURVE */}
                <path 
                  d="M 20,120 Q 80,102 140,108 T 260,82 T 380,62 T 500,18 L 500,160 L 20,160 Z" 
                  fill="url(#tealGlowGradient)" 
                />

                {/* SECONDARY COMPARISON LINE */}
                <path 
                  d="M 20,135 Q 80,125 140,118 T 260,98 T 380,82 T 500,48" 
                  fill="none" 
                  stroke="#38BDF8" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                  opacity="0.7"
                />

                {/* MAIN ANIMATED TEAL TREND CURVE WITH DASH-DRAW ANIMATION */}
                <path 
                  d="M 20,120 Q 80,102 140,108 T 260,82 T 380,62 T 500,18" 
                  fill="none" 
                  stroke="#00C9A7" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  filter="url(#glow)"
                  className="animate-dash-draw"
                />

                {/* INTERACTIVE DATA POINTS & PULSING NODES WITH GROWING BADGES */}
                {currentDataset.map((pt, idx) => {
                  const cx = 20 + idx * 60;
                  const cy = pt.y;
                  const isHovered = hoveredPoint === idx;

                  return (
                    <g key={idx} onMouseEnter={() => setHoveredPoint(idx)} onMouseLeave={() => setHoveredPoint(idx)} className="cursor-pointer">
                      {/* Glow Ring */}
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r={isHovered ? "10" : "6"} 
                        fill="#00C9A7" 
                        fillOpacity={isHovered ? "0.9" : "0.35"} 
                        className="transition-all duration-200"
                      />
                      {/* Inner Dot */}
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r="4" 
                        fill="#FFFFFF" 
                        stroke="#041317" 
                        strokeWidth="2" 
                      />
                    </g>
                  );
                })}
              </svg>

              {/* FLOATING GROWING BADGE ON KEY PEAK 1 (APR) */}
              <div className="absolute left-[37%] top-[35%] bg-[#0B2029]/95 p-2 rounded-xl border border-[#00C9A7]/60 shadow-xl text-[10px] backdrop-blur-md pointer-events-none hidden sm:block">
                <span className="text-[#00C9A7] font-black block">
                  🚀 Apr Scale: {selectedView === 'orders' ? '5,520 Orders' : selectedView === 'buybox' ? '69% Buy Box' : '95.9% Health'}
                </span>
                <span className="text-slate-300">Amz: {currentDataset[3].amazon} | Flp: {currentDataset[3].flipkart}</span>
              </div>

              {/* FLOATING GROWING BADGE ON KEY PEAK 2 (SEP LIVE) */}
              <div className="absolute right-[2%] top-[0%] bg-[#0B2029]/95 p-2.5 rounded-xl border border-[#00C9A7] shadow-2xl text-[11px] backdrop-blur-md pointer-events-none">
                <span className="text-[#00C9A7] font-black flex items-center gap-1">
                  🔥 Sep Peak: {selectedView === 'orders' ? '14,850 Orders/mo' : selectedView === 'buybox' ? '95.0% Buy Box Win Rate' : '99.7% Account Health'}
                </span>
                <span className="text-[#C7D2D9] text-[10px]">Amz: {currentDataset[8].amazon} | Flp: {currentDataset[8].flipkart} | Msh: {currentDataset[8].meesho}</span>
              </div>
            </div>

            {/* MONTH AXIS LABELS */}
            <div className="flex justify-between text-xs text-[#7F929C] pt-2 border-t border-[#18343C]">
              {currentDataset.map((pt, idx) => (
                <span 
                  key={idx} 
                  className={`font-bold cursor-pointer transition-colors px-1 py-0.5 rounded ${hoveredPoint === idx ? 'text-[#00C9A7] bg-[#00C9A7]/10' : 'hover:text-white'}`}
                  onMouseEnter={() => setHoveredPoint(idx)}
                >
                  {pt.month}
                </span>
              ))}
            </div>

            {/* CHANNEL SHARE BREAKDOWN FOOTER */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 mt-4 border-t border-[#18343C] text-xs">
              <div className={`flex items-center gap-2 p-2.5 rounded-lg border transition-all cursor-pointer ${hoveredPoint !== null ? 'bg-[#0B2029] border-[#00C9A7]/50' : 'bg-[#0B2029] border-[#18343C]'}`}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C9A7]" />
                <div>
                  <div className="font-bold text-white">Amazon Central</div>
                  <div className="text-[10px] text-[#00C9A7] font-extrabold">{activeData.amazon} ({activeData.month})</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#0B2029] p-2.5 rounded-lg border border-[#18343C] cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                <div>
                  <div className="font-bold text-white">Flipkart Hub</div>
                  <div className="text-[10px] text-[#38BDF8] font-extrabold">{activeData.flipkart} ({activeData.month})</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#0B2029] p-2.5 rounded-lg border border-[#18343C] cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A855F7]" />
                <div>
                  <div className="font-bold text-white">Meesho Supplier</div>
                  <div className="text-[10px] text-[#A855F7] font-extrabold">{activeData.meesho} ({activeData.month})</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#0B2029] p-2.5 rounded-lg border border-[#18343C] cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-[#96BF48]" />
                <div>
                  <div className="font-bold text-white">Shopsy Reseller</div>
                  <div className="text-[10px] text-[#96BF48] font-extrabold">{activeData.shopsy} ({activeData.month})</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT 4 COLS — CORE SELLER MANAGEMENT DELIVERABLES */}
          <div className="lg:col-span-4 matte-card-dark p-6 rounded-2xl border border-[#18343C] shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#18343C]">
                <div>
                  <h3 className="text-base font-black text-white">Seller Growth Pillars</h3>
                  <p className="text-[11px] text-[#7F929C]">Core account management deliverables</p>
                </div>
                <span className="bg-[#00C9A7]/20 text-[#00C9A7] text-[10px] font-extrabold px-2.5 py-1 rounded border border-[#00C9A7]/30">
                  4 PILLARS
                </span>
              </div>

              {/* GROWTH PILLARS LIST */}
              <div className="space-y-3.5">
                {growthPillars.map((p, idx) => (
                  <div key={idx} className="bg-[#0B2029] p-3.5 rounded-xl border border-[#18343C] hover:border-[#00C9A7]/40 transition-colors group">
                    <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                      <span className="truncate max-w-[190px] group-hover:text-[#00C9A7] transition-colors">{p.name}</span>
                      <span className="text-[#00C9A7] font-black">{p.metric}</span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#7F929C] mb-2">
                      <span>{p.badge}</span>
                      <span>{p.desc}</span>
                    </div>

                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${p.progress}%`, backgroundColor: p.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className="pt-4 mt-6 border-t border-[#18343C] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#7F929C]">
                <ShieldCheck className="w-4 h-4 text-[#00C9A7]" />
                <span>Dedicated Seller Operations Team</span>
              </div>
              <span className="text-[#00C9A7] font-extrabold">BIZMAKER v2.4</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
