import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-cream">
      {/* Hero */}
      <section className="relative py-32 bg-forest text-center overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-5" />
           <div className="absolute inset-0 bg-gradient-to-b from-dark-green/50 to-transparent" />
        </div>
        <div className="container relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Contact Us</h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed">
            We look forward to hearing from you.
            Start your journey with us today.
          </p>
        </div>
      </section>

      <Section className="py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Info */}
          <div className="space-y-12">
            <div>
               <h2 className="text-3xl font-serif text-dark-green mb-6">Find Us Here</h2>
               <p className="text-dark-green/70 leading-relaxed">
                  Located in the heart of Hilden, easily accessible by public transport or car.
               </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-forest transition-colors duration-300">
                   <MapPin className="text-forest group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-green text-lg mb-1">Address</h3>
                  <p className="text-dark-green/70">Ellerstraße 101<br />40721 Hilden</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-forest transition-colors duration-300">
                   <Mail className="text-forest group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-green text-lg mb-1">Email</h3>
                  <p className="text-dark-green/70">info@dvividhayoga.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-forest transition-colors duration-300">
                   <Phone className="text-forest group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-green text-lg mb-1">Phone / WhatsApp</h3>
                  <p className="text-dark-green/70">+49 123 456 789</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-dark-green/5 h-64 rounded-3xl flex items-center justify-center text-dark-green/40 text-sm border-2 border-dashed border-dark-green/10">
              Google Maps Integration Placeholder
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-forest/5">
            <h2 className="text-3xl font-serif text-dark-green mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-dark-green ml-2">Name</label>
                  <input id="name" type="text" className="w-full px-6 py-4 rounded-xl bg-cream/50 border-transparent focus:bg-white focus:border-forest/20 focus:outline-none focus:ring-2 focus:ring-forest/10 transition-all placeholder:text-dark-green/30" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-dark-green ml-2">Email</label>
                  <input id="email" type="email" className="w-full px-6 py-4 rounded-xl bg-cream/50 border-transparent focus:bg-white focus:border-forest/20 focus:outline-none focus:ring-2 focus:ring-forest/10 transition-all placeholder:text-dark-green/30" placeholder="hello@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-dark-green ml-2">Subject</label>
                <div className="relative">
                   <select id="subject" className="w-full px-6 py-4 rounded-xl bg-cream/50 border-transparent focus:bg-white focus:border-forest/20 focus:outline-none focus:ring-2 focus:ring-forest/10 transition-all appearance-none text-dark-green/80">
                     <option>Request Trial Class</option>
                     <option>Question about Classes</option>
                     <option>Private Session</option>
                     <option>Other</option>
                   </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-dark-green ml-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-6 py-4 rounded-xl bg-cream/50 border-transparent focus:bg-white focus:border-forest/20 focus:outline-none focus:ring-2 focus:ring-forest/10 transition-all resize-none placeholder:text-dark-green/30" placeholder="Your message..."></textarea>
              </div>
              <Button type="submit" className="w-full bg-dark-green text-white hover:bg-forest rounded-full py-6 text-lg">Send Message</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
