import { useMemo } from "react";
import { motion } from "framer-motion";
import { Activity, Brain, Flame, Moon, Waves, ChevronRight } from "lucide-react";

const FONT_SANS = { fontFamily: "'Outfit', sans-serif" };
const FONT_SERIF = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

type FrameworkItem = {
  number: string;
  icon: JSX.Element;
  name: string;
  definition: string;
  subsystems: string[];
  conditions: string[];
};

const frameworkItems: FrameworkItem[] = [
  {
    number: "01",
    icon: <Waves className="w-6 h-6" />,
    name: "Hormonal Regulation",
    definition:
      "Your hormones affect how you feel about everything. Dysfunction in one reliably disrupts the others.",
    subsystems: [
      "Estrogen & progesterone",
      "Adrenal excess or insufficiency",
      "Thyroid function (TSH, free T3, T4, reverse T3)",
      "Androgen levels, sensitivities & testosterone",
    ],
    conditions: ["Perimenopause", "PCOS", "Adrenal dysregulation", "Thyroid disorders", "BHRT candidacy"],
  },
  {
    number: "02",
    icon: <Flame className="w-6 h-6" />,
    name: "Metabolic Function",
    definition:
      "Metabolism is more than body weight. It governs cellular energy production, insulin sensitivity, inflammatory signaling, and bone and muscle health. The root cause of most disease is in your metabolic health.",
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
      "Reproductive physiology spans decades and life stages. At She Rises, we care for you in your teens and 20's through all your firsts. We are with you through your 30's and 40's when your body starts to change and your family planning years are coming to an end. And we are here with you in your 50's and into your golden years. We want you thriving in every stage.",
    subsystems: [
      "Menstrual cycle regulation and optimization",
      "Contraception counseling and management",
      "Perimenopause transition planning",
      "Postmenopausal health and longevity",
      "Fertility preservation and infertility support",
    ],
    conditions: ["Irregular cycles", "PMS/PMDD", "Perimenopause", "Menopause", "Fertility planning", "PCOS", "Heavy periods", "Contraception", "Vaginitis management", "STI testing and treatment"],
  },
  {
    number: "04",
    icon: <Brain className="w-6 h-6" />,
    name: "Neurobehavioral Context",
    definition:
      "Your symptoms are shaped by stress, sleep, mood, and the demands of your real life. We treat the whole person, not isolated lab values.",
    subsystems: [
      "Stress response and resilience",
      "Sleep quality and circadian rhythm",
      "Mood, cognition, and attention",
      "Autonomic nervous system balance",
      "Lifestyle patterns and care preferences",
    ],
    conditions: ["Anxiety", "Brain fog", "Insomnia", "Burnout", "Stress intolerance"],
  },
  {
    number: "05",
    icon: <Activity className="w-6 h-6" />,
    name: "Whole Health",
    definition:
      "We connect the systems that shape your daily energy, longevity, and quality of life so your care is cohesive, clear, and personalized.",
    subsystems: [
      "Cardiometabolic risk",
      "Inflammation and recovery",
      "Body composition and strength",
      "Preventive health planning",
      "Long-term wellness optimization",
    ],
    conditions: ["Preventive care", "Fatigue", "Poor recovery", "Weight concerns", "Longevity planning"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export function ModelIntroSection() {
  return (
    <section id="model" className="pt-0 pb-8 md:pb-12 bg-[#FCFBF9]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-[#B5736A] text-[11px] font-light tracking-[0.3em] uppercase" style={FONT_SANS}>
              The SheRises Framework
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function SheRisesDifference() {
  return (
    <FadeIn>
      <div className="border-l-4 border-[#B5736A] pl-8">
        <p className="text-[#B5736A] text-xs font-semibold tracking-widest uppercase mb-5" style={FONT_SANS}>
          The She Rises Difference
        </p>
        <h3 className="text-2xl md:text-3xl font-medium text-[#132A24] leading-snug" style={FONT_SERIF}>
          Hormones, metabolism, and reproductive health are treated together within your unique neurobehavioral context.
        </h3>
      </div>
    </FadeIn>
  );
}

export function SystemsSection() {
  const items = useMemo(() => frameworkItems, []);

  return (
    <section id="five-systems-detail" className="bg-[#F4F1EB]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[#132A24] leading-tight" style={FONT_SERIF}>
              What we investigate.<br />
              <span className="italic text-[#B5736A]">And why it matters.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-0">
          {items.map((system, i) => (
            <FadeIn key={system.number} className="group">
              <div className={`grid md:grid-cols-12 gap-0 border border-[#132A24]/10 ${i > 0 ? "border-t-0" : ""} group hover:border-[#B5736A] transition-colors`}>
                <div className="md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#132A24]/10 bg-[#FCFBF9]/50">
                  <span className="text-xs font-bold text-[#B5736A]/50 tracking-widest" style={FONT_SANS}>{system.number}</span>
                </div>
                <div className="md:col-span-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#132A24]/10 bg-[#FCFBF9]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#B5736A]">{system.icon}</div>
                    <h3 className="text-2xl font-medium text-[#132A24]" style={FONT_SERIF}>{system.name}</h3>
                  </div>
                  <p className="text-sm md:text-base text-[#132A24]/75 leading-7" style={FONT_SANS}>{system.definition}</p>
                </div>
                <div className="md:col-span-3 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#132A24]/10 bg-[#FCFBF9]/70">
                  <p className="text-[#B5736A] text-xs font-semibold tracking-widest uppercase mb-5" style={FONT_SANS}>
                    Systems We Assess
                  </p>
                  <ul className="space-y-3">
                    {system.subsystems.map((item) => (
                      <li key={item} className="flex gap-3 text-sm md:text-[0.95rem] leading-6 text-[#132A24]/80">
                        <ChevronRight className="w-4 h-4 mt-1 shrink-0 text-[#B5736A]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-3 p-6 md:p-8 bg-[#FCFBF9]/50">
                  <p className="text-[#B5736A] text-xs font-semibold tracking-widest uppercase mb-5" style={FONT_SANS}>
                    Conditions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {system.conditions.map((condition) => (
                      <span key={condition} className="text-xs md:text-sm rounded-full border border-[#B5736A]/20 bg-[#FCFBF9] px-3 py-1 text-[#132A24]/80">
                        {condition}
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
