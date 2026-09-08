import type { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group rounded-[24px] border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#27B33E]/20 hover:shadow-[0_18px_45px_rgba(11,61,145,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF9F1] text-[#27B33E] transition-all duration-300 group-hover:bg-[#27B33E] group-hover:text-white">
          <Icon size={22} strokeWidth={1.8} />
        </div>

        <span className="text-xs font-bold tracking-wider text-[#0B3D91]/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#0B3D91]">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {service.description}
      </p>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-xs font-semibold text-[#27B33E]">
          {service.details}
        </p>
      </div>
    </article>
  );
}

export default ServiceCard;