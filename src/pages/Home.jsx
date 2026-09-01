import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, BarChart3, Users, Zap, Layers, Lock, Globe } from 'lucide-react';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import HowItWorks from '../components/HowItWorks';
import BeforeAfter from '../components/BeforeAfter';
import AnalyticsPreview from '../components/AnalyticsPreview';
import PricingPlans from '../components/PricingPlans';
import CTA from '../components/CTA';

import { AmazonLogo, FlipkartLogo, MeeshoLogo, ShopsyLogo, EbayLogo, EtsyLogo, D2CLogo } from '../components/PlatformLogos';
import { servicesData } from '../data/servicesData';
import { platformsData } from '../data/platformsData';
import { caseStudiesData } from '../data/caseStudiesData';
import { testimonialsData } from '../data/testimonialsData';

export default function Home() {
  const problemCards = [
    {
      num: "01",
      title: "Too Much Manual Work",
      desc: "Managing products, orders, inventory and marketplace operations takes valuable time away from brand expansion."
    },
    {
      num: "02",
      title: "Poor Product Visibility",
      desc: "Products may be listed but fail to generate enough organic search traffic or conversions due to unindexed cataloging."
    },
    {
      num: "03",
      title: "Account Issues",
      desc: "Policy warnings, suppressed listings, IP claims and performance breaches threaten your daily revenue stream."
    },
    {
      num: "04",
      title: "Inventory Problems",
      desc: "Stock-outs and inaccurate inventory tracking lead to lost sales, damaged metrics, and aging storage fees."
    },
    {
      num: "05",
      title: "Advertising Complexity",
      desc: "Unoptimized marketplace advertising consumes significant budget without delivering the desired ACoS return."
    }
  ];

  const whyChooseCards = [
    { title: "Dedicated Account Management", desc: "A single senior manager accountable for your account performance.", icon: Users },
    { title: "Marketplace Expertise", desc: "Deep algorithmic knowledge across Amazon, Flipkart, Meesho, Shopsy, eBay & Etsy.", icon: Zap },
    { title: "Data-Driven Decisions", desc: "Decisions backed by live keyword tracking, competitor pricing, and demand curves.", icon: BarChart3 },
    { title: "Transparent Reporting", desc: "Clear P&L visibility with no hidden metrics or obfuscated ad spend figures.", icon: Layers },
    { title: "Scalable Operations", desc: "Seamless handling whether you have 10 SKUs or 10,000+ catalog items.", icon: Globe },
    { title: "Multi-Marketplace Management", desc: "Unified strategy across all top channels under one single executive roof.", icon: Lock }
  ];

  const logoMap = {
    amazon: AmazonLogo,
    flipkart: FlipkartLogo,
    meesho: MeeshoLogo,
    shopsy: ShopsyLogo,
    ebay: EbayLogo,
    etsy: EtsyLogo,
    d2c: D2CLogo
  };

  return (
    <main className="bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center relative overflow-hidden text-center border-b border-[#18343C]">
        
        {/* DYNAMIC BACKGROUND VIDEO LAYER */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25 scale-105 filter contrast-125 saturate-150"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-41551-large.mp4" type="video/mp4" />
            <source src="https://cdn.coverr.co/videos/coverr-digital-network-nodes-4277/1080p.mp4" type="video/mp4" />
          </video>

          {/* Deep Dark Blue-Green Matte Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#041317]/95 via-[#041317]/90 to-[#041317]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(0,201,167,0.08),transparent_40%)]" />

          {/* Subtly Animated Technology Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />
        </div>

        {/* SOFT TEAL AMBIENT LIGHTING */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00C9A7]/10 rounded-full blur-3xl pointer-events-none z-0" />

        {/* INNER HERO CONTENT BLOCK */}
        <div className="container-custom relative z-10 max-w-5xl mx-auto space-y-4 my-auto transform -translate-y-6 md:-translate-y-8">
          
          {/* SLEEK MICRO BADGE */}
          <div className="opacity-0 animate-blur-in">
            <div className="inline-flex items-center gap-1.5 bg-[#00C9A7]/15 text-[#00C9A7] px-3.5 py-1 rounded-full border border-[#00C9A7]/30 text-xs font-semibold uppercase tracking-wider mx-auto shadow-md backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5" /> OFFICIAL MARKETPLACE OPERATIONS PARTNER
            </div>
          </div>

          {/* BALANCED 3-LINE HEADLINE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto opacity-0 animate-blur-in delay-100">
            We Manage Your E-Commerce Operations, <br className="hidden sm:block" />
            So You Can Focus <br className="hidden sm:block" />
            <span className="text-gradient-teal">On Growing Your Business.</span>
          </h1>

          {/* REFINED SUBHEADING */}
          <p className="text-[#C7D2D9] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal opacity-0 animate-blur-in delay-200">
            We manage Amazon, Flipkart, Meesho, Shopsy, eBay, Etsy and other marketplace operations — from catalog and inventory to orders, advertising and performance optimization.
          </p>

          {/* COMPACT & SLEEK HERO BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 opacity-0 animate-blur-in delay-300">
            <Link
              to="/contact"
              className="btn-matte-primary px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm font-extrabold tracking-wider w-full sm:w-auto group shadow-lg"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services"
              className="btn-matte-secondary px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm font-extrabold tracking-wider w-full sm:w-auto text-center"
            >
              EXPLORE SERVICES
            </Link>
          </div>

          {/* MICRO BADGES */}
          <div className="pt-5 border-t border-[#18343C] flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#C7D2D9] opacity-0 animate-blur-in delay-400">
            <div className="flex items-center gap-1.5 bg-[#0B2029] px-3.5 py-1.5 rounded-lg border border-[#18343C]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C9A7]" />
              <span>99% Account Health</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#0B2029] px-3.5 py-1.5 rounded-lg border border-[#18343C]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C9A7]" />
              <span>Zero Policy Violations</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#0B2029] px-3.5 py-1.5 rounded-lg border border-[#18343C]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C9A7]" />
              <span>Verified Growth</span>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 8 — TRUSTED PLATFORMS WITH PROMINENT LOGO SIZES FOR ALL 5 CARDS */}
      <section className="py-16 bg-[#F8FAFC] text-[#0F172A] border-b border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
              PLATFORM INTEGRATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-2">
              One Team. Multiple Marketplaces.
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Manage your entire marketplace presence through one experienced team.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Amazon", logo: AmazonLogo, badge: "Seller & Vendor Central", link: "/platforms/amazon", delayClass: "animate-float-card" },
              { name: "Flipkart", logo: FlipkartLogo, badge: "Seller Hub & Assured", link: "/platforms/flipkart", delayClass: "animate-float-card-delay-1" },
              { name: "Meesho", logo: MeeshoLogo, badge: "Supplier Panel", link: "/platforms/meesho", delayClass: "animate-float-card-delay-2" },
              { name: "Shopsy", logo: ShopsyLogo, badge: "Shopsy Reseller Hub", link: "/platforms/shopsy", delayClass: "animate-float-card-delay-3" },
              { name: "eBay", logo: EbayLogo, badge: "Global Marketplace", link: "/platforms/ebay", delayClass: "animate-float-card-delay-4" },
              { name: "Etsy", logo: EtsyLogo, badge: "Handmade & Exports", link: "/platforms/etsy", delayClass: "animate-float-card-delay-5" }
            ].map((p, idx) => {
              const LogoComponent = p.logo;
              return (
                <Link 
                  key={idx}
                  to={p.link}
                  className={`bg-white p-5 md:p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-between group hover:border-[#00C9A7] hover:shadow-xl transition-all duration-300 shadow-sm min-h-[140px] ${p.delayClass}`}
                >
                  <div className="h-12 md:h-14 flex items-center justify-center">
                    <LogoComponent className="h-9 md:h-11 w-auto group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-xs font-bold text-[#0F172A] block leading-tight group-hover:text-[#00C9A7] transition-colors">
                      {p.name}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 block mt-0.5">
                      {p.badge}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      {/* SECTION 9 — STATS */}
      <Stats />


      {/* SECTION 10 — PROBLEM SECTION */}
      <section className="py-20 bg-[#F1F5F9] border-b border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
              SELLER CHALLENGES SOLVED
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
              Running an E-Commerce Business Takes More Than Just Listing Products.
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
              Without dedicated operational management, sellers face operational friction, suppressed listings, and wasted advertising spend.
            </p>
          </div>

          {/* PROBLEM CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {problemCards.map((card) => (
              <div key={card.num} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all">
                <div>
                  <span className="text-sm font-black text-[#00C9A7] bg-[#00C9A7]/10 px-3 py-1 rounded-md mb-4 inline-block">
                    {card.num}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A] mt-2 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* CALLOUT CARD */}
            <div className="matte-card-dark p-7 rounded-2xl flex flex-col justify-between border border-[#00C9A7]/30 shadow-xl text-white">
              <div>
                <span className="text-xs font-bold text-[#00C9A7] uppercase tracking-wider">The Solution</span>
                <h3 className="text-2xl font-extrabold text-white mt-3 mb-3">
                  That's where BIZMAKER comes in.
                </h3>
                <p className="text-sm text-[#C7D2D9] leading-relaxed">
                  We deploy senior account managers, catalog engineers, and PPC strategists to eliminate these friction points completely.
                </p>
              </div>
              <Link 
                to="/contact" 
                className="btn-matte-primary w-full py-3 mt-6 text-sm tracking-wide text-center"
              >
                TALK TO AN EXPERT NOW
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 11 — SERVICES SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
                COMPLETE MARKETPLACE SERVICES
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
                Everything Your Marketplace Account Needs.
              </h2>
            </div>
            <Link 
              to="/services" 
              className="text-sm font-bold text-[#0F172A] hover:text-[#00C9A7] flex items-center gap-1 shrink-0 transition-colors"
            >
              <span>VIEW ALL SERVICES</span>
              <ChevronRight className="w-4 h-4 text-[#00C9A7]" />
            </Link>
          </div>

          {/* 8 SERVICE CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 12 — SERVICE DETAIL VISUAL */}
      <section className="py-20 bg-[#F8FAFC] text-[#0F172A] border-t border-slate-200 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
              UNIFIED DASHBOARD ENGINE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
              Your Marketplace Operations. Under One Roof.
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
              Experience seamless management across Product Catalog, Orders, Inventory, Revenue, Advertising, and Account Health.
            </p>
          </div>

          <div className="max-w-5xl mx-auto matte-card-dark p-6 md:p-10 border border-[#18343C] shadow-2xl text-white">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6 pb-6 border-b border-[#18343C] text-center text-xs font-bold">
              <span className="text-[#00C9A7] bg-[#00C9A7]/10 py-2 rounded-lg border border-[#00C9A7]/30">Product Catalog</span>
              <span className="text-[#C7D2D9] bg-white/5 py-2 rounded-lg">Orders & SLA</span>
              <span className="text-[#C7D2D9] bg-white/5 py-2 rounded-lg">Inventory Sync</span>
              <span className="text-[#C7D2D9] bg-white/5 py-2 rounded-lg">Net Revenue</span>
              <span className="text-[#C7D2D9] bg-white/5 py-2 rounded-lg">PPC Campaigns</span>
              <span className="text-[#C7D2D9] bg-white/5 py-2 rounded-lg">Account Health</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0B2029] p-5 rounded-xl border border-[#18343C]">
                <div className="text-xs font-bold text-[#7F929C]">ACTIVE CATALOG STATUS</div>
                <div className="text-3xl font-black text-white mt-2">1,248 ASINs</div>
                <div className="text-xs text-[#00C9A7] mt-1 font-semibold">✓ 100% SEO Indexed</div>
              </div>
              <div className="bg-[#0B2029] p-5 rounded-xl border border-[#18343C]">
                <div className="text-xs font-bold text-[#7F929C]">AVERAGE ROAS</div>
                <div className="text-3xl font-black text-[#00C9A7] mt-2">5.82x</div>
                <div className="text-xs text-[#C7D2D9] mt-1 font-semibold">Target ACoS: 16.4%</div>
              </div>
              <div className="bg-[#0B2029] p-5 rounded-xl border border-[#18343C]">
                <div className="text-xs font-bold text-[#7F929C]">RETURN RATE (RTO)</div>
                <div className="text-3xl font-black text-[#18D6B5] mt-2">2.4%</div>
                <div className="text-xs text-[#18D6B5]/80 mt-1 font-semibold">-68% Industry Avg</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 13 — HOW IT WORKS */}
      <HowItWorks />


      {/* SECTION 14 — PLATFORM SECTION */}
      <section className="py-20 bg-[#F1F5F9] border-t border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
              CROSS-PLATFORM MASTERY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
              Marketplace Expertise That Works Across Platforms.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformsData.map((plat) => {
              const LogoComp = logoMap[plat.id];
              return (
                <div key={plat.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md" style={{ backgroundColor: plat.bgColor, color: plat.color }}>
                        {plat.badge}
                      </span>
                      {LogoComp ? (
                        <div className="h-11 md:h-13 flex items-center">
                          <LogoComp className="h-10 md:h-12 w-auto" />
                        </div>
                      ) : (
                        <span className="text-2xl font-black text-[#0F172A]">{plat.name}</span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">{plat.tagline}</h3>
                    <p className="text-xs md:text-sm text-slate-600 mb-6 leading-relaxed">{plat.heroText}</p>

                    <div className="bg-slate-50 p-4 rounded-xl mb-6 border border-slate-200">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Core Services Included:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {plat.services.map((s, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00C9A7] shrink-0" />
                            <span className="truncate">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to={`/platforms/${plat.id}`}
                    className="btn-matte-primary w-full py-3.5 text-xs font-bold tracking-wider text-center"
                  >
                    {plat.buttonText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* SECTION 15 — BEFORE / AFTER SECTION */}
      <BeforeAfter />


      {/* SECTION 16 — ANALYTICS SECTION */}
      <AnalyticsPreview />


      {/* SECTION 17 — CASE STUDIES */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
                VERIFIED CASE STUDIES
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
                Real Sellers. Real Results.
              </h2>
            </div>
            <Link to="/case-studies" className="text-sm font-bold text-[#0F172A] hover:text-[#00C9A7] flex items-center gap-1 transition-colors">
              <span>VIEW ALL CASE STUDIES</span>
              <ChevronRight className="w-4 h-4 text-[#00C9A7]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((cs) => (
              <div key={cs.id} className="bg-[#F8FAFC] p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-3">
                    <span className="text-[#00C9A7]">{cs.industry}</span>
                    <span>{cs.marketplace}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#00C9A7] transition-colors">
                    {cs.title}
                  </h3>

                  <div className="bg-[#041317] text-white p-4 rounded-xl mb-6 border border-[#18343C]">
                    <div className="text-xs font-bold text-[#7F929C]">PRIMARY RESULT ACHIEVED</div>
                    <div className="text-3xl font-black text-[#00C9A7] mt-1">{cs.metrics[0].value}</div>
                    <div className="text-xs text-[#C7D2D9] mt-1">{cs.metrics[0].label}</div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600">
                    <p><strong className="text-[#0F172A]">Challenge:</strong> {cs.challenge}</p>
                    <p><strong className="text-[#0F172A]">Strategy:</strong> {cs.strategy}</p>
                  </div>
                </div>

                <Link
                  to={`/case-studies#${cs.id}`}
                  className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#0F172A] group-hover:text-[#00C9A7] transition-colors"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-4 h-4 text-[#00C9A7]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 18 — WHY BIZMAKER */}
      <section className="py-20 bg-[#F1F5F9] text-[#0F172A] border-t border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
              THE BIZMAKER DIFFERENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
              Why Sellers Choose BIZMAKER.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {whyChooseCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-lg transition-all">
                  <div>
                    <div className="p-3 rounded-xl bg-[#00C9A7]/10 text-[#00C9A7] w-fit mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{card.title}</h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LARGE STATEMENT */}
          <div className="text-center bg-[#041317] p-10 rounded-2xl border border-[#18343C] max-w-3xl mx-auto shadow-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              "You focus on your brand. <br />
              <span className="text-[#00C9A7]">We focus on your marketplace."</span>
            </h3>
          </div>
        </div>
      </section>


      {/* SECTION 19 — TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
              What Our Clients Say.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((t) => (
              <div key={t.id} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-amber-400 flex items-center mb-3">
                    {'★'.repeat(t.rating)}
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                  <div 
                    className="w-9 h-9 rounded-full font-bold text-xs flex items-center justify-center shadow-sm shrink-0"
                    style={{ backgroundColor: t.bgColor || '#041317', color: t.textColor || '#00C9A7' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">{t.name}</div>
                    <div className="text-[11px] text-slate-500">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 20 — PRICING / PLANS */}
      <PricingPlans />


      {/* SECTION 24 — FINAL CTA */}
      <CTA />

    </main>
  );
}
