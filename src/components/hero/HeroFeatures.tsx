import { BookOpen, GraduationCap, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Apprendre",
    subtitle: "aujourd'hui",
  },
  {
    icon: GraduationCap,
    title: "Se former",
    subtitle: "pour demain",
  },
  {
    icon: Users,
    title: "Réussir",
    subtitle: "ensemble",
  },
];

function HeroFeatures() {
  return (
    <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-6">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div key={feature.title} className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFF9F1] text-[#27B33E]">
              <Icon size={19} strokeWidth={2} />
            </div>

            <div>
              <p className="text-xs font-bold text-[#0B3D91] sm:text-sm">
                {feature.title}
              </p>

              <p className="text-[10px] text-slate-500 sm:text-xs">
                {feature.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeroFeatures;