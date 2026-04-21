import React, { useState } from 'react';
import { ArrowRight, Star, Activity, Brain, Moon, Sparkles, CheckCircle2, Leaf, Heart, Plus, Minus } from 'lucide-react';

// --- Data ---

type Condition = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  systems: string[];
  story: {
    name: string;
    quote: string;
    result: string;
  };
  ctaText: string;
};

const CONDITIONS: Condition[] = [
  {
    id: 'perimenopause',
    title: 'Perimenopause Transition',
    description: 'Hot flashes, mood swings, and feeling like you are losing yourself.',
    icon: <Activity className="w-6 h-6" />,
    systems: ['Hormonal', 'Nervous System'],
    story: {
      name: 'Sarah, 44',
      quote: "I thought I was just stressed from work. Scarlett listened to my symptoms and explained how my changing hormones were impacting everything. For the first time in years, I feel like myself again.",
      result: 'Sleeping through the night, stable energy, and clear focus.'
    },
    ctaText: 'Navigate Perimenopause with Support',
  },
  {
    id: 'pcos',
    title: 'Struggling with PCOS',
    description: 'Irregular cycles, weight resistance, and frustrating acne.',
    icon: <Sparkles className="w-6 h-6" />,
    systems: ['Metabolic', 'Reproductive', 'Lifestyle'],
    story: {
      name: 'Emily, 31',
      quote: "I was tired of just being handed birth control and told to lose weight. We looked at my insulin levels and metabolic health. It was a complete paradigm shift.",
      result: 'Regular cycles, cleared skin, and sustainable weight management.'
    },
    ctaText: 'Find Your PCOS Strategy',
  },
  {
    id: 'fatigue',
    title: 'Unexplained Fatigue & Weight',
    description: 'Doing everything "right" but still exhausted and gaining weight.',
    icon: <Moon className="w-6 h-6" />,
    systems: ['Metabolic', 'Hormonal'],
    story: {
      name: 'Jessica, 38',
      quote: "My lab results were always 'normal', but I felt terrible. Scarlett ran a comprehensive metabolic panel and found underlying thyroid issues that everyone else missed.",
      result: 'Restored energy levels and natural body composition shift.'
    },
    ctaText: 'Uncover the Root Cause',
  },
  {
    id: 'postmenopause',
    title: 'Postmenopause & Longevity',
    description: 'Protecting your bones, brain, and heart for the decades ahead.',
    icon: <Heart className="w-6 h-6" />,
    systems: ['Hormonal', 'Lifestyle', 'Metabolic'],
    story: {
      name: 'Linda, 58',
      quote: "I want to be active with my grandchildren. We optimized my hormone replacement therapy to protect my bone density and cardiovascular health. It's about thriving, not just surviving.",
      result: 'Optimized bone health, vibrant energy, and peace of mind.'
    },
    ctaText: 'Invest in Your Longevity',
  },
  {
    id: 'burnout',
    title: 'Burnout & Chronic Stress',
    description: 'Running on empty, wired but tired, and deeply overwhelmed.',
    icon: <Brain className="w-6 h-6" />,
    systems: ['Nervous System', 'Hormonal', 'Lifestyle'],
    story: {
      name: 'Amanda, 35',
      quote: "I was completely burnt out. Scarlett helped me understand the physical toll of chronic stress on my adrenals. We rebuilt my foundation step-by-step.",
      result: 'Regulated nervous system, deep sleep, and renewed resilience.'
    },
    ctaText: 'Heal from Burnout',
  }
];

const FAQS = [
  {
    question: "Do you take insurance?",
    answer: "SheRises Health is a premium fee-for-service practice. We do not accept insurance, which allows us to spend the necessary time (often 60-90 minutes) truly listening to you and investigating root causes without the restrictions of insurance mandates. We can provide a superbill upon request for out-of-network reimbursement."
  },
  {
    question: "What is included in the initial consultation?",
    answer: "Your initial consultation is a comprehensive 90-minute deep dive into your health history. We review the 5 physiologic systems, discuss your current symptoms in detail, and collaboratively map out a personalized functional testing and treatment strategy."
  },
  {
    question: "Do you prescribe bioidentical hormones?",
    answer: "Yes. When clinically appropriate, Scarlett utilizes bioidentical hormone replacement therapy (BHRT) as part of a comprehensive, individualized treatment plan tailored to your specific lab results and symptoms."
  },
  {
    question: "Are you accepting new patients?",
    answer: "We are currently accepting a limited number of new patients each month to ensure every woman receives the dedicated time and high-touch care she deserves."
  }
];

// --- Components ---

export default function PatientJourney() {
  const [activeConditionId, setActiveConditionId] = useState<string>(CONDITIONS[0].id);
  const activeCondition = CONDITIONS.find(c => c.id === activeConditionId) || CONDITIONS[0];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F4F1EB] font-['Outfit'] text-[#132A24] selection:bg-[#B89047] selection:text-[#132A24]">
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 lg:px-12 flex justify-between items-center">
        <div className="font-['Playfair_Display'] text-2xl tracking-wide text-[#1B3B33] font-semibold">
          SheRises <span className="text-[#B89047] italic">Health</span>
        </div>
        <button className="bg-[#132A24] text-[#F4F1EB] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1B3B33] transition-colors duration-300">
          Book Consultation
        </button>
      </nav>

      {/* Hero & Interactive Selector Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <h1 className="font-['Playfair_Display'] text-5xl lg:text-7xl leading-[1.1] text-[#132A24] mb-6">
            Where are you <br className="hidden md:block"/>
            <span className="italic text-[#B89047]">right now?</span>
          </h1>
          <p className="text-xl text-[#1B3B33]/80 leading-relaxed max-w-2xl">
            You know your body best. If you've been dismissed, told your labs are "normal", or feel like you're losing yourself—you're in the right place. Select the journey that sounds like you.
          </p>
        </div>

        {/* Condition Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {CONDITIONS.map((condition) => (
            <button
              key={condition.id}
              onClick={() => setActiveConditionId(condition.id)}
              className={`text-left p-6 rounded-2xl transition-all duration-500 ease-in-out border flex flex-col justify-between min-h-[200px]
                ${activeConditionId === condition.id 
                  ? 'bg-[#132A24] text-[#FCFBF9] border-[#132A24] shadow-xl scale-[1.02] transform' 
                  : 'bg-[#FCFBF9] text-[#132A24] border-[#E8D5A5]/50 hover:border-[#B89047] hover:bg-white'
                }`}
            >
              <div className={`mb-4 ${activeConditionId === condition.id ? 'text-[#B89047]' : 'text-[#1B3B33]'}`}>
                {condition.icon}
              </div>
              <div>
                <h3 className={`font-['Playfair_Display'] text-xl mb-2 leading-tight ${activeConditionId === condition.id ? 'text-[#E8D5A5]' : 'text-[#1B3B33] font-semibold'}`}>
                  {condition.title}
                </h3>
                <p className={`text-sm leading-relaxed ${activeConditionId === condition.id ? 'text-[#FCFBF9]/80' : 'text-[#132A24]/70'}`}>
                  {condition.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-sm border border-[#E8D5A5]/30 flex flex-col lg:flex-row gap-12 lg:gap-20 transition-all duration-700 ease-in-out relative overflow-hidden">
          
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8D5A5]/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F1EB] text-[#1B3B33] text-sm font-medium w-fit mb-8">
              <Leaf className="w-4 h-4 text-[#B89047]" />
              The Framework
            </div>
            <h2 className="font-['Playfair_Display'] text-3xl lg:text-4xl text-[#132A24] mb-6">
              To address this, we must look at the complete picture.
            </h2>
            <p className="text-lg text-[#132A24]/80 mb-8 leading-relaxed">
              Conventional medicine often isolates symptoms. At SheRises, we investigate the interconnections. For your specific presentation, we deeply analyze these core physiological systems:
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {activeCondition.systems.map(system => (
                <div key={system} className="px-5 py-2.5 border border-[#132A24]/20 rounded-full text-base font-medium text-[#132A24]">
                  {system} System
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-4 bg-[#B89047] text-[#FCFBF9] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#132A24] transition-colors duration-300 w-fit">
              {activeCondition.ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-[#132A24] text-[#FCFBF9] p-8 lg:p-12 rounded-3xl h-full flex flex-col justify-center relative">
              <Star className="text-[#B89047] w-8 h-8 mb-8" />
              <blockquote className="font-['Playfair_Display'] text-2xl lg:text-3xl leading-snug mb-8 text-[#E8D5A5]">
                "{activeCondition.story.quote}"
              </blockquote>
              <div className="mt-auto border-t border-[#FCFBF9]/10 pt-6">
                <div className="font-semibold text-lg mb-1">{activeCondition.story.name}</div>
                <div className="text-[#FCFBF9]/70 text-sm">Result: {activeCondition.story.result}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How SheRises Works */}
      <section className="py-24 bg-[#FCFBF9] px-6 lg:px-12 border-t border-[#E8D5A5]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl text-[#132A24] mb-6">
              A partnership, <span className="italic text-[#B89047]">not a prescription.</span>
            </h2>
            <p className="text-lg text-[#1B3B33]/80">
              The journey to optimal health is a collaborative process. We don't rush. We investigate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                step: '01',
                title: 'The Deep Dive',
                desc: 'A comprehensive 90-minute initial consultation where we listen to your entire story and map the functional landscape of your health.'
              },
              {
                step: '02',
                title: 'Strategic Investigation',
                desc: 'We utilize advanced functional testing—hormone panels, metabolic markers, and microbiome analysis—to find the root cause, not just the symptom.'
              },
              {
                step: '03',
                title: 'The Blueprint',
                desc: 'A personalized, actionable strategy incorporating lifestyle modifications, targeted supplementation, and bioidentical hormones when clinically indicated.'
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-['Playfair_Display'] text-[#E8D5A5]/30 font-bold absolute -top-8 -left-4 z-0">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="font-['Playfair_Display'] text-2xl text-[#132A24] mb-4 font-semibold">{item.title}</h3>
                  <p className="text-[#132A24]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scarlett Bio */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-[#132A24] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-[#B89047] relative min-h-[400px]">
            {/* Fallback image if actual is not found, using an elegant background */}
            <img 
              src="/__mockup/images/guide-scarlett.png" 
              alt="Scarlett Grandy"
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#132A24] to-transparent mix-blend-multiply"></div>
          </div>
          <div className="md:w-7/12 p-10 lg:p-20 flex flex-col justify-center text-[#FCFBF9]">
            <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl mb-2 text-[#E8D5A5]">
              Meet Scarlett
            </h2>
            <div className="text-[#FCFBF9]/60 text-lg mb-8 uppercase tracking-widest text-sm">
              CNM, WHNP-BC
            </div>
            <p className="text-xl leading-relaxed mb-8 text-[#FCFBF9]/90 font-light">
              "For over 20 years, I've watched brilliant, vibrant women be told their profound fatigue and changing bodies were 'just a normal part of aging.' I founded SheRises Health to provide the premium, investigative care that you actually deserve."
            </p>
            <div className="flex items-center gap-3 text-[#E8D5A5] font-medium">
              <CheckCircle2 className="w-5 h-5" />
              <span>Based in Northwest Arkansas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-[#FCFBF9] px-6 lg:px-12 border-t border-[#E8D5A5]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl text-[#132A24] text-center mb-16">
            Women who <span className="italic text-[#B89047]">reclaimed their vitality.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "I finally feel heard. The hour-long appointments mean we actually have time to discuss everything. My energy is back to what it was in my 20s.", author: "Marie T." },
              { text: "Scarlett is a detective. She didn't just mask my symptoms; we figured out *why* I was feeling that way. Truly life-changing care.", author: "Elena R." },
              { text: "The investment in my health with SheRises has paid off tenfold. I am sleeping, thinking clearly, and finally off the weight-gain rollercoaster.", author: "Rachel K." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 lg:p-10 rounded-3xl border border-[#E8D5A5]/30 shadow-sm">
                <div className="flex gap-1 text-[#B89047] mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-[#132A24]/80 text-lg leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="font-medium text-[#132A24]">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA */}
      <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-4xl text-[#132A24] text-center mb-16">
          Common Questions
        </h2>
        
        <div className="space-y-4 mb-24">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-[#132A24]/10 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-white shadow-md border-[#E8D5A5]' : 'bg-[#FCFBF9]'}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center"
              >
                <span className="font-['Playfair_Display'] text-xl text-[#132A24] font-medium pr-8">{faq.question}</span>
                {openFaq === index ? (
                  <Minus className="w-5 h-5 text-[#B89047] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#132A24]/40 flex-shrink-0" />
                )}
              </button>
              <div 
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[#132A24]/70 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-[#F4F1EB] rounded-[3rem] p-12 lg:p-24 border border-[#E8D5A5]/40 shadow-xl shadow-[#132A24]/5">
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-6xl text-[#132A24] mb-8 leading-tight">
            Ready to rewrite <br/> your health narrative?
          </h2>
          <p className="text-xl text-[#1B3B33]/80 mb-12 max-w-2xl mx-auto">
            Take the first step toward comprehensive, deeply personalized care.
          </p>
          <button className="bg-[#132A24] text-[#FCFBF9] px-10 py-5 rounded-full text-lg font-medium hover:bg-[#B89047] transition-colors duration-300 w-full md:w-auto shadow-lg hover:shadow-xl">
            Book Your Initial Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#132A24] text-[#FCFBF9] py-12 px-6 lg:px-12 text-center">
        <div className="font-['Playfair_Display'] text-2xl tracking-wide mb-6">
          SheRises <span className="text-[#B89047] italic">Health</span>
        </div>
        <p className="text-[#FCFBF9]/50 text-sm">
          © {new Date().getFullYear()} SheRises Health. All rights reserved. <br/>
          Northwest Arkansas
        </p>
      </footer>

    </div>
  );
}
