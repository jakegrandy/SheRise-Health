import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Heart,
  Menu,
  Microscope,
  ShieldCheck,
  Star,
  User,
  X,
  XCircle,
  ChevronDown,
  Baby,
  Activity,
} from "lucide-react";

const FONT_SERIF = { fontFamily: "'Playfair Display', serif" };
const FONT_SANS = { fontFamily: "'Outfit', sans-serif" };

const NAV_LINKS = [
  { name: "Expertise", href: "#expertise" },
  { name: "Approach", href: "#approach" },
  { name: "Specialties", href: "#services" },
  { name: "Outcomes", href: "#outcomes" },
  { name: "FAQ", href: "#faq" },
];

const SERVICES = [
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Hormone Health",
    desc: "Precision hormone balancing across all life stages — perimenopause, menopause, and complex endocrine disorders.",
    tags: ["BHRT", "Perimenopause", "Adrenal"],
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Metabolic Health",
    desc: "Reversal protocols for insulin resistance, PCOS, prediabetes, thyroid dysfunction, and weight dysregulation.",
    tags: ["Insulin Resistance", "PCOS", "Thyroid"],
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Sexual Health",
    desc: "Trauma-informed, evidence-based care for sexual health, pain, and intimacy concerns handled with profound sensitivity.",
    tags: ["Pelvic Pain", "EAGALA", "Trauma-Informed"],
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Fertility",
    desc: "Comprehensive reproductive life planning from contraception counseling and fertility preservation to infertility support.",
    tags: ["Contraception", "Fertility Planning", "Infertility"],
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Aging Well",
    desc: "Proactive longevity strategies addressing bone health, cardiovascular risk, cognitive vitality, and cellular optimization.",
    tags: ["Longevity", "Bone Health", "Cognition"],
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Primary Women's Health",
    desc: "Full-spectrum primary care anchored in whole-body understanding — annual wellness, preventive screening, and acute care.",
    tags: ["Preventive Care", "Wellness", "Annual Exams"],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "For 5 years I was told my exhaustion and weight gain were just 'getting older.' Scarlett ran panels no one else had. Within 3 months of her metabolic protocol, I reversed my insulin resistance and got my life back.",
    author: "Sarah M.",
    age: "48",
    outcome: "Reversed Pre-diabetes & Hormonal Imbalance",
  },
  {
    quote:
      "As a patient with medical trauma, I've avoided doctors for years. Scarlett's approach is entirely different. Her clinical brilliance is matched only by her profound empathy. She is exactly what women's healthcare should be.",
    author: "Elena R.",
    age: "35",
    outcome: "Resolved Chronic Pelvic Pain",
  },
  {
    quote:
      "I had seen seven different doctors over four years. No one could explain my symptoms. Scarlett identified the cascade within our first appointment. I finally feel like myself again.",
    author: "Meredith T.",
    age: "42",
    outcome: "Hormone & Thyroid Optimization",
  },
  {
    quote:
      "I came in for weight management and left with an entirely new understanding of my health. Scarlett treated me as a complete person, not a collection of symptoms. Life-changing.",
    author: "Diana L.",
    age: "51",
    outcome: "Metabolic Reversal & Menopause Management",
  },
];

const FAQ_ITEMS = [
  {
    q: "What makes SheRises different from a conventional OB/GYN?",
    a: "Conventional visits are typically 10-15 minutes and focused on managing symptoms with standardized prescriptions. Our consultations run 60-90 minutes and investigate the underlying metabolic and hormonal systems driving your symptoms. We optimize for 'optimal' ranges — not just 'normal' — and treat your body as an interconnected whole.",
  },
  {
    q: "Do you accept insurance?",
    a: "We operate as a fee-for-service practice, which allows us to provide the depth of care you deserve without the constraints of insurance billing. Many patients find that the comprehensive care they receive here replaces multiple specialist visits. We are happy to provide detailed receipts for Health Savings Account (HSA) reimbursement.",
  },
  {
    q: "What should I expect at my first consultation?",
    a: "Your initial visit is a deep-dive diagnostic conversation — 60 to 90 minutes. We review your complete health history, current symptoms, prior lab work, and goals. Depending on your case, we will order comprehensive hormone, metabolic, and nutritional panels that go far beyond standard annual labs. A personalized protocol is designed around your findings.",
  },
  {
    q: "Do you see patients remotely or only in person?",
    a: "We offer both in-person appointments at our Northwest Arkansas location and telehealth consultations for established patients within Arkansas. Initial consultations are preferred in person for the most thorough assessment.",
  },
  {
    q: "Is this practice right for me if I am in my 30s?",
    a: "Absolutely. Metabolic and hormonal dysfunction does not wait for midlife. PCOS, insulin resistance, thyroid disorders, fertility challenges, and hormonal imbalances are common in the 20s and 30s and are far more responsive to treatment when addressed early. Many of our most transformative patient outcomes are with women under 40.",
  },
];

const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}) => {
  const initial: Record<string, number> = { opacity: 0 };
  if (direction === "up") initial.y = 40;
  if (direction === "down") initial.y = -40;
  if (direction === "left") initial.x = 40;
  if (direction === "right") initial.x = -40;

  return (
    <motion.div
      initial={initial}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FCFBF9]/95 backdrop-blur-md border-b border-[#B89047]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between" style={FONT_SANS}>
        <a href="#" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-sm bg-[#132A24] flex items-center justify-center text-[#E8D5A5]"
            style={FONT_SERIF}
          >
            <span className="text-xl leading-none font-medium">S</span>
          </div>
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-[#132A24]">
            SheRises Health
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#132A24]">
          {NAV_LINKS.map((l) => (
            <a key={l.name} href={l.href} className="hover:text-[#B89047] transition-colors">
              {l.name}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 bg-[#132A24] text-[#F4F1EB] px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-[#1B3B33] transition-colors border border-transparent hover:border-[#B89047]/30"
        >
          Request Consultation
        </a>

        <button
          className="md:hidden text-[#132A24]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#FCFBF9] border-t border-[#B89047]/20"
          >
            <div className="flex flex-col px-6 py-4 gap-4" style={FONT_SANS}>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[#132A24] font-medium py-2 border-b border-[#132A24]/10 hover:text-[#B89047] transition-colors"
                >
                  {l.name}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 bg-[#132A24] text-[#F4F1EB] px-6 py-3 text-sm font-medium tracking-wide text-center"
              >
                Request Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 pb-28 overflow-hidden bg-[#F4F1EB]">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "url(/images/texture-bg.png)", backgroundSize: "cover" }}
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10 pt-8">
            <FadeIn direction="up">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#B89047] text-[#B89047] text-xs font-semibold tracking-widest uppercase mb-8 bg-[#FCFBF9]"
                style={FONT_SANS}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Northwest Arkansas' Leading Specialist</span>
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.08] text-[#132A24] mb-6"
                style={FONT_SERIF}
              >
                Reversal of metabolic dysfunction is{" "}
                <span className="italic text-[#B89047]">possible.</span>
              </h1>

              <p
                className="text-lg md:text-xl text-[#4B5563] mb-10 max-w-xl font-light leading-relaxed"
                style={FONT_SANS}
              >
                Led by Scarlett Grandy, CNM, WHNP-BC — combining 16 years of clinical leadership
                with root-cause medicine to solve complex hormone and metabolic challenges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4" style={FONT_SANS}>
                <a
                  href="#cta"
                  className="bg-[#132A24] text-[#F4F1EB] px-8 py-4 text-base font-medium tracking-wide hover:bg-[#1B3B33] transition-colors flex items-center justify-center gap-2"
                >
                  Book a Clinical Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#outcomes"
                  className="bg-transparent text-[#132A24] border border-[#132A24] px-8 py-4 text-base font-medium tracking-wide hover:bg-[#132A24] hover:text-[#F4F1EB] transition-colors text-center"
                >
                  View Clinical Outcomes
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#B89047] translate-x-4 translate-y-4" />
                <img
                  src="/images/scarlett-authority.png"
                  alt="Scarlett Grandy, CNM, WHNP-BC"
                  className="relative z-10 w-full h-[580px] object-cover object-top"
                />
                <div className="absolute -left-8 lg:-left-12 bottom-10 z-20 bg-[#132A24] p-5 lg:p-6 shadow-2xl border border-[#B89047]/30 max-w-[260px]">
                  <h3 className="text-[#F4F1EB] text-lg font-medium mb-1" style={FONT_SERIF}>
                    Scarlett Grandy
                  </h3>
                  <p className="text-[#B89047] text-sm font-semibold tracking-wide mb-3" style={FONT_SANS}>
                    CNM, WHNP-BC
                  </p>
                  <p className="text-[#F4F1EB]/75 text-xs leading-relaxed" style={FONT_SANS}>
                    Board Certified Women's Health Nurse Practitioner. 16 years specializing in
                    whole-health methodology.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialsBar() {
  const certs = [
    "The Menopause Society",
    "ISSWSH Member",
    "EAGALA Certified",
    "Board Certified WHNP",
    "16 Years Clinical Leadership",
  ];
  return (
    <section className="bg-[#132A24] py-10 border-y border-[#B89047]/20">
      <div className="max-w-7xl mx-auto px-6" style={FONT_SANS}>
        <p className="text-center text-[#E8D5A5] text-xs font-semibold tracking-widest uppercase mb-7">
          Professional Memberships & Certifications
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certs.map((cert) => (
            <div key={cert} className="flex items-center gap-2.5 text-[#F4F1EB]">
              <ShieldCheck className="w-5 h-5 text-[#B89047] shrink-0" />
              <span className="font-medium tracking-wide text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 md:py-36 bg-[#FCFBF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-6 leading-tight" style={FONT_SERIF}>
                Root-Cause Medicine,{" "}
                <span className="italic text-[#B89047]">Executed with Precision.</span>
              </h2>
              <p className="text-lg text-[#4B5563] mb-10 font-light leading-relaxed" style={FONT_SANS}>
                Conventional medicine treats symptoms in isolation. We treat the system. By
                diagnosing underlying metabolic and hormonal dysfunctions, we design targeted
                protocols to reverse disease states — not just manage them indefinitely.
              </p>

              <div className="space-y-7" style={FONT_SANS}>
                {[
                  {
                    title: "Comprehensive Diagnostics",
                    desc: "Advanced hormone panels and metabolic work-ups that go far beyond standard annual labs.",
                  },
                  {
                    title: "Systems-Level Analysis",
                    desc: "Understanding how your thyroid, adrenal function, sex hormones, and metabolism interact and cascade.",
                  },
                  {
                    title: "Evidence-Based Protocols",
                    desc: "Targeted interventions using bioidentical hormones, precision supplementation, and metabolic repair strategies.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-0.5 shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#132A24]/8 border border-[#132A24]/10 flex items-center justify-center text-[#B89047]">
                        <span className="text-sm font-bold text-[#132A24]">{i + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[#132A24] font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <img
              src="/images/clinic-interior.png"
              alt="SheRises Health clinical environment"
              className="w-full h-[620px] object-cover shadow-lg"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContrastSection() {
  return (
    <section id="approach" className="py-24 md:py-36 bg-[#132A24] text-[#F4F1EB]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={FONT_SERIF}>
              The Standard of Care vs.{" "}
              <span className="italic text-[#B89047]">The SheRises Standard</span>
            </h2>
            <p className="text-lg text-[#F4F1EB]/65 font-light max-w-2xl mx-auto" style={FONT_SANS}>
              If you have felt dismissed, rushed, or told your labs are "normal" despite feeling
              terrible — you are not crazy. The conventional model is broken. We built an
              alternative.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="grid md:grid-cols-2 gap-px bg-[#B89047]/25 border border-[#B89047]/25" style={FONT_SANS}>
            <div className="bg-[#132A24] p-8 md:p-12">
              <h3 className="text-lg font-semibold mb-8 text-[#F4F1EB]/45 flex items-center gap-3">
                <XCircle className="w-5 h-5" />
                Conventional OB/GYN
              </h3>
              <ul className="space-y-5">
                {[
                  "10-minute appointments",
                  "Treats symptoms with standardized prescriptions",
                  "Dismisses fatigue and weight gain as 'normal aging'",
                  "Uses narrow reference ranges for 'normal' labs",
                  "Siloed care — hormones separate from metabolism",
                  "Reactive, disease-management model",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[#F4F1EB]/65">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F4F1EB]/25 mt-2 shrink-0" />
                    <span className="font-light text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1B3B33] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.04] pointer-events-none">
                <ShieldCheck className="w-64 h-64" />
              </div>
              <h3 className="text-lg font-semibold mb-8 text-[#B89047] flex items-center gap-3 relative z-10">
                <CheckCircle2 className="w-5 h-5" />
                The SheRises Method
              </h3>
              <ul className="space-y-5 relative z-10">
                {[
                  "60–90 minute deep-dive consultations",
                  "Investigates and repairs root metabolic dysfunction",
                  "Validates your symptoms — aging does not have to feel bad",
                  "Optimizes for 'optimal' ranges, not just 'normal'",
                  "Whole-systems approach across all body systems",
                  "Proactive, reversal-focused medicine",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[#F4F1EB]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B89047] mt-2 shrink-0" />
                    <span className="font-light text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-36 bg-[#F4F1EB]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-4" style={FONT_SERIF}>
                Clinical Specialties
              </h2>
              <p className="text-lg text-[#4B5563] font-light max-w-lg" style={FONT_SANS}>
                Targeted expertise for complex physiological challenges across every stage of a
                woman's life.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={FONT_SANS}>
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.07}>
              <div className="bg-[#FCFBF9] p-8 border border-[#132A24]/10 h-full hover:border-[#B89047] transition-colors group cursor-default flex flex-col">
                <div className="text-[#B89047] mb-5 transition-transform group-hover:scale-110 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-[#132A24] mb-3" style={FONT_SERIF}>
                  {service.title}
                </h3>
                <p className="text-[#4B5563] font-light mb-7 text-sm leading-relaxed flex-1">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium uppercase tracking-wider text-[#132A24] bg-[#F4F1EB] border border-[#132A24]/10 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProviderSection() {
  return (
    <section className="py-24 md:py-36 bg-[#FCFBF9] border-t border-[#132A24]/8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <img
                src="/images/scarlett-authority.png"
                alt="Scarlett Grandy, CNM, WHNP-BC"
                className="w-full max-w-md mx-auto lg:mx-0 h-[560px] object-cover object-top shadow-xl"
              />
              <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-[#B89047] p-5 shadow-xl">
                <p className="text-[#132A24] font-bold text-3xl" style={FONT_SERIF}>
                  16
                </p>
                <p className="text-[#132A24] text-xs font-semibold tracking-wide uppercase mt-1" style={FONT_SANS}>
                  Years of Clinical
                  <br />
                  Leadership
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={FONT_SANS}>
              <p className="text-[#B89047] text-xs font-semibold tracking-widest uppercase mb-4">
                Meet Your Provider
              </p>
              <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-6" style={FONT_SERIF}>
                Scarlett Grandy,{" "}
                <span className="text-[#B89047]">CNM, WHNP-BC</span>
              </h2>
              <p className="text-lg text-[#4B5563] font-light leading-relaxed mb-6">
                Scarlett has spent 16 years at the intersection of women's whole-health, bringing
                together the clinical rigor of board-certified women's health nursing with a
                root-cause philosophy that the conventional model rarely allows.
              </p>
              <p className="text-base text-[#4B5563] font-light leading-relaxed mb-10">
                Her specialized focus on hormone and metabolic health is rooted in a belief that
                women's symptoms are not a mystery to be managed — they are a system to be
                understood. As a Certified Nurse Midwife and Board Certified Women's Health Nurse
                Practitioner, Scarlett brings both the technical depth and the human presence that
                complex cases require.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  "The Menopause Society",
                  "ISSWSH Member",
                  "EAGALA Certified Specialist",
                  "Certified Nurse Midwife (CNM)",
                  "Board Certified WHNP-BC",
                  "Northwest Arkansas, NWA",
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-2 text-sm text-[#132A24]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B89047] shrink-0" />
                    <span className="font-medium">{cred}</span>
                  </div>
                ))}
              </div>

              <a
                href="#cta"
                className="inline-flex items-center gap-2 bg-[#132A24] text-[#F4F1EB] px-8 py-4 text-base font-medium tracking-wide hover:bg-[#1B3B33] transition-colors"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section id="outcomes" className="py-24 md:py-36 bg-[#F4F1EB]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-6" style={FONT_SERIF}>
              Clinical Outcomes
            </h2>
            <p className="text-lg text-[#4B5563] font-light max-w-2xl mx-auto" style={FONT_SANS}>
              Our metric is patient vitality. Hear from women who have reclaimed their health
              through root-cause protocols.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8" style={FONT_SANS}>
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative p-8 md:p-10 bg-[#FCFBF9] border border-[#132A24]/8 h-full flex flex-col">
                <Star className="absolute top-6 right-6 w-7 h-7 text-[#B89047]/20" />
                <p
                  className="text-[#132A24] mb-8 font-light leading-relaxed flex-1 text-base md:text-lg"
                  style={{ ...FONT_SERIF, fontStyle: "italic" }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-semibold text-[#132A24] uppercase tracking-wide text-xs mb-1">
                    {t.author}, {t.age}
                  </p>
                  <p className="text-[#B89047] text-sm font-medium">{t.outcome}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-36 bg-[#FCFBF9] border-t border-[#132A24]/8">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-4" style={FONT_SERIF}>
              Common Questions
            </h2>
            <p className="text-lg text-[#4B5563] font-light" style={FONT_SANS}>
              Understanding what to expect before you arrive.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-1" style={FONT_SANS}>
          {FAQ_ITEMS.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border border-[#132A24]/10 bg-[#F4F1EB]">
                <button
                  className="w-full flex items-start justify-between gap-4 text-left px-7 py-6"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-semibold text-[#132A24] text-sm md:text-base leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B89047] shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-7 text-[#4B5563] font-light text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[#132A24] text-[#F4F1EB] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "url(/images/texture-bg.png)", backgroundSize: "cover" }}
      />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight" style={FONT_SERIF}>
            Your health is not a mystery to be managed. It is a system to be optimized.
          </h2>
          <p className="text-xl text-[#F4F1EB]/75 font-light mb-12 max-w-2xl mx-auto" style={FONT_SANS}>
            Schedule a comprehensive consultation with Scarlett Grandy to begin your diagnostic
            process and understand your body at a new level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5" style={FONT_SANS}>
            <a
              href="mailto:hello@sheriseshealth.com"
              className="bg-[#B89047] text-[#132A24] px-10 py-5 text-base font-semibold tracking-wide hover:bg-[#C9A25E] transition-colors"
            >
              Book Your Consultation
            </a>
            <a
              href="#faq"
              className="bg-transparent text-[#F4F1EB] border border-[#F4F1EB]/30 px-10 py-5 text-base font-medium tracking-wide hover:bg-[#F4F1EB]/8 transition-colors flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5" />
              Common Questions
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f2922] text-[#F4F1EB]/55 py-12 border-t border-[#F4F1EB]/8" style={FONT_SANS}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div className="flex items-center gap-2.5 text-[#F4F1EB]">
          <div
            className="w-6 h-6 rounded-sm bg-[#B89047] flex items-center justify-center text-[#132A24]"
            style={FONT_SERIF}
          >
            <span className="text-sm font-bold leading-none">S</span>
          </div>
          <span className="font-semibold tracking-[0.12em] uppercase text-sm">SheRises Health</span>
        </div>

        <div className="flex gap-8">
          {["Patient Portal", "Location", "Privacy Practices"].map((l) => (
            <a key={l} href="#" className="hover:text-[#B89047] transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div>&copy; {new Date().getFullYear()} SheRises Health. Northwest Arkansas.</div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#132A24]" style={FONT_SANS}>
      <Nav />
      <Hero />
      <CredentialsBar />
      <ExpertiseSection />
      <ContrastSection />
      <ServicesSection />
      <ProviderSection />
      <OutcomesSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
