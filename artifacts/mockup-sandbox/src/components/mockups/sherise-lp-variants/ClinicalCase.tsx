import React, { useState } from "react";
import { ChevronDown, Plus, Minus, ArrowRight, ExternalLink } from "lucide-react";

export default function ClinicalCase() {
  const [expandedSystem, setExpandedSystem] = useState<number | null>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const systems = [
    {
      title: "Hormonal",
      summary: "The foundational signaling network.",
      details: "Hormones dictate cellular function. When thyroid, cortisol, estrogen, and progesterone fall out of balance, the resulting cascade affects metabolism, mood, and tissue health. Conventional medicine often treats the downstream symptoms rather than addressing the upstream signaling disruption."
    },
    {
      title: "Metabolic",
      summary: "Energy production and utilization.",
      details: "Cellular energy dictates tissue vitality. Insulin resistance, mitochondrial dysfunction, and disrupted glucose metabolism lead to fatigue, weight resistance, and systemic inflammation. We assess metabolic markers holistically, beyond standard fasting glucose."
    },
    {
      title: "Reproductive",
      summary: "Ovarian function and transition.",
      details: "Perimenopause and menopause are systemic transitions, not isolated events. The withdrawal of estrogen and progesterone impacts bone density, cardiovascular health, and neuroprotection. We utilize bioidentical hormone therapy to protect systemic function, not merely suppress hot flashes."
    },
    {
      title: "Nervous System",
      summary: "Autonomic regulation and stress response.",
      details: "Chronic sympathetic dominance (fight-or-flight) dysregulates the HPA axis, increasing cortisol and disrupting sleep, digestion, and hormone synthesis. True healing requires shifting the body back into parasympathetic states to allow for repair and optimal glandular function."
    },
    {
      title: "Lifestyle",
      summary: "Environmental and behavioral inputs.",
      details: "Sleep architecture, nutrient density, toxic burden, and movement patterns are the epigenetic drivers that determine how your genome expresses itself. We manipulate these inputs to create an environment where the other four systems can stabilize."
    }
  ];

  const cases = [
    {
      patient: "Patient A.",
      age: 42,
      presentation: "Severe fatigue, weight gain despite caloric restriction, irregular cycles. Previously told 'labs are normal.'",
      mechanism: "Subclinical hypothyroidism masked by normal TSH, compounded by high cortisol output and early luteal phase defect.",
      intervention: "Optimized T3 levels, implemented cyclical progesterone therapy, adjusted macronutrient timing to stabilize glucose.",
      outcome: "Restored energy levels, 12lb fat loss, regulated 28-day menstrual cycles within 4 months."
    },
    {
      patient: "Patient B.",
      age: 51,
      presentation: "Brain fog, joint pain, sudden onset anxiety, vasomotor symptoms (night sweats). Prescribed SSRIs by PCP.",
      mechanism: "Estrogen deficiency leading to neuroinflammation and loss of vasomotor control; declining progesterone exacerbating anxiety.",
      intervention: "Transdermal estradiol, oral micronized progesterone, targeted anti-inflammatory nutraceuticals.",
      outcome: "Resolution of night sweats, cognitive clarity restored, discontinued SSRIs with primary care approval."
    },
    {
      patient: "Patient C.",
      age: 36,
      presentation: "PCOS diagnosis, chronic acne, anovulation, fasting insulin 14. Recommended birth control pills.",
      mechanism: "Hyperinsulinemia driving ovarian androgen overproduction; gut dysbiosis impairing estrogen clearance.",
      intervention: "Metabolic protocol (inositol, targeted fasting), gut repair protocol to optimize the estrobolome.",
      outcome: "Spontaneous ovulation restored, clear skin, fasting insulin reduced to optimal (<5)."
    }
  ];

  const faqs = [
    {
      q: "Do you accept insurance?",
      a: "No. We operate on a fee-for-service model. Insurance dictates short visit times and limits the scope of advanced diagnostics we can order. This model allows us the time and resources necessary to investigate complex physiological cascades."
    },
    {
      q: "What labs do you run?",
      a: "We utilize advanced functional panels including comprehensive hormone profiling (DUTCH test), full thyroid cascades (including Free T3, Reverse T3, and antibodies), advanced cardiometabolic markers, and comprehensive gut microbiome analysis."
    },
    {
      q: "Do you prescribe medications or just supplements?",
      a: "Both. As an Advanced Practice Nurse Practitioner, Scarlett prescribes FDA-approved medications including bioidentical hormones and thyroid therapies, integrated seamlessly with clinical-grade nutraceuticals and lifestyle interventions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#132A24] font-['Outfit'] selection:bg-[#E8D5A5] selection:text-[#132A24]">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center border-b border-[#132A24]/10 bg-[#FCFBF9] sticky top-0 z-50">
        <div className="font-['Playfair_Display'] font-semibold text-xl tracking-wide">SheRises Health</div>
        <button className="text-sm uppercase tracking-widest font-medium hover:text-[#B89047] transition-colors">
          Book Consultation
        </button>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#132A24] text-[#E8D5A5] px-6 py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm mb-6 text-[#E8D5A5]/70">The Clinical Case for Systems Medicine</p>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl leading-[1.1] mb-8">
              The body isn't a collection of parts.<br />
              <span className="italic text-[#F4F1EB]">It's a cascade.</span>
            </h1>
            <p className="text-lg text-[#F4F1EB]/80 leading-relaxed mb-10 max-w-xl font-light">
              Conventional medicine treats symptoms in isolation. We treat the mechanism. By analyzing the intersection of your hormonal, metabolic, and neurological systems, we identify the root cause of systemic dysfunction.
            </p>
            <button className="bg-[#E8D5A5] text-[#132A24] px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#F4F1EB] transition-colors flex items-center gap-3">
              Review Methodology <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="hidden lg:block relative">
            <img 
              src="/__mockup/images/sherise-clinical-hero.png" 
              alt="Interconnected biological systems" 
              className="w-full h-auto opacity-80 mix-blend-screen"
            />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-6 border-b border-[#132A24]/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-4">Why Conventional Care Fails Systemically</h2>
            <p className="text-[#132A24]/70 max-w-2xl text-lg">The standard model is designed for acute pathology, not chronic systemic optimization.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-['Playfair_Display'] text-[#B89047] mb-4">01.</div>
              <h3 className="font-bold mb-3 text-lg">Compartmentalization</h3>
              <p className="text-sm leading-relaxed text-[#132A24]/80">Specialists treat organ systems in isolation. The endocrinologist ignores the gut; the gynecologist ignores the thyroid. True systemic dysfunction occurs at the intersections.</p>
            </div>
            <div>
              <div className="text-4xl font-['Playfair_Display'] text-[#B89047] mb-4">02.</div>
              <h3 className="font-bold mb-3 text-lg">Reference Range Fallacy</h3>
              <p className="text-sm leading-relaxed text-[#132A24]/80">"Normal" lab ranges are statistical averages of a sick population, not markers of optimal function. We evaluate labs based on optimal physiological ranges, not mere absence of disease.</p>
            </div>
            <div>
              <div className="text-4xl font-['Playfair_Display'] text-[#B89047] mb-4">03.</div>
              <h3 className="font-bold mb-3 text-lg">Symptom Suppression</h3>
              <p className="text-sm leading-relaxed text-[#132A24]/80">Prescribing pharmaceuticals to silence symptoms (e.g., SSRIs for perimenopausal anxiety) masks the underlying hormonal decline without resolving the physiological deficit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Systems Mechanism */}
      <section className="py-24 px-6 bg-[#F4F1EB]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-6">The Mechanism:<br/>Five Interlocking Systems</h2>
            <p className="text-[#132A24]/80 leading-relaxed mb-8">
              We investigate five key physiological systems. Dysfunction in one inevitably creates compensatory strain in the others. Stabilization requires addressing all five concurrently.
            </p>
          </div>
          
          <div className="lg:col-span-7">
            <div className="border-t border-[#132A24]/20">
              {systems.map((system, idx) => (
                <div key={idx} className="border-b border-[#132A24]/20">
                  <button 
                    onClick={() => setExpandedSystem(expandedSystem === idx ? null : idx)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[#B89047] font-['Playfair_Display'] italic text-xl">0{idx + 1}</span>
                      <div>
                        <h3 className="font-medium text-lg group-hover:text-[#B89047] transition-colors">{system.title}</h3>
                        <p className="text-sm text-[#132A24]/60 mt-1">{system.summary}</p>
                      </div>
                    </div>
                    {expandedSystem === idx ? <Minus className="w-5 h-5 text-[#B89047]" /> : <Plus className="w-5 h-5 text-[#132A24]/40 group-hover:text-[#132A24]" />}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSystem === idx ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-sm leading-relaxed text-[#132A24]/80 pl-12 pr-4">
                      {system.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Outcomes */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-4">Clinical Outcomes</h2>
              <p className="text-[#132A24]/70">Selected case abstracts demonstrating systemic resolution.</p>
            </div>
            <div className="text-sm uppercase tracking-widest text-[#B89047] font-medium border-b border-[#B89047] pb-1">
              Data on File
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cases.map((c, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#132A24]/10 shadow-sm">
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-[#132A24]/10">
                  <h3 className="font-bold font-['Playfair_Display'] text-xl">{c.patient}</h3>
                  <span className="text-xs font-mono bg-[#F4F1EB] px-2 py-1">AGE {c.age}</span>
                </div>
                
                <div className="space-y-5 text-sm">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-[#132A24]/50 mb-1 font-bold">Presentation</h4>
                    <p className="leading-relaxed">{c.presentation}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-[#132A24]/50 mb-1 font-bold">Mechanism Identified</h4>
                    <p className="leading-relaxed">{c.mechanism}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-[#132A24]/50 mb-1 font-bold">Intervention</h4>
                    <p className="leading-relaxed">{c.intervention}</p>
                  </div>
                  <div className="pt-4 border-t border-[#132A24]/10">
                    <h4 className="text-[10px] uppercase tracking-widest text-[#B89047] mb-1 font-bold">Outcome</h4>
                    <p className="leading-relaxed font-medium">{c.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioner Methodology */}
      <section className="py-24 px-6 bg-[#132A24] text-[#FCFBF9]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-6 text-[#E8D5A5]">The Expert Witness for Your Health</h2>
            <p className="text-[#F4F1EB]/80 leading-relaxed mb-6 font-light">
              Scarlett Grandy, CNM, WHNP-BC brings over two decades of clinical experience in women's health. Moving beyond the limitations of insurance-based care, she established SheRises to practice medicine as it should be: rigorously investigative, evidence-based, and highly personalized.
            </p>
            <div className="space-y-3 text-sm text-[#F4F1EB]/70 font-light mb-8">
              <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#E8D5A5] rounded-full"></span> Certified Nurse Midwife</p>
              <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#E8D5A5] rounded-full"></span> Women's Health Nurse Practitioner (Board Certified)</p>
              <p className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#E8D5A5] rounded-full"></span> 20+ Years Clinical Practice</p>
            </div>
          </div>
          <div className="bg-[#1B3B33] p-8 border border-[#E8D5A5]/20">
            <h3 className="uppercase tracking-widest text-xs text-[#E8D5A5] mb-6 font-medium">Comparison of Care Models</h3>
            
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#F4F1EB]/10">
                <div className="text-[#F4F1EB]/50 uppercase text-[10px] tracking-wider">Standard Care</div>
                <div className="text-[#E8D5A5] uppercase text-[10px] tracking-wider font-bold">SheRises Protocol</div>
              </div>
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#F4F1EB]/10">
                <div className="text-[#F4F1EB]/70 pr-4">15-minute consultations focused on a single chief complaint.</div>
                <div className="font-medium pr-4">60-90 minute deep-dives into complete systemic history.</div>
              </div>
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#F4F1EB]/10">
                <div className="text-[#F4F1EB]/70 pr-4">Basic metabolic panel & TSH only.</div>
                <div className="font-medium pr-4">Comprehensive functional labs, hormone metabolites, gut health.</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-[#F4F1EB]/70 pr-4">Symptom suppression with pharmaceuticals (SSRIs, birth control).</div>
                <div className="font-medium pr-4">Root-cause resolution with bioidentical hormones & nutraceuticals.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl mb-4">Clinical Parameters</h2>
            <p className="text-[#132A24]/70">Understanding our practice model.</p>
          </div>

          <div className="mb-20">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#132A24]/20 py-6">
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left font-medium text-lg hover:text-[#B89047] transition-colors"
                >
                  {faq.q}
                  {expandedFaq === idx ? <Minus className="w-5 h-5 flex-shrink-0" /> : <Plus className="w-5 h-5 flex-shrink-0" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFaq === idx ? 'max-h-48 opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#132A24]/80 text-sm leading-relaxed pr-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F4F1EB] p-12 text-center border border-[#132A24]/10">
            <h2 className="font-['Playfair_Display'] text-3xl mb-6">Initiate Your Case</h2>
            <p className="text-[#132A24]/80 mb-8 max-w-lg mx-auto">
              If you are experiencing systemic symptoms that have been dismissed or undertreated by conventional models, schedule a comprehensive evaluation.
            </p>
            <button className="bg-[#132A24] text-[#FCFBF9] px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#B89047] transition-colors">
              Book Initial Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#132A24] text-[#F4F1EB]/50 text-xs py-8 px-6 text-center">
        <p>© {new Date().getFullYear()} SheRises Health. All rights reserved. | Evidence-based systemic health for women.</p>
      </footer>
    </div>
  );
}
