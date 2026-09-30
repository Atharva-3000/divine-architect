"use client";
import Link from "next/link";


import { ChevronsRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  forceSolid?: boolean;
}

export default function Navbar({ forceSolid = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${targetId}`);
    }
  };

  const isSolid = scrolled || forceSolid || mobileMenuOpen;

  return (
    <>
      <div className="fixed top-4 md:top-8 left-0 right-0 z-[100] flex justify-center px-4 md:px-4 pointer-events-none transition-all duration-300">
        <nav className={`pointer-events-auto backdrop-blur-md border rounded-[12px] p-2 pl-5 md:pl-6 flex items-center justify-between shadow-lg transition-all duration-300 w-full md:w-auto max-w-[1400px] ${
          isSolid 
            ? "bg-white/95 border-gray-200 text-dark" 
            : "bg-white/5 border-white/30 text-white"
        }`}>
          
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`font-general font-medium text-[18px] tracking-wide md:pr-6 md:border-r py-1 transition-colors duration-300 hover:opacity-80 ${
            isSolid ? "border-gray-300" : "border-white/20"
          }`}>
            Divine Architects
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium mr-8 ml-6">
            <Link href="/#about" onClick={(e) => handleNavClick(e, '#about')} className="relative group overflow-hidden py-4">
              <span>About</span>
              <span className={`absolute left-0 bottom-3 w-full h-[1.5px] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${isSolid ? "bg-dark" : "bg-white"}`}></span>
            </Link>
            <Link href="/#projects" onClick={(e) => handleNavClick(e, '#projects')} className="relative group overflow-hidden py-4">
              <span>Our Projects</span>
              <span className={`absolute left-0 bottom-3 w-full h-[1.5px] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${isSolid ? "bg-dark" : "bg-white"}`}></span>
            </Link>
            
            <div className="relative group/nav flex items-center gap-1 cursor-pointer py-4">
              <Link href="/#services" onClick={(e) => handleNavClick(e, '#services')} className="relative group overflow-hidden flex items-center gap-1">
                <span>Services</span>
                <ChevronDown size={14} className="group-hover/nav:rotate-180 transition-transform duration-300" />
                <span className={`absolute left-0 bottom-0 w-full h-[1.5px] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${isSolid ? "bg-dark" : "bg-white"}`}></span>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 w-48">
                <div className="bg-white text-dark rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-2 flex flex-col overflow-hidden">
                  <Link href="/#service-urban-design" onClick={(e) => handleNavClick(e, '#service-urban-design')} className="px-4 py-2.5 hover:bg-gray-50 hover:text-primary text-[14px] font-medium transition-colors border-b border-gray-100 last:border-0">Urban Design</Link>
                  <Link href="/#service-corporate-offices" onClick={(e) => handleNavClick(e, '#service-corporate-offices')} className="px-4 py-2.5 hover:bg-gray-50 hover:text-primary text-[14px] font-medium transition-colors border-b border-gray-100 last:border-0">Corporate Offices</Link>
                  <Link href="/#service-landmarks" onClick={(e) => handleNavClick(e, '#service-landmarks')} className="px-4 py-2.5 hover:bg-gray-50 hover:text-primary text-[14px] font-medium transition-colors border-b border-gray-100 last:border-0">Landmarks</Link>
                  <Link href="/#service-commercial" onClick={(e) => handleNavClick(e, '#service-commercial')} className="px-4 py-2.5 hover:bg-gray-50 hover:text-primary text-[14px] font-medium transition-colors">Commercial</Link>
                </div>
              </div>
            </div>
            
            <Link href="/gallery" className="relative group overflow-hidden py-4">
              <span>Gallery</span>
              <span className={`absolute left-0 bottom-3 w-full h-[1.5px] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${isSolid ? "bg-dark" : "bg-white"}`}></span>
            </Link>
          </div>

          <Link href="/contact" className={`hidden md:flex relative h-[40px] rounded-[7px] items-center pr-[36px] hover:opacity-90 transition-all duration-300 ${
            isSolid ? "bg-dark text-white" : "bg-white text-dark"
          }`}>
            <span className="flex-1 px-4 text-[14px] font-semibold text-center">Request A Quote</span>
            <span className="absolute right-[4px] w-[32px] h-[32px] bg-primary text-white rounded-[4px] flex items-center justify-center">
              <ChevronsRight size={16} strokeWidth={2.5} />
            </span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden p-2 ml-4 flex items-center justify-center transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-white transition-transform duration-500 ease-in-out flex flex-col pt-32 px-8 overflow-y-auto ${
        mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex flex-col gap-6 text-2xl font-general font-medium text-dark pb-12">
          <Link href="/#about" onClick={(e) => handleNavClick(e, '#about')} className="border-b border-gray-100 pb-4 hover:text-primary transition-colors">About Us</Link>
          <Link href="/#projects" onClick={(e) => handleNavClick(e, '#projects')} className="border-b border-gray-100 pb-4 hover:text-primary transition-colors">Our Projects</Link>
          
          {/* Mobile Services Links */}
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-4">
            <Link href="/#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-primary transition-colors">Services</Link>
            <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100 text-[18px] text-dark/70">
              <Link href="/#service-urban-design" onClick={(e) => handleNavClick(e, '#service-urban-design')} className="hover:text-primary transition-colors">Urban Design</Link>
              <Link href="/#service-corporate-offices" onClick={(e) => handleNavClick(e, '#service-corporate-offices')} className="hover:text-primary transition-colors">Corporate Offices</Link>
              <Link href="/#service-landmarks" onClick={(e) => handleNavClick(e, '#service-landmarks')} className="hover:text-primary transition-colors">Landmarks</Link>
              <Link href="/#service-commercial" onClick={(e) => handleNavClick(e, '#service-commercial')} className="hover:text-primary transition-colors">Commercial</Link>
            </div>
          </div>
          
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4 hover:text-primary transition-colors">Gallery</Link>
          
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 relative h-[56px] bg-primary text-white rounded-[12px] flex items-center justify-between px-2 hover:bg-dark transition-colors">
            <span className="flex-1 text-[18px] font-semibold text-center">Request A Quote</span>
            <span className="w-[44px] h-[44px] bg-white text-primary rounded-[8px] flex items-center justify-center shrink-0">
              <ChevronsRight size={24} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
