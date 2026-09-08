import { MessageCircle } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import HeroVisual from "./HeroVisual";
import HeroFeatures from "./HeroFeatures";
import { EDUNOVA } from "../../lib/constants";

function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:min-h-[680px] lg:pt-32"
    >
      <Container>
        <div className="grid items-center gap-12 pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:pb-20">
          {/* Left */}
          <div className="relative z-10">
            <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.18em] text-[#0B3D91]">
              {EDUNOVA.slogan}
            </p>

            <h1 className="animate-fade-up delay-100 mt-5 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0B3D91] sm:text-5xl lg:text-[4.25rem]">
              Des compétences
              <br />
              pour un{" "}
              <span className="text-[#27B33E]">meilleur</span>
              <br />
              <span className="text-[#27B33E]">demain.</span>
            </h1>

            <p className="animate-fade-up delay-200 mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Cours de soutien, formations, services rapides et plus encore.
              EduNova vous accompagne à chaque étape.
            </p>

            <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#services" showArrow>
                Voir nos services
              </Button>

              <a
                href={`https://wa.me/${EDUNOVA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0B3D91]/30 px-6 text-sm font-semibold text-[#0B3D91] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F8FC]"
              >
                <MessageCircle size={18} />
                Contactez-nous
              </a>
            </div>

            <HeroFeatures />
          </div>

          {/* Right */}
          <HeroVisual />
        </div>
      </Container>

      {/* Bottom organic separator */}
      <div className="relative h-20 overflow-hidden">
        <div className="absolute bottom-[-42px] left-[-5%] h-28 w-[110%] rotate-[-2deg] rounded-[50%_50%_0_0] bg-[#0B3D91]" />
        <div className="absolute bottom-[-28px] left-[-5%] h-16 w-[110%] rotate-[-4deg] rounded-[50%_50%_0_0] bg-[#27B33E]" />
      </div>
    </section>
  );
}

export default Hero;