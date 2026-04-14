import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Minus } from "lucide-react";

export function ModernStudio() {
  useEffect(() => {
    // Inject fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const theme = {
    bg: "#0a0a0a",
    text: "#f5f2eb",
    textMuted: "#a3a19a",
    accent: "#8b2a2a", // Deep burgundy
    accentHover: "#6e2121",
    border: "#2a2a2a",
  };

  return (
    <div
      className="min-h-screen w-full selection:bg-[#8b2a2a] selection:text-white"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center mix-blend-difference">
        <div className="text-xl tracking-widest font-serif font-medium uppercase">
          SheRises
        </div>
        <button className="text-sm tracking-[0.2em] uppercase border-b border-transparent hover:border-current transition-colors duration-300 pb-1">
          Consultation
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-end pb-24 px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/__mockup/images/studio-hero.png"
            alt="Clinic interior"
            className="w-full h-full object-cover opacity-40 scale-105 transform origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm tracking-[0.3em] uppercase mb-8 text-[#a3a19a]"
          >
            Hormone & Metabolic Health
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-12"
          >
            Changing<br />
            <span className="italic text-[#a3a19a]">women's</span><br />
            healthcare.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="group flex items-center gap-6 text-sm tracking-[0.2em] uppercase transition-all duration-300">
              <span className="border-b border-transparent group-hover:border-current pb-1">
                Enter the Practice
              </span>
              <span className="w-12 h-[1px] bg-current transform origin-left transition-transform duration-300 group-hover:scale-x-150"></span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Thesis Section */}
      <section className="py-40 px-8 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-start">
        <div className="w-full md:w-1/3 text-xs tracking-[0.2em] uppercase text-[#a3a19a] pt-4 border-t border-[#2a2a2a]">
          01 / The Belief
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-12">
            Reversal of metabolic dysfunction is possible. Care centered entirely around you.
          </h2>
          <p className="text-lg md:text-xl text-[#a3a19a] max-w-2xl leading-relaxed font-light">
            For women in Northwest Arkansas who have felt dismissed, rushed, or misunderstood by conventional medicine. We provide an environment of absolute rigor and profound empathy.
          </p>
        </div>
      </section>

      {/* Services Editorial */}
      <section className="py-32 px-8 md:px-16 border-t border-[#2a2a2a] relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
          <div className="w-full lg:w-1/3 flex flex-col justify-between">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-[#a3a19a] pt-4 border-t border-[#2a2a2a] mb-16 lg:max-w-xs">
                02 / Specializations
              </div>
              <h3 className="font-serif text-5xl mb-8">Clinical<br />Focus</h3>
            </div>
            
            <div className="hidden lg:block relative w-full aspect-[3/4] overflow-hidden mt-12">
              <img 
                src="/__mockup/images/studio-texture-1.png" 
                alt="Abstract texture" 
                className="w-full h-full object-cover filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col">
            {[
              { title: "Hormone Health", desc: "Expert management across all life stages, balancing complexity with precision." },
              { title: "Metabolic Health", desc: "Addressing insulin resistance, PCOS, prediabetes, thyroid, and weight dysregulation." },
              { title: "Sexual Health", desc: "Trauma-informed care designed to restore vitality and intimate wellbeing." },
              { title: "Fertility", desc: "Contraception, life planning, preservation, and infertility support." },
              { title: "Aging Well", desc: "Optimizing healthspan through targeted, evidence-based interventions." }
            ].map((service, i) => (
              <div key={i} className="group border-b border-[#2a2a2a] py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer">
                <div className="flex-1">
                  <h4 className="font-serif text-3xl md:text-4xl mb-4 text-[#f5f2eb] group-hover:text-[#8b2a2a] transition-colors duration-500">
                    {service.title}
                  </h4>
                  <p className="text-[#a3a19a] font-light max-w-md opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto overflow-hidden transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                </div>
                <div className="text-[#2a2a2a] group-hover:text-[#8b2a2a] transition-colors duration-500 transform group-hover:translate-x-4">
                  <ArrowRight strokeWidth={1} size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Portrait Section */}
      <section className="py-40 px-8 md:px-16 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[3/4] relative overflow-hidden w-full max-w-md mx-auto lg:mx-0">
              <img
                src="/__mockup/images/studio-portrait.png"
                alt="Scarlett Grandy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-[#2a2a2a] m-4 pointer-events-none"></div>
            </div>
            {/* Minimalist data points overlapping */}
            <div className="absolute -right-8 bottom-12 hidden md:flex flex-col gap-6 bg-[#0a0a0a] p-8 border border-[#2a2a2a]">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#a3a19a] mb-1">Experience</div>
                <div className="font-serif text-2xl">16 Years</div>
              </div>
              <div className="w-8 h-[1px] bg-[#2a2a2a]"></div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#a3a19a] mb-1">Status</div>
                <div className="font-serif text-xl">NWA's Leading<br />Specialist</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="text-xs tracking-[0.2em] uppercase text-[#a3a19a] mb-12 flex items-center gap-4">
              <Minus size={16} className="text-[#8b2a2a]" />
              The Provider
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Scarlett<br />Grandy</h2>
            <p className="text-[#a3a19a] text-sm tracking-[0.1em] uppercase mb-12">
              CNM, WHNP-BC · Certified EAGALA Specialist
            </p>

            <p className="text-xl md:text-2xl font-light text-[#f5f2eb] leading-relaxed mb-16 border-l border-[#8b2a2a] pl-8">
              "The standard of care is no longer sufficient. Women deserve a medical partner who understands the intricate symphony of their physiology."
            </p>

            <ul className="space-y-4 text-sm tracking-wide text-[#a3a19a] font-light">
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a]"></div>
                Board Certified Women's Health Nurse Practitioner
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a]"></div>
                Member of The Menopause Society
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a]"></div>
                Member of ISSWSH
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 px-8 md:px-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 flex justify-center items-center">
          <img 
            src="/__mockup/images/studio-texture-2.png" 
            alt="Texture background" 
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80"></div>
        </div>

        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <div className="w-[1px] h-24 bg-[#8b2a2a] mb-12"></div>
          <h2 className="font-serif text-5xl md:text-7xl mb-12">
            The Invitation
          </h2>
          <p className="text-xl text-[#a3a19a] font-light mb-16 max-w-xl">
            Step into a space where your health is treated with the gravity, expertise, and luxury it warrants.
          </p>
          
          <button className="group relative overflow-hidden bg-transparent border border-[#2a2a2a] hover:border-[#8b2a2a] text-[#f5f2eb] px-12 py-6 transition-all duration-500">
            <span className="relative z-10 text-sm tracking-[0.2em] uppercase flex items-center gap-4">
              Book a Consultation
              <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-[#8b2a2a] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out"></div>
          </button>
        </div>
      </section>

      {/* Footer Minimalist */}
      <footer className="py-12 px-8 md:px-16 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.2em] uppercase text-[#a3a19a]">
        <div>© {new Date().getFullYear()} SheRises Health. All Rights Reserved.</div>
        <div className="font-serif text-lg tracking-widest text-[#f5f2eb]">SheRises</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#f5f2eb] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#f5f2eb] transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
