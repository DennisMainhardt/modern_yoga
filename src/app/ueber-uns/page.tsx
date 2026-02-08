import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-cream">
      {/* Hero */}
      <section className="relative py-32 bg-forest text-center overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-5" />
           <div className="absolute inset-0 bg-gradient-to-b from-dark-green/50 to-transparent" />
        </div>
        <div className="container relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">About Us</h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed">
            Get to know the studio and the people behind dvividhaYoga. 
            A space for authentic connection.
          </p>
        </div>
      </section>

      {/* Teacher Section */}
      <Section className="py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700 group">
            <Image 
              src="/teacher_portrait_artistic_1770479152108.png" 
              alt="Portrait of Corinna Brand" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
          <div className="space-y-8">
            <div>
               <h2 className="text-4xl md:text-5xl font-serif text-dark-green mb-2">Corinna Brand</h2>
               <h3 className="text-sm font-bold text-forest uppercase tracking-widest">Teacher & Founder</h3>
            </div>
            <p className="text-dark-green/80 leading-relaxed font-serif italic text-2xl border-l-4 border-sage pl-6">
              &ldquo;Yoga is more than just movement to me. It is a way to come back to yourself.&rdquo;
            </p>
            <div className="text-dark-green/70 text-lg leading-relaxed space-y-4">
               <p>
                  After training in various styles, I created dvividhaYoga as a place where both have their space: 
                  The active doing (Yang) and the passive letting go (Yin).
               </p>
               <p>
                  I teach with heart, humor, and a keen eye for anatomy. Every body is different, 
                  and that is exactly what is allowed here. In my classes, I invite you to lovingly explore your boundaries and 
                  open new spaces within yourself.
               </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Studio Section */}
      <Section className="bg-white py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sage text-sm uppercase tracking-widest font-semibold">Your Space</span>
          <h2 className="text-4xl md:text-6xl font-serif text-dark-green mt-4 mb-6">The Studio</h2>
          <p className="text-dark-green/60 text-lg">
            An oasis of calm in the middle of Hilden. Bright, minimalist, and equipped with everything you need for your practice.
          </p>
        </div>
        
        {/* Featured Large Studio Image */}
        <div className="relative w-full h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
           <Image 
             src="/yoga_studio_interior_1770479165935.png" 
             alt="dvividhaYoga Studio Interior" 
             fill 
             className="object-cover group-hover:scale-105 transition-transform duration-1000"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/20 to-transparent" />
           <div className="absolute bottom-10 left-6 md:bottom-16 md:left-16 text-white max-w-lg">
             <p className="font-serif text-4xl md:text-5xl mb-4">Your Sanctuary.</p>
             <p className="text-white/80 text-lg leading-relaxed">
               Arrive, breathe deeply, and leave everyday life at the door. 
               We have created a space that supports your journey inward.
             </p>
           </div>
        </div>
      </Section>
    </div>
  );
}
