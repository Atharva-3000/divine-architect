"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

export default function CtaAndFooter() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative pt-12 md:pt-24 bg-light w-full">
      {/* Orange Banner */}
      <div className="px-4 md:px-8 w-full flex justify-center mb-16 md:mb-24 lg:mb-32 relative z-20">
        <section className="relative bg-primary w-full max-w-[1240px] py-12 md:py-0 md:h-[393px] rounded-[20px] flex flex-col items-center justify-center text-center text-white shrink-0 overflow-hidden md:overflow-visible">
          {/* Decorative blocks - hidden on mobile to prevent chaotic overlapping */}
          <div className="hidden md:block absolute top-8 left-8 w-12 h-12 bg-white rounded-sm opacity-90"></div>
          <div className="hidden md:block absolute bottom-8 left-8 w-12 h-12 bg-white rounded-sm opacity-90"></div>
          
          <div className="max-w-2xl relative z-20 px-4 w-full">
            <h2 className="font-general font-medium text-[32px] md:text-[54px] leading-[1.2] md:leading-[1.1] tracking-tight mb-4 md:mb-6">
              Your Journey Towards<br className="hidden sm:block" /> A better lifestyle
            </h2>
            <p className="text-[16px] md:text-[22px] font-normal leading-[1.6] md:leading-[27px] text-white/90 mb-8 md:mb-10 max-w-lg mx-auto px-2">
              Get your Kid&apos;s admission into Kingston Higher Secondary School Today. Enquire us now for a brighter future.
            </p>
            <Link href="/contact" className="relative w-[198px] h-[40px] bg-white text-dark rounded-[7px] flex items-center mx-auto hover:opacity-90 transition-opacity">
              <span className="w-[162px] flex items-center justify-center text-[16px] font-medium">Start Your Project</span>
              <span className="absolute right-[4px] w-[32px] h-[32px] bg-primary text-white rounded-[4px] flex items-center justify-center shrink-0">
                <ChevronsRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white pt-16 md:pt-24 pb-0 relative z-10 overflow-hidden w-full min-h-[600px] flex flex-col justify-between">
        
        {/* Top Content Row */}
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-32 relative z-20">
          
          <div className="max-w-[400px]">
            <p className="text-white/80 text-[18px] md:text-[20px] leading-[1.6] mb-8 md:mb-12">
              5th Generation of Architects.<br />
              Oldest in Jaipur.<br />
              With over 20 Years of Trust.
            </p>
            <div>
              <p className="text-white/60 text-sm mb-4 md:mb-5">Follow us on</p>
              <div className="flex gap-4 items-center">
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors text-white/90">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors text-white/90">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors text-white/90">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors text-white/90">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-24 lg:gap-32 relative z-40">
            <div>
              <h4 className="font-semibold mb-4 md:mb-6 text-white text-[16px]">Quick Links</h4>
              <ul className="flex flex-col gap-3 md:gap-4 text-white/70 text-[15px]">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 md:mb-6 text-white text-[16px]">Specialities</h4>
              <ul className="flex flex-col gap-3 md:gap-4 text-white/70 text-[15px]">
                <li><a href="#" className="hover:text-white transition-colors">Interior</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Residential</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Urban</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultancy</a></li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Huge DIVINE background text - strictly spanning 100% width on mobile */}
        <div className="w-full relative z-10 pointer-events-none select-none mt-12 md:mt-0 md:translate-y-[28%] overflow-hidden flex justify-center md:justify-start">
          <div className="w-full md:max-w-[1400px] md:mx-auto px-0 md:px-16 text-center md:text-left">
            <span className="font-general font-bold text-[28vw] md:text-[clamp(5rem,22vw,360px)] leading-[0.75] tracking-tighter bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent whitespace-nowrap inline-block px-1 md:px-0">
              DIVINE
            </span>
          </div>
        </div>
      </footer>

      {/* Right Side Overlapping Image */}
      <div className="absolute right-0 bottom-0 w-[60vw] md:w-[450px] lg:w-[550px] xl:w-[650px] h-[40%] md:h-[150%] pointer-events-none z-0 md:z-30 overflow-hidden md:overflow-visible opacity-30 md:opacity-100 mix-blend-normal">
        <Image
          src="/assets/last-image-span-gooter-contact-us-cta.png"
          alt="Modern architecture detail"
          fill
          className="object-contain object-bottom md:object-right-bottom"
        />
      </div>
    </div>
  );
}
