import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Star, Users, Video } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col bg-cream">
      {/* Hero Section */}
      <section className="relative isolate h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-main.png" 
            alt="Yoga Flow" 
            fill 
            className="object-cover"
            sizes="100vw"
            quality={100}
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-dark-green/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-dark-green/20 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
               <span className="text-white/80 uppercase tracking-widest text-xs font-semibold">Meditation &bull; Yoga &bull; Anxiety</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-100">
              Flow into &mdash; Peace<br/>
              One Pose at a Time
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl italic font-serif leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              &ldquo;Realize you&apos;re not alone in your reading our stories, join our community for yoga, anxiety relief and well-being.&rdquo;
            </p>
            
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
              <Button className="bg-white text-dark-green hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold" asChild>
                <Link href="/kontakt">Try 14 Days Free <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Play className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 max-w-3xl border-t border-white/20 pt-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
             <div>
               <div className="text-3xl md:text-4xl font-serif text-white font-bold mb-1">10.000</div>
               <div className="text-white/60 text-sm uppercase tracking-wide">Happy Students</div>
             </div>
             <div>
               <div className="text-3xl md:text-4xl font-serif text-white font-bold mb-1">5,000+</div>
               <div className="text-white/60 text-sm uppercase tracking-wide">Classes Streamed Monthly</div>
             </div>
             <div>
               <div className="text-3xl md:text-4xl font-serif text-white font-bold mb-1">95%</div>
               <div className="text-white/60 text-sm uppercase tracking-wide">Member Satisfaction</div>
             </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <Section className="bg-cream py-24 md:py-32">
        <div className="text-center mb-16">
          <span className="text-sage text-sm uppercase tracking-widest font-semibold">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-serif text-dark-green mt-4 mb-6">Your Healthy Partner</h2>
          <p className="text-dark-green/60 max-w-2xl mx-auto">
            Our wellness yoga, Pilates, and guided meditation programs are designed to support you at every stage of your wellness journey.
          </p>
          <div className="mt-8">
             <Button className="bg-forest text-white hover:bg-forest/90 rounded-full px-8 py-6" asChild>
               <Link href="/kurse-preise">See All Classes</Link>
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {/* Card 1: Yoga */}
          <div className="group cursor-pointer">
            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden mb-6">
              <Image src="/hero_yoga_light_1770479104792.png" alt="Yoga" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-serif font-bold text-dark-green mb-2">Yoga</h3>
            <p className="text-sm text-dark-green/60 leading-relaxed">
              Experience the flow of movement and breath that energizes our body and calms our mind, right here.
            </p>
          </div>

          {/* Card 2: Meditation */}
          <div className="group cursor-pointer">
            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden mb-6">
              <Image src="/yin_yoga_calm_1770479129476.png" alt="Meditation" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-serif font-bold text-dark-green mb-2">Meditation</h3>
            <p className="text-sm text-dark-green/60 leading-relaxed">
              Perfect for beginners and experts alike. Find your zen, calm your busy mind, and find inner stillness.
            </p>
          </div>

          {/* Card 3: Pilates */}
          <div className="group cursor-pointer">
            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden mb-6">
               <Image src="/teacher_portrait_artistic_1770479152108.png" alt="Pilates" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-serif font-bold text-dark-green mb-2">Pilates</h3>
            <p className="text-sm text-dark-green/60 leading-relaxed">
              Strengthen your core and sculpt your body with dynamic Pilates classes designed to improve stability.
            </p>
          </div>

           {/* Card 4: Guided Programs */}
           <div className="group cursor-pointer">
            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden mb-6">
              <Image src="/yang_yoga_dynamic_1770479116230.png" alt="Guided Programs" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-serif font-bold text-dark-green mb-2">Guided Programs</h3>
            <p className="text-sm text-dark-green/60 leading-relaxed">
              Whether you&apos;re just beginning or looking to deepen your practice, our structured guided programs help.
            </p>
          </div>
        </div>
      </Section>

      {/* Classes Section (Dark) */}
      <Section className="bg-dark-green py-24 md:py-32 text-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
             <span className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-2 block">Our Classes</span>
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Classes for Every Level<br/>and Intention</h2>
             <p className="text-white/60">
               Whether you&apos;re seeking a moment of calm or to unleash your inner warrior, we have a class effectively designed for you.
             </p>
          </div>
          <Button className="bg-white text-dark-green hover:bg-white/90 rounded-full px-8" asChild>
             <Link href="/kurse-preise">Browse Classes</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {/* Feature 1 */}
           <div className="bg-white text-dark-green p-8 rounded-3xl">
             <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mb-6">
               <Users className="w-6 h-6 text-forest" />
             </div>
             <h3 className="text-xl font-bold font-serif mb-3">Styles Tailored for You</h3>
             <p className="text-sm text-dark-green/70">From energizing Vinyasa to calming Yin, find what suits you best.</p>
           </div>
           
           {/* Feature 2 */}
            <div className="bg-cream text-dark-green p-8 rounded-3xl">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
               <Video className="w-6 h-6 text-forest" />
             </div>
             <h3 className="text-xl font-bold font-serif mb-3">Yoga Anytime, Anywhere</h3>
             <p className="text-sm text-dark-green/70">Start your day with a flow or wind down in the evening from home.</p>
           </div>

           {/* Feature 3 */}
            <div className="bg-white text-dark-green p-8 rounded-3xl">
             <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mb-6">
               <Star className="w-6 h-6 text-forest" />
             </div>
             <h3 className="text-xl font-bold font-serif mb-3">Expert Instructors</h3>
             <p className="text-sm text-dark-green/70">Learn and grow with our team of kind, certified teachers.</p>
           </div>

           {/* Feature 4 */}
            <div className="bg-cream text-dark-green p-8 rounded-3xl">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
               <Users className="w-6 h-6 text-forest" />
             </div>
             <h3 className="text-xl font-bold font-serif mb-3">Flexibility on the Go</h3>
             <p className="text-sm text-dark-green/70">Join classes from any device, anywhere with our app.</p>
           </div>
        </div>
      </Section>

      {/* Programs Section */}
      <Section className="bg-cream py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sage text-sm uppercase tracking-widest font-semibold">Programs</span>
          <h2 className="text-4xl md:text-6xl font-serif text-dark-green mt-4 mb-6">Join Guided Programs<br/>and Challenges</h2>
          <p className="text-dark-green/60">
            Embark on a journey of growth with our expertly designed programs. From building core strength to mastering mindfulness.
          </p>
          <div className="mt-8">
             <Button className="bg-forest text-white hover:bg-forest/90 rounded-full px-8" asChild>
               <Link href="/kurse-preise">Browse Programs</Link>
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div className="relative group cursor-pointer h-96 rounded-3xl overflow-hidden">
             <Image src="/hero_yoga_light_1770479104792.png" alt="Beginner Yoga" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 text-white">
               <h3 className="text-2xl font-serif font-bold mb-2">14-Day Beginner Yoga Journey</h3>
               <p className="text-sm text-white/80 line-clamp-2">Start your yoga practice with confidence. Build strength, flexibility and balance.</p>
             </div>
          </div>
           {/* Program 2 */}
           <div className="relative group cursor-pointer h-96 rounded-3xl overflow-hidden">
             <Image src="/yin_yoga_calm_1770479129476.png" alt="Flexibility Challenge" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 text-white">
               <h3 className="text-2xl font-serif font-bold mb-2">30-Day Flexibility Challenge</h3>
               <p className="text-sm text-white/80 line-clamp-2">Unlock your body&apos;s potential and relieve tension with daily stretching routines.</p>
             </div>
          </div>
           {/* Program 3 */}
           <div className="relative group cursor-pointer h-96 rounded-3xl overflow-hidden">
             <Image src="/yang_yoga_dynamic_1770479116230.png" alt="Core Strength" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 text-white">
               <h3 className="text-2xl font-serif font-bold mb-2">Core Strength Yoga Program</h3>
               <p className="text-sm text-white/80 line-clamp-2">A 4-week program designed to build a strong, resilient center and improve posture.</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Community Section */}
      <section className="relative h-[80vh] flex items-center bg-forest overflow-hidden text-white">
         <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-green/90 to-transparent" />
         </div>
         
         <div className="container relative z-10 px-4 md:px-8 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Connect, Grow, and<br/>Thrive Together
            </h2>
            <p className="text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
              Beyond a studio, a community. In wellness, balance, strength, and mindfulness using
              our journey, every step poses new thoughts into our actual solutions working dreams.
              Feel free. Connect.
            </p>
            <Button className="bg-white text-dark-green hover:bg-white/90 rounded-full px-10 py-6 text-lg" asChild>
               <Link href="/kurse-preise">Browse Program</Link>
            </Button>
         </div>
      </section>

      {/* Testimonials / Footer Pre-Section */}
      <Section className="bg-cream py-24">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden">
               <Image src="/teacher_portrait_artistic_1770479152108.png" alt="Community Member" fill className="object-cover" />
               <div className="absolute bottom-6 left-6 bg-dark-green/90 backdrop-blur-sm p-4 rounded-xl text-white max-w-xs">
                  <p className="font-serif italic mb-2">&ldquo;dvividhaYoga has completely transformed my mornings.&rdquo;</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-sage">Sophia R.</p>
               </div>
            </div>
            <div>
               <h2 className="text-4xl md:text-6xl font-serif text-dark-green mb-6">Wellness from Our<br/>Thriving Community</h2>
               <p className="text-dark-green/70 text-lg leading-relaxed mb-8">
                  From beginners finding their first moment of peace, to experienced practitioners achieving new milestones. Their journeys inspire and motivate us all.
               </p>
               <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full border border-dark-green/20 flex items-center justify-center hover:bg-dark-green hover:text-white transition-colors">
                     <ArrowRight className="w-5 h-5 rotate-180" />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-dark-green/20 flex items-center justify-center hover:bg-dark-green hover:text-white transition-colors">
                     <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
            </div>
         </div>
      </Section>
    </div>
  );
}
