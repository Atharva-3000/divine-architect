"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronsRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Lotus Conclave Park",
    location: "Bangalore, Karnataka",
    image: "/assets/featured-p1.png"
  },
  {
    title: "Scorch Cafe",
    location: "Indore, Madhya Pradesh",
    image: "/assets/featured-p2.png"
  },
  {
    title: "The Tempest Inn",
    location: "Jaipur, Rajasthan",
    image: "/assets/featured-p3.png"
  }
];

export default function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="pb-24 pt-20 px-6 md:px-16 max-w-[1400px] mx-auto bg-light w-full">
      <p className="text-sm md:text-base font-medium text-dark/70 mb-4 md:mb-6 leading-none pt-4">Featured Projects</p>
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 mb-8 md:mb-12">
        
        {/* Left Column */}
        <div className="flex-1 w-full">
          <h2 className="font-general font-medium text-[38px] md:text-[54px] leading-[1.1] tracking-tight mb-6 md:mb-8 text-dark">
            Projects we are Proud Off.<br className="hidden md:block" />
            And our Capabilities<br className="hidden md:block" />
            We build on Trust
          </h2>
          
          <Link href="/contact" className="relative w-[198px] h-[40px] bg-dark text-white rounded-[7px] flex items-center hover:opacity-90 transition-opacity">
            <span className="w-[162px] flex items-center justify-center text-[16px] font-medium">Start Your Project</span>
            <span className="absolute right-[4px] w-[32px] h-[32px] bg-primary text-white rounded-[4px] flex items-center justify-center shrink-0">
              <ChevronsRight size={16} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
        
        {/* Right Column */}
        <div className="flex-1 flex flex-col justify-between h-auto md:h-[280px] w-full mt-4 md:mt-0 gap-6 md:gap-0">
          <p className="text-[18px] md:text-[22px] font-normal leading-[1.5] md:leading-[27px] text-dark/75 max-w-full md:max-w-[540px] md:ml-auto">
            We design thoughtful spaces that balance form, function, and context. From the first idea to the final detail, our approach brings together architectural clarity, material synthesis, and a deep understanding of how people experience space.
          </p>
          
          <div className="flex gap-4 self-start md:self-end mt-2 md:mt-auto">
            <button 
              onClick={() => scroll("left")}
              className="bg-primary text-white w-[44px] h-[44px] flex items-center justify-center rounded-[4px] hover:bg-primary/90 transition-colors shadow-sm"
            >
              <ArrowLeft size={20} strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="bg-primary text-white w-[44px] h-[44px] flex items-center justify-center rounded-[4px] hover:bg-primary/90 transition-colors shadow-sm"
            >
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 scroll-pl-6 md:scroll-pl-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, i) => (
          <div key={i} className="min-w-[85vw] md:min-w-[calc(33.3333%-1rem)] snap-start group relative overflow-hidden rounded-[12px] md:rounded-none aspect-[4/4.5] md:aspect-square">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient for text readability at the top */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent h-[40%]"></div>
            
            <div className="absolute top-6 right-6 md:top-8 md:right-8 text-right">
              <h3 className="text-white font-general font-bold text-2xl md:text-3xl mb-1 drop-shadow-md">
                {project.title}
              </h3>
              <p className="text-white/90 text-xs md:text-sm font-medium drop-shadow-md">
                {project.location}
              </p>
            </div>
          </div>
        ))}
        {/* Spacer for proper right padding on scroll end on mobile */}
        <div className="min-w-[1px] md:hidden shrink-0"></div>
      </div>
    </section>
  );
}
