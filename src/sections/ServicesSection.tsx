import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ServiceCard from "../components/services/ServiceCard";
import { services } from "../data/services";

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F4F8FC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Nos services"
            title="Tout ce dont vous avez besoin, en un seul endroit."
            description="EduNova propose des services éducatifs et pratiques pensés pour accompagner les élèves, étudiants, jeunes et professionnels."
          />

          <div className="hidden h-px w-32 bg-[#27B33E]/40 lg:block" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;