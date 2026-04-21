import { ArrowRight } from "lucide-react";
import generationsOfCare from "@assets/generations_of_care_1776802252403.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BASE = import.meta.env.BASE_URL;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const systems = [
  {
    num: "01",
    title: "Hormonal Harmony",
    copy: "Navigating perimenopause and menopause with precision. We optimize your hormones using bioidentical therapies, restoring energy, clarity, and libido.",
  },
  {
    num: "02",
    title: "Metabolic Restoration",
    copy: "Addressing weight resistance at its source. By evaluating insulin sensitivity, thyroid function, and cellular energy, we rebuild your metabolic flexibility.",
  },
  {
    num: "03",
    title: "Nervous System Calibration",
    copy: "Chronic stress rewires the body. We assess cortisol rhythms and provide strategies to shift your system from survival mode back to a state of rest and repair.",
  },
  {
    num: "04",
    title: "Reproductive Health",
    copy: "Expert management of complex gynecological concerns. From irregular cycles to pelvic pain, we offer nuanced, specialized care tailored to your anatomy.",
  },
  {
    num: "05",
    title: "Strategic Lifestyle",
    copy: "The foundation of lasting health. We curate personalized guidance on nutrition, movement, and recovery that fits seamlessly into a demanding life.",
  }
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-foreground">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 mix-blend-difference text-white">
        <div className="font-serif text-xl tracking-wider uppercase">
          SheRises Health
        </div>
        <div className="hidden md:flex gap-12 text-xs tracking-[0.2em] uppercase">
          <a href="#philosophy" className="hover:opacity-60 transition-opacity">Philosophy</a>
          <a href="#systems" className="hover:opacity-60 transition-opacity">The 5 Systems</a>
          <a href="#provider" className="hover:opacity-60 transition-opacity">Scarlett Grandy</a>
        </div>
        <a
          href="#book"
          className="text-xs tracking-[0.2em] uppercase border-b border-transparent hover:border-white transition-colors pb-1"
        >
          Inquire
        </a>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img
            src={generationsOfCare}
            alt="Two generations holding hands"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/40 mix-blend-multiply" />
        </motion.div>

        <motion.div 
          className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl lg:text-[7rem] text-white font-light leading-[1.05] mb-16 tracking-tight"
          >
            Reimagining<br />Women's Health
          </motion.h1>

          <motion.div variants={fadeUp}>
            <a
              href="#book"
              className="group relative inline-flex items-center justify-center px-12 py-5 text-xs tracking-[0.25em] uppercase text-white border border-white/30 hover:bg-white hover:text-primary transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 flex items-center gap-4">
                Request a Consultation
                <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-700 ease-[0.16,1,0.3,1]" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Credentials Bar */}
      <section className="border-b border-foreground/10 bg-background relative z-20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-[0.2em] uppercase text-foreground/60">
          <span>Board Certified WHNP</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-accent/40" />
          <span>Certified Nurse Midwife</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-accent/40" />
          <span>20+ Years Clinical Practice</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-accent/40" />
          <span>Northwest Arkansas</span>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 md:py-48 px-6 md:px-12 max-w-screen-2xl mx-auto relative z-20 bg-background">
        <motion.div 
          className="mb-24 md:mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="text-accent text-xs tracking-[0.3em] uppercase block mb-12">
            The Scope of Care
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] max-w-5xl text-foreground">
            At She Rises Health, care spans the full spectrum of women’s health—from preventive screening and reproductive care to hormone optimization and metabolic health.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-12 max-w-3xl text-lg md:text-xl text-foreground/60 leading-relaxed font-light">
            Services are designed to support women at every stage of life, including adolescence, reproductive years, and midlife and beyond.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          <motion.div 
            className="group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="h-px w-full bg-foreground/10 group-hover:bg-accent transition-colors duration-700 mb-12" />
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-foreground">Adolescent & Young Adult Care</h3>
            <p className="text-foreground/60 leading-relaxed text-base mb-10 font-light">
              Care for younger patients is individualized, educational, and supportive.
            </p>
            <ul className="space-y-4 text-foreground/80 leading-relaxed text-sm font-light">
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> First gynecologic visits and education</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Menstrual concerns (irregular cycles, painful periods, heavy bleeding)</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Acne and early hormonal imbalance evaluation</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Contraceptive counseling and initiation</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> STI screening and sexual health education</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Body literacy and reproductive health guidance</li>
            </ul>
          </motion.div>

          <motion.div 
            className="group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="h-px w-full bg-foreground/10 group-hover:bg-accent transition-colors duration-700 mb-12" />
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-foreground">Family Planning & Reproductive</h3>
            <p className="text-foreground/60 leading-relaxed text-base mb-10 font-light">
              Support for reproductive decision-making is practical, informed, and aligned with each patient’s goals.
            </p>
            <ul className="space-y-4 text-foreground/80 leading-relaxed text-sm font-light">
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Personalized contraceptive education and care (pill, patch, ring, IUD, implant)</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Preconception counseling and optimization</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Fertility awareness and cycle tracking education</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Reproductive life planning</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Pregnancy prevention and spacing strategies</li>
            </ul>
          </motion.div>

          <motion.div 
            className="group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <div className="h-px w-full bg-foreground/10 group-hover:bg-accent transition-colors duration-700 mb-12" />
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-foreground">Hormone & Metabolic Health</h3>
            <p className="text-foreground/60 leading-relaxed text-base mb-10 font-light">
              Addressing root causes rather than isolated symptoms.
            </p>
            <ul className="space-y-4 text-foreground/80 leading-relaxed text-sm font-light">
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Evaluation and treatment of hormone imbalance</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> PCOS and androgen excess management</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Insulin resistance and metabolic dysfunction care</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Weight management with a medical and metabolic focus</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Perimenopause and menopause care</li>
              <li className="flex items-start gap-4"><span className="text-accent mt-1">✦</span> Fatigue, mood changes, sleep disruption, and libido concerns</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 md:py-48 px-6 md:px-12 bg-card relative z-20">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div 
            className="mb-24 md:mb-32 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="text-accent text-xs tracking-[0.3em] uppercase block mb-12">
              The Philosophy
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl font-light leading-tight max-w-4xl mx-auto text-foreground">
              Medicine that listens, investigates, and restores.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-24 relative">
            <div className="hidden md:block absolute top-0 left-1/3 bottom-0 w-px bg-foreground/5" />
            <div className="hidden md:block absolute top-0 right-1/3 bottom-0 w-px bg-foreground/5" />
            
            <motion.div 
              className="space-y-6 text-center px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center mx-auto mb-10 text-accent font-serif italic text-xl">1</div>
              <h3 className="font-serif text-2xl text-foreground">Unrushed Time</h3>
              <p className="text-foreground/60 leading-relaxed font-light text-base">
                Healing cannot happen in fifteen minutes. We protect the time necessary to hear your complete story and understand your unique physiology.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-6 text-center px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center mx-auto mb-10 text-accent font-serif italic text-xl">2</div>
              <h3 className="font-serif text-2xl text-foreground">Comprehensive Investigation</h3>
              <p className="text-foreground/60 leading-relaxed font-light text-base">
                We look beyond basic labs, utilizing advanced functional testing to uncover the root causes of exhaustion, weight resistance, and mood shifts.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-6 text-center px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center mx-auto mb-10 text-accent font-serif italic text-xl">3</div>
              <h3 className="font-serif text-2xl text-foreground">Refined Protocols</h3>
              <p className="text-foreground/60 leading-relaxed font-light text-base">
                Your body is a complex ecosystem. We design bespoke interventions that harmonize your systems rather than simply masking individual symptoms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 5 Systems */}
      <section id="systems" className="py-32 md:py-48 px-6 md:px-12 bg-background relative z-20">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-24 text-center">Clinical Framework</span>
          </motion.div>

          <div className="space-y-0">
            {systems.map(({ num, title, copy }, i) => (
              <motion.div 
                key={num} 
                className="group border-t border-foreground/10 py-16 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-card opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 -mx-12 px-12" />
                <div className="font-serif text-5xl md:text-7xl text-foreground/10 group-hover:text-accent transition-colors duration-700 italic min-w-[100px]">
                  {num}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
                    {title}
                  </h3>
                  <p className="text-lg text-foreground/60 leading-relaxed font-light max-w-2xl">{copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section id="provider" className="py-32 md:py-48 px-6 md:px-12 bg-card relative z-20 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32 items-center">
          <motion.div 
            className="relative aspect-[3/4] w-full max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-8 border border-foreground/5 translate-x-4 translate-y-4" />
            <img
              src={`${BASE}images/sherise-luxury-provider.png`}
              alt="Scarlett Grandy, CNM, WHNP-BC"
              className="w-full h-full object-cover grayscale-[20%] contrast-125 hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>

          <motion.div 
            className="space-y-12 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div>
              <motion.span variants={fadeUp} className="text-accent text-xs tracking-[0.3em] uppercase block mb-8">The Practitioner</motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-7xl font-light text-foreground mb-4">Scarlett Grandy</motion.h2>
              <motion.p variants={fadeUp} className="text-xs tracking-[0.2em] uppercase text-foreground/40 pb-12 border-b border-foreground/10">CNM, WHNP-BC</motion.p>
            </div>

            <motion.div variants={fadeUp} className="space-y-8 text-foreground/70 leading-relaxed text-lg font-light">
              <p>
                With over two decades of clinical experience in women's health, Scarlett founded SheRises to offer the caliber of care she knew her patients deserved.
              </p>
              <p>
                Having witnessed countless women being dismissed by conventional medicine—told their fatigue, weight gain, and mood changes were "just part of getting older"—she created a sanctuary for deep investigation and genuine healing.
              </p>
              <p>
                Her approach merges rigorous clinical expertise with an unparalleled commitment to patient advocacy, ensuring every woman who walks through her doors feels seen, heard, and wholly cared for.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary text-white py-32 md:py-48 px-6 md:px-12 relative z-20">
        <div className="max-w-4xl mx-auto space-y-32">
          <motion.blockquote 
            className="text-center space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-serif text-3xl md:text-5xl font-light leading-[1.4] italic text-white/90">
              "For the first time in years, I felt completely heard. The depth of knowledge and the level of care is simply unmatched. Scarlett didn't just treat my symptoms; she restored my vitality."
            </p>
            <footer className="text-xs tracking-[0.2em] uppercase text-accent">
              — Sarah M., Patient Since 2023
            </footer>
          </motion.blockquote>

          <div className="w-px h-24 bg-accent/20 mx-auto" />

          <motion.blockquote 
            className="text-center space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-serif text-3xl md:text-5xl font-light leading-[1.4] italic text-white/90">
              "The investment in my health through SheRises has been life-changing. The bespoke approach and unhurried appointments are exactly what healthcare should be."
            </p>
            <footer className="text-xs tracking-[0.2em] uppercase text-accent">
              — Elena R., Patient Since 2024
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-32 md:py-48 px-6 md:px-12 text-center bg-background relative z-20">
        <motion.div 
          className="max-w-2xl mx-auto space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-7xl font-light text-foreground">Begin Your Journey</motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-foreground/60 font-light leading-relaxed">
            We are currently accepting a limited number of new patients. Request a consultation to discover if the SheRises approach is right for you.
          </motion.p>
          <motion.div variants={fadeUp} className="pt-12">
            <a
              href="mailto:hello@sheriseshealth.com"
              className="group relative inline-flex items-center justify-center px-12 py-5 text-xs tracking-[0.25em] uppercase text-white bg-primary overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 flex items-center gap-4 text-white">
                Request a Consultation
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-16 px-6 md:px-12 text-xs tracking-[0.2em] uppercase text-foreground/40 bg-background relative z-20">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-2xl normal-case text-foreground tracking-wide">
            SheRises Health
          </div>
          <div className="flex gap-10">
            <a href="mailto:hello@sheriseshealth.com" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">Location</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>
          <div>&copy; {new Date().getFullYear()} SheRises Health</div>
        </div>
      </footer>

    </div>
  );
}