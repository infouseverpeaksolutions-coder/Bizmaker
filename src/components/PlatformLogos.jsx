import amazonImg from '../assets/platform-amazon.png';
import flipkartImg from '../assets/platform-flipkart.jpg';
import meeshoImg from '../assets/platform-meesho.jpg';
import ebayImg from '../assets/platform-ebay.jpg';
import etsyImg from '../assets/platform-etsy.jpg';
import shopsyImg from '../assets/platform-shopsy.jpg';

export function AmazonLogo({ className = "h-10 md:h-12 w-auto object-contain" }) {
  return (
    <img 
      src={amazonImg} 
      alt="Amazon Official Logo" 
      className={`h-10 md:h-12 w-auto object-contain ${className}`} 
    />
  );
}

export function FlipkartLogo({ className = "h-10 md:h-12 w-auto object-contain" }) {
  return (
    <img 
      src={flipkartImg} 
      alt="Flipkart Official Logo" 
      className={`h-10 md:h-12 w-auto object-contain ${className}`} 
    />
  );
}

export function MeeshoLogo({ className = "h-10 md:h-12 w-auto object-contain" }) {
  return (
    <img 
      src={meeshoImg} 
      alt="Meesho Official Logo" 
      className={`h-10 md:h-12 w-auto object-contain rounded-lg ${className}`} 
    />
  );
}

/* OFFICIAL SHOPSY LOGO */
export function ShopsyLogo({ className = "h-10 md:h-12 w-auto object-contain" }) {
  return (
    <img 
      src={shopsyImg} 
      alt="Shopsy Official Logo" 
      className={`h-10 md:h-12 w-auto object-contain rounded-lg shadow-sm ${className}`} 
    />
  );
}

/* HIGH-VISIBILITY EBAY LOGO */
export function EbayLogo({ className = "h-10 md:h-12 w-auto object-contain" }) {
  return (
    <img 
      src={ebayImg} 
      alt="eBay Official Logo" 
      className={`h-10 md:h-12 w-auto object-contain mix-blend-multiply ${className}`} 
    />
  );
}

/* HIGH-VISIBILITY ETSY LOGO */
export function EtsyLogo({ className = "h-10 md:h-12 w-auto object-contain" }) {
  return (
    <img 
      src={etsyImg} 
      alt="Etsy Official Logo" 
      className={`h-10 md:h-12 w-auto object-contain rounded-full shadow-sm ${className}`} 
    />
  );
}

// Aliases for backwards compatibility
export const ShopzeeLogo = ShopsyLogo;
export const ShopifyLogo = ShopsyLogo;

/* HIGH-VISIBILITY JIOMART / D2C LOGO */
export function D2CLogo({ className = "h-10 md:h-12 w-auto" }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {/* Vibrant D2C / JioMart Storefront Badge Icon */}
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0088FF] to-[#0055CC] flex items-center justify-center text-white font-black text-xs shadow-md shrink-0 border border-blue-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-base md:text-lg font-black text-[#0F172A] leading-tight">
          JioMart & D2C
        </span>
        <span className="text-[10px] font-extrabold text-[#00C9A7] tracking-wider uppercase">
          Custom Stores
        </span>
      </div>
    </div>
  );
}
