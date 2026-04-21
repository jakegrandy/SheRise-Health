import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Play, Heart, CheckCircle2 } from 'lucide-react';

export default function SymptomMirror() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const systems = [
    {
      title: "Hormonal",
      desc: "Balancing estrogen, progesterone, testosterone, and thyroid function to restore your natural rhythm."
    },
    {
      title: "Metabolic",
      desc: "Optimizing insulin sensitivity, energy production, and metabolic flexibility for sustained vitality."
    },
    {
      title: "Reproductive",
      desc: "Addressing cycle irregularities, peri-menopausal transitions, and reproductive longevity."
    },
    {
      title: "Nervous System",
      desc: "Regulating stress responses, improving sleep architecture, and supporting cognitive clarity."
    },
    {
      title: "Lifestyle",
      desc: "Integrating sustainable movement, targeted nutrition, and restorative practices into your daily life."
    }
  ];

  const faqs = [
    {
      question: "Why don't you take insurance?",
      answer: "Insurance models restrict the time we can spend together and dictate which tests we can order. By operating outside that system, we can spend 60-90 minutes together, order comprehensive functional labs, and create a care plan based on what you actually need, not just what's covered."
    },
    {
      question: "I've already had labs done and my doctor said they're normal. How is this different?",
      answer: "Conventional labs use ranges based on a cross-section of a sick population, not optimal health. We look at functional ranges. You might be 'in range' but still symptomatic. We also run much more comprehensive panels that most conventional doctors won't order."
    },
    {
      question: "Do you prescribe HRT?",
      answer: "Yes. When clinically indicated and aligned with your goals, we prescribe bioidentical hormone replacement therapy (BHRT), including estrogen, progesterone, and testosterone. We monitor your levels closely and adjust as needed."
    }
  ];

  const symptoms = [
    "Waking up exhausted at 3 AM",
    "Unexplained weight gain, despite working out",
    "Brain fog that ruins your focus by 2 PM",
    "Irregular, heavy, or painful cycles",
    "Anxiety that feels physical",
    "Hot flashes that disrupt your life",
    "Feeling dismissed by your doctor",
    "Told 'it's just a normal part of aging'"
  ];

  return (
    <div className="min-h-screen bg-[#F4F1EB] text-[#132A24] font-['Outfit'] selection:bg-[#B89047] selection:text-white pb-24">
      {/* Navigation - Minimal */}
      <nav className="absolute top-0 w-full p-6 md:p-12 flex justify-between items-center z-10 mix-blend-difference text-white">
        <div className="font-['Playfair_Display'] text-xl tracking-wide">SheRises Health</div>
      </nav>

      {/* Hero - The Mirror */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-24 bg-[#132A24] text-[#F4F1EB] overflow-hidden">
        {/* Background Image with heavy overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/sherise-mirror-hero.png" 
            alt="Quiet bedroom" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#132A24]/80 via-[#132A24]/90 to-[#132A24]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6 opacity-0 animate-[fadeIn_2s_ease-out_forwards]">
            <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl leading-tight text-[#E8D5A5]">
              You've been told your labs are normal.
            </h1>
            <p className="text-2xl md:text-4xl font-light text-[#F4F1EB]/80 opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards]">
              They're not the whole story.
            </p>
            <p className="text-xl md:text-3xl font-light text-[#F4F1EB]/60 opacity-0 animate-[fadeIn_2s_ease-out_2s_forwards]">
              You've been told it's just stress.
            </p>
            <p className="text-xl md:text-3xl font-light text-[#F4F1EB]/40 opacity-0 animate-[fadeIn_2s_ease-out_3s_forwards]">
              It's not.
            </p>
          </div>
          
          <div className="pt-12 opacity-0 animate-[fadeIn_2s_ease-out_4s_forwards]">
            <button className="text-sm tracking-widest uppercase pb-2 border-b border-[#B89047] hover:text-[#B89047] transition-colors duration-300 flex items-center gap-2 mx-auto">
              Tell me more <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl mb-6 text-[#132A24]">Does this sound familiar?</h2>
          <p className="text-lg text-[#132A24]/70 max-w-2xl mx-auto">
            You know your body better than anyone. When something feels off, it usually is. 
            We listen to the symptoms that others brush aside.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {symptoms.map((symptom, idx) => (
            <div 
              key={idx}
              className="px-6 py-4 bg-white rounded-full text-sm md:text-base border border-[#132A24]/10 shadow-sm hover:border-[#B89047] hover:shadow-md transition-all duration-300 cursor-default"
            >
              {symptom}
            </div>
          ))}
        </div>
      </section>

      {/* Framework Reveal */}
      <section className="py-24 px-6 md:px-12 bg-white text-[#132A24]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:mb-24 md:flex justify-between items-end gap-12">
            <div className="max-w-2xl">
              <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl mb-6">There's a reason you feel this way.</h2>
              <p className="text-xl text-[#132A24]/70">
                True healing doesn't come from a 15-minute appointment or a single prescription. 
                It requires looking at the interconnected systems of your body. Here is what we look for.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map((system, idx) => (
              <div key={idx} className="p-8 border border-[#132A24]/10 hover:border-[#B89047] transition-colors duration-300 group">
                <div className="text-[#B89047] font-['Playfair_Display'] text-xl mb-4">0{idx + 1}</div>
                <h3 className="text-2xl font-['Playfair_Display'] mb-4">{system.title}</h3>
                <p className="text-[#132A24]/70 leading-relaxed">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Intro */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-[#132A24]/5">
            <img 
              src="/__mockup/images/scarlett-authority.png" 
              alt="Scarlett Grandy"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl">I hear you.</h2>
            <div className="space-y-6 text-lg text-[#132A24]/80 leading-relaxed">
              <p>
                For over 20 years as a Women's Health Nurse Practitioner, I've sat across from women who are exhausted, frustrated, and tired of being told their symptoms are just "in their head."
              </p>
              <p>
                I founded SheRises Health because I believe you deserve more than the standard 15-minute appointment. You deserve a partner in your health journey—someone who will look deeper, ask better questions, and create a comprehensive plan tailored specifically to you.
              </p>
              <p className="font-medium text-[#132A24]">
                Scarlett Grandy, CNM, WHNP-BC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-[#132A24] text-[#F4F1EB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-center mb-16 text-[#E8D5A5]">Stories of Return</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                quote: "For the first time in years, I feel like myself again. Scarlett didn't just look at my lab numbers; she looked at me.",
                author: "Sarah M., 42"
              },
              {
                quote: "I was told my severe fatigue and brain fog were just 'being a mom in your 40s.' Finding SheRises changed my life.",
                author: "Jessica T., 45"
              },
              {
                quote: "Finally, a provider who understands hormone therapy isn't one-size-fits-all. The personalized care is incredible.",
                author: "Elena R., 51"
              }
            ].map((t, idx) => (
              <div key={idx} className="space-y-6 text-center md:text-left">
                <Heart className="w-6 h-6 text-[#B89047] mx-auto md:mx-0 opacity-50" />
                <p className="font-['Playfair_Display'] text-xl leading-relaxed italic text-[#F4F1EB]/90">"{t.quote}"</p>
                <p className="text-sm tracking-widest uppercase text-[#B89047]">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-6">Questions?</h2>
        </div>

        <div className="space-y-4 mb-24">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-[#132A24]/10 bg-white"
            >
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <span className="font-['Playfair_Display'] text-xl">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-[#B89047] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="p-6 pt-0 text-[#132A24]/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-12 bg-white border border-[#B89047]/30 shadow-xl">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-4">Ready to be heard?</h2>
          <p className="mb-8 text-[#132A24]/70">Schedule your comprehensive consultation today.</p>
          <button className="bg-[#132A24] text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#1B3B33] transition-colors duration-300 inline-flex items-center gap-2">
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}