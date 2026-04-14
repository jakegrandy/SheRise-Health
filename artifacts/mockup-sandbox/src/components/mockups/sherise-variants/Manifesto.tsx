import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Manifesto() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f5] selection:bg-[#e25844] selection:text-white font-sans overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200..900;1,9..144,200..900&family=DM+Sans:ital,wght@0,400..700;1,400..700&display=swap');
        
        .font-serif {
          font-family: 'Fraunces', serif;
        }
        .font-sans {
          font-family: 'DM Sans', sans-serif;
        }
        
        /* Noise overlay */
        .noise {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 50;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}} />
      
      <div className="noise" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <div className="font-serif text-2xl tracking-tight font-light">SheRises.</div>
        <button className="text-sm tracking-widest uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors duration-500">
          Book Consultation
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/__mockup/images/manifesto-hero.png" 
            alt="Abstract dark background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a]" />
        </div>

        <motion.div 
          className="relative z-10 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-light tracking-tight text-[#e25844]">
            You have been dismissed.
          </h1>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-light tracking-tight text-white/80 mt-4 md:mt-8">
            Rushed through a 10-minute appointment.
          </h2>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-light tracking-tight text-white/60 mt-4 md:mt-8">
            Told your symptoms are normal.
          </h2>
          
          <div className="mt-16 md:mt-24 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-[#e25844]" />
            <p className="font-serif text-2xl md:text-3xl text-white">They are not.</p>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-6 md:left-12 lg:left-24"
          style={{ opacity, y }}
        >
          <ArrowDown className="text-white/30 w-6 h-6 animate-bounce" />
        </motion.div>
      </section>

      {/* The Broken System */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xl md:text-3xl font-light leading-relaxed text-white/80">
              The modern healthcare system was not designed for women's bodies. It was designed for throughput. It categorizes your pain as anxiety, your fatigue as aging, and your metabolic struggles as a lack of willpower.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-3xl font-light leading-relaxed text-white/80 mt-8">
              We reject this model entirely.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Reframe */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#e25844] text-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h2 className="font-serif text-5xl md:text-7xl leading-tight tracking-tight">
                Reversal is possible.
              </h2>
              <div className="mt-8 space-y-6 text-lg md:text-xl font-medium">
                <p>
                  At SheRises Health, we don't just manage symptoms. We pursue root-cause resolution.
                </p>
                <p>
                  Metabolic dysfunction, hormone imbalances, and chronic fatigue are not life sentences. They are signals. We listen to them, test extensively, and build a care plan centered entirely around you.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="relative aspect-[3/4] md:aspect-square overflow-hidden bg-[#0a0a0a]">
            <img 
              src="/__mockup/images/manifesto-abstract.png" 
              alt="Abstract visualization of healing" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Services as Narrative */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl text-[#e25844] mb-24">
              This is what root-cause care looks like.
            </h2>
          </FadeIn>

          <div className="space-y-32">
            <ServiceBlock 
              number="01"
              title="Metabolic Health"
              description="Insulin resistance, PCOS, prediabetes, and weight dysregulation require more than 'eat less, move more.' We use advanced diagnostics to repair metabolic function at the cellular level."
            />
            <ServiceBlock 
              number="02"
              title="Hormone & Sexual Health"
              description="From perimenopause to post-menopause, and trauma-informed sexual health. We provide comprehensive hormone optimization so you feel vibrant, not just 'fine.'"
            />
            <ServiceBlock 
              number="03"
              title="Fertility & Aging Well"
              description="Whether you are planning for a family, preserving options, or focusing on longevity, we bring 16 years of specialized expertise to guide your body's transitions."
            />
          </div>
        </div>
      </section>

      {/* The Provider */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-5 relative aspect-[3/4]">
            <img 
              src="/__mockup/images/manifesto-portrait.png" 
              alt="Scarlett Grandy" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-[#e25844] mix-blend-multiply opacity-20" />
          </div>
          
          <div className="md:col-span-7">
            <FadeIn>
              <h3 className="font-serif text-4xl md:text-6xl text-white mb-6">
                Scarlett Grandy
              </h3>
              <p className="text-[#e25844] tracking-widest uppercase text-sm mb-8">
                CNM, WHNP-BC • 16 Years Specializing in Women's Whole-Health
              </p>
              <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
                <p>
                  As a leading specialist in hormone & metabolic health in Northwest Arkansas, my practice is built on a single conviction: women deserve better.
                </p>
                <p>
                  I am a member of The Menopause Society and ISSWSH, and a certified EAGALA specialist. But credentials only matter if they translate into outcomes. My goal is to partner with you to reclaim your health, your energy, and your life.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#e25844] opacity-5 mix-blend-screen" />
        <div className="max-w-3xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-12">
              We are changing women's healthcare.
            </h2>
            <button className="group relative inline-flex items-center gap-4 bg-[#e25844] text-white px-8 py-5 text-lg uppercase tracking-widest hover:bg-white hover:text-[#0a0a0a] transition-all duration-500">
              <span>Book Your Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-8 text-white/40 font-light">
              Accepting new patients in Northwest Arkansas.
            </p>
          </FadeIn>
        </div>
      </section>
      
      <footer className="py-8 px-6 md:px-12 text-center text-white/30 text-sm font-light border-t border-white/10">
        © {new Date().getFullYear()} SheRises Health. All rights reserved.
      </footer>
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ServiceBlock({ number, title, description }: { number: string, title: string, description: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      className="grid md:grid-cols-12 gap-8 border-t border-white/10 pt-12"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="md:col-span-2">
        <span className="text-4xl font-serif text-white/20 italic">{number}</span>
      </div>
      <div className="md:col-span-4">
        <h3 className="font-serif text-3xl text-white">{title}</h3>
      </div>
      <div className="md:col-span-6">
        <p className="text-xl font-light text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
