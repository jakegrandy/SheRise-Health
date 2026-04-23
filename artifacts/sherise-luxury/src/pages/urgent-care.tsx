import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Video, MapPin, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import sheRisesLogo from "@assets/SR_Logo_without_services_transparent.png";
import srMonogram from "@assets/SR_Monogram_1776893310482.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
};

const reasons = [
  "Burning or pain with urination (possible UTI)",
  "Vaginal itching, irritation, or discomfort",
  "Unusual vaginal discharge or odor",
  "Strong or unusual urine odor",
  "Missed or irregular menstrual cycle",
  "Need for a pregnancy test",
  "Recent unprotected sex",
  "Need for STI testing or urgent screening",
  "Questions about or need for emergency contraception",
];

export default function UrgentCare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background">
      {/* Top bar */}
      <header className="bg-background relative z-30 border-b border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={sheRisesLogo}
              alt="SheRises Women's Health"
              className="block w-[140px] md:w-[170px] h-auto select-none"
              draggable={false}
            />
          </Link>
          <Link
            href="/"
            className="hidden md:inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-foreground/60 hover:text-accent transition-colors duration-500 group"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
          >
            <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform duration-500" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-background relative overflow-hidden">
        <div className="absolute top-0 -right-32 w-[36rem] h-[36rem] rounded-full bg-accent/[0.06] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-accent/[0.04] blur-3xl pointer-events-none" />
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-32 pb-20 md:pb-28 relative">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.p
              variants={fadeUp}
              className="text-accent text-[11px] font-light tracking-[0.32em] uppercase mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Urgent Care for Women
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground mb-10 whitespace-nowrap"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              When something feels off,<br />
              <span className="italic text-accent">you don't need to wait.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl leading-[1.55] text-foreground/75 font-light max-w-3xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              We offer same-day care for common and time-sensitive women's health concerns—without
              the long waits. Choose what works best for you: come in or connect from home.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Two Care Options */}
      <section className="bg-[#FAF6EE] relative z-10">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-36">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Virtual */}
            <motion.div
              variants={fadeUp}
              className="relative bg-background rounded-[2rem] p-10 md:p-14 border border-foreground/[0.06] shadow-[0_30px_80px_-40px_rgba(19,42,36,0.25)] overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/[0.05] rounded-full blur-2xl -translate-y-12 translate-x-12 transition-transform duration-700 group-hover:scale-110" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-8">
                  <Video className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <p
                  className="text-[10px] tracking-[0.32em] uppercase text-accent mb-4"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Option One
                </p>
                <h2
                  className="font-light text-3xl md:text-4xl text-foreground mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Virtual Remote Visits
                </h2>
                <p
                  className="italic text-accent text-lg md:text-xl mb-6 font-light"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Private, convenient care—wherever you are.
                </p>
                <p className="text-foreground/70 leading-[1.7] text-base md:text-lg font-light">
                  Connect with us from home for fast evaluation, treatment, and prescriptions
                  when appropriate. Ideal for symptoms that need attention but don't require an
                  in-person exam.
                </p>
              </div>
            </motion.div>

            {/* Walk-In */}
            <motion.div
              variants={fadeUp}
              className="relative bg-background rounded-[2rem] p-10 md:p-14 border border-foreground/[0.06] shadow-[0_30px_80px_-40px_rgba(19,42,36,0.25)] overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/[0.05] rounded-full blur-2xl -translate-y-12 translate-x-12 transition-transform duration-700 group-hover:scale-110" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-8">
                  <MapPin className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <p
                  className="text-[10px] tracking-[0.32em] uppercase text-accent mb-4"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Option Two
                </p>
                <h2
                  className="font-light text-3xl md:text-4xl text-foreground mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Walk-In Urgent Appointments
                </h2>
                <p
                  className="italic text-accent text-lg md:text-xl mb-6 font-light"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  In-person care, on your schedule.
                </p>
                <p className="text-foreground/70 leading-[1.7] text-base md:text-lg font-light">
                  Stop in for same-day evaluation when you need a physical exam, testing, or
                  immediate reassurance. We keep space available each day for urgent needs.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Common Reasons */}
      <section className="bg-secondary relative z-10">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-36">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24"
          >
            <motion.div variants={fadeUp}>
              <p
                className="text-accent text-[11px] font-light tracking-[0.32em] uppercase mb-6"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                When To Reach Out
              </p>
              <h2
                className="font-light text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Common reasons<br />
                <span className="italic text-accent">to be seen.</span>
              </h2>
              <div className="w-16 h-px bg-accent/40 mb-8" />
              <p
                className="text-lg md:text-xl text-foreground/70 leading-[1.6] font-light"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                If you're experiencing any of the following, we can help.
              </p>
            </motion.div>

            <motion.ul variants={fadeUp} className="space-y-1">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="group flex items-start gap-5 py-5 border-b border-foreground/10 last:border-b-0"
                >
                  <span className="mt-1.5 inline-flex items-center justify-center w-6 h-6 rounded-full border border-accent/40 text-accent shrink-0 group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                    <Check className="w-3 h-3" strokeWidth={2} />
                  </span>
                  <span className="text-foreground/85 text-lg md:text-xl font-light leading-[1.5]">
                    {reason}
                  </span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[#FAF6EE] relative z-10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-36 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-accent text-[11px] font-light tracking-[0.32em] uppercase mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What to Expect
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-light text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-10"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Thoughtful, thorough care—<br />
              <span className="italic text-accent">focused on getting you answers.</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-px bg-accent/40 mx-auto mb-10" />
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-foreground/75 leading-[1.65] font-light max-w-3xl mx-auto"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              You'll receive thoughtful, thorough care focused on getting answers
              quickly—without dismissing your concerns. When needed, we offer testing,
              treatment, and clear next steps so you can move forward with confidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-background relative z-10 overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[32rem] h-[32rem] rounded-full bg-background/[0.04] blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-36 text-center relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-light text-4xl md:text-5xl lg:text-6xl text-background leading-[1.15] mb-10"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Need to be seen today?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-background/70 leading-[1.6] font-light mb-12 max-w-2xl mx-auto"
            >
              Reach out to schedule a virtual visit or walk-in appointment. Our team will help
              you find the fastest path to care.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/#book"
                className="group relative inline-flex items-center gap-4 px-12 py-6 text-foreground text-[11px] tracking-[0.3em] uppercase overflow-hidden border border-background/30 transition-all duration-700"
                style={{ backgroundColor: "#F0DAD4" }}
              >
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 flex items-center gap-4 group-hover:text-background transition-colors duration-700">
                  Request an Appointment
                  <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-700" />
                </span>
              </Link>
              <Link
                href="/"
                className="text-background/60 hover:text-background text-[11px] tracking-[0.3em] uppercase transition-colors duration-500 inline-flex items-center gap-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 md:px-16 text-[11px] tracking-[0.3em] uppercase text-foreground/40 font-light bg-[#FAF6EE] relative z-10">
        <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <Link href="/" className="flex items-center normal-case shrink-0">
            <img
              src={srMonogram}
              alt="SR"
              className="h-32 md:h-40 w-auto select-none"
              draggable={false}
              style={{
                mixBlendMode: "multiply",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              }}
            />
          </Link>
          <div>© {new Date().getFullYear()} SheRises Women's Health</div>
        </div>
      </footer>
    </div>
  );
}
