import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import generationsOfCare from "@assets/generations_of_care_1776802252403.png";
import sheRisesLogo from "@assets/LOGO_with_vertical_list_transparent_1776884062361.png";
import srMonogram from "@assets/SR_Monogram_1776893310482.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { SheRisesDifference, SystemsSection } from "@/components/ClinicalFrameworkSections";
import { FiveSystemsDiagram } from "@/components/FiveSystemsDiagram";

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
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background">
      {/* Navigation */}
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
              className="w-full h-full object-contain object-bottom opacity-95 brightness-110"
            />
            <div className="absolute inset-0 bg-background/40" />
          </motion.div>
        </div>

        <motion.div
          className="absolute -top-6 md:-top-8 left-[calc(50%-1.25rem)] -translate-x-1/2 z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="relative">
            <img
              src={sheRisesLogo}
              alt="SheRises Women's Health — Hormones, Metabolic, Reproductive"
              className="block w-[280px] sm:w-[320px] md:w-[380px] lg:w-[440px] xl:w-[480px] h-auto select-none"
              style={{ filter: "brightness(0.78) saturate(1.25) contrast(1.05)" }}
              draggable={false}
            />
          </motion.div>
        </motion.div>

        <nav
          className="hidden md:flex absolute left-8 lg:left-16 top-[68%] -translate-y-1/2 z-20 flex-col gap-8 text-[13px] tracking-[0.32em] uppercase text-primary items-start"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
        >
          <a href="#philosophy" className="hover:text-accent transition-colors duration-500">The Philosophy</a>
          <a href="#systems" className="hover:text-accent transition-colors duration-500">The Framework</a>
          <a href="#care-stages" className="hover:text-accent transition-colors duration-500">Who We See</a>
          <a href="#systems" className="hover:text-accent transition-colors duration-500">What We Treat</a>
        </nav>

        <nav
          className="hidden md:flex absolute right-8 lg:right-16 top-[68%] -translate-y-1/2 z-20 flex-col gap-8 text-[13px] tracking-[0.32em] uppercase text-primary items-end text-right"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
        >
          <a href="#provider" className="hover:text-accent transition-colors duration-500">Meet Scarlett Grandy</a>
          <a href="#book" className="group">
            <span className="border-b border-transparent group-hover:border-accent transition-colors pb-1">Inquire</span>
          </a>
          <a href="#testimonials" className="hover:text-accent transition-colors duration-500">Testimonials</a>
        </nav>

        <nav className="md:hidden absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-6 px-6 py-6 text-primary text-[10px] tracking-[0.28em] uppercase flex-wrap" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>
          <a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a>
          <a href="#systems" className="hover:text-accent transition-colors">Framework</a>
          <a href="#care-stages" className="hover:text-accent transition-colors">Who We See</a>
          <a href="#provider" className="hover:text-accent transition-colors">Scarlett</a>
          <a href="#book" className="hover:text-accent transition-colors">Inquire</a>
        </nav>

      </section>

      {/* CTA Button */}
      <div className="bg-background relative z-20 flex justify-center py-12">
        <a
          href="#book"
          className="group relative inline-flex items-center justify-center px-12 py-6 text-[11px] tracking-[0.3em] uppercase text-primary border border-[#E5C8C0] transition-all duration-700 overflow-hidden"
          style={{ backgroundColor: "#F0DAD4" }}
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
          <span>ISSWSH Member</span>
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
            className="max-w-7xl mx-auto"
          >
            <p className="text-accent text-[11px] font-light tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              The SheRises Framework
            </p>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-7xl mx-auto italic text-accent text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] text-left mb-16 md:mb-20"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Reimagining Women's Healthcare
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-24 md:mb-32 max-w-7xl mx-auto grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start"
          >
            <div className="max-w-md lg:pt-4">
              <SheRisesDifference />
            </div>
            <div className="w-full">
              <FiveSystemsDiagram />
            </div>
          </motion.div>

        </div>
        <SystemsSection />
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
              The SheRises Philosophy
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extralight italic leading-[1.15] text-foreground text-center tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Medical practice that <span className="text-accent">listens</span>, investigates,<br/>and <span className="text-accent">restores</span>.
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
                We look beyond basic labs. Your root-cause is often hidden in your story. We listen and find the answer your body already knows.
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
                Your body wants to be in balance. At She Rises, we build a customized treatment plan to reverse disease and restore your optimal health.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Care Stages */}
      <section id="care-stages" className="py-32 md:py-48 px-8 md:px-16 max-w-[100rem] mx-auto relative z-20 bg-background overflow-hidden">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-accent text-[11px] font-light tracking-[0.3em] uppercase mb-12 md:mb-16"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Who we see and what we treat at She Rises
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative">
          {[
            {
              num: "01",
              title: "Adolescent &\u00A0Young Adult Years",
              intro: "Care for younger patients is individualized, educational, and supportive.",
              tone: "ivory",
              items: [
                "First gynecologic visits and education",
                "Menstrual concerns — irregular, painful, or heavy cycles",
                "Acne and early hormonal imbalance evaluation",
                "Contraceptive counseling and initiation",
                "STI screening and sexual health education",
                "Body literacy and reproductive health guidance",
              ],
            },
            {
              num: "02",
              title: "Family Planning &\u00A0Reproductive Years",
              intro: "Practical, informed support for conception and pregnancy prevention in alignment with your personal health preferences.",
              tone: "forest",
              items: [
                "Reproductive life planning",
                "Preconception counseling and optimization",
                "Pregnancy prevention and spacing of pregnancies",
                "Full menu of contraceptive offerings — pill, patch, ring, IUD, implant, injection",
                "Natural family planning and cycle tracking education",
              ],
            },
            {
              num: "03",
              title: "Hormone and Metabolic Concerns",
              intro: "Addressing root causes rather than isolated symptoms.",
              tone: "ivory",
              items: [
                "Evaluation and treatment of hormone imbalance",
                "PCOS and androgen excess management",
                "Insulin resistance and metabolic dysfunction care",
                "Weight management with a medical and metabolic focus",
                "Perimenopause and menopause care",
                "Fatigue, mood, sleep disruption, and libido concerns",
              ],
            },
            {
              num: "04",
              title: "Sexual Health and Function",
              intro: "Support for intimacy, comfort, and sexual wellbeing across life stages.",
              tone: "forest",
              items: [
                "Low desire, arousal concerns, and orgasm changes",
                "Pain with sex, vaginal dryness, and pelvic discomfort",
                "Sexual health screening and counseling",
                "Perimenopause, menopause, and postpartum related sexual changes",
                "Relationship-centered communication and support",
                "Infection management and health promotion",
              ],
            },
          ].map((stage, i) => {
            const isForest = i === 1 || i === 2;
            return (
              <motion.div
                key={stage.num}
                className={`group relative rounded-3xl p-10 lg:p-12 overflow-hidden border transition-all duration-500 hover:-translate-y-1 ${
                  isForest
                    ? "bg-[#F0DAD4] text-foreground border-[#B5736A]/25 hover:border-accent"
                    : "bg-secondary/40 text-foreground border-foreground/10 hover:border-accent/60 hover:bg-secondary/60"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.15 }}
              >
                <div
                  className={`absolute top-6 right-8 font-serif italic text-[8rem] leading-none pointer-events-none select-none ${
                    isForest ? "text-accent/30" : "text-accent/15"
                  }`}
                >
                  {stage.num}
                </div>

                <div className="relative">
                  <div className={`w-10 h-px mb-8 ${isForest ? "bg-accent" : "bg-accent"}`} />
                  <h3 className={`font-serif text-3xl lg:text-[2rem] leading-[1.15] font-light mb-6 text-foreground`}>
                    {stage.title}
                  </h3>
                  <p className={`text-base leading-[1.7] font-light italic mb-10 max-w-sm text-foreground/65`}>
                    {stage.intro}
                  </p>

                  <ul className={`space-y-3.5 text-[13px] leading-[1.55] font-light text-foreground/80`}>
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className={`w-1 h-1 mt-[0.55rem] rounded-full shrink-0 ${isForest ? "bg-accent" : "bg-accent"}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
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
              src={`${BASE}images/scarlett-headshot.png?v=2`}
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
      <section id="testimonials" className="bg-foreground py-32 md:py-48 px-8 md:px-16 relative z-20 overflow-hidden">
        {/* Decorative blurred orbs */}
        <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[32rem] h-[32rem] rounded-full bg-background/5 blur-3xl pointer-events-none" />

        <div className="max-w-[100rem] mx-auto relative">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-light text-background mb-20 md:mb-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Women Share:
          </motion.h2>

          <div className="grid md:grid-cols-12 gap-8 md:gap-10 relative">
            {/* Sarah — large ivory bubble, top-left */}
            <motion.blockquote
              className="md:col-span-7 bg-background text-foreground rounded-[3rem] p-10 md:p-14 relative shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="font-serif text-[7rem] text-accent/30 leading-[0.5] mb-2">"</div>
              <p className="font-serif text-xl md:text-2xl font-light leading-[1.6] italic">
                For the first time, I felt completely heard by a provider. I was having 6–10 hot flashes an hour and I just didn't know how I would live. Scarlett got me fixed up and I'm feeling better than ever. My energy is back! I'm exercising and losing weight! My marriage even got better! AND no more hot flashes!
              </p>
              <footer className="mt-10 text-[11px] tracking-[0.3em] uppercase text-foreground/50 font-light flex items-center gap-4">
                <div className="w-8 h-px bg-accent" />
                Sarah M., Age 55
              </footer>
            </motion.blockquote>

            {/* Elena — gold bubble, top-right, offset down */}
            <motion.blockquote
              className="md:col-span-5 md:mt-16 bg-accent text-background rounded-[3rem] p-10 md:p-12 relative shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.15 }}
            >
              <div className="font-serif text-[7rem] text-background/30 leading-[0.5] mb-2">"</div>
              <p className="font-serif text-xl md:text-2xl font-light leading-[1.6] italic">
                I struggled with PCOS and was told I would never get pregnant. We welcomed our first child into the world last year and I believe we couldn't have done it without Scarlett. She helped me lose weight and start ovulating again. Her approach really changed my life.
              </p>
              <footer className="mt-10 text-[11px] tracking-[0.3em] uppercase text-background/70 font-light flex items-center gap-4">
                <div className="w-8 h-px bg-background/50" />
                Elena R., Age 32
              </footer>
            </motion.blockquote>

            {/* Maria — small outlined bubble, bottom-left, offset up */}
            <motion.blockquote
              className="md:col-span-5 md:-mt-8 bg-background/[0.04] text-background rounded-[3rem] p-10 md:p-12 relative border border-background/20 backdrop-blur-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              <div className="font-serif text-[7rem] text-accent/50 leading-[0.5] mb-2">"</div>
              <p className="font-serif text-xl md:text-2xl font-light leading-[1.6] italic">
                Scarlett got me in right away for birth control. She made the process so easy! I had no idea what I wanted and she showed me all the options and answered all my questions! I will definitely be coming back! Scarlett is the best!
              </p>
              <footer className="mt-10 text-[11px] tracking-[0.3em] uppercase text-background/60 font-light flex items-center gap-4">
                <div className="w-8 h-px bg-accent" />
                Maria R., Age 24
              </footer>
            </motion.blockquote>

            {/* Veronica — large ivory bubble, bottom-right */}
            <motion.blockquote
              className="md:col-span-7 md:mt-12 bg-background text-foreground rounded-[3rem] p-10 md:p-14 relative shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.45 }}
            >
              <div className="font-serif text-[7rem] text-accent/30 leading-[0.5] mb-2">"</div>
              <p className="font-serif text-xl md:text-2xl font-light leading-[1.6] italic">
                I had quietly accepted that painful intercourse was just part of getting older. It affected my confidence, my relationship, and my entire outlook on the years ahead of me. I had brought it up with doctors before and was told to "use lubricant" and that it was just menopause. Scarlett understood what was happening. It took several months but the pain improved and now is totally gone. I have a thriving, healthy sex-life now, no pain at all. Beyond that, I feel like myself again.
              </p>
              <footer className="mt-10 text-[11px] tracking-[0.3em] uppercase text-foreground/50 font-light flex items-center gap-4">
                <div className="w-8 h-px bg-accent" />
                Veronica H., Age 57
              </footer>
            </motion.blockquote>
          </div>
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
          <motion.h2 variants={fadeUp} className="font-serif italic text-6xl md:text-8xl font-light text-accent" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Begin Your Journey</motion.h2>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-foreground/60 font-light leading-[1.8] max-w-3xl mx-auto">
            We are currently accepting new patients. Request a consultation to discover if She Rises Women's Health is right for you.
          </motion.p>
          <motion.div variants={fadeUp} className="pt-12">
            <a
              href="mailto:hello@sheriseshealth.com"
              className="group relative inline-flex items-center justify-center px-16 py-6 text-[11px] tracking-[0.3em] uppercase text-foreground border border-[#E5C8C0] transition-all duration-700 overflow-hidden"
              style={{ backgroundColor: "#F0DAD4" }}
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
          <a href="#top" className="flex items-center normal-case shrink-0">
            <img
              src={srMonogram}
              alt="SheRises Women's Health"
              className="h-32 md:h-40 lg:h-48 w-auto select-none"
              style={{
                mixBlendMode: "multiply",
                WebkitMaskImage:
                  "radial-gradient(ellipse 60% 60% at 50% 50%, black 55%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 60% 60% at 50% 50%, black 55%, transparent 90%)",
              }}
              draggable={false}
            />
          </a>
          <div className="flex gap-16">
            <a href="mailto:hello@sheriseshealth.com" className="hover:text-foreground transition-colors duration-500">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors duration-500">Location</a>
            <a href="#" className="hover:text-foreground transition-colors duration-500">Privacy</a>
          </div>
          <div>&copy; {new Date().getFullYear()} SheRises Women's Health</div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-50 group inline-flex items-center gap-3 px-5 py-3 bg-background/90 backdrop-blur border border-accent/40 text-accent text-[10px] tracking-[0.3em] uppercase shadow-lg hover:bg-accent hover:text-background transition-all duration-500 ${
          showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
      >
        <ArrowUp className="w-3.5 h-3.5" />
        <span>Back to Top</span>
      </button>

    </div>
  );
}