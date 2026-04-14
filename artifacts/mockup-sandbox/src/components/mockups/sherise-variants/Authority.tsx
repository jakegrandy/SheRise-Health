import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Clock, 
  Heart, 
  Microscope, 
  ShieldCheck, 
  Star, 
  Stethoscope, 
  User, 
  XCircle 
} from 'lucide-react';

// --- Theme Definitions ---
const theme = {
  colors: {
    forest: '#132A24',
    forestLight: '#1B3B33',
    cream: '#F4F1EB',
    ivory: '#FCFBF9',
    gold: '#B89047',
    goldLight: '#E8D5A5',
    textDark: '#111827',
    textMuted: '#4B5563',
  }
};

const Section = ({ children, className = '', id = '' }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 md:py-32 ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }: any) => {
  const directions = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
    none: { opacity: 0 }
  };

  return (
    <motion.div
      initial={directions[direction as keyof typeof directions]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export function Authority() {
  // Inject Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const styles = {
    fontSerif: { fontFamily: "'Playfair Display', serif" },
    fontSans: { fontFamily: "'Outfit', sans-serif" },
  };

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#132A24]" style={styles.fontSans}>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FCFBF9]/95 backdrop-blur-md border-b border-[#E8D5A5]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-[#132A24] flex items-center justify-center text-[#E8D5A5]" style={styles.fontSerif}>
              <span className="text-xl leading-none">S</span>
            </div>
            <span className="text-xl font-semibold tracking-wide uppercase text-[#132A24]">
              SheRises Health
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#expertise" className="hover:text-[#B89047] transition-colors">Expertise</a>
            <a href="#approach" className="hover:text-[#B89047] transition-colors">Approach</a>
            <a href="#services" className="hover:text-[#B89047] transition-colors">Specialties</a>
            <a href="#outcomes" className="hover:text-[#B89047] transition-colors">Outcomes</a>
          </div>
          <button className="bg-[#132A24] text-[#F4F1EB] px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-[#1B3B33] transition-all border border-transparent hover:border-[#B89047]/30">
            Request Consultation
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#F4F1EB]">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url(/__mockup/images/texture-bg.png)', backgroundSize: 'cover' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 z-10 pt-10">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B89047] text-[#B89047] text-xs font-semibold tracking-widest uppercase mb-8 bg-[#FCFBF9]">
                  <Award className="w-3.5 h-3.5" />
                  <span>Northwest Arkansas' Leading Specialist</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] text-[#132A24] mb-6" style={styles.fontSerif}>
                  Reversal of metabolic dysfunction is <span className="italic text-[#B89047]">possible.</span>
                </h1>
                <p className="text-xl text-[#4B5563] mb-10 max-w-2xl font-light leading-relaxed">
                  Led by Scarlett Grandy, CNM, WHNP-BC. Combining 16 years of clinical leadership with root-cause medicine to solve complex hormone and metabolic challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#132A24] text-[#F4F1EB] px-8 py-4 text-base font-medium tracking-wide hover:bg-[#1B3B33] transition-colors flex items-center justify-center gap-2">
                    Book a Clinical Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-transparent text-[#132A24] border border-[#132A24] px-8 py-4 text-base font-medium tracking-wide hover:bg-[#132A24] hover:text-[#F4F1EB] transition-colors">
                    View Clinical Outcomes
                  </button>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5 relative">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#B89047] translate-x-4 translate-y-4"></div>
                  <img 
                    src="/__mockup/images/scarlett-authority.png" 
                    alt="Scarlett Grandy, CNM, WHNP-BC" 
                    className="relative z-10 w-full h-[600px] object-cover grayscale-[20%] contrast-125"
                  />
                  
                  {/* Floating Credential Badge */}
                  <div className="absolute -left-12 bottom-12 z-20 bg-[#132A24] p-6 shadow-2xl border border-[#B89047]/30 max-w-xs">
                    <h3 className="text-[#F4F1EB] text-lg font-medium mb-1" style={styles.fontSerif}>Scarlett Grandy</h3>
                    <p className="text-[#B89047] text-sm font-semibold tracking-wide mb-3">CNM, WHNP-BC</p>
                    <p className="text-[#F4F1EB]/80 text-xs leading-relaxed">
                      Board Certified Women's Health Nurse Practitioner. 16+ years specializing in whole-health methodology.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="bg-[#132A24] py-12 border-y border-[#B89047]/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#E8D5A5] text-sm font-medium tracking-widest uppercase mb-8">Professional Memberships & Certifications</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
            {['The Menopause Society', 'ISSWSH', 'EAGALA Certified', 'Board Certified WHNP'].map((cert, i) => (
              <div key={i} className="flex items-center gap-3 text-[#F4F1EB]">
                <ShieldCheck className="w-6 h-6 text-[#B89047]" />
                <span className="font-medium tracking-wide">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Approach / Root Cause Medicine */}
      <Section id="approach" className="bg-[#FCFBF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-6" style={styles.fontSerif}>
                Root-Cause Medicine, <br/><span className="italic text-[#B89047]">Executed with Precision.</span>
              </h2>
              <p className="text-lg text-[#4B5563] mb-8 font-light leading-relaxed">
                Conventional medicine often treats symptoms in isolation. We treat the system. By diagnosing the underlying metabolic and hormonal dysfunctions, we design targeted protocols to reverse disease states rather than just managing them.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Comprehensive Diagnostics", desc: "Advanced blood work and metabolic paneling that goes far beyond standard annual labs." },
                  { title: "Systems-Level Analysis", desc: "Understanding how your thyroid, adrenal function, and sex hormones interact and cascade." },
                  { title: "Evidence-Based Protocols", desc: "Targeted interventions using bioidentical hormones, specific supplementation, and metabolic repair strategies." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-[#132A24]/5 flex items-center justify-center text-[#B89047]">
                        <span className="text-sm font-bold">{i + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[#132A24] font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-[#4B5563]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <img 
                src="/__mockup/images/clinic-interior.png" 
                alt="Clinic Interior" 
                className="w-full h-[700px] object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Contrast Section: Why Scarlett is Different */}
      <Section className="bg-[#132A24] text-[#F4F1EB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={styles.fontSerif}>
              The Standard of Care vs. <span className="italic text-[#B89047]">The SheRises Standard</span>
            </h2>
            <p className="text-lg text-[#F4F1EB]/70 font-light max-w-2xl mx-auto">
              If you have felt dismissed, rushed, or told your labs are "normal" despite feeling terrible, you are not crazy. The conventional model is broken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#B89047]/30 border border-[#B89047]/30">
            <div className="bg-[#132A24] p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-8 text-[#F4F1EB]/50 flex items-center gap-3">
                <XCircle className="w-6 h-6" />
                Conventional OB/GYN
              </h3>
              <ul className="space-y-6">
                {[
                  "10-minute appointments",
                  "Treats symptoms with standardized prescriptions",
                  "Dismisses fatigue and weight gain as 'normal aging'",
                  "Uses narrow reference ranges for 'normal' labs",
                  "Siloed care (hormones separate from metabolism)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#F4F1EB]/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4F1EB]/30 mt-2 shrink-0"></div>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1B3B33] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldCheck className="w-64 h-64" />
              </div>
              <h3 className="text-xl font-semibold mb-8 text-[#B89047] flex items-center gap-3 relative z-10">
                <CheckCircle2 className="w-6 h-6" />
                The SheRises Method
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "60-90 minute deep-dive consultations",
                  "Investigates and repairs root metabolic dysfunction",
                  "Validates your symptoms; aging does not have to feel bad",
                  "Optimizes for 'optimal' ranges, not just 'normal'",
                  "Whole-systems whole-health approach"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#F4F1EB]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B89047] mt-2 shrink-0"></div>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Clinical Specialties */}
      <Section id="services" className="bg-[#F4F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-4" style={styles.fontSerif}>
                Clinical Specialties
              </h2>
              <p className="text-lg text-[#4B5563] font-light max-w-xl">
                Targeted expertise for complex physiological challenges.
              </p>
            </div>
            <button className="text-[#132A24] font-semibold border-b border-[#132A24] pb-1 hover:text-[#B89047] hover:border-[#B89047] transition-colors self-start md:self-auto">
              View All Services
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="w-8 h-8" />,
                title: "Metabolic Health",
                desc: "Reversal protocols for insulin resistance, PCOS, prediabetes, and weight dysregulation.",
                tags: ["Insulin Resistance", "PCOS", "Thyroid"]
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Hormone Optimization",
                desc: "Precision hormone balancing for perimenopause, menopause, and complex endocrine disorders.",
                tags: ["BHRT", "Menopause", "Adrenal"]
              },
              {
                icon: <User className="w-8 h-8" />,
                title: "Trauma-Informed Care",
                desc: "Specialized sexual health and pelvic floor protocols managed with profound sensitivity.",
                tags: ["Sexual Health", "Pelvic Pain", "EAGALA"]
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#FCFBF9] p-8 border border-[#132A24]/10 h-full hover:border-[#B89047] transition-colors group cursor-pointer">
                  <div className="text-[#B89047] mb-6 transition-transform group-hover:scale-110 origin-left">{service.icon}</div>
                  <h3 className="text-2xl font-medium text-[#132A24] mb-4" style={styles.fontSerif}>{service.title}</h3>
                  <p className="text-[#4B5563] font-light mb-8 text-sm leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium uppercase tracking-wider text-[#132A24] bg-[#F4F1EB] px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Patient Outcomes */}
      <Section id="outcomes" className="bg-[#FCFBF9] border-t border-[#132A24]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-6" style={styles.fontSerif}>
              Clinical Outcomes
            </h2>
            <p className="text-lg text-[#4B5563] font-light max-w-2xl mx-auto">
              Our metrics are patient vitality. Hear from women who have reclaimed their health through our protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote: "For 5 years I was told my exhaustion and weight gain were just 'getting older'. Scarlett ran panels no one else had. Within 3 months of her metabolic protocol, I reversed my insulin resistance and got my life back.",
                author: "Sarah M.",
                age: "48",
                outcome: "Reversed Pre-diabetes & Hormonal Imbalance"
              },
              {
                quote: "As a patient with medical trauma, I've avoided doctors for years. Scarlett's approach is entirely different. Her clinical brilliance is matched only by her profound empathy. She is exactly what women's healthcare should be.",
                author: "Elena R.",
                age: "35",
                outcome: "Resolved Chronic Pelvic Pain"
              }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="relative p-10 bg-[#F4F1EB]">
                  <Star className="absolute top-6 right-6 w-8 h-8 text-[#B89047]/20" />
                  <p className="text-xl text-[#132A24] mb-8 font-serif italic leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-[#132A24] uppercase tracking-wide text-sm">{testimonial.author}, {testimonial.age}</p>
                    <p className="text-[#B89047] text-sm mt-1 font-medium">{testimonial.outcome}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-[#132A24] text-[#F4F1EB] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/__mockup/images/texture-bg.png)', backgroundSize: 'cover' }}></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-medium mb-8" style={styles.fontSerif}>
            Your health is not a mystery to be managed. It is a system to be optimized.
          </h2>
          <p className="text-xl text-[#F4F1EB]/80 font-light mb-12 max-w-2xl mx-auto">
            Schedule a comprehensive consultation with Scarlett Grandy to begin your diagnostic process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#B89047] text-[#132A24] px-10 py-5 text-lg font-semibold tracking-wide hover:bg-[#C9A25E] transition-colors">
              Book Your Consultation
            </button>
            <button className="bg-transparent text-[#F4F1EB] border border-[#F4F1EB]/30 px-10 py-5 text-lg font-medium tracking-wide hover:bg-[#F4F1EB]/10 transition-colors flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              View Availability
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2922] text-[#F4F1EB]/60 py-12 text-sm border-t border-[#F4F1EB]/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-[#F4F1EB]">
            <div className="w-6 h-6 rounded-sm bg-[#B89047] flex items-center justify-center text-[#132A24]" style={styles.fontSerif}>
              <span className="text-sm leading-none font-bold">S</span>
            </div>
            <span className="font-semibold tracking-wide uppercase">
              SheRises Health
            </span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#B89047] transition-colors">Patient Portal</a>
            <a href="#" className="hover:text-[#B89047] transition-colors">Location</a>
            <a href="#" className="hover:text-[#B89047] transition-colors">Privacy Practices</a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} SheRises Health. Northwest Arkansas.
          </div>
        </div>
      </footer>
    </div>
  );
}
