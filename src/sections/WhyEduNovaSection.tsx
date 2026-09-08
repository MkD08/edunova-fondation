import {
    BadgeCheck,
    Clock3,
    HeartHandshake,
    Lightbulb,
    Users,
    Zap,
  } from "lucide-react";
  import Container from "../components/common/Container";
  import SectionTitle from "../components/common/SectionTitle";
  
  const advantages = [
    {
      icon: Users,
      title: "Équipe expérimentée",
      description: "Un accompagnement humain et attentif.",
    },
    {
      icon: Lightbulb,
      title: "Approche pratique",
      description: "Des services et formations orientés vers des besoins concrets.",
    },
    {
      icon: BadgeCheck,
      title: "Services complets",
      description: "Éducation, formation et services pratiques réunis.",
    },
    {
      icon: Clock3,
      title: "Rapidité",
      description: "Des solutions pensées pour vous faire gagner du temps.",
    },
    {
      icon: Zap,
      title: "Accessibilité",
      description: "Des services conçus pour rester simples et accessibles.",
    },
    {
      icon: HeartHandshake,
      title: "Engagement",
      description: "Un engagement constant pour accompagner votre réussite.",
    },
  ];
  
  function WhyEduNovaSection() {
    return (
      <section className="bg-[#F4F8FC] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <SectionTitle
              eyebrow="Pourquoi EduNova ?"
              title="Un accompagnement pensé pour vous faire avancer."
              description="EduNova place l'apprentissage, les compétences et les besoins de chacun au cœur de son approche."
            />
  
            <div className="grid gap-x-8 sm:grid-cols-2">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
  
                return (
                  <div
                    key={advantage.title}
                    className="border-b border-[#0B3D91]/10 py-6"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#27B33E]">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>
  
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-[#F4B400]">
                          0{index + 1}
                        </span>
  
                        <h3 className="mt-1 font-bold text-[#0B3D91]">
                          {advantage.title}
                        </h3>
  
                        <p className="mt-1 text-sm leading-5 text-slate-600">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    );
  }
  
  export default WhyEduNovaSection;