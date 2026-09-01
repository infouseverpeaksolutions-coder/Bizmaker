import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

export default function FlipkartPlatform() {
  const flipkartServices = [
    { title: "Flipkart Seller Hub Onboarding & Gating", desc: "Complete account verification, brand approval, category mapping, and portal configuration." },
    { title: "Flipkart Assured Certification & FBF", desc: "Qualify products for Flipkart Assured badges and set up Fulfillment by Flipkart (FBF)." },
    { title: "Flipkart Advertising (PLA & PCA Ads)", desc: "Product Listing Ads and Product Contextual Ads structured for max ROI during Big Saving Days." },
    { title: "Breach Metric & Return Management", desc: "Keep LDR, cancellation rates, and return breaches strictly below penalty thresholds." },
    { title: "Big Billion Days Promotion Planning", desc: "Strategic inventory positioning, pricing deals, and flash sale execution for festive spikes." },
    { title: "Payout & Financial Reconciliation", desc: "Reconcile Flipkart settlement files, commission deductions, and shipping fee overcharges." }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 md:pb-20 relative overflow-hidden border-b border-[#18343C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2874F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2874F0] bg-[#2874F0]/10 px-3.5 py-1 rounded-full border border-[#2874F0]/30 inline-block shadow-md">
              FLIPKART EXPERT DESK
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Flipkart Seller Account Management.
            </h1>
            <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed">
              Dominate search rankings on Flipkart, secure Flipkart Assured badges, and streamline order dispatches effortlessly with BIZMAKER.
            </p>

            <div className="pt-2">
              <Link to="/contact?platform=flipkart" className="btn-matte-primary px-7 py-3.5 text-xs font-bold tracking-wider">
                GET FLIPKART ACCOUNT AUDIT →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Flipkart Growth Services</h2>
            <p className="text-sm text-slate-600 mt-2">End-to-end execution for Flipkart Seller Hub success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flipkartServices.map((item, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#2874F0]/10 text-[#2874F0] border border-[#2874F0]/30 font-black flex items-center justify-center mb-4">
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
