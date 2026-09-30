import Navbar from "@/components/Navbar";
import CtaAndFooter from "@/components/CtaAndFooter";
import { ChevronsRight, ArrowRight, MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-light flex flex-col overflow-x-hidden">
      <Navbar forceSolid={true} />
      
      <div className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 md:px-16 max-w-[1400px] mx-auto flex-1 w-full relative z-10">
        <p className="text-primary font-medium mb-4 uppercase tracking-wider text-xs md:text-sm flex items-center gap-2">
          <span className="w-6 md:w-8 h-[2px] bg-primary"></span> Contact Us
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-general font-medium mb-12 md:mb-20 text-dark tracking-tight">Let&apos;s Talk.</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Info - Appears below form on mobile, on the left on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-10 md:gap-12 lg:pr-8">
            <div className="group">
              <h2 className="text-[20px] md:text-[24px] font-general font-medium mb-3 md:mb-4 text-dark flex items-center gap-3">
                <MapPin size={24} className="text-primary shrink-0" />
                Jaipur Office 
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-dark/70 group-hover:text-dark transition-colors pl-9">
                123 Architecture Lane, Malviya Nagar<br/>
                Jaipur, Rajasthan 302017<br/>
                India
              </p>
            </div>
            
            <div className="w-full h-[1px] bg-dark/10"></div>
            
            <div className="group">
              <h2 className="text-[20px] md:text-[24px] font-general font-medium mb-3 md:mb-4 text-dark flex items-center gap-3">
                <Mail size={24} className="text-primary shrink-0" />
                Get in Touch
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-dark/70 mb-2 hover:text-primary transition-colors cursor-pointer w-max pl-9">
                hello@divinearchitects.com
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-dark/70 hover:text-primary transition-colors cursor-pointer w-max pl-9 flex items-center gap-3 relative -left-9">
                <Phone size={24} className="text-primary shrink-0" />
                +91 98765 43210
              </p>
            </div>
            
            <div className="w-full h-[1px] bg-dark/10"></div>

            <div className="group">
              <h2 className="text-[20px] md:text-[24px] font-general font-medium mb-3 md:mb-4 text-dark flex items-center gap-3">
                <Clock size={24} className="text-primary shrink-0" />
                Business Hours
              </h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-dark/70 group-hover:text-dark transition-colors pl-9">
                Monday - Friday<br/>9:00 AM - 6:00 PM (IST)
              </p>
            </div>
          </div>
          
          {/* Contact Form - Appears first on mobile, on the right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <form className="flex flex-col gap-6 md:gap-8 w-full">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full">
                <div className="flex flex-col gap-2 md:gap-3">
                  <label className="text-[12px] md:text-sm font-semibold tracking-wide text-dark uppercase ml-1">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded-[12px] px-5 py-4 md:px-6 md:py-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm transition-all text-[16px] text-dark placeholder:text-gray-400" />
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                  <label className="text-[12px] md:text-sm font-semibold tracking-wide text-dark uppercase ml-1">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded-[12px] px-5 py-4 md:px-6 md:py-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm transition-all text-[16px] text-dark placeholder:text-gray-400" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 md:gap-3 w-full">
                <label className="text-[12px] md:text-sm font-semibold tracking-wide text-dark uppercase ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded-[12px] px-5 py-4 md:px-6 md:py-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm transition-all text-[16px] text-dark placeholder:text-gray-400" />
              </div>
              
              <div className="flex flex-col gap-2 md:gap-3 w-full relative">
                <label className="text-[12px] md:text-sm font-semibold tracking-wide text-dark uppercase ml-1">Project Type</label>
                <div className="relative w-full">
                  <select defaultValue="" className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded-[12px] px-5 py-4 md:px-6 md:py-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm transition-all text-[16px] text-dark appearance-none cursor-pointer">
                    <option value="" disabled>Select a project type</option>
                    <option value="residential">Residential Architecture</option>
                    <option value="commercial">Commercial Development</option>
                    <option value="interior">Interior Design</option>
                    <option value="urban">Urban Planning & Landscape</option>
                  </select>
                  <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-dark/50">
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 md:gap-3 w-full">
                <label className="text-[12px] md:text-sm font-semibold tracking-wide text-dark uppercase ml-1">Project Details</label>
                <textarea placeholder="Tell us about your vision, timeline, and requirements..." rows={5} className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded-[12px] px-5 py-4 md:px-6 md:py-5 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm transition-all text-[16px] text-dark resize-none placeholder:text-gray-400"></textarea>
              </div>
              
              <div className="pt-2 md:pt-4">
                <button type="button" className="relative w-full h-[56px] md:h-[64px] bg-dark text-white rounded-[12px] flex items-center hover:opacity-90 transition-opacity">
                  <span className="flex-1 flex items-center justify-center text-[16px] md:text-[18px] font-medium pr-[56px] md:pr-[64px] tracking-wide">Send Message</span>
                  <span className="absolute right-[5px] top-[5px] bottom-[5px] w-[46px] md:w-[52px] bg-primary text-white rounded-[8px] flex items-center justify-center shrink-0">
                    <ChevronsRight size={20} className="md:w-[24px] md:h-[24px]" strokeWidth={2.5} />
                  </span>
                </button>
              </div>
              
            </form>
          </div>
          
        </div>
      </div>
      
      <CtaAndFooter />
    </main>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  );
}
