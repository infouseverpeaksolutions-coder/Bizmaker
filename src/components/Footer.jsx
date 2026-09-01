import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/bizmaker-logo-darkbg.png';

export default function Footer() {
  return (
    <footer className="bg-[#041317] text-[#C7D2D9] pt-16 pb-8 border-t border-[#18343C] relative overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C9A7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#061B21]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#18343C]">
          
          {/* COL 1: BRAND WITH SEAMLESS BLENDED LOGO */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img 
                src={logoImg} 
                alt="BIZMAKER Official Logo" 
                className="h-14 md:h-16 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,201,167,0.3)]"
              />
            </Link>
            
            <p className="text-sm text-[#C7D2D9] max-w-sm leading-relaxed">
              <span className="text-white font-semibold block text-base mb-1">Your Growth. Our Expertise.</span>
              BIZMAKER is a premium E-Commerce Account Management and Marketplace Management enterprise. We manage seller accounts across Amazon, Flipkart, Meesho, Shopsy, eBay, Etsy, and major platforms.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn SVG */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#00C9A7]/20 hover:text-[#00C9A7] border border-[#18343C] transition-colors text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Instagram SVG */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#00C9A7]/20 hover:text-[#00C9A7] border border-[#18343C] transition-colors text-white"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-[#00C9A7]/20 hover:text-[#00C9A7] border border-[#18343C] transition-colors text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COL 2: NAVIGATION */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-[#00C9A7]">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-[#00C9A7] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#00C9A7] transition-colors">Services</Link></li>
              <li><Link to="/platforms" className="hover:text-[#00C9A7] transition-colors">Platforms</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#00C9A7] transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" className="hover:text-[#00C9A7] transition-colors">Resources & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#00C9A7] transition-colors">Contact & Consultation</Link></li>
            </ul>
          </div>

          {/* COL 3: SERVICES */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-[#00C9A7]">Core Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services#account-management" className="hover:text-[#00C9A7] transition-colors">Account Management</Link></li>
              <li><Link to="/services#catalog-management" className="hover:text-[#00C9A7] transition-colors">Catalog & SEO</Link></li>
              <li><Link to="/services#inventory-management" className="hover:text-[#00C9A7] transition-colors">Inventory Control</Link></li>
              <li><Link to="/services#order-management" className="hover:text-[#00C9A7] transition-colors">Order Management</Link></li>
              <li><Link to="/services#advertising-promotions" className="hover:text-[#00C9A7] transition-colors">Advertising & PPC</Link></li>
              <li><Link to="/services#analytics-reporting" className="hover:text-[#00C9A7] transition-colors">Analytics & Reporting</Link></li>
            </ul>
          </div>

          {/* COL 4: PLATFORMS & CONTACT */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide uppercase text-xs text-[#00C9A7]">Platforms</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link to="/platforms/amazon" className="hover:text-[#00C9A7] flex items-center justify-between"><span>Amazon</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></Link></li>
              <li><Link to="/platforms/flipkart" className="hover:text-[#00C9A7] flex items-center justify-between"><span>Flipkart</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></Link></li>
              <li><Link to="/platforms/meesho" className="hover:text-[#00C9A7] flex items-center justify-between"><span>Meesho</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></Link></li>
              <li><Link to="/platforms/shopsy" className="hover:text-[#00C9A7] flex items-center justify-between"><span>Shopsy</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></Link></li>
              <li><Link to="/platforms/ebay" className="hover:text-[#00C9A7] flex items-center justify-between"><span>eBay</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></Link></li>
              <li><Link to="/platforms/etsy" className="hover:text-[#00C9A7] flex items-center justify-between"><span>Etsy</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></Link></li>
            </ul>

            <h4 className="text-white font-bold text-base mb-3 tracking-wide uppercase text-xs text-[#00C9A7]">Contact</h4>
            <div className="space-y-2 text-xs text-[#7F929C]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00C9A7]" />
                <a href="mailto:contact.bizmaker@gmail.com" className="hover:text-[#00C9A7] transition-colors">contact.bizmaker@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00C9A7]" />
                <a href="tel:7770916118" className="hover:text-[#00C9A7] transition-colors">+91 7770916118</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00C9A7] shrink-0 mt-0.5" />
                <span>Bizmaker Corporate Tower, Tech Hub, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#7F929C] gap-4">
          <div>
            © 2026 BIZMAKER. All Rights Reserved. Managed for E-Commerce Excellence.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-[#C7D2D9] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#C7D2D9] transition-colors">Terms & Conditions</a>
            <a href="#cookies" className="hover:text-[#C7D2D9] transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
