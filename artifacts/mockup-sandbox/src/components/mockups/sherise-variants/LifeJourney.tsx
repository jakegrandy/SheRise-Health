import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Flower2, Sparkles, Heart, Sun, MapPin, CalendarHeart, Activity, ArrowUpRight } from 'lucide-react';

const STAGES = [
  {
    id: 'adolescence',
    title: "Early Years",
    subtitle: "Adolescence & Early Adulthood",
    description: "Building the foundation. Understanding your cycle, managing early symptoms, and establishing a baseline for your metabolic and hormonal health.",
    services: ["Cycle Education", "PCOS Screening", "Contraception Counseling"],
    icon: Leaf,
    color: "bg-[#e8d8d1]",
    textColor: "text-[#8a5a4a]"
  },
  {
    id: 'reproductive',
    title: "Reproductive Years",
    subtitle: "20s to 30s",
    description: "Navigating fertility, family planning, and optimizing your energy. Whether you're planning for pregnancy or focusing on career and vitality, we align your health with your life.",
    services: ["Fertility Preservation", "Metabolic Optimization", "Pre-conception Care"],
    icon: Flower2,
    color: "bg-[#d4dfcd]",
    textColor: "text-[#4a5c43]"
  },
  {
    id: 'transitional',
    title: "The Shift",
    subtitle: "Late 30s to 40s",
    description: "The subtle changes begin. We focus on preserving your energy, managing early shifts in hormones, and protecting your metabolic health before larger transitions occur.",
    services: ["Hormone Baseline Testing", "Thyroid Health", "Weight Dysregulation Support"],
    icon: Sparkles,
    color: "bg-[#e9dcc5]",
    textColor: "text-[#8a724a]"
  },
  {
    id: 'perimenopause',
    title: "The Transition",
    subtitle: "Perimenopause",
    description: "A time of profound change. We provide comprehensive support to minimize symptoms, stabilize mood and energy, and protect your cardiovascular and bone health.",
    services: ["Symptom Management", "Insulin Resistance Care", "Hormone Therapy Options"],
    icon: Activity,
    color: "bg-[#d1bfae]",
    textColor: "text-[#6b584b]"
  },
  {
    id: 'postmenopause',
    title: "Aging Well",
    subtitle: "Postmenopause & Beyond",
    description: "Embracing a new equilibrium. Our focus shifts to longevity, sexual health, vitality, and ensuring you feel strong and vibrant in your body.",
    services: ["Longevity Planning", "Bone Health", "Sexual Health & Wellness"],
    icon: Sun,
    color: "bg-[#c5d0d4]",
    textColor: "text-[#4b5a6b]"
  }
];

export function LifeJourney() {
  const [activeStage, setActiveStage] = useState(STAGES[0].id);
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-screen bg-[#f9f6f0] text-[#2c3e35] font-sans overflow-x-hidden selection:bg-[#c87961] selection:text-[#f9f6f0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#f9f6f0]/80 backdrop-blur-md border-b border-[#a3b19b]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-[#c87961]" />
            <span className="text-xl font-medium tracking-wide">SheRises</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#journey" className="text-sm font-medium hover:text-[#c87961] transition-colors">Your Journey</a>
            <a href="#guide" className="text-sm font-medium hover:text-[#c87961] transition-colors">Your Guide</a>
            <button className="px-6 py-2.5 bg-[#2c3e35] text-[#f9f6f0] rounded-full text-sm font-medium hover:bg-[#c87961] transition-all duration-300 shadow-md">
              Start your journey
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a3b19b]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#c87961]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#e8d8d1] text-[#8a5a4a] text-sm font-medium mb-8 tracking-wider uppercase">
              We are changing women's healthcare
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#2c3e35] leading-tight mb-8">
              Where are you <br className="hidden md:block" />
              <span className="italic text-[#c87961]">in your journey?</span>
            </h1>
            <p className="text-xl text-[#4a5c43] max-w-2xl mx-auto mb-12 leading-relaxed">
              Healthcare centered entirely around you, at every stage of life. 
              We believe reversal of metabolic dysfunction is possible, and that your story matters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-[#c87961] text-white rounded-full text-lg font-medium hover:bg-[#b06751] transition-all duration-300 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center">
                Book a consultation <ArrowRight className="w-5 h-5" />
              </button>
              <a href="#journey" className="px-8 py-4 bg-transparent border-2 border-[#a3b19b] text-[#2c3e35] rounded-full text-lg font-medium hover:bg-[#a3b19b]/10 transition-all duration-300 w-full sm:w-auto text-center">
                Find your path
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative h-[400px]">
          <img 
            src="/__mockup/images/journey-hero.png" 
            alt="Botanical abstract" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.classList.add('bg-gradient-to-r', 'from-[#a3b19b]', 'to-[#c87961]');
            }}
          />
        </div>
      </section>

      {/* The Journey Section */}
      <section id="journey" className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2c3e35] mb-6">
              A path mapped <span className="italic">just for you</span>
            </h2>
            <p className="text-lg text-[#4a5c43] max-w-2xl mx-auto">
              Your body’s needs shift over time. Instead of generic services, we provide care designed specifically for your current life stage.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 relative">
            {/* Timeline connector for desktop */}
            <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-[#a3b19b]/0 via-[#a3b19b] to-[#a3b19b]/0 -translate-x-1/2" />

            {STAGES.map((stage, index) => {
              const isEven = index % 2 === 0;
              const Icon = stage.icon;

              return (
                <motion.div 
                  key={stage.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`lg:col-span-5 flex flex-col ${isEven ? 'lg:col-start-1 lg:items-end lg:text-right' : 'lg:col-start-8 lg:items-start lg:text-left'} relative mb-16 lg:mb-24`}
                >
                  {/* Timeline Node */}
                  <div className={`hidden lg:flex absolute top-8 ${isEven ? '-right-[calc(16.666%+24px)]' : '-left-[calc(16.666%+24px)]'} w-12 h-12 rounded-full ${stage.color} items-center justify-center shadow-lg border-4 border-white z-10`}>
                    <Icon className={`w-5 h-5 ${stage.textColor}`} />
                  </div>

                  <div className="bg-[#f9f6f0] rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-[#a3b19b]/20 w-full relative overflow-hidden group">
                    <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 ${stage.color} rounded-full blur-[60px] opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-full ${stage.color} flex items-center justify-center mb-6 lg:hidden`}>
                        <Icon className={`w-5 h-5 ${stage.textColor}`} />
                      </div>
                      
                      <span className={`text-sm font-semibold tracking-wider uppercase mb-2 block ${stage.textColor}`}>
                        {stage.title}
                      </span>
                      <h3 className="text-2xl font-serif text-[#2c3e35] mb-4">{stage.subtitle}</h3>
                      <p className="text-[#4a5c43] mb-8 leading-relaxed">
                        {stage.description}
                      </p>
                      
                      <div className={`flex flex-col gap-3 ${isEven ? 'lg:items-end' : 'lg:items-start'}`}>
                        <span className="text-xs font-semibold tracking-widest text-[#a3b19b] uppercase">Relevant Focus Areas</span>
                        {stage.services.map((service, sIdx) => (
                          <div key={sIdx} className={`flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-[#2c3e35] shadow-sm border border-[#f9f6f0]`}>
                            <Sparkles className="w-3 h-3 text-[#c87961]" />
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-24 px-6 bg-[#2c3e35] text-[#f9f6f0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#a3b19b 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden">
                <img 
                  src="/__mockup/images/guide-scarlett.png" 
                  alt="Scarlett Grandy" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.classList.add('bg-[#a3b19b]');
                  }}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#c87961] p-8 rounded-3xl shadow-2xl max-w-xs hidden sm:block">
                <Heart className="w-8 h-8 text-white mb-4" />
                <p className="text-white font-serif text-xl italic">
                  "I've spent 16 years listening to women. You are not meant to feel rushed or dismissed."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
                Meet your guide, <br />
                <span className="italic text-[#a3b19b]">Scarlett Grandy</span>
              </h2>
              <div className="w-20 h-1 bg-[#c87961] mb-8 rounded-full" />
              
              <div className="space-y-6 text-lg text-[#d4dfcd] leading-relaxed mb-10">
                <p>
                  I'm a Certified Nurse Midwife and Board Certified Women's Health Nurse Practitioner. But more importantly, I am someone who believes that true health care takes time, deep listening, and a holistic approach.
                </p>
                <p>
                  As a leading specialist in hormone and metabolic health in Northwest Arkansas, my mission is simple: to help you reverse metabolic dysfunction and reclaim your vitality, no matter what stage of life you are traversing.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-[#3a4d43] p-5 rounded-2xl">
                  <span className="block text-[#a3b19b] text-sm uppercase tracking-wider mb-2">Experience</span>
                  <span className="text-2xl font-serif text-white block">16+ Years</span>
                  <span className="text-sm text-[#d4dfcd]">in Women's Health</span>
                </div>
                <div className="bg-[#3a4d43] p-5 rounded-2xl">
                  <span className="block text-[#a3b19b] text-sm uppercase tracking-wider mb-2">Memberships</span>
                  <span className="text-sm text-white block leading-snug">The Menopause Society<br/>ISSWSH</span>
                </div>
              </div>

              <button className="px-8 py-4 bg-[#f9f6f0] text-[#2c3e35] rounded-full text-lg font-medium hover:bg-[#e9dcc5] transition-all duration-300 shadow-lg flex items-center gap-2">
                Schedule a consultation <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#c87961] text-white text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Leaf className="w-12 h-12 mx-auto text-[#f9f6f0]/50 mb-8" />
          <h2 className="text-5xl md:text-6xl font-serif mb-8">Ready to begin?</h2>
          <p className="text-xl mb-12 text-[#f9f6f0]/90">
            Take the first step on a new path for your health. Care centered entirely around you, in Northwest Arkansas.
          </p>
          <button className="px-10 py-5 bg-[#f9f6f0] text-[#c87961] rounded-full text-xl font-medium hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto">
            Book your visit <ArrowUpRight className="w-6 h-6" />
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2c25] text-[#a3b19b] py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <Leaf className="w-6 h-6 text-[#c87961]" />
            <span className="text-xl font-medium tracking-wide">SheRises</span>
          </div>
          <p className="text-sm">
            Hormone & Metabolic Health in Northwest Arkansas
          </p>
          <p className="text-xs opacity-60 mt-4">
            © {new Date().getFullYear()} SheRises Health. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
