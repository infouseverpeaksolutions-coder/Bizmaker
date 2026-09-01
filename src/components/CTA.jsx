import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, Mail, MessageSquare } from 'lucide-react';

export default function CTA() {
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = async (e) => {
    e.preventDefault();
    if (!emailInput) return;

    const quickText = `🚀 *QUICK BIZMAKER MARKETPLACE AUDIT REQUEST*
---------------------------------------
✉️ *Email:* ${emailInput}
---------------------------------------
Sent via BIZMAKER Web Portal CTA`;

    const whatsappUrl = `https://wa.me/917770916118?text=${encodeURIComponent(quickText)}`;

    try {
      await fetch('http://localhost:5000/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, requirements: 'Quick Audit Request from Footer CTA' })
      });
    } catch (err) {
      console.warn('Backend API connection offline, proceeding with WhatsApp dispatch.');
    }

    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-[#041317] text-white relative overflow-hidden border-t border-[#18343C]">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#00C9A7]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#061B21]/80 rounded-full blur-3xl pointer-events-none" />

      {/* Subtly Animated Technology Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto matte-card-dark p-8 md:p-14 border border-[#18343C] shadow-2xl text-center space-y-6">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] bg-[#00C9A7]/15 px-4 py-1.5 rounded-full border border-[#00C9A7]/30 inline-block shadow-md">
            TRANSFORM YOUR MARKETPLACE REVENUE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Stop Leaving Marketplace Sales <br className="hidden sm:block" />
            <span className="text-gradient-teal">to Chance.</span>
          </h2>

          <p className="text-[#C7D2D9] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Partner with BIZMAKER's senior marketplace operations team and unlock predictable organic growth across Amazon, Flipkart, Meesho, Shopsy, eBay, and Etsy.
          </p>

          {/* DUAL ACTION FORM */}
          {submitted ? (
            <div className="p-6 bg-[#0B2029] rounded-2xl border border-[#00C9A7]/40 max-w-md mx-auto space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#00C9A7] mx-auto" />
              <h3 className="text-lg font-bold text-white">Inquiry Queued!</h3>
              <p className="text-xs text-[#C7D2D9]">
                Routed to <strong className="text-white">contact.bizmaker@gmail.com</strong> and redirected to WhatsApp <strong className="text-[#00C9A7]">+91 7770916118</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                placeholder="Enter your work email address..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-[#0B2029] text-white placeholder-slate-400 border border-[#18343C] text-sm focus:outline-none focus:border-[#00C9A7]"
              />
              <button
                type="submit"
                className="btn-matte-primary px-7 py-3.5 text-xs sm:text-sm font-extrabold tracking-wider w-full sm:w-auto shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>REQUEST AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* CONTACT METHOD BADGES */}
          <div className="pt-6 border-t border-[#18343C] flex flex-wrap items-center justify-center gap-4 text-xs text-[#C7D2D9]">
            <a href="mailto:contact.bizmaker@gmail.com" className="flex items-center gap-1.5 hover:text-[#00C9A7] transition-colors bg-[#0B2029] px-3.5 py-1.5 rounded-lg border border-[#18343C]">
              <Mail className="w-3.5 h-3.5 text-[#00C9A7]" />
              <span>contact.bizmaker@gmail.com</span>
            </a>
            <a href="https://wa.me/917770916118" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#00C9A7] transition-colors bg-[#0B2029] px-3.5 py-1.5 rounded-lg border border-[#18343C]">
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp: +91 7770916118</span>
            </a>
            <a href="tel:7770916118" className="flex items-center gap-1.5 hover:text-[#00C9A7] transition-colors bg-[#0B2029] px-3.5 py-1.5 rounded-lg border border-[#18343C]">
              <Phone className="w-3.5 h-3.5 text-[#00C9A7]" />
              <span>Call: +91 7770916118</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
