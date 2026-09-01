import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import logoImg from '../assets/bizmaker-logo-darkbg.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformsDropdown, setPlatformsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPlatformsDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Platforms', 
      path: '/platforms',
      hasDropdown: true,
      subItems: [
        { name: 'Overview', path: '/platforms' },
        { name: 'Amazon Account Management', path: '/platforms/amazon' },
        { name: 'Flipkart Account Management', path: '/platforms/flipkart' },
        { name: 'Meesho Account Management', path: '/platforms/meesho' },
        { name: 'Shopsy Store Management', path: '/platforms/shopsy' },
        { name: 'eBay Global Management', path: '/platforms/ebay' },
        { name: 'Etsy Shop Management', path: '/platforms/etsy' },
      ]
    },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About Us', path: '/about' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#041317]/95 backdrop-blur-md border-b border-[#18343C]/80 py-2.5' 
          : 'bg-[#041317]/80 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        
        {/* SEAMLESSLY BLENDED LOGO WITHOUT ANY WHITE BOX */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <img 
            src={logoImg} 
            alt="BIZMAKER Official Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(0,201,167,0.25)]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.subItems && link.subItems.some(sub => location.pathname === sub.path));

            if (link.hasDropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setPlatformsDropdown(true)}
                  onMouseLeave={() => setPlatformsDropdown(false)}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-all ${
                      isActive 
                        ? 'text-[#00C9A7] bg-white/10' 
                        : 'text-[#C7D2D9] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${platformsDropdown ? 'rotate-180 text-[#00C9A7]' : ''}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  {platformsDropdown && (
                    <div className="absolute top-full left-0 w-64 pt-2">
                      <div className="bg-[#0B2029] border border-[#18343C] rounded-xl p-2 shadow-2xl shadow-black/80 backdrop-blur-xl">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={`block px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                              location.pathname === sub.path 
                                ? 'text-[#00C9A7] bg-[#00C9A7]/10' 
                                : 'text-[#C7D2D9] hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive 
                    ? 'text-[#00C9A7] bg-white/10' 
                    : 'text-[#C7D2D9] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/contact"
            className="btn-matte-primary px-6 py-2.5 text-sm tracking-wide group"
          >
            <span>GET STARTED</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2.5 rounded-lg text-[#C7D2D9] hover:text-white bg-white/5 border border-[#18343C]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00C9A7]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-[#061B21] border-t border-[#18343C] z-50 flex flex-col justify-between p-6 overflow-y-auto">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-bold rounded-xl transition-all ${
                    location.pathname === link.path
                      ? 'text-[#00C9A7] bg-white/10'
                      : 'text-[#C7D2D9] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>

                {/* Mobile Submenu for Platforms */}
                {link.subItems && (
                  <div className="pl-4 mt-1 space-y-1 border-l-2 border-[#00C9A7]/30 ml-4">
                    {link.subItems.slice(1).map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${
                          location.pathname === sub.path
                            ? 'text-[#00C9A7]'
                            : 'text-[#7F929C] hover:text-white'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#18343C] space-y-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-matte-primary w-full py-3.5 text-base tracking-wide flex justify-center items-center gap-2"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="text-center text-xs text-[#7F929C]">
              © 2026 BIZMAKER. All Rights Reserved.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
