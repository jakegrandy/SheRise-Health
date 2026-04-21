import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import generationsOfCare from "@assets/generations_of_care_1776802252403.png";

const BASE = import.meta.env.BASE_URL;

export default function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#132A24] font-['Outfit'] selection:bg-[#E8D5A5] selection:text-[#132A24]">

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-10 md:px-16">
        <div className="font-['Playfair_Display'] text-2xl tracking-wide text-white mix-blend-difference">
          SheRises Health
        </div>
        <div className="hidden md:flex gap-12 text-sm tracking-widest uppercase text-white mix-blend-difference">
          <a href="#philosophy" className="hover:opacity-60 transition-opacity">Philosophy</a>
          <a href="#systems" className="hover:opacity-60 transition-opacity">The 5 Systems</a>
          <a href="#provider" className="hover:opacity-60 transition-opacity">Scarlett Grandy</a>
        </div>
        <a
          href="#book"
          className="text-sm tracking-widest uppercase border-b border-transparent hover:border-white transition-colors text-white mix-blend-difference pb-1"
        >
          Inquire
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#F4F1EB]">
        <div className="absolute inset-0 z-0">
          <img
            src={generationsOfCare}
            alt="Two generations holding hands"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center -mt-6">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-24 tracking-tight drop-shadow-sm">
            Reimagining Women's Health
          </h1>

          <a
            href="#book"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.2em] uppercase text-white border border-white/40 hover:bg-white hover:text-[#132A24] transition-all duration-500 translate-y-8"
          >
            <span className="relative z-10 flex items-center gap-3">
              Request a Consultation
              <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500" />
            </span>
          </a>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="border-b border-[#132A24]/10 bg-[#FCFBF9]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm tracking-widest uppercase text-[#132A24]/60">
          <span>Board Certified WHNP</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-[#B89047]/40" />
          <span>Certified Nurse Midwife</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-[#B89047]/40" />
          <span>20+ Years Clinical Practice</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-[#B89047]/40" />
          <span>Northwest Arkansas</span>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 md:py-48 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="mb-24 md:mb-32">
          <span className="text-[#B89047] text-sm tracking-[0.3em] uppercase block mb-8">The Philosophy</span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-light leading-tight max-w-3xl">
            Medicine that listens, investigates, and restores.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
          <div className="space-y-6">
            <h3 className="font-['Playfair_Display'] text-2xl">Unrushed Time</h3>
            <p className="text-[#132A24]/70 leading-relaxed font-light text-lg">
              Healing cannot happen in fifteen minutes. We protect the time necessary to hear your complete story and understand your unique physiology.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-['Playfair_Display'] text-2xl">Comprehensive Investigation</h3>
            <p className="text-[#132A24]/70 leading-relaxed font-light text-lg">
              We look beyond basic labs, utilizing advanced functional testing to uncover the root causes of exhaustion, weight resistance, and mood shifts.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-['Playfair_Display'] text-2xl">Refined Protocols</h3>
            <p className="text-[#132A24]/70 leading-relaxed font-light text-lg">
              Your body is a complex ecosystem. We design bespoke interventions that harmonize your systems rather than simply masking individual symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* The 5 Systems */}
      <section id="systems" className="bg-[#F4F1EB] py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#B89047] text-sm tracking-[0.3em] uppercase block mb-16 text-center">Clinical Framework</span>

          <div className="space-y-24">
            {[
              {
                num: "01",
                title: "Hormonal Harmony",
                copy: "Navigating perimenopause and menopause with precision. We optimize your hormones using bioidentical therapies, restoring energy, clarity, and libido.",
              },
              {
                num: "02",
                title: "Metabolic Restoration",
                copy: "Addressing weight resistance at its source. By evaluating insulin sensitivity, thyroid function, and cellular energy, we rebuild your metabolic flexibility.",
              },
              {
                num: "03",
                title: "Nervous System Calibration",
                copy: "Chronic stress rewires the body. We assess cortisol rhythms and provide strategies to shift your system from survival mode back to a state of rest and repair.",
              },
              {
                num: "04",
                title: "Reproductive Health",
                copy: "Expert management of complex gynecological concerns. From irregular cycles to pelvic pain, we offer nuanced, specialized care tailored to your anatomy.",
              },
              {
                num: "05",
                title: "Strategic Lifestyle",
                copy: "The foundation of lasting health. We curate personalized guidance on nutrition, movement, and recovery that fits seamlessly into a demanding life.",
              },
            ].map(({ num, title, copy }) => (
              <div key={num} className="border-t border-[#132A24]/10 pt-12">
                <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-6">
                  {num}. {title}
                </h3>
                <p className="text-xl md:text-2xl text-[#132A24]/70 leading-relaxed font-light">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section id="provider" className="py-32 md:py-48 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0">
            <img
              src={`${BASE}images/sherise-luxury-provider.png`}
              alt="Scarlett Grandy, CNM, WHNP-BC"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-[#132A24]/10 translate-x-4 translate-y-4 -z-10" />
          </div>

          <div className="space-y-8">
            <span className="text-[#B89047] text-sm tracking-[0.3em] uppercase block">The Practitioner</span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-light">Scarlett Grandy</h2>
            <p className="text-sm tracking-widest uppercase text-[#132A24]/50 pb-4 border-b border-[#132A24]/10">CNM, WHNP-BC</p>

            <div className="space-y-6 text-[#132A24]/80 leading-relaxed text-lg font-light pt-4">
              <p>
                With over two decades of clinical experience in women's health, Scarlett founded SheRises to offer the caliber of care she knew her patients deserved.
              </p>
              <p>
                Having witnessed countless women being dismissed by conventional medicine—told their fatigue, weight gain, and mood changes were "just part of getting older"—she created a sanctuary for deep investigation and genuine healing.
              </p>
              <p>
                Her approach merges rigorous clinical expertise with an unparalleled commitment to patient advocacy, ensuring every woman who walks through her doors feels seen, heard, and wholly cared for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#132A24] text-[#F4F1EB] py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-4xl mx-auto space-y-32">
          <blockquote className="text-center space-y-8">
            <p className="font-['Playfair_Display'] text-3xl md:text-5xl font-light leading-snug italic">
              "For the first time in years, I felt completely heard. The depth of knowledge and the level of care is simply unmatched. Scarlett didn't just treat my symptoms; she restored my vitality."
            </p>
            <footer className="text-sm tracking-widest uppercase text-[#E8D5A5]">
              — Sarah M., Patient Since 2023
            </footer>
          </blockquote>

          <div className="w-px h-16 bg-[#E8D5A5]/20 mx-auto" />

          <blockquote className="text-center space-y-8">
            <p className="font-['Playfair_Display'] text-3xl md:text-5xl font-light leading-snug italic">
              "The investment in my health through SheRises has been life-changing. The bespoke approach and unhurried appointments are exactly what healthcare should be."
            </p>
            <footer className="text-sm tracking-widest uppercase text-[#E8D5A5]">
              — Elena R., Patient Since 2024
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-32 md:py-48 px-8 md:px-16 text-center">
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-light">Begin Your Journey</h2>
          <p className="text-xl text-[#132A24]/70 font-light leading-relaxed">
            We are currently accepting a limited number of new patients. Request a consultation to discover if the SheRises approach is right for you.
          </p>
          <div className="pt-8">
            <a
              href="mailto:hello@sheriseshealth.com"
              className="group inline-flex items-center justify-center px-12 py-5 text-sm tracking-[0.2em] uppercase text-[#F4F1EB] bg-[#132A24] hover:bg-[#1B3B33] transition-colors duration-500"
            >
              <span className="flex items-center gap-3">
                Request a Consultation
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#132A24]/10 py-16 px-8 md:px-16 text-sm tracking-widest uppercase text-[#132A24]/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-['Playfair_Display'] text-xl tracking-wide normal-case text-[#132A24]">
            SheRises Health
          </div>
          <div className="flex gap-8">
            <a href="mailto:hello@sheriseshealth.com" className="hover:text-[#132A24] transition-colors">Contact</a>
            <a href="#" className="hover:text-[#132A24] transition-colors">Location</a>
            <a href="#" className="hover:text-[#132A24] transition-colors">Privacy</a>
          </div>
          <div>&copy; {new Date().getFullYear()} SheRises Health</div>
        </div>
      </footer>

    </div>
  );
}
