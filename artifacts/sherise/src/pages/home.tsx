import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  Clock,
  Menu,
  ShieldCheck,
  Star,
  X,
  XCircle,
  Waves,
  Flame,
  Moon,
  Leaf,
  Zap,
} from "lucide-react";

const FONT_SERIF = { fontFamily: "'Playfair Display', serif" };
const FONT_SANS = { fontFamily: "'Outfit', sans-serif" };

const NAV_LINKS = [
  { name: "The Model", href: "#model" },
  { name: "Systems", href: "#systems" },
  { name: "Approach", href: "#approach" },
  { name: "Outcomes", href: "#outcomes" },
  { name: "FAQ", href: "#faq" },
];

const FIVE_SYSTEMS = [
  {
    number: "01",
    icon: <Waves className="w-6 h-6" />,
    name: "Hormonal Regulation",
    definition:
      "The ovarian, adrenal, and thyroid axes do not operate independently — they form a cascading endocrine network. Dysfunction in one reliably disrupts the others. We map the entire axis.",
    subsystems: [
      "Estrogen & progesterone balance",
      "Adrenal cortisol and DHEA output",
      "Thyroid function (TSH, free T3, T4, reverse T3)",
      "Androgen levels and sensitivity",
      "HPAG axis communication",
    ],
    conditions: ["Perimenopause", "PCOS", "Adrenal dysregulation", "Thyroid disorders", "BHRT candidacy"],
  },
  {
    number: "02",
    icon: <Flame className="w-6 h-6" />,
    name: "Metabolic Function",
    definition:
      "Metabolism is more than weight. It governs cellular energy production, insulin sensitivity, inflammatory signaling, and body composition — all of which deteriorate silently until symptoms are undeniable.",
    subsystems: [
      "Insulin sensitivity and glucose regulation",
      "Body composition and adipose signaling",
      "Mitochondrial and cellular energy production",
      "Inflammatory markers and metabolic risk",
      "Lipid metabolism and cardiovascular health",
    ],
    conditions: ["Insulin resistance", "Prediabetes", "PCOS", "Weight dysregulation", "Metabolic syndrome"],
  },
  {
    number: "03",
    icon: <Moon className="w-6 h-6" />,
    name: "Reproductive Health",
    definition:
      "Reproductive physiology spans decades and life stages. We address the full arc — from cycle health in your 20s and 30s through perimenopause and postmenopause — with precision and clinical depth.",
    subsystems: [
      "Menstrual cycle regulation and optimization",
      "Contraception counseling and management",
      "Perimenopause transition planning",
      "Postmenopausal health and longevity",
      "Fertility preservation and infertility support",
    ],
    conditions: ["Irregular cycles", "PMS/PMDD", "Perimenopause", "Menopause", "Fertility planning"],
  },
  {
    number: "04",
    icon: <Zap className="w-6 h-6" />,
    name: "Nervous System Regulation",
    definition:
      "Chronic stress is not a lifestyle problem — it is a physiologic one. Dysregulated stress responses alter hormone production, impair metabolic function, and drive inflammation. We treat it as the medical driver it is.",
    subsystems: [
      "HPA axis and cortisol rhythm",
      "Autonomic nervous system balance",
      "Trauma physiology and somatic response",
      "Sleep architecture and restorative depth",
      "Mood, anxiety, and neurohormonal interface",
    ],
    conditions: ["Chronic stress", "Burnout", "Medical trauma", "Sleep dysfunction", "Anxiety & mood dysregulation"],
  },
  {
    number: "05",
    icon: <Leaf className="w-6 h-6" />,
    name: "Lifestyle Inputs",
    definition:
      "Nutrition, movement, and sleep are not adjuncts to medicine — they are primary levers of physiologic change. We prescribe them with the same evidence-base and specificity as any clinical intervention.",
    subsystems: [
      "Therapeutic nutrition and nutrient density",
      "Movement type, timing, and hormonal impact",
      "Sleep quality and circadian entrainment",
      "Gut microbiome and hormonal metabolism",
      "Supplement and nutraceutical protocols",
    ],
    conditions: ["Nutritional deficiencies", "Exercise physiology", "Gut-hormone axis", "Sleep disorders", "Longevity optimization"],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "For five years I was told my exhaustion and weight gain were just 'getting older.' Scarlett ran panels no one else had ordered. Within three months of her metabolic protocol, I reversed my insulin resistance and got my life back.",
    author: "Sarah M.",
    age: "48",
    outcome: "Metabolic Reversal & Hormonal Optimization",
  },
  {
    quote:
      "I had seen seven different doctors over four years — each treating a single problem in isolation. Scarlett identified the cascade between my cortisol, thyroid, and hormones within our first appointment. I finally feel like myself again.",
    author: "Meredith T.",
    age: "42",
    outcome: "Multi-System Hormone & Thyroid Restoration",
  },
  {
    quote:
      "As a patient with medical trauma, I had avoided doctors for years. Scarlett's approach is entirely different. She understood my nervous system's role in my hormonal symptoms and addressed both. Her clinical brilliance is matched only by her empathy.",
    author: "Elena R.",
    age: "35",
    outcome: "Trauma-Informed Hormonal & Pelvic Care",
  },
  {
    quote:
      "I came in for weight management and left with an entirely new understanding of how my body works as a system. Scarlett treated me as a complete person. Life-changing is not sufficient to describe it.",
    author: "Diana L.",
    age: "51",
    outcome: "Metabolic & Menopausal Systems Restoration",
  },
];

const FAQ_ITEMS = [
  {
    q: "What does 'whole-health' actually mean at SheRises?",
    a: "Whole-health at SheRises is a clinical term, not a marketing one. It means integrated, root-cause–oriented care across five interconnected physiologic systems: hormonal regulation, metabolic function, reproductive health, nervous system regulation, and lifestyle inputs. We treat these systems in relationship to each other — because that is how your body actually functions. A symptom in one system is rarely caused by that system alone.",
  },
  {
    q: "What makes SheRises different from a conventional OB/GYN?",
    a: "Conventional OB/GYN care is organ-based and episodic — typically 10-15 minutes, focused on a single presenting complaint, with treatment limited to that organ system. Our model is systems-based and investigative. We spend 60-90 minutes understanding the relationships between your endocrine, metabolic, and nervous systems before designing a protocol. We also optimize for 'optimal' ranges, not just 'normal' reference ranges.",
  },
  {
    q: "What should I expect at my first consultation?",
    a: "Your initial visit is a 60-90 minute diagnostic conversation covering your complete health history, current symptoms across all systems, prior labs, and goals. We will order comprehensive hormone, metabolic, and functional panels that go far beyond standard annual labs — mapping all five physiologic systems. A personalized, systems-integrated protocol is designed around your findings.",
  },
  {
    q: "Do you accept insurance?",
    a: "We operate as a fee-for-service practice. This allows us to provide the depth of investigation the systems model requires without the constraints of insurance-mandated visit lengths or diagnostic codes. Many patients find that comprehensive care here replaces multiple specialist referrals. We provide detailed receipts for HSA reimbursement.",
  },
  {
    q: "Is the systems model relevant to me if I am in my 30s?",
    a: "Especially so. Metabolic and hormonal dysregulation rarely announces itself with dramatic symptoms — it builds subclinically for years. PCOS, insulin resistance, thyroid dysfunction, nervous system dysregulation, and hormonal imbalances are common in the 20s and 30s and far more responsive to systems-level intervention when addressed early. Our most transformative patient outcomes often begin in this decade.",
  },
  {
    q: "Do you see patients remotely?",
    a: "We offer in-person appointments at our Northwest Arkansas location and telehealth consultations for established patients within Arkansas. We prefer in-person for initial consultations, as the depth of assessment the systems model requires is best conducted face-to-face.",
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
          <div className="w-8 h-8 rounded-sm bg-[#132A24] flex items-center justify-center text-[#E8D5A5]" style={FONT_SERIF}>
            <span className="text-xl leading-none font-medium">S</span>
          </div>
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-[#132A24]">SheRises Health</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#132A24]">
          {NAV_LINKS.map((l) => (
            <a key={l.name} href={l.href} className="hover:text-[#B89047] transition-colors">{l.name}</a>
          ))}
        </div>

        <a href="#cta" className="hidden md:inline-flex items-center gap-2 bg-[#132A24] text-[#F4F1EB] px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-[#1B3B33] transition-colors border border-transparent hover:border-[#B89047]/30">
          Request Consultation
        </a>

        <button className="md:hidden text-[#132A24]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
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
                <a key={l.name} href={l.href} onClick={() => setOpen(false)}
                  className="text-[#132A24] font-medium py-2 border-b border-[#132A24]/10 hover:text-[#B89047] transition-colors">
                  {l.name}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)}
                className="mt-2 bg-[#132A24] text-[#F4F1EB] px-6 py-3 text-sm font-medium tracking-wide text-center">
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
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "url(/images/texture-bg.png)", backgroundSize: "cover" }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10 pt-8">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#B89047] text-[#B89047] text-xs font-semibold tracking-widest uppercase mb-8 bg-[#FCFBF9]" style={FONT_SANS}>
                <Award className="w-3.5 h-3.5" />
                <span>Northwest Arkansas' Leading Specialist</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.08] text-[#132A24] mb-6" style={FONT_SERIF}>
                Your symptoms are not isolated.{" "}
                <span className="italic text-[#B89047]">Your systems are.</span>
              </h1>

              <p className="text-lg md:text-xl text-[#4B5563] mb-6 max-w-xl font-light leading-relaxed" style={FONT_SANS}>
                SheRises applies a systems-based medical model — treating your hormones, metabolism,
                reproductive health, nervous system, and lifestyle inputs as an interconnected whole.
              </p>

              <p className="text-base text-[#4B5563] mb-10 max-w-xl font-light leading-relaxed" style={FONT_SANS}>
                Led by Scarlett Grandy, CNM, WHNP-BC — over 20 years of whole-health medicine in
                women's whole-health, Northwest Arkansas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4" style={FONT_SANS}>
                <a href="#cta" className="bg-[#132A24] text-[#F4F1EB] px-8 py-4 text-base font-medium tracking-wide hover:bg-[#1B3B33] transition-colors flex items-center justify-center gap-2">
                  Book a Clinical Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#model" className="bg-transparent text-[#132A24] border border-[#132A24] px-8 py-4 text-base font-medium tracking-wide hover:bg-[#132A24] hover:text-[#F4F1EB] transition-colors text-center">
                  See the Model
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#B89047] translate-x-4 translate-y-4" />
                <img src="/images/scarlett-authority.png" alt="Scarlett Grandy, CNM, WHNP-BC"
                  className="relative z-10 w-full h-[580px] object-cover object-top" />
                <div className="absolute -left-8 lg:-left-12 bottom-10 z-20 bg-[#132A24] p-5 lg:p-6 shadow-2xl border border-[#B89047]/30 max-w-[260px]">
                  <h3 className="text-[#F4F1EB] text-lg font-medium mb-1" style={FONT_SERIF}>Scarlett Grandy</h3>
                  <p className="text-[#B89047] text-sm font-semibold tracking-wide mb-3" style={FONT_SANS}>CNM, WHNP-BC</p>
                  <p className="text-[#F4F1EB]/75 text-xs leading-relaxed" style={FONT_SANS}>
                    Board Certified Women's Health Nurse Practitioner. over 20 years specializing in systems-based whole-health methodology.
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
  const certs = ["The Menopause Society", "ISSWSH Member", "EAGALA Certified", "Board Certified WHNP", "20+ Years Whole-Health Medicine"];
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

function SystemsPentagon() {
  const cx = 320, cy = 288, R = 188, nodeR = 66;

  const systems = [
    { label: ["Hormonal", "Regulation"], angle: -90 },
    { label: ["Metabolic", "Function"], angle: -18 },
    { label: ["Reproductive", "Health"], angle: 54 },
    { label: ["Nervous System", "Regulation"], angle: 126 },
    { label: ["Lifestyle", "Inputs"], angle: 198 },
  ];

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const nodes = systems.map(({ label, angle }) => ({
    label,
    x: cx + R * Math.cos(toRad(angle)),
    y: cy + R * Math.sin(toRad(angle)),
  }));

  // Pentagon edges: adjacent pairs
  const edges: [number, number][] = [[0,1],[1,2],[2,3],[3,4],[4,0]];

  function edgePoints(a: number, b: number) {
    const ax = nodes[a].x, ay = nodes[a].y;
    const bx = nodes[b].x, by = nodes[b].y;
    const len = Math.sqrt((bx-ax)**2 + (by-ay)**2);
    const ux = (bx-ax)/len, uy = (by-ay)/len;
    const pad = nodeR + 4;
    return {
      x1: ax + ux*pad, y1: ay + uy*pad,
      x2: bx - ux*pad, y2: by - uy*pad,
    };
  }

  return (
    <svg viewBox="0 0 640 576" className="w-full max-w-2xl mx-auto" aria-label="Five interconnected physiologic systems diagram">
      <defs>
        <marker id="tip-fwd" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <polygon points="0,0 7,3.5 0,7" fill="#B89047" opacity="0.75" />
        </marker>
        <marker id="tip-bwd" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto-start-reverse">
          <polygon points="0,0 7,3.5 0,7" fill="#B89047" opacity="0.75" />
        </marker>
      </defs>

      {/* Spokes from center to each node — very faint dashed */}
      {nodes.map((n, i) => {
        const len = Math.sqrt((n.x-cx)**2 + (n.y-cy)**2);
        const ux = (n.x-cx)/len, uy = (n.y-cy)/len;
        return (
          <line key={`spoke-${i}`}
            x1={cx + ux*42} y1={cy + uy*42}
            x2={n.x - ux*(nodeR+2)} y2={n.y - uy*(nodeR+2)}
            stroke="#B89047" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="5 5"
          />
        );
      })}

      {/* Pentagon edges with bidirectional arrows */}
      {edges.map(([a, b], i) => {
        const { x1, y1, x2, y2 } = edgePoints(a, b);
        return (
          <line key={`edge-${i}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#B89047" strokeWidth="1.5" strokeOpacity="0.55"
            markerEnd="url(#tip-fwd)"
            markerStart="url(#tip-bwd)"
          />
        );
      })}

      {/* Center hub */}
      <circle cx={cx} cy={cy} r="40" fill="#0f2922" stroke="#B89047" strokeWidth="1.2" strokeOpacity="0.5" />
      <text x={cx} y={cy - 7} textAnchor="middle" fill="#E8D5A5"
        fontSize="9.5" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="1.5">WHOLE</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fill="#E8D5A5"
        fontSize="9.5" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="1.5">HEALTH</text>

      {/* System nodes */}
      {nodes.map((n, i) => (
        <g key={`node-${i}`}>
          <circle cx={n.x} cy={n.y} r={nodeR} fill="#1B3B33" stroke="#B89047" strokeWidth="1.5" strokeOpacity="0.5" />
          {n.label.map((line, li) => (
            <text key={li}
              x={n.x} y={n.y + (li - (n.label.length - 1) / 2) * 16}
              textAnchor="middle" dominantBaseline="middle"
              fill="#F4F1EB" fontSize="11.5" fontFamily="Outfit, sans-serif" fontWeight="500">
              {line}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}

function ModelIntroSection() {
  return (
    <section id="model" className="py-24 md:py-36 bg-[#FCFBF9]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#B89047] text-xs font-semibold tracking-widest uppercase mb-5" style={FONT_SANS}>
              The Clinical Foundation
            </p>
            <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-8 leading-tight" style={FONT_SERIF}>
              A systems-based medical model for women's health.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border-l-4 border-[#B89047] pl-8 mb-16">
            <p className="text-xl md:text-2xl text-[#132A24] font-light leading-relaxed italic" style={FONT_SERIF}>
              "Whole-health is integrated, root-cause–oriented care across interconnected physiologic systems,
              with attention to psychological and behavioral drivers."
            </p>
            <p className="text-sm text-[#B89047] font-semibold tracking-wide uppercase mt-4" style={FONT_SANS}>
              The SheRises Clinical Definition
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="grid md:grid-cols-3 gap-8 mb-16" style={FONT_SANS}>
            {[
              {
                title: "Not Symptom Management",
                desc: "We do not suppress symptoms. We investigate the upstream system dysregulation producing them and correct it at the source.",
              },
              {
                title: "Not Single-System Care",
                desc: "Your hormones affect your metabolism. Your nervous system affects your hormones. Treating one in isolation produces temporary results.",
              },
              {
                title: "Systems in Relationship",
                desc: "We map the relationships between five physiologic systems to understand how dysregulation cascades — then interrupt the cascade at its root.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#F4F1EB] p-7 border border-[#132A24]/8">
                <div className="w-8 h-0.5 bg-[#B89047] mb-5" />
                <h4 className="text-[#132A24] font-semibold mb-3">{item.title}</h4>
                <p className="text-sm text-[#4B5563] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-[#132A24] px-8 pt-10 pb-4 md:px-12">
            <p className="text-center text-[#E8D5A5] text-xs font-semibold tracking-widest uppercase mb-2" style={FONT_SANS}>
              Five Interconnected Physiologic Systems
            </p>
            <SystemsPentagon />
            <p className="text-center text-[#F4F1EB]/55 text-sm font-light mt-0 pb-8 max-w-xl mx-auto" style={FONT_SANS}>
              These systems operate in constant, dynamic relationship — not in sequence.
              Optimizing one without understanding the others produces incomplete outcomes.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SystemsSection() {
  return (
    <section id="systems" className="bg-[#F4F1EB]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
        <FadeIn>
          <div className="mb-16">
            <p className="text-[#B89047] text-xs font-semibold tracking-widest uppercase mb-5" style={FONT_SANS}>
              The Five Physiologic Systems
            </p>
            <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] leading-tight" style={FONT_SERIF}>
              What we investigate.<br />
              <span className="italic text-[#B89047]">And why it matters.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-0">
          {FIVE_SYSTEMS.map((system, i) => (
            <FadeIn key={system.number} delay={i * 0.06}>
              <div className={`grid md:grid-cols-12 gap-0 border border-[#132A24]/10 ${i > 0 ? "border-t-0" : ""} group hover:border-[#B89047] transition-colors`}>
                <div className={`md:col-span-1 flex items-start justify-center pt-8 pb-6 ${i % 2 === 0 ? "bg-[#FCFBF9]" : "bg-[#F4F1EB]"}`}>
                  <span className="text-xs font-bold text-[#B89047]/50 tracking-widest" style={FONT_SANS}>{system.number}</span>
                </div>

                <div className={`md:col-span-4 p-8 border-r border-[#132A24]/8 ${i % 2 === 0 ? "bg-[#FCFBF9]" : "bg-[#F4F1EB]"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#B89047]">{system.icon}</div>
                    <h3 className="text-2xl font-medium text-[#132A24]" style={FONT_SERIF}>{system.name}</h3>
                  </div>
                  <p className="text-sm text-[#4B5563] font-light leading-relaxed" style={FONT_SANS}>{system.definition}</p>
                </div>

                <div className={`md:col-span-4 p-8 border-r border-[#132A24]/8 ${i % 2 === 0 ? "bg-[#FCFBF9]" : "bg-[#F4F1EB]"}`}>
                  <p className="text-xs font-semibold text-[#132A24]/45 tracking-widest uppercase mb-4" style={FONT_SANS}>What We Assess</p>
                  <ul className="space-y-2.5" style={FONT_SANS}>
                    {system.subsystems.map((sub) => (
                      <li key={sub} className="flex items-start gap-2.5 text-sm text-[#4B5563] font-light">
                        <div className="w-1 h-1 rounded-full bg-[#B89047] mt-2 shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`md:col-span-3 p-8 ${i % 2 === 0 ? "bg-[#FCFBF9]" : "bg-[#F4F1EB]"}`}>
                  <p className="text-xs font-semibold text-[#132A24]/45 tracking-widest uppercase mb-4" style={FONT_SANS}>Conditions Addressed</p>
                  <div className="flex flex-wrap gap-2" style={FONT_SANS}>
                    {system.conditions.map((cond) => (
                      <span key={cond} className="text-xs font-medium text-[#132A24] bg-[#132A24]/6 border border-[#132A24]/10 px-2.5 py-1">
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section id="approach" className="py-24 md:py-36 bg-[#132A24] text-[#F4F1EB]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={FONT_SERIF}>
              Organ-based, siloed care vs.{" "}
              <span className="italic text-[#B89047]">Systems in relationship</span>
            </h2>
            <p className="text-lg text-[#F4F1EB]/65 font-light max-w-2xl mx-auto" style={FONT_SANS}>
              The conventional model divides the body into departments. Your endocrinologist manages
              thyroid. Your OB manages hormones. Your PCP manages weight. No one manages the
              relationships between them. We do.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="grid md:grid-cols-2 gap-px bg-[#B89047]/25 border border-[#B89047]/25" style={FONT_SANS}>
            <div className="bg-[#132A24] p-8 md:p-12">
              <h3 className="text-lg font-semibold mb-8 text-[#F4F1EB]/45 flex items-center gap-3">
                <XCircle className="w-5 h-5" />
                Conventional Specialist Model
              </h3>
              <ul className="space-y-5">
                {[
                  "One organ, one specialist, one prescription",
                  "10-minute appointments, no time for system mapping",
                  "Reference ranges define 'normal'; symptoms are dismissed",
                  "Fatigue, weight gain, and mood changes treated as separate problems",
                  "Stress and trauma physiology excluded from the clinical picture",
                  "Lifestyle inputs recommended but never clinically prescribed",
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
                The SheRises Systems Model
              </h3>
              <ul className="space-y-5 relative z-10">
                {[
                  "Five systems mapped together; dysfunction traced to its origin",
                  "60–90 minute diagnostic consultations; the cascade is fully visible",
                  "Optimal ranges, not reference ranges; you deserve to feel well",
                  "Your fatigue, weight, and mood are three expressions of one system",
                  "Nervous system dysregulation is treated as the medical driver it is",
                  "Nutrition, movement, and sleep prescribed with clinical precision",
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

        <FadeIn delay={0.25}>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-[#B89047]/20">
            {[
              { stat: "60–90", label: "Minutes per consultation" },
              { stat: "5", label: "Physiologic systems mapped" },
              { stat: "20+", label: "Years of whole-health medicine" },
            ].map((item) => (
              <div key={item.label} className="bg-[#132A24] p-8 text-center border border-[#B89047]/15">
                <p className="text-5xl font-medium text-[#B89047] mb-2" style={FONT_SERIF}>{item.stat}</p>
                <p className="text-[#F4F1EB]/55 text-sm tracking-wide" style={FONT_SANS}>{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
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
              <img src="/images/scarlett-authority.png" alt="Scarlett Grandy, CNM, WHNP-BC"
                className="w-full max-w-md mx-auto lg:mx-0 h-[560px] object-cover object-top shadow-xl" />
              <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-[#B89047] p-5 shadow-xl">
                <p className="text-[#132A24] font-bold text-3xl" style={FONT_SERIF}>20+</p>
                <p className="text-[#132A24] text-xs font-semibold tracking-wide uppercase mt-1" style={FONT_SANS}>
                  Years of Whole-Health<br />Medicine
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={FONT_SANS}>
              <p className="text-[#B89047] text-xs font-semibold tracking-widest uppercase mb-4">Meet Your Provider</p>
              <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-6" style={FONT_SERIF}>
                Scarlett Grandy,{" "}
                <span className="text-[#B89047]">CNM, WHNP-BC</span>
              </h2>
              <p className="text-lg text-[#4B5563] font-light leading-relaxed mb-5">
                Scarlett has spent over 20 years at the forefront of women's whole-health, bringing together
                the clinical rigor of board-certified women's health nursing with a systems-based philosophy
                that conventional medicine rarely allows time for.
              </p>
              <p className="text-base text-[#4B5563] font-light leading-relaxed mb-5">
                Her foundational clinical belief: women's symptoms are not isolated events to be managed
                with isolated treatments. They are downstream expressions of upstream system dysregulation —
                and they respond dramatically when the system is treated.
              </p>
              <p className="text-base text-[#4B5563] font-light leading-relaxed mb-10">
                As a Certified Nurse Midwife and Board Certified WHNP, Scarlett brings both the
                technical depth to map five interconnected physiologic systems and the human presence
                to hold the complexity of each patient's story.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-10">
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

              <a href="#cta" className="inline-flex items-center gap-2 bg-[#132A24] text-[#F4F1EB] px-8 py-4 text-base font-medium tracking-wide hover:bg-[#1B3B33] transition-colors">
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
              When five systems are treated in relationship, the results are different from anything
              single-system care has produced. Hear it from the women who have experienced it.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8" style={FONT_SANS}>
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative p-8 md:p-10 bg-[#FCFBF9] border border-[#132A24]/8 h-full flex flex-col">
                <Star className="absolute top-6 right-6 w-7 h-7 text-[#B89047]/20" />
                <p className="text-[#132A24] mb-8 font-light leading-relaxed flex-1 text-base md:text-lg"
                  style={{ ...FONT_SERIF, fontStyle: "italic" }}>
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-semibold text-[#132A24] uppercase tracking-wide text-xs mb-1">{t.author}, {t.age}</p>
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
            <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] mb-4" style={FONT_SERIF}>Common Questions</h2>
            <p className="text-lg text-[#4B5563] font-light" style={FONT_SANS}>
              Understanding the model before you arrive.
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
                  <span className="font-semibold text-[#132A24] text-sm md:text-base leading-snug">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#B89047] shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
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
                      <p className="px-7 pb-7 text-[#4B5563] font-light text-sm leading-relaxed">{item.a}</p>
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
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "url(/images/texture-bg.png)", backgroundSize: "cover" }} />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight" style={FONT_SERIF}>
            Your health is a system to be understood — not a mystery to be managed.
          </h2>
          <p className="text-xl text-[#F4F1EB]/75 font-light mb-12 max-w-2xl mx-auto" style={FONT_SANS}>
            Schedule a comprehensive consultation with Scarlett Grandy. We will map your five
            physiologic systems and design a root-cause protocol specific to your biology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5" style={FONT_SANS}>
            <a href="mailto:hello@sheriseshealth.com"
              className="bg-[#B89047] text-[#132A24] px-10 py-5 text-base font-semibold tracking-wide hover:bg-[#C9A25E] transition-colors">
              Book Your Consultation
            </a>
            <a href="#faq"
              className="bg-transparent text-[#F4F1EB] border border-[#F4F1EB]/30 px-10 py-5 text-base font-medium tracking-wide hover:bg-[#F4F1EB]/8 transition-colors flex items-center justify-center gap-2">
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
          <div className="w-6 h-6 rounded-sm bg-[#B89047] flex items-center justify-center text-[#132A24]" style={FONT_SERIF}>
            <span className="text-sm font-bold leading-none">S</span>
          </div>
          <span className="font-semibold tracking-[0.12em] uppercase text-sm">SheRises Health</span>
        </div>
        <div className="flex gap-8">
          {["Patient Portal", "Location", "Privacy Practices"].map((l) => (
            <a key={l} href="#" className="hover:text-[#B89047] transition-colors">{l}</a>
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
      <ModelIntroSection />
      <SystemsSection />
      <ApproachSection />
      <ProviderSection />
      <OutcomesSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
