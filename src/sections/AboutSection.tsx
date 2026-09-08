import { ArrowUpRight } from "lucide-react";
import Container from "../components/common/Container";

function AboutSection() {
  return (
    <section id="a-propos" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative overflow-hidden rounded-[40px] bg-[#0B3D91] p-8 sm:p-10">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#27B33E]" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4B400]">
                  EduNova Fondation
                </p>

                <div className="mt-16">
                  <p className="font-serif text-4xl italic leading-tight text-white sm:text-5xl">
                    Commencer petit.
                    <br />
                    <span className="text-[#27B33E]">
                      Grandir avec ambition.
                    </span>
                  </p>
                </div>

                <div className="mt-12 h-px w-full bg-white/20" />

                <p className="mt-5 text-sm leading-6 text-white/75">
                  Éducation, compétences et innovation au service d'un
                  meilleur avenir.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#27B33E]">
              À propos d'EduNova
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0B3D91] sm:text-4xl lg:text-5xl">
              Éduquer, accompagner et donner les moyens de réussir.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
              EduNova accompagne les élèves, étudiants et jeunes dans leur
              parcours académique et professionnel grâce à des services
              accessibles, pratiques et adaptés à leurs besoins.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Notre vision est simple : commencer petit, grandir avec ambition
              et contribuer à un meilleur avenir par l'éducation, les
              compétences et l'innovation.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B3D91] transition-colors hover:text-[#27B33E]"
            >
              Découvrir EduNova
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;