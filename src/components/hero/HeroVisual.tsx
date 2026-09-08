import { ArrowUpRight } from "lucide-react";

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[560px] lg:h-[500px]">
      {/* Decorative green shape */}
      <div className="absolute right-0 top-12 h-48 w-48 rounded-full bg-[#27B33E] sm:h-56 sm:w-56" />

      {/* Main visual frame */}
      <div className="absolute left-[8%] top-5 h-[390px] w-[62%] overflow-hidden rounded-[45%_45%_20%_20%] bg-[#F4F8FC] sm:h-[440px]">
        <div className="grid h-full grid-rows-2 gap-2 p-2">
          <div className="overflow-hidden rounded-[45%_20%_10%_10%] bg-slate-200">
            <img
              src="/images/hero/student-study.png"
              alt="Étudiant en apprentissage"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="overflow-hidden rounded-[10%_10%_10%_35%] bg-slate-200">
              <img
                src="/images/hero/computer.png"
                alt="Formation informatique"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[10%_10%_35%_10%] bg-slate-200">
              <img
                src="/images/hero/learning.png"
                alt="Apprentissage"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Green message */}
      <div className="absolute right-0 top-[28%] z-10 flex h-44 w-44 items-center justify-center rounded-full bg-[#27B33E] p-8 text-center text-white shadow-lg sm:h-52 sm:w-52">
        <div>
          <p className="font-serif text-xl italic leading-tight sm:text-2xl">
            L’avenir
            <br />
            se construit
            <br />
            ici !
          </p>

          <div className="mx-auto mt-3 h-px w-16 bg-white/80" />
        </div>
      </div>

      {/* Decorative yellow star */}
      <div className="absolute left-[25%] top-0 z-20 text-[#F4B400]">
        <span className="text-4xl">★</span>
      </div>

      {/* Decorative curved line */}
      <div className="absolute bottom-2 right-[12%] h-16 w-40 rounded-full border-b-4 border-[#0B3D91]/15 rotate-[-8deg]" />

      {/* Small arrow */}
      <div className="absolute bottom-8 right-3 hidden h-11 w-11 items-center justify-center rounded-full bg-white text-[#0B3D91] shadow-md sm:flex">
        <ArrowUpRight size={19} />
      </div>
    </div>
  );
}

export default HeroVisual;