import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Urban Design",
    desc: "We design homes, according to your need.",
    highlight: "Everything feels like home."
  },
  {
    num: "02",
    title: "Corporate Offices",
    desc: "We design offices, that don't feel dull.",
    highlight: "So, you actually love working."
  },
  {
    num: "03",
    title: "Landmarks",
    desc: "Landmarks that attracts everyone's eyes.",
    highlight: "You imagine it, we design it."
  },
  {
    num: "04",
    title: "Commercial",
    desc: "Designs made for everyday sensibility.",
    highlight: "Seamless to blend in with."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-light">
      <p className="text-sm font-medium mb-4 md:mb-6">Our Services</p>
      
      <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
        <div className="flex-1 w-full">
          <h2 className="font-general font-medium text-[36px] md:text-[54px] leading-[1.15] md:leading-[1.1] tracking-tight mb-8 md:mb-10 text-dark">
            All your needs.<br />
            We&apos;ve got you covered.
          </h2>
          
          <Link href="/contact" className="relative w-[198px] h-[40px] bg-dark text-white rounded-[7px] flex items-center hover:opacity-90 transition-opacity mb-12 md:mb-16">
            <span className="w-[162px] flex items-center justify-center text-[16px] font-medium">Start Your Project</span>
            <span className="absolute right-[4px] w-[32px] h-[32px] bg-primary text-white rounded-[4px] flex items-center justify-center shrink-0">
              <ChevronsRight size={16} strokeWidth={2.5} />
            </span>
          </Link>
          
          <div className="relative w-full max-w-xl aspect-[4/3] -ml-4 md:-ml-8">
            <Image
              src="/assets/our-services-skeleton-home.png"
              alt="House wireframe sketch"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="flex-1 w-full flex flex-col">
          {services.map((s, i) => {
            const id = `service-${s.title.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <div 
                key={i} 
                id={id}
                className="group flex flex-col sm:flex-row gap-4 sm:gap-6 border-b border-gray-200 py-6 md:py-8 px-4 sm:px-8 mx-0 sm:-mx-8 transition-colors duration-300 hover:bg-dark cursor-pointer last:border-0 rounded-[12px] md:rounded-none scroll-mt-24"
              >
                <div className="bg-primary text-white font-medium text-[18px] md:text-[22px] rounded-[4px] w-[45px] h-[45px] md:w-[55px] md:h-[55px] flex items-center justify-center shrink-0">
                  {s.num}
                </div>
                <div className="pt-1 md:pt-2">
                  <h3 className="font-general font-medium text-[28px] md:text-[44px] leading-none tracking-tight mb-2 md:mb-4 text-dark group-hover:text-white transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[16px] md:text-[22px] font-normal leading-[1.4] md:leading-[27px] text-dark/75 group-hover:text-white/80 transition-colors duration-300">
                    {s.desc}<br className="hidden sm:block" />
                    <span className="text-primary font-medium ml-1 sm:ml-0">{s.highlight}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
