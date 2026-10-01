"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    if (skyRef.current) tl.to(skyRef.current, { y: 150, ease: "none" }, 0);
    if (textRef.current) tl.to(textRef.current, { y: 80, ease: "none" }, 0);
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[850px] md:min-h-[900px] w-full overflow-hidden flex flex-col justify-start items-center pt-28 md:pt-40">
      {/* Background Cloud */}
      <Image
        ref={skyRef}
        src="/assets/hero-background-cloud.png"
        alt="Sky background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Middle Text Layer - Exactly matching original desktop layout */}
      <div ref={textRef} className="relative z-10 text-white px-4 md:px-16 w-full max-w-[1400px] mx-auto flex flex-col items-center md:items-start">
        
        {/* Title Container */}
        <div className="w-full flex flex-col items-center md:items-start max-w-[1200px]">
          {/* Top small text */}
          <div className="flex justify-center md:justify-between items-end w-full text-[12px] md:text-sm font-medium mb-2 md:mb-4 px-1 text-center md:text-left">
            <p className="tracking-wide text-white/90">Redefining Spaces, Elevating Lifestyle</p>
            <p className="tracking-wide hidden md:block">Based In Jaipur, Rajasthan</p>
          </div>
          
          {/* Main Title - Scaled back to its original reasonable size */}
          <h1 className="font-general font-bold text-[clamp(3.5rem,7vw,8rem)] leading-[1.05] tracking-tight text-center md:text-left break-words mb-4 md:mb-6 w-full">
            Divine Architects
          </h1>
          
          {/* Bottom text and button - Stacked vertically as per original */}
          <div className="text-center md:text-left px-1 w-full flex flex-col items-center md:items-start gap-6 md:gap-6 mt-0">
            <p className="text-[16px] md:text-[20px] lg:text-[22px] font-normal leading-[1.4] md:leading-[27px] text-white/90 max-w-[320px] md:max-w-[600px] mx-auto md:mx-0">
              Redefining Luxury, Meaningfully Yours. We Design Spaces That Make The Status Quo.
            </p>
            <Link href="/contact" className="relative w-[198px] h-[44px] md:h-[48px] bg-white text-dark rounded-[7px] flex items-center hover:opacity-90 transition-opacity mx-auto md:mx-0 shrink-0 shadow-lg">
              <span className="w-full flex items-center justify-center text-[16px] font-semibold pr-8">Start Your Project</span>
              <span className="absolute right-[4px] w-[36px] h-[40px] bg-primary text-white rounded-[4px] flex items-center justify-center shrink-0">
                <ChevronsRight size={18} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Foreground Building Layer - Fitting perfectly inside the viewport! */}
      <div className="absolute inset-x-0 bottom-0 top-[35%] md:top-[25%] z-20 pointer-events-none flex justify-center items-end">
        <div className="relative w-[190%] sm:w-[150%] md:w-full h-full max-w-[1400px]">
          <Image
            src="/assets/hero-building-home.png"
            alt="Modern Building"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* Stats Overlay - Slimmer original padding restored */}
      <div className="absolute bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 w-[220px] sm:w-[60%] md:w-full max-w-[65rem] z-30 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 px-0 md:px-4 text-center pointer-events-none">
        {[
          { number: "10+", text: "Years of working" },
          { number: "90%", text: "Satisfaction Rate" },
          { number: "24+", text: "National Projects" },
        ].map((stat, i) => (
          <div key={i} className="flex-1 w-full bg-white/10 backdrop-blur-2xl border-t border-l border-white/40 border-r border-b border-white/10 rounded-[12px] md:rounded-[16px] py-4 md:py-6 lg:py-8 flex flex-col items-center justify-center text-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] relative overflow-hidden group pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="relative z-10 font-general font-bold text-[38px] md:text-[3.5rem] leading-none mb-1 md:mb-2 drop-shadow-md">
              {stat.number}
            </h3>
            <p className="relative z-10 font-sans text-[9px] md:text-xs lg:text-sm text-white/95 font-medium uppercase tracking-[0.15em] drop-shadow-sm">
              {stat.text}
            </p>
          </div>
        ))}
      </div>

      {/* Floating Contact Button */}
      <Link href="/contact" className="hidden md:flex absolute bottom-12 right-8 z-30 bg-white text-dark pl-3 pr-4 py-2.5 rounded-[12px] shadow-2xl items-center gap-3 hover:-translate-y-1 transition-transform font-semibold pointer-events-auto">
        <div className="text-green-500">
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
        </div>
        <div className="text-left leading-tight">
          <span className="block text-[11px] text-dark/50 font-semibold uppercase tracking-wider">Contact</span>
          <span className="block text-sm">Now!</span>
        </div>
      </Link>
    </section>
  );
}
