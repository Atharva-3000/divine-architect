import Navbar from "@/components/Navbar";
import CtaAndFooter from "@/components/CtaAndFooter";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-light">
      <Navbar forceSolid={true} />
      
      <div className="pt-40 pb-24 px-8 md:px-16 max-w-[1400px] mx-auto">
        <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Visuals</p>
        <h1 className="text-6xl md:text-7xl font-general font-medium mb-16 text-dark tracking-tight">Gallery.</h1>
        
        {/* Using auto-rows ensures every grid cell is exactly the same height, 
            so col-span-2 items don't become twice as tall and create empty gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px] lg:auto-rows-[450px]">
          
          <div className="relative rounded-[16px] overflow-hidden group">
             <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Modern Architecture" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <div className="relative rounded-[16px] overflow-hidden group">
             <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Luxury Home Exterior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <div className="relative rounded-[16px] overflow-hidden group">
             <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Modern Interior Space" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <div className="relative rounded-[16px] overflow-hidden group md:col-span-2">
             <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Corporate Architecture" fill className="object-cover group-hover:scale-105 transition-transform duration-700 object-center" />
          </div>
          
          <div className="relative rounded-[16px] overflow-hidden group">
             <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Minimalist Home" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <div className="relative rounded-[16px] overflow-hidden group">
             <Image src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Apartment Building" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <div className="relative rounded-[16px] overflow-hidden group md:col-span-2">
             <Image src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Urban Landscape" fill className="object-cover group-hover:scale-105 transition-transform duration-700 object-center" />
          </div>
          
        </div>
      </div>

      <CtaAndFooter />
    </main>
  );
}
