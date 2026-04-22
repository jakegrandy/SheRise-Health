import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import generationsOfCare from "@assets/generations_of_care_1776802252403.png";
import { motion, useScroll, useTransform } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const systems = [
  {
    num: "01",
    title: "Hormonal Harmony",
    copy: "Hormones shape how you feel, think, and function. At SheRises, we identify and treat imbalances early, from reproductive years through perimenopause and postmenopause. We offer precise hormone care that restores stability, energy, and balance so you can thrive at every stage of your life.",
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
    copy: "Your reproductive health should feel understood, not managed. At SheRises, we offer thoughtful, individualized care. From first cycles and contraception to PCOS, fertility, and hormone transitions. Care that adapts to you, and evolves with your life.",
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

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center gap-12 px-8 py-10 md:px-16 text-primary">
        <div className="font-serif text-2xl tracking-widest uppercase">
          SheRises
        </div>
        <div className="hidden md:flex gap-12 text-[11px] tracking-[0.25em] uppercase font-light">
          <a href="#philosophy" className="hover:text-accent transition-colors duration-500">Philosophy</a>
          <a href="#systems" className="hover:text-accent transition-colors duration-500">The Framework</a>
          <a href="#provider" className="hover:text-accent transition-colors duration-500">Scarlett Grandy</a>
        </div>
        <a
          href="#book"
          className="text-[11px] tracking-[0.25em] uppercase font-light flex items-center gap-2 group"
        >
          <span className="border-b border-transparent group-hover:border-accent transition-colors pb-1">Inquire</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[900px] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="w-full h-full"
            style={{ y: heroImageY, opacity: heroOpacity }}
          >
            <img
              src={generationsOfCare}
              alt="Two generations holding hands"
              className="w-full h-full object-cover object-center opacity-95 brightness-110"
            />
            <div className="absolute inset-0 bg-background/40" />
          </motion.div>
        </div>

        <motion.div 
          className="relative z-10 w-full max-w-[100rem] mx-auto px-8 md:px-16 flex flex-col justify-start h-full items-center text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="pt-24 flex flex-col items-center">
            <motion.h1 
              variants={fadeUp} 
              className="font-serif text-4xl md:text-6xl lg:text-[6.5rem] text-background font-light leading-[1.1] tracking-[-0.02em] mb-16"
            >
              <span className="text-primary block">Reimagining</span>
              <span className="italic text-accent">Women's</span> <span className="text-primary">Health</span>
            </motion.h1>

          </div>
        </motion.div>

      </section>

      {/* CTA Button */}
      <div className="bg-background relative z-20 flex justify-center py-12">
        <a
          href="#book"
          className="group relative inline-flex items-center justify-center px-12 py-6 text-[11px] tracking-[0.3em] uppercase text-primary border border-primary/30 hover:border-primary transition-all duration-700 overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
          <span className="relative z-10 flex items-center gap-4 group-hover:text-background transition-colors duration-700">
            Request a Consultation
            <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-700" />
          </span>
        </a>
      </div>

      {/* Credentials Bar */}
      <section className="bg-background relative z-20 border-b border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.25em] uppercase text-foreground/50">
          <span>Board Certified WHNP</span>
          <span className="hidden md:block w-1.5 h-1.5 rotate-45 bg-accent/40" />
          <span>Certified Nurse Midwife</span>
          <span className="hidden md:block w-1.5 h-1.5 rotate-45 bg-accent/40" />
          <span>20+ Years Clinical Practice</span>
          <span className="hidden md:block w-1.5 h-1.5 rotate-45 bg-accent/40" />
          <span>Scarlett Grandy</span>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 md:py-48 px-8 md:px-16 max-w-[100rem] mx-auto relative z-20 bg-background overflow-hidden">
        <motion.div 
          className="mb-32 md:mb-48 flex flex-col lg:flex-row gap-16 lg:gap-32 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="max-w-md">
            <span className="text-accent text-[11px] tracking-[0.3em] uppercase block mb-8 font-light">What We Do</span>
            <p className="text-lg md:text-xl text-foreground/60 leading-[1.8] font-light">
              Services are designed to support women at every stage of life, including adolescence, reproductive years, and midlife and beyond.
            </p>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.25] text-foreground flex-1">
            At She Rises Health, care spans the full spectrum of women’s health—from <span className="italic text-foreground/70">preventive screening</span> and <span className="italic text-foreground/70">reproductive care</span> to hormone optimization and metabolic health.
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-x-16 gap-y-24 relative">
          <motion.div 
            className="group relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="mb-10 text-accent font-serif italic text-8xl leading-none opacity-20">1</div>
            <h3 className="font-serif text-3xl mb-8 text-foreground pb-8 border-b border-foreground/10">Adolescent &<br/>Young Adult Care</h3>
            <p className="text-foreground/60 leading-[1.8] text-base mb-10 font-light h-20">
              Care for younger patients is individualized, educational, and supportive.
            </p>
            <ul className="space-y-5 text-foreground/80 leading-[1.6] text-sm font-light">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>First gynecologic visits and education</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Menstrual concerns (irregular cycles, painful periods, heavy bleeding)</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Acne and early hormonal imbalance evaluation</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Contraceptive counseling and initiation</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>STI screening and sexual health education</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Body literacy and reproductive health guidance</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="group relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-10 text-accent font-serif italic text-8xl leading-none opacity-20">2</div>
            <h3 className="font-serif text-3xl mb-8 text-foreground pb-8 border-b border-foreground/10">Family Planning &<br/>Reproductive Care</h3>
            <p className="text-foreground/60 leading-[1.8] text-base mb-10 font-light h-20">
              Support for reproductive decision-making is practical, informed, and aligned with each patient’s goals.
            </p>
            <ul className="space-y-5 text-foreground/80 leading-[1.6] text-sm font-light">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Personalized contraceptive education and care (pill, patch, ring, IUD, implant)</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Preconception counseling and optimization</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Fertility awareness and cycle tracking education</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Reproductive life planning</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Pregnancy prevention and spacing strategies</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="group relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <div className="mb-10 text-accent font-serif italic text-8xl leading-none opacity-20">3</div>
            <h3 className="font-serif text-3xl mb-8 text-foreground pb-8 border-b border-foreground/10">Hormone &<br/>Metabolic Health</h3>
            <p className="text-foreground/60 leading-[1.8] text-base mb-10 font-light h-20">
              Addressing root causes rather than isolated symptoms.
            </p>
            <ul className="space-y-5 text-foreground/80 leading-[1.6] text-sm font-light">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Evaluation and treatment of hormone imbalance</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>PCOS and androgen excess management</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Insulin resistance and metabolic dysfunction care</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Weight management with a medical and metabolic focus</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Perimenopause and menopause care</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-accent shrink-0" />
                <span>Fatigue, mood changes, sleep disruption, and libido concerns</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 md:py-48 px-8 md:px-16 bg-secondary relative z-20">
        <div className="max-w-[100rem] mx-auto">
          <motion.div 
            className="mb-24 md:mb-40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="text-accent text-[11px] tracking-[0.3em] uppercase block font-light mb-8 text-center">
              The Philosophy
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-[5rem] font-light leading-[1.1] text-foreground text-center">
              Medicine that <span className="italic text-foreground/80">listens</span>, investigates,<br/>and <span className="italic text-foreground/80">restores</span>.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-24 relative">
            <div className="hidden md:block absolute top-0 left-1/3 bottom-0 w-px bg-foreground/5" />
            <div className="hidden md:block absolute top-0 right-1/3 bottom-0 w-px bg-foreground/5" />
            
            <motion.div 
              className="space-y-8 text-center px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="w-16 h-px bg-accent/40 mx-auto mb-12" />
              <h3 className="font-serif text-3xl text-foreground">Unrushed Time</h3>
              <p className="text-foreground/60 leading-[1.8] font-light text-lg">
                Healing cannot happen in fifteen minutes. We protect the time necessary to hear your complete story and understand your unique physiology.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-8 text-center px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-px bg-accent/40 mx-auto mb-12" />
              <h3 className="font-serif text-3xl text-foreground">Comprehensive<br/>Investigation</h3>
              <p className="text-foreground/60 leading-[1.8] font-light text-lg">
                We look beyond basic labs, utilizing advanced functional testing to uncover the root causes of exhaustion, weight resistance, and mood shifts.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-8 text-center px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              <div className="w-16 h-px bg-accent/40 mx-auto mb-12" />
              <h3 className="font-serif text-3xl text-foreground">Refined Protocols</h3>
              <p className="text-foreground/60 leading-[1.8] font-light text-lg">
                Your body is an interconnected system. At SheRises, we go beyond symptom management with integrated care plans that restore balance across your physiology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Framework */}
      <section id="systems" className="py-32 md:py-48 px-8 md:px-16 bg-background relative z-20">
        <div className="max-w-[100rem] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-24 flex flex-col items-center"
          >
            <span className="text-accent text-[11px] tracking-[0.3em] uppercase block mb-8 font-light">Clinical Framework</span>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-foreground leading-[1.1]">The Five Systems</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-32">
            {systems.map(({ num, title, copy }, i) => (
              <motion.div 
                key={num} 
                className="group relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col gap-6 items-start">
                  <div className="font-serif text-7xl text-foreground/5 mb-4 group-hover:text-accent transition-colors duration-500 italic">
                    {num}
                  </div>
                  <div className="flex-1 space-y-6">
                    <h3 className="font-serif text-4xl md:text-5xl text-foreground pb-6 border-b border-foreground/10">
                      {title}
                    </h3>
                    <p className="text-xl text-foreground/60 leading-[1.8] font-light">{copy}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section id="provider" className="py-32 md:py-48 px-8 md:px-16 bg-primary text-background relative z-20 overflow-hidden">
        <div className="max-w-[100rem] mx-auto grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32 items-center">
          <motion.div 
            className="relative aspect-[3/4] w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 border border-background/20 translate-x-4 translate-y-4" />
            <img
              src={`${BASE}images/scarlett-headshot.png`}
              alt="Scarlett Grandy, CNM, WHNP-BC"
              className="w-full h-full object-cover object-top brightness-100 transition-all duration-1000"
            />
          </motion.div>

          <motion.div 
            className="space-y-16 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div>
              <motion.span variants={fadeUp} className="text-accent text-[11px] tracking-[0.3em] uppercase block mb-8 font-light">SheRises Founder and Your Provider</motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-6xl md:text-8xl font-light text-background mb-6">Scarlett Grandy</motion.h2>
              <motion.p variants={fadeUp} className="text-[11px] tracking-[0.3em] uppercase text-background/40 pb-12 border-b border-background/20">CNM, WHNP-BC</motion.p>
            </div>

            <motion.div variants={fadeUp} className="space-y-8 text-background/70 leading-[1.8] text-xl font-light">
              <p>
                Scarlett Grandy founded SheRises to address a critical gap in women's healthcare. Scarlett is a midwife first and foremost, which means she listens to women.
              </p>
              <p>
                As a provider working for large healthcare organizations, she felt rushed and pressured by volume requirements and financial incentives. She wanted something different — for her practice and for the women she served.
              </p>
              <p>
                Too often, women come to Scarlett after having seen many other healthcare professionals, all with the same story. They feel rushed and dismissed. Their symptoms are normalized, and disease is left to progress to irreversible stages.
              </p>
              <p>
                At SheRises, Scarlett pioneers a new model of care with root-cause evaluation, disease reversal, and patient-provider partnership.
              </p>
              <p className="text-background/90 italic font-light">
                The outcome is optimal health — thriving through all the stages of womanhood.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-foreground py-32 md:py-48 px-8 md:px-16 relative z-20">
        <div className="max-w-[100rem] mx-auto">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-light text-background mb-20 md:mb-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Women Share:
          </motion.h2>
        </div>
        <div className="max-w-[100rem] mx-auto grid lg:grid-cols-3 gap-24 lg:gap-32">
          <motion.blockquote 
            className="space-y-12 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="absolute -top-16 -left-8 font-serif text-[12rem] text-accent/10 leading-none">"</div>
            <p className="font-serif text-3xl md:text-4xl font-light leading-[1.6] italic text-background relative z-10">
              For the first time, I felt completely heard by a provider. I was having 6–10 hot flashes an hour and I just didn't know how I would live. Scarlett got me fixed up and I'm feeling better than ever. My energy is back! I'm exercising and losing weight! My marriage even got better! AND no more hot flashes!
            </p>
            <footer className="text-[11px] tracking-[0.3em] uppercase text-background/40 font-light flex items-center gap-4">
              <div className="w-8 h-px bg-accent/40" />
              Sarah M., Age 55
            </footer>
          </motion.blockquote>

          <motion.blockquote 
            className="space-y-12 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -top-16 -left-8 font-serif text-[12rem] text-accent/10 leading-none">"</div>
            <p className="font-serif text-3xl md:text-4xl font-light leading-[1.6] italic text-background relative z-10">
              I struggled with PCOS and was told I would never get pregnant. We welcomed our first child into the world last year and I believe we couldn't have done it without Scarlett. She helped me lose weight and start ovulating again. Her approach really changed my life.
            </p>
            <footer className="text-[11px] tracking-[0.3em] uppercase text-background/40 font-light flex items-center gap-4">
              <div className="w-8 h-px bg-accent/40" />
              Elena R., Age 32
            </footer>
          </motion.blockquote>

          <motion.blockquote 
            className="space-y-12 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute -top-16 -left-8 font-serif text-[12rem] text-accent/10 leading-none">"</div>
            <p className="font-serif text-3xl md:text-4xl font-light leading-[1.6] italic text-background relative z-10">
              Scarlett got me in right away for birth control. She made the process so easy! I had no idea what I wanted and she showed me all the options and answered all my questions! I will definitely be coming back! Scarlett is the best!
            </p>
            <footer className="text-[11px] tracking-[0.3em] uppercase text-background/40 font-light flex items-center gap-4">
              <div className="w-8 h-px bg-accent/40" />
              Maria R., Age 24
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-32 md:py-48 px-8 md:px-16 text-center bg-background relative z-20 border-b border-foreground/10">
        <motion.div 
          className="max-w-4xl mx-auto space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="font-serif text-6xl md:text-8xl font-light text-foreground">Begin Your Journey</motion.h2>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-foreground/60 font-light leading-[1.8] max-w-3xl mx-auto">
            We are currently accepting a limited number of new patients. Request a consultation to discover if the SheRises approach is right for you.
          </motion.p>
          <motion.div variants={fadeUp} className="pt-12">
            <a
              href="mailto:hello@sheriseshealth.com"
              className="group relative inline-flex items-center justify-center px-16 py-6 text-[11px] tracking-[0.3em] uppercase text-foreground border border-foreground/20 hover:border-foreground/50 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-foreground translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 flex items-center gap-6 group-hover:text-background transition-colors duration-700">
                Request a Consultation
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 md:px-16 text-[11px] tracking-[0.3em] uppercase text-foreground/40 font-light bg-background relative z-20">
        <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="font-serif text-2xl normal-case text-foreground tracking-widest">
            SheRises
          </div>
          <div className="flex gap-16">
            <a href="mailto:hello@sheriseshealth.com" className="hover:text-foreground transition-colors duration-500">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors duration-500">Location</a>
            <a href="#" className="hover:text-foreground transition-colors duration-500">Privacy</a>
          </div>
          <div>&copy; {new Date().getFullYear()} SheRises Health</div>
        </div>
      </footer>

    </div>
  );
}