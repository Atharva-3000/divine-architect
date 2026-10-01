"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';
import { Menu, X, ChevronsRight } from 'lucide-react';

export default function Navbar({ forceSolid = false }: { forceSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(forceSolid);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (forceSolid) return;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, forceSolid]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Slight delay to allow mobile menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 md:py-4' : 'py-4 md:py-6'
      }`}>
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 pointer-events-none">
        
        {/* Navbar Container - Thinner height */}
        <nav className={`pointer-events-auto backdrop-blur-md border rounded-[12px] pl-5 md:pl-6 pr-1 md:pr-1.5 flex items-center justify-between shadow-lg transition-all duration-300 w-full ${
          scrolled 
            ? 'bg-white/95 border-gray-200 shadow-md py-1.5 md:py-2' 
            : 'bg-white/10 border-white/20 py-1.5 md:py-2'
        }`}>
          
          {/* Logo */}
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`font-general font-medium text-[18px] tracking-wide md:pr-6 md:border-r py-1 transition-colors duration-300 hover:opacity-80 ${
            scrolled ? 'text-dark border-gray-200' : 'text-white border-white/20'
          }`}>
            Divine Architects
          </Link>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-8 px-6 flex-1 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-dark/80' : 'text-white/90'
          }`}>
            <Link href="/#about" onClick={(e) => handleNavClick(e, '#about')} className="relative group py-2">
              <span className="hover:text-primary transition-colors">About</span>
            </Link>
            
            <Link href="/#projects" onClick={(e) => handleNavClick(e, '#projects')} className="relative group py-2">
              <span className="hover:text-primary transition-colors">Our Projects</span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group py-2">
              <Link href="/#services" onClick={(e) => handleNavClick(e, '#services')} className="relative group flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                <span>Services</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-70 mt-[2px]"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 w-[200px] flex flex-col overflow-hidden text-dark">
                  <Link href="/#service-urban-design" onClick={(e) => handleNavClick(e, '#service-urban-design')} className="px-4 py-2.5 hover:bg-gray-50 hover:text-primary text-[14px] font-medium transition-colors border-b border-gray-100 last:border-0">Urban Design</Link>
                  <Link href="/#service-corporate-offices" onClick={(e) => handleNavClick(e, '#service-corporate-offices')} className="px-4 py-2.5 hover:bg-gray-50 hover:text-primary text-[14px] font-medium transition-colors border-b border-gray-100 last:border-0">Corporate Offices</Link>
                  <Link href="/#service-landmarks" onClick={(e) => handleNavClick(e, '#service-landmarks')} className="px-4 py-2.5 hover:bg-gray-50 hover:text-primary text-[14px] font-medium transition-colors border-b border-gray-100 last:border-0">Landmarks</Link>
                  <Link href="/#service-commercial" onClick={(e) => handleNavClick(e, '#service-commercial')} className="px-4 py-2.5 hover:bg-gray-50 hover:text-primary text-[14px] font-medium transition-colors border-b border-gray-100 last:border-0">Commercial</Link>
                </div>
              </div>
            </div>
            
            <Link href="/gallery" className="relative group py-2">
              <span className="hover:text-primary transition-colors">Gallery</span>
            </Link>
          </div>

          {/* Desktop CTA - Refactored identical to Hero CTA for perfect padding and shape */}
          <Link href="/contact" className={`hidden md:inline-flex items-center justify-between rounded-[8px] pl-5 pr-1.5 py-1.5 transition-all shadow-md hover:shadow-lg group ${
            scrolled ? 'bg-primary text-white' : 'bg-white text-dark'
          }`}>
            <span className="text-[13px] font-semibold mr-3 whitespace-nowrap">Request A Quote</span>
            <span className={`w-[28px] h-[28px] rounded-[5px] flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 ${
              scrolled ? 'bg-white/20 text-white' : 'bg-primary text-white'
            }`}>
              <ChevronsRight size={14} strokeWidth={2.5} />
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ml-auto mr-1 rounded-md transition-colors ${
              scrolled ? 'text-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full justify-center px-8 text-white text-2xl font-general font-medium space-y-6">
          <Link href="/#about" onClick={(e) => handleNavClick(e, '#about')} className="border-b border-gray-800 pb-4 hover:text-primary transition-colors">About Us</Link>
          <Link href="/#projects" onClick={(e) => handleNavClick(e, '#projects')} className="border-b border-gray-800 pb-4 hover:text-primary transition-colors">Our Projects</Link>
          
          <div className="border-b border-gray-800 pb-4">
            <Link href="/#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-primary transition-colors block mb-4">Services</Link>
            <div className="flex flex-col space-y-3 pl-4 border-l border-gray-800 text-lg font-sans text-white/70">
              <Link href="/#service-urban-design" onClick={(e) => handleNavClick(e, '#service-urban-design')} className="hover:text-primary transition-colors">Urban Design</Link>
              <Link href="/#service-corporate-offices" onClick={(e) => handleNavClick(e, '#service-corporate-offices')} className="hover:text-primary transition-colors">Corporate Offices</Link>
              <Link href="/#service-landmarks" onClick={(e) => handleNavClick(e, '#service-landmarks')} className="hover:text-primary transition-colors">Landmarks</Link>
              <Link href="/#service-commercial" onClick={(e) => handleNavClick(e, '#service-commercial')} className="hover:text-primary transition-colors">Commercial</Link>
            </div>
          </div>
          
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-800 pb-4 hover:text-primary transition-colors">Gallery</Link>
          
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 relative h-[56px] bg-primary text-white rounded-[12px] flex items-center justify-between px-2 hover:bg-primary/90 transition-colors">
            <span className="px-6 text-[18px] font-semibold">Request A Quote</span>
            <span className="w-[40px] h-[40px] bg-white/20 text-white rounded-[8px] flex items-center justify-center">
              <ChevronsRight size={20} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
