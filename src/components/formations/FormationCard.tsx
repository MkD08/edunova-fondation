import { ArrowRight } from "lucide-react";
import type { Formation } from "../../data/formations";

interface FormationCardProps {
  formation: Formation;
}

function FormationCard({ formation }: FormationCardProps) {
  const Icon = formation.icon;

  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-slate-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,61,145,0.08)]">
      <div className="flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF9F1] text-[#27B33E]">
          <Icon size={25} strokeWidth={1.8} />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-[#0B3D91]/40">
          Formation
        </span>
      </div>

      <h3 className="mt-7 text-2xl font-bold text-[#0B3D91]">
        {formation.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {formation.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-xs font-semibold text-[#27B33E]">
          {formation.details}
        </span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0B3D91]/15 text-[#0B3D91] transition-all group-hover:border-[#27B33E] group-hover:bg-[#27B33E] group-hover:text-white">
          <ArrowRight size={16} />
        </span>
      </div>
    </article>
  );
}

export default FormationCard;