import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Leaf, 
  Heart, 
  Sparkles, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight,
  Quote,
  Activity,
  Baby,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// --- Configuration & Data ---
const NAV_LINKS = [
  { name: "Our Approach", href: "#approach" },
  { name: "Services", href: "#services" },
  { name: "Meet Scarlett", href: "#provider" },
  { name: "Stories", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

const SERVICE_PILLARS = [
  {
    title: "Rise Above Hormone Imbalance",
    subtitle: "Hormone Health",
    description: "Specialized hormone care through every stage — adolescence, early reproductive years, late 30s and 40s, postpartum, perimenopause, and postmenopause. Hormones are the pulse of your health.",
    icon: Moon,
    items: ["Adolescent & early adulthood", "Late reproductive years", "Postpartum support", "Perimenopause & postmenopause"]
  },
  {
    title: "Rise Above Metabolic Disease",
    subtitle: "Metabolic Health",
    description: "Through advanced testing and a root-cause method, we help reverse metabolic dysfunction, not just manage it. We believe reversal is possible.",
    icon: Activity,
    items: ["Insulin resistance", "PCOS", "Prediabetes", "Thyroid disease", "Weight dysregulation"]
  },
  {
    title: "Rise Into Sexual Wellness",
    subtitle: "Sexual Health",
    description: "Compassionate, expert care for your sexual health at every age — from education and prevention to treatment of complex conditions and trauma-informed healing.",
    icon: Heart,
    items: ["Reproductive health promotion", "Prevention of infertility", "Sexual pain conditions", "PTSD & trauma-informed care"]
  },
  {
    title: "Rise to Your Reproductive Potential",
    subtitle: "Fertility",
    description: "We care about your fertility and help you achieve your goals within a whole-health framework — from contraceptive empowerment to fertility promotion and infertility root-cause management.",
    icon: Baby,
    items: ["Contraceptive care", "Reproductive life planning", "Fertility preservation", "Infertility management"]
  },
  {
    title: "Rise Beyond Your Age",
    subtitle: "Aging Well",
    description: "Aging is not decline — it is evolution. We help you thrive across every decade with a whole-health approach to long-term vitality.",
    icon: Sun,
    items: ["Bone & muscle health", "Sexual function", "Sleep health", "Dementia prevention", "Vaginal health"]
  },
  {
    title: "We Rise With You",
    subtitle: "Primary Women's Health",
    description: "Full coverage for all your primary women's health needs — routine screenings, preventive care, and expert management of everyday concerns.",
    icon: Shield,
    items: ["Cervical & breast cancer screening", "GYN biopsy management", "Hereditary cancer screening", "Vaginitis & UTI", "Irregular menses"]
  },
];

const ROUTINE_SERVICES = [
  "Well Woman Care", "Contraceptive Care", "Abnormal Bleeding",
  "Vaginitis (Acute & Chronic)", "Menopause", "Hormone Health",
  "Metabolic Dysfunction", "Sexual Health", "Fertility", "Aging Well"
];

const TESTIMONIALS = [
  {
    quote: "For the first time in my life, someone actually listened to every symptom and connected the dots. Scarlett changed how I understand my own body.",
    author: "A. M., Northwest Arkansas",
  },
  {
    quote: "I had been dismissed by so many providers. At SheRises I finally felt seen. The depth of knowledge and the genuine warmth here is unlike anything I've experienced.",
    author: "R. T., Northwest Arkansas",
  },
  {
    quote: "Scarlett's whole-health approach completely reversed what I was told was permanent metabolic dysfunction. I have my life back.",
    author: "L. H., Northwest Arkansas",
  },
];

const FAQS = [
  {
    question: "What does SheRises specialize in?",
    answer: "SheRises specializes in hormones and metabolic health across every stage of a woman's life — from adolescence through postmenopause. We also provide full-spectrum primary women's health care including gynecology, sexual health, fertility, and aging well."
  },
  {
    question: "What makes SheRises different from a standard OB/GYN?",
    answer: "SheRises recenters the care experience entirely around you. Through advanced testing and a root-cause, whole-health method, Scarlett blends modern and traditional therapeutic modalities to find the perfect individualized treatment — not a one-size-fits-all prescription. We believe reversal of metabolic dysfunction is possible."
  },
  {
    question: "Who is Scarlett Grandy?",
    answer: "Scarlett Grandy is a Certified Nurse Midwife and Board Certified Women's Health Nurse Practitioner with 16 years specializing in women's whole-health. She is the leading specialist in women's hormone and metabolic health in Northwest Arkansas, a member of The Menopause Society, and a certified Equine Assisted Growth and Learning Specialist."
  },
  {
    question: "What is a Certified Nurse Midwife?",
    answer: "\"Midwife\" literally means \"with woman.\" As a midwife, Scarlett's clinical approach is fundamentally different from the routine medical model — she places you at the center of the care exchange. She holds the space, brings the tools, and paves the way for every woman to find optimal health."
  },
  {
    question: "Do you offer telehealth or in-person appointments?",
    answer: "Please reach out to our office directly to learn about current appointment options and availability. We'd love to connect with you."
  }
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Components ---

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-border/50 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
          <span className="font-serif text-2xl font-medium tracking-tight text-foreground">SheRises</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
            Book Consultation
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <Button className="mt-4 rounded-full w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Bringing a New Model of Women's Healthcare to Northwest Arkansas</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6">
              You deserve care that <span className="text-primary italic">puts you first.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              SheRises Health specializes in hormones and metabolic health across every stage of a woman's life — blending modern and traditional medicine to find the treatment individualized to you.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base h-14 px-8 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                Begin Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 border-primary/20 hover:bg-primary/5 text-foreground">
                Explore Our Approach
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl">
              <img 
                src="/images/hero.png" 
                alt="Warm radiant consultation room" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-background p-6 rounded-2xl shadow-xl border border-border/50 max-w-[240px]"
            >
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} />)}
              </div>
              <p className="text-sm font-medium text-foreground">"I finally feel in control of my body again."</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg className="w-4 h-4 text-accent fill-accent" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function MissionSection() {
  return (
    <section id="approach" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="text-primary font-medium uppercase tracking-widest text-sm mb-6">Our Approach</motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-8">
            SheRises recenters care <br className="hidden md:block"/>
            <span className="text-primary italic">around you.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
            Through advanced testing and a whole-health, root-cause method, SheRises helps you achieve your optimal health goals. We believe that reversal of metabolic dysfunction is possible — not just management of it.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
            We blend modern and traditional therapeutic modalities to find the perfect treatment, individualized to you. No rushed appointments. No dismissed symptoms. Just deep, compassionate expertise that gives you back control over your body.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Full Spectrum Women's Health</h2>
            <p className="text-lg text-muted-foreground">Every stage. Every concern. Expert medicine guided by root-cause wisdom.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_PILLARS.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group bg-card border border-border p-8 rounded-3xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{service.subtitle}</p>
              <h3 className="text-xl font-serif font-medium text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{service.description}</p>
              <ul className="space-y-1.5">
                {service.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Routine services strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-secondary/30 rounded-3xl p-10"
        >
          <p className="text-center text-primary font-medium uppercase tracking-widest text-sm mb-6">Complete Primary Women's Health Coverage</p>
          <div className="flex flex-wrap justify-center gap-3">
            {ROUTINE_SERVICES.map((s) => (
              <span key={s} className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground font-medium">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SanctuarySection() {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
              <img 
                src="/images/sanctuary.png" 
                alt="Serene waiting area" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif mb-6 text-background">
              You are the driver.<br/><span className="text-primary italic">We hold the space.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-background/70 mb-6 leading-relaxed">
              Scarlett founded and created SheRises to bring women a new model of care. At SheRises, the patient drives the experience. Scarlett holds the space, brings the tools, and paves the way for every woman to find her optimal health.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-background/70 mb-8 leading-relaxed">
              The word midwife literally means "with woman." That philosophy shapes every appointment — deeply attentive, unhurried, and completely centered on you.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Your Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RootCauseSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium uppercase tracking-widest text-sm mb-4">Advanced Testing. Root-Cause Medicine.</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Reversal is possible.<br/><span className="text-primary italic">We've seen it.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Most providers manage chronic conditions. SheRises works to reverse them. Through comprehensive advanced testing, we identify the root cause of your metabolic and hormonal dysfunction — then build a treatment plan that is entirely yours.
            </motion.p>
            <motion.ul variants={fadeInUp} className="space-y-4 mb-8">
              {[
                "Advanced hormone panels & testing",
                "Metabolic dysfunction assessment",
                "Individualized treatment protocols",
                "Whole-health, root-cause method",
                "Blend of modern & traditional modalities"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                    <Leaf className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-full overflow-hidden p-4 border border-border/50 max-w-md mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/images/holistic.png" 
                  alt="Holistic approach to women's health" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProviderSection() {
  return (
    <section id="provider" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-background rounded-[3rem] overflow-hidden border border-border/50 shadow-xl shadow-foreground/5">
          <div className="grid lg:grid-cols-2">
            <div className="h-full min-h-[400px]">
              <img 
                src="/images/doctor.png" 
                alt="Scarlett Grandy" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">Meet Your Provider</p>
              <h2 className="text-4xl font-serif text-foreground mb-1">Scarlett Grandy</h2>
              <p className="text-primary font-semibold mb-1">CNM, WHNP-BC</p>
              <p className="text-muted-foreground text-sm mb-8">Certified Nurse Midwife &amp; Board Certified Women's Health Nurse Practitioner</p>
              
              <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Scarlett deliberately chose nursing as her primary route to women's healthcare because she wanted to bring women a fundamentally different experience — one centered on the patient, not the provider.
                </p>
                <p>
                  Through 16 years of advanced education and clinical practice, Scarlett has become the leading specialist in women's hormone and metabolic health in Northwest Arkansas. She blends deep trust in evidence-based medicine with the wisdom of integrative approaches to find what truly works for each individual woman.
                </p>
                <p>
                  She is a member of The Menopause Society and the International Society for the Study of Women's Sexual Health, and a certified Equine Assisted Growth and Learning Specialist — offering alternative healing pathways for women with sexual trauma histories.
                </p>
              </div>

              <div className="font-serif text-2xl text-foreground italic">Scarlett Grandy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">Patient Stories</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Words from our women</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-secondary/20 p-8 rounded-3xl relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
              <p className="text-foreground leading-relaxed relative z-10 mt-6 mb-8 font-medium">"{t.quote}"</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-widest text-sm mb-4">Common Questions</p>
          <h2 className="text-4xl font-serif text-foreground mb-4">What to Expect at SheRises</h2>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left p-6 md:p-8 gap-4"
              >
                <h3 className="text-lg font-serif text-foreground">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: open === i ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed px-6 md:px-8 pb-6 md:pb-8">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
        >
          Ready to rise above?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-foreground/80 mb-10"
        >
          Take back control of your health. SheRises is currently accepting new patients.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="rounded-full h-14 px-10 bg-background text-primary hover:bg-background/90 text-lg shadow-xl shadow-background/10">
            Request an Appointment
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-14 px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-serif text-2xl font-medium tracking-tight">SheRises</span>
            </Link>
            <p className="text-background/60 leading-relaxed">
              Changing women's healthcare. Specializing in hormones and metabolic health across every stage of a woman's life.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">Location</h4>
            <ul className="space-y-4 text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary/70" />
                <span>Northwest Arkansas</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">Credentials</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li>Certified Nurse Midwife (CNM)</li>
              <li>Board Certified WHNP</li>
              <li>Member, The Menopause Society</li>
              <li>Member, ISSWSH</li>
              <li>EAGALA Specialist</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>© {new Date().getFullYear()} SheRises Health. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <SanctuarySection />
        <RootCauseSection />
        <ProviderSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
