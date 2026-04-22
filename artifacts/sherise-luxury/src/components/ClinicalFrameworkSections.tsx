import { motion } from "framer-motion";
import { Waves, Flame, Moon, Zap, Leaf } from "lucide-react";
import type { ReactNode } from "react";
import { FiveSystemsDiagram } from "./FiveSystemsDiagram";

const FONT_SERIF = { fontFamily: "'Playfair Display', serif" };
const FONT_SANS = { fontFamily: "'Outfit', sans-serif" };

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

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

export function ModelIntroSection() {
  return (
    <section id="model" className="pt-0 pb-24 md:pb-36 bg-[#FCFBF9]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#B89047] text-[11px] font-light tracking-[0.3em] uppercase mb-8" style={FONT_SANS}>
              Clinical Framework
            </p>
            <h2 className="text-5xl md:text-6xl font-medium text-[#132A24] mb-8 leading-tight" style={FONT_SERIF}>
              The She Rises Framework of Whole-Health
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border-l-4 border-[#B89047] pl-8 mb-16">
            <p className="text-2xl md:text-3xl text-[#132A24] font-light leading-relaxed italic" style={FONT_SERIF}>
              "Hormones, metabolism, and reproductive health are treated together within your unique neurobehavioral context."
            </p>
            <p className="text-base text-[#B89047] font-semibold tracking-wide uppercase mt-4" style={FONT_SANS}>
              The She Rises Difference
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

export function SystemsSection() {
  return (
    <section id="five-systems-detail" className="bg-[#F4F1EB]">
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

                <div className={`md:col-span-4 p-8 border-r border-[#132A24]/10 ${i % 2 === 0 ? "bg-[#FCFBF9]" : "bg-[#F4F1EB]"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#B89047]">{system.icon}</div>
                    <h3 className="text-2xl font-medium text-[#132A24]" style={FONT_SERIF}>{system.name}</h3>
                  </div>
                  <p className="text-sm text-[#4B5563] font-light leading-relaxed" style={FONT_SANS}>{system.definition}</p>
                </div>

                <div className={`md:col-span-4 p-8 border-r border-[#132A24]/10 ${i % 2 === 0 ? "bg-[#FCFBF9]" : "bg-[#F4F1EB]"}`}>
                  <p className="text-xs font-bold text-[#132A24]/70 tracking-widest uppercase mb-4" style={FONT_SANS}>What We Assess</p>
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
                  <p className="text-xs font-bold text-[#132A24]/70 tracking-widest uppercase mb-4" style={FONT_SANS}>Conditions Addressed</p>
                  <div className="flex flex-wrap gap-2" style={FONT_SANS}>
                    {system.conditions.map((cond) => (
                      <span key={cond} className="text-xs font-medium text-[#132A24] bg-[#132A24]/5 border border-[#132A24]/10 px-2.5 py-1">
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

export function ClinicalFrameworkSections() {
  return (
    <>
      <ModelIntroSection />
      <SystemsSection />
    </>
  );
}

export default ClinicalFrameworkSections;
