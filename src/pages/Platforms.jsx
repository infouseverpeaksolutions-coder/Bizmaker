import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { platformsData } from '../data/platformsData';
import { AmazonLogo, FlipkartLogo, MeeshoLogo, ShopsyLogo, EbayLogo, EtsyLogo } from '../components/PlatformLogos';
import CTA from '../components/CTA';

export default function Platforms() {
  const logoMap = {
    amazon: AmazonLogo,
    flipkart: FlipkartLogo,
    meesho: MeeshoLogo,
    shopsy: ShopsyLogo,
    ebay: EbayLogo,
    etsy: EtsyLogo,
    shopzee: ShopsyLogo,
    shopify: ShopsyLogo
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      
      {/* HERO BANNER */}
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 md:pb-20 relative overflow-hidden border-b border-[#18343C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20 inline-block shadow-md">
            MULTI-PLATFORM COVERAGE
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Marketplaces We Manage & Scale
          </h1>
          <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Deep algorithmic expertise across India's largest e-commerce platforms and global direct-to-consumer storefronts.
          </p>
        </div>
      </section>

      {/* PLATFORMS GRID */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformsData.map((plat) => {
              const LogoComp = logoMap[plat.id];
              return (
                <div key={plat.id} className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-[#00C9A7] hover:shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg" style={{ backgroundColor: plat.bgColor, color: plat.color }}>
                        {plat.badge}
                      </span>
                      {LogoComp ? (
                        <div className="h-12 md:h-14 flex items-center">
                          <LogoComp className="max-h-12 md:max-h-14 w-auto" />
                        </div>
                      ) : (
                        <span className="text-2xl font-black text-[#0F172A]">{plat.name}</span>
                      )}
                    </div>

                    <h2 className="text-2xl font-bold text-[#0F172A] mb-3">{plat.tagline}</h2>
                    <p className="text-sm text-slate-600 mb-8 leading-relaxed">{plat.heroText}</p>

                    <div className="bg-slate-50 p-6 rounded-xl mb-8 border border-slate-200">
                      <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">Dedicated Platform Capabilities:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                        {plat.services.map((s, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#00C9A7] shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to={`/platforms/${plat.id}`}
                    className="btn-matte-primary w-full py-4 text-xs font-bold tracking-wider text-center"
                  >
                    <span>{plat.buttonText}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
