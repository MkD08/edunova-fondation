interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
  }
  
  function SectionTitle({
    eyebrow,
    title,
    description,
    align = "left",
  }: SectionTitleProps) {
    const alignment =
      align === "center"
        ? "mx-auto max-w-2xl text-center"
        : "max-w-2xl text-left";
  
    return (
      <div className={alignment}>
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#27B33E]">
            {eyebrow}
          </p>
        )}
  
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0B3D91] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
  
        {description && (
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    );
  }
  
  export default SectionTitle;