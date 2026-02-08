import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";
import Image from "next/image";

export default function CoursesPricingPage() {
  return (
    <div className="flex flex-col bg-cream">
      {/* Hero */}
      <section className="relative py-32 bg-forest text-center overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-5" />
           <div className="absolute inset-0 bg-gradient-to-b from-dark-green/50 to-transparent" />
        </div>
        <div className="container relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Classes & Pricing</h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed">
            Invest in your health and well-being. Choose the offer that suits you best.
             Flexible, transparent, and fair.
          </p>
        </div>
      </section>

      {/* Courses Styles */}
      <Section className="py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
          {/* Yang Yoga */}
          <div className="order-2 md:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
             <Image 
               src="/yang_yoga_dynamic_1770479116230.png" 
               alt="Dynamic Yang Yoga" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 to-transparent opacity-60" />
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <div>
               <h2 className="text-4xl md:text-5xl font-serif text-dark-green mb-2">Yang Yoga</h2>
               <h3 className="text-sm font-bold text-forest uppercase tracking-widest">Strength & Energy</h3>
            </div>
            <p className="text-dark-green/70 leading-relaxed text-lg">
              Awaken your inner fire. Yang Yoga is dynamic, powerful, and demanding. 
              We flow through Vinyasa sequences synchronized with breath.
              Ideal for clearing your mind, building muscle, and improving stamina.
            </p>
            <ul className="space-y-4 text-dark-green/80">
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-forest" />Strengthening deep muscles</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-forest" />Improving cardiovascular fitness</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-forest" />Active stress relief through movement</li>
            </ul>
             <Button className="bg-forest text-white hover:bg-forest/90 rounded-full px-8" asChild>
               <Link href="/termine">View Schedule</Link>
             </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Yin Yoga */}
          <div className="space-y-8">
             <div>
               <h2 className="text-4xl md:text-5xl font-serif text-dark-green mb-2">Yin Yoga</h2>
               <h3 className="text-sm font-bold text-sage uppercase tracking-widest">Calm & Release</h3>
             </div>
            <p className="text-dark-green/70 leading-relaxed text-lg">
              The art of letting go. In Yin Yoga, we hold passive stretches for 3 to 5 minutes.
              This works deep into the fascial tissue, joints, and nervous system.
              A meditative practice teaching you to stay in the moment and enjoy silence.
            </p>
            <ul className="space-y-4 text-dark-green/80">
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-sage" />Releasing fascial adhesions</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-sage" />Regeneration and better sleep</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-sage" />Deep inner balance</li>
            </ul>
             <Button className="bg-sage text-dark-green hover:bg-sage/90 rounded-full px-8" asChild>
               <Link href="/termine">View Schedule</Link>
             </Button>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
             <Image 
               src="/yin_yoga_calm_1770479129476.png" 
               alt="Relaxed Yin Yoga" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700"
             />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 to-transparent opacity-60" />
          </div>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section className="bg-white py-24">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-sage text-sm uppercase tracking-widest font-semibold">Invest In Yourself</span>
          <h2 className="text-4xl md:text-6xl font-serif text-dark-green mt-4 mb-6">Simple Pricing</h2>
          <p className="text-dark-green/60 text-lg">Fair, transparent, and flexible. No hidden costs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Probestunde */}
          <div className="bg-cream p-10 rounded-[2rem] hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-transparent hover:border-forest/10">
            <h3 className="text-2xl font-serif font-bold text-dark-green mb-2">Trial Class</h3>
            <div className="flex items-baseline gap-1 mb-6">
               <span className="text-5xl font-bold text-forest">10€</span>
            </div>
            <p className="text-dark-green/60 mb-8 leading-relaxed">Perfect for getting to know our studio and teachers.</p>
            <Button className="w-full bg-dark-green text-white hover:bg-forest rounded-full py-6" asChild>
              <Link href="/kontakt">Book Now</Link>
            </Button>
            <ul className="mt-10 space-y-4 text-sm text-dark-green/80">
              <li className="flex gap-3"><Check size={18} className="text-forest shrink-0" /> One-time offer</li>
              <li className="flex gap-3"><Check size={18} className="text-forest shrink-0" /> Choice of any class</li>
              <li className="flex gap-3"><Check size={18} className="text-forest shrink-0" /> Mat included</li>
            </ul>
          </div>

          {/* Einzelkarte */}
          <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-forest/5 hover:shadow-xl transition-all duration-300 relative scale-105 z-10">
             <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-sage to-forest" />
            <h3 className="text-2xl font-serif font-bold text-dark-green mb-2">Single Class</h3>
            <div className="flex items-baseline gap-1 mb-6">
               <span className="text-5xl font-bold text-dark-green">16€</span>
            </div>
            <p className="text-dark-green/60 mb-8 leading-relaxed">Maximum flexibility without any commitment.</p>
            <Button variant="outline" className="w-full border-dark-green text-dark-green hover:bg-dark-green hover:text-white rounded-full py-6" asChild>
              <Link href="/kontakt">Buy Ticket</Link>
            </Button>
            <ul className="mt-10 space-y-4 text-sm text-dark-green/80">
              <li className="flex gap-3"><Check size={18} className="text-dark-green shrink-0" /> 60-90 Minutes</li>
              <li className="flex gap-3"><Check size={18} className="text-dark-green shrink-0" /> Valid for 2 years</li>
              <li className="flex gap-3"><Check size={18} className="text-dark-green shrink-0" /> Drop-in possible</li>
            </ul>
          </div>

          {/* 10er Karte */}
          <div className="bg-cream p-10 rounded-[2rem] hover:shadow-xl transition-all duration-300 border border-transparent hover:border-forest/10">
            <h3 className="text-2xl font-serif font-bold text-dark-green mb-2">10-Class Pass</h3>
            <div className="flex items-baseline gap-1 mb-6">
               <span className="text-5xl font-bold text-forest">140€</span>
            </div>
            <p className="text-dark-green/60 mb-8 leading-relaxed">Our best value for regular yogis.</p>
            <Button variant="ghost" className="w-full hover:bg-dark-green/5 text-dark-green rounded-full py-6" asChild>
              <Link href="/kontakt">Inquire Now</Link>
            </Button>
            <ul className="mt-10 space-y-4 text-sm text-dark-green/80">
              <li className="flex gap-3"><Check size={18} className="text-forest shrink-0" /> 14€ per class</li>
              <li className="flex gap-3"><Check size={18} className="text-forest shrink-0" /> Valid for 3 years</li>
              <li className="flex gap-3"><Check size={18} className="text-forest shrink-0" /> Shareable</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
