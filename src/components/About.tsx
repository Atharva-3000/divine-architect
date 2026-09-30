import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full relative z-10 bg-light overflow-hidden">
      <div className="pt-16 md:pt-24 px-6 md:px-16 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-20">
        
        {/* Left Text Content */}
        <div className="w-full max-w-[540px] pb-12 md:pb-0">
          <p className="text-sm md:text-base font-medium text-dark/70 mb-4 md:mb-6 leading-none flex items-center gap-2 md:gap-0">
             <span className="w-6 h-[2px] bg-primary md:hidden block"></span>
             About Us
          </p>
          
          <h2 className="font-general font-medium text-[38px] md:text-[54px] leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8 text-dark">
            We design spaces that<br />
            make people feel at home,<br />
            away from <span className="text-primary">home</span>
          </h2>
          
          <p className="text-[18px] md:text-[22px] font-normal leading-[1.5] md:leading-[27px] text-dark/75 mb-10 md:mb-12">
            We design thoughtful spaces that balance form, function, and context. From the first idea to the final detail, our approach brings together architectural clarity, material sensitivity, and a deep understanding of how people experience space.
          </p>
          
          <div className="flex items-center">
            <Link href="/contact" className="relative w-[198px] h-[44px] md:h-[40px] bg-dark text-white rounded-[7px] md:rounded-[7px] flex items-center hover:opacity-90 transition-opacity shadow-lg md:shadow-none">
              <span className="w-[162px] flex items-center justify-center text-[16px] font-medium tracking-wide md:tracking-normal">Start Your Project</span>
              <span className="absolute right-[4px] w-[36px] h-[36px] md:w-[32px] md:h-[32px] bg-primary text-white rounded-[4px] flex items-center justify-center shrink-0">
                <ChevronsRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
        
        {/* Right Image Content - Restored to original layout position */}
        <div className="w-full md:w-[540px] xl:w-[600px] h-[400px] md:h-[720px] relative shrink-0 rounded-[12px] md:rounded-[16px] overflow-hidden shadow-2xl mt-0">
          <Image
            src="/assets/about-us-section-image.png"
            alt="Beautiful home at dusk"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
