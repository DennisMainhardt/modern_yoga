import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function SchedulePage() {
  return (
    <div className="flex flex-col">
      <section className="bg-sand/30 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-ocean mb-4">Kursplan</h1>
          <p className="text-ocean/80 max-w-xl mx-auto">
            Finde deine Klasse. Wir praktizieren in kleinen Gruppen für individuelle Betreuung.
          </p>
        </div>
      </section>

      <Section>
        {/* Placeholder for potential Schedule Widget (Eversports etc) */}
        <div className="bg-white border border-sand/30 rounded-2xl p-8 shadow-sm overflow-x-auto">
           <table className="w-full min-w-[600px] text-left border-collapse">
             <thead>
               <tr className="border-b border-sand/30">
                 <th className="py-4 px-4 font-serif text-ocean">Tag</th>
                 <th className="py-4 px-4 font-serif text-ocean">Uhrzeit</th>
                 <th className="py-4 px-4 font-serif text-ocean">Klasse</th>
                 <th className="py-4 px-4 font-serif text-ocean">Lehrer</th>
                 <th className="py-4 px-4 font-serif text-ocean"></th>
               </tr>
             </thead>
             <tbody className="divide-y divide-sand/20 text-ocean/80">
               <tr>
                 <td className="py-4 px-4">Montag</td>
                 <td className="py-4 px-4">18:30 - 20:00</td>
                 <td className="py-4 px-4 font-medium text-ocean">Hatha Yoga (Yang)</td>
                 <td className="py-4 px-4">Corinna</td>
                 <td className="py-4 px-4 text-right"><Button size="sm" variant="outline" asChild><Link href="/kontakt">Anfragen</Link></Button></td>
               </tr>
               <tr>
                 <td className="py-4 px-4">Mittwoch</td>
                 <td className="py-4 px-4">19:00 - 20:30</td>
                 <td className="py-4 px-4 font-medium text-ocean">Vinyasa Flow</td>
                 <td className="py-4 px-4">Corinna</td>
                 <td className="py-4 px-4 text-right"><Button size="sm" variant="outline" asChild><Link href="/kontakt">Anfragen</Link></Button></td>
               </tr>
                <tr>
                 <td className="py-4 px-4">Freitag</td>
                 <td className="py-4 px-4">17:00 - 18:30</td>
                 <td className="py-4 px-4 font-medium text-ocean">Yin Yoga Deep Dive</td>
                 <td className="py-4 px-4">Corinna</td>
                 <td className="py-4 px-4 text-right"><Button size="sm" variant="outline" asChild><Link href="/kontakt">Anfragen</Link></Button></td>
               </tr>
             </tbody>
           </table>
        </div>

        <div className="mt-12 text-center bg-cream p-8 rounded-2xl">
          <h3 className="text-xl font-serif mb-4">Du bist neu hier?</h3>
          <p className="text-ocean/80 mb-6">
            Melde dich für eine Probestunde an (10€) und lerne uns kennen.
          </p>
          <Button asChild>
            <Link href="/kontakt">Probestunde vereinbaren</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
