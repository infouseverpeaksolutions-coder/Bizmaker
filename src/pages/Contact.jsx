import { useState } from 'react';
import { CheckCircle2, Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    phone: '',
    email: '',
    website: '',
    platforms: [],
    revenue: '₹1L–₹5L',
    skus: '50-200 SKUs',
    servicesNeeded: [],
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');

  const handlePlatformChange = (platform) => {
    setFormData(prev => {
      const exists = prev.platforms.includes(platform);
      if (exists) {
        return { ...prev, platforms: prev.platforms.filter(p => p !== platform) };
      } else {
        return { ...prev, platforms: [...prev.platforms, platform] };
      }
    });
  };

  const handleServiceChange = (service) => {
    setFormData(prev => {
      const exists = prev.servicesNeeded.includes(service);
      if (exists) {
        return { ...prev, servicesNeeded: prev.servicesNeeded.filter(s => s !== service) };
      } else {
        return { ...prev, servicesNeeded: [...prev.servicesNeeded, service] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Build WhatsApp text fallback directly on client
    const whatsappText = `🚀 *NEW BIZMAKER MARKETPLACE INQUIRY*
---------------------------------------
👤 *Name:* ${formData.name || 'N/A'}
🏢 *Company:* ${formData.company || 'N/A'}
🌆 *City:* ${formData.city || 'N/A'}
📞 *Phone:* ${formData.phone || 'N/A'}
✉️ *Email:* ${formData.email || 'N/A'}
🌐 *Website:* ${formData.website || 'N/A'}

🛍️ *Platforms:* ${formData.platforms.length > 0 ? formData.platforms.join(', ') : 'N/A'}
💰 *Revenue:* ${formData.revenue}
📦 *SKUs:* ${formData.skus}
🔧 *Services:* ${formData.servicesNeeded.length > 0 ? formData.servicesNeeded.join(', ') : 'N/A'}

📝 *Requirements:*
${formData.requirements || 'No specific notes provided.'}
---------------------------------------
Sent via BIZMAKER Web Portal`;

    const clientWhatsappUrl = `https://wa.me/917770916118?text=${encodeURIComponent(whatsappText)}`;
    let targetWhatsappUrl = clientWhatsappUrl;

    try {
      // Send to Backend API
      let res;
      try {
        res = await fetch('/api/inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } catch (err) {
        res = await fetch('http://localhost:5000/api/inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }

      if (res && res.ok) {
        const data = await res.json();
        if (data.whatsappUrl) {
          targetWhatsappUrl = data.whatsappUrl;
        }
      }
    } catch (err) {
      console.warn('Backend offline, proceeding with client-side WhatsApp link generation.');
    }

    setLastWhatsappUrl(targetWhatsappUrl);
    setLoading(false);
    setSubmitted(true);

    // Open WhatsApp in new tab automatically
    window.open(targetWhatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      
      {/* HERO BANNER */}
      <section className="bg-[#041317] text-white pt-32 md:pt-36 pb-16 md:pb-20 relative overflow-hidden border-b border-[#18343C]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/10 px-3.5 py-1 rounded-full border border-[#00C9A7]/20 inline-block shadow-md">
            START YOUR GROWTH CONSULTATION
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Grow Your Marketplace Business?
          </h1>
          <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and our senior marketplace team will conduct a free account audit to identify growth opportunities.
          </p>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT CONTACT INFO */}
            <div className="lg:col-span-4 space-y-6">
              <div className="matte-card-dark p-8 text-white space-y-6 border border-[#18343C]">
                <h2 className="text-xl font-black text-white">Direct Advisory Desk</h2>
                <p className="text-xs text-[#C7D2D9] leading-relaxed">
                  Our operations team reviews submissions within 2 business hours and contacts you with a custom strategy deck.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#18343C] text-xs">
                  <div className="flex items-center gap-3 text-[#C7D2D9]">
                    <Mail className="w-4 h-4 text-[#00C9A7]" />
                    <a href="mailto:contact.bizmaker@gmail.com" className="hover:text-[#00C9A7] transition-colors">contact.bizmaker@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-[#C7D2D9]">
                    <Phone className="w-4 h-4 text-[#00C9A7]" />
                    <a href="tel:7770916118" className="hover:text-[#00C9A7] transition-colors">+91 7770916118</a>
                  </div>
                  <div className="flex items-start gap-3 text-[#C7D2D9]">
                    <MapPin className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                    <span>Bizmaker Corporate Tower, Tech Hub, India</span>
                  </div>
                </div>

                {/* QUICK WHATSAPP BUTTON */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/917770916118?text=Hi%20BIZMAKER%20Team%2C%20I%20want%20to%20inquire%20about%20marketplace%20account%20management."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#22c35e] transition-colors shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>CHAT DIRECTLY ON WHATSAPP (+91 7770916118)</span>
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-[#18343C] text-xs text-[#C7D2D9]">
                  <strong className="text-[#00C9A7] block mb-1">✓ Automatic Dual Notification</strong>
                  1. Sent to <span className="text-white">contact.bizmaker@gmail.com</span><br />
                  2. Redirected to <span className="text-white">+91 7770916118</span> on WhatsApp
                </div>
              </div>
            </div>

            {/* RIGHT LEAD GEN FORM */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-md">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#00C9A7]/20 text-[#00C9A7] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-black text-[#0F172A]">Inquiry Submitted & Sent!</h2>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Your query has been logged and queued for <strong className="text-[#0F172A]">contact.bizmaker@gmail.com</strong>.
                    </p>
                    
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a 
                        href={lastWhatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>OPEN WHATSAPP CHAT NOW (+91 7770916118)</span>
                      </a>

                      <button 
                        onClick={() => setSubmitted(false)}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 text-[#0F172A] font-bold text-xs hover:bg-slate-200 transition-colors"
                      >
                        SUBMIT ANOTHER REQUEST
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="border-b border-slate-200 pb-4">
                      <h2 className="text-xl font-bold text-[#0F172A]">Marketplace Audit & Proposal Request</h2>
                      <p className="text-xs text-slate-500 mt-1">
                        Queries are automatically routed to <strong className="text-[#0F172A]">contact.bizmaker@gmail.com</strong> & WhatsApp <strong className="text-[#0F172A]">+91 7770916118</strong>
                      </p>
                    </div>

                    {/* BASIC INFO GRID (WITH CITY FIELD) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-[#00C9A7]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Brand Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. UrbanStyle Apparel"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-[#00C9A7]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">City / Location *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Mumbai, Delhi, Surat, Jaipur..."
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-[#00C9A7]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="+91 7770916118"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-[#00C9A7]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email Address *</label>
                        <input 
                          type="email" 
                          required
                          placeholder="contact.bizmaker@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-[#00C9A7]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Website / Store URL (Optional)</label>
                      <input 
                        type="url" 
                        placeholder="https://www.yourbrand.com or Amazon storefront link"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-[#00C9A7]"
                      />
                    </div>

                    {/* PLATFORMS CHECKBOXES */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Which platforms do you currently sell on?</label>
                      <div className="flex flex-wrap gap-3">
                        {['Amazon', 'Flipkart', 'Meesho', 'Shopsy', 'eBay', 'Etsy', 'Other'].map((plat) => (
                          <label key={plat} className="inline-flex items-center gap-2 cursor-pointer bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700">
                            <input 
                              type="checkbox"
                              checked={formData.platforms.includes(plat)}
                              onChange={() => handlePlatformChange(plat)}
                              className="accent-[#00C9A7] w-4 h-4"
                            />
                            <span>{plat}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* REVENUE & SKUs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Monthly Revenue Bracket</label>
                        <select 
                          value={formData.revenue}
                          onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-[#00C9A7]"
                        >
                          <option>Below ₹1L</option>
                          <option>₹1L–₹5L</option>
                          <option>₹5L–₹10L</option>
                          <option>₹10L+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Number of SKUs in Catalog</label>
                        <select 
                          value={formData.skus}
                          onChange={(e) => setFormData({ ...formData, skus: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-[#00C9A7]"
                        >
                          <option>1 - 10 SKUs</option>
                          <option>10 - 50 SKUs</option>
                          <option>50 - 200 SKUs</option>
                          <option>200+ SKUs</option>
                        </select>
                      </div>
                    </div>

                    {/* SERVICES NEEDED */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-2">What do you need help with?</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Account Management', 'Catalog', 'Inventory', 'Orders', 'Advertising', 'Account Health', 'Complete Management'].map((srv) => (
                          <label key={srv} className="inline-flex items-center gap-2 cursor-pointer bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700">
                            <input 
                              type="checkbox"
                              checked={formData.servicesNeeded.includes(srv)}
                              onChange={() => handleServiceChange(srv)}
                              className="accent-[#00C9A7] w-3.5 h-3.5"
                            />
                            <span className="truncate">{srv}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* REQUIREMENTS TEXTAREA */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tell us about your specific requirements</label>
                      <textarea 
                        rows={4}
                        placeholder="Mention current challenges, target revenue growth, or specific platform issues..."
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:border-[#00C9A7]"
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-matte-primary w-full py-4 text-base tracking-wide flex items-center justify-center gap-2 shadow-xl"
                    >
                      {loading ? (
                        <span>PROCESSING INQUIRY...</span>
                      ) : (
                        <>
                          <span>SUBMIT & ROUTE TO EMAIL & WHATSAPP</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
