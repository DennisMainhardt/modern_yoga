import Link from "next/link";
import { Camera, Users, Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-green text-cream py-16 md:py-24 border-t border-white/10">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-white mb-6 block">
              dvividhaYoga
            </Link>
            <p className="text-white/60 mb-6 max-w-xs">
              Find balance, strength, and inner peace with our community-focused yoga and wellness studio.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-forest transition-colors cursor-pointer">
                <Camera className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-forest transition-colors cursor-pointer">
                <Users className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-forest transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/kurse-preise" className="hover:text-white transition-colors">Classes & Pricing</Link></li>
              <li><Link href="/termine" className="hover:text-white transition-colors">Schedule</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="font-serif text-lg font-bold text-white mb-6">Visit Us</h4>
             <ul className="space-y-4 text-white/70">
                <li className="flex gap-3">
                   <MapPin className="w-5 h-5 min-w-5" />
                   <span>Mühlenstraße 8a<br/>14167 Berlin</span>
                </li>
                <li className="flex gap-3">
                   <Phone className="w-5 h-5 min-w-5" />
                   <span>+49 176 12345678</span>
                </li>
                <li className="flex gap-3">
                   <Clock className="w-5 h-5 min-w-5" />
                   <span>Mon - Fri: 8:00 - 20:00<br/>Sat - Sun: 9:00 - 18:00</span>
                </li>
             </ul>
          </div>
           
           {/* Newsletter */}
           <div>
              <h4 className="font-serif text-lg font-bold text-white mb-6">Newsletter</h4>
              <p className="text-white/60 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <div className="flex bg-white/10 rounded-full p-1 pl-4 focus-within:ring-1 focus-within:ring-white/30">
                 <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-none outline-none text-white placeholder:text-white/40 w-full text-sm"
                 />
                 <button className="bg-white text-dark-green rounded-full px-6 py-2 text-sm font-bold hover:bg-cream transition-colors">
                    Join
                 </button>
              </div>
           </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} dvividhaYoga. All rights reserved.</p>
          <div className="flex gap-8">
             <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
             <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
