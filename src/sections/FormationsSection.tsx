import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import FormationCard from "../components/formations/FormationCard";
import { formations } from "../data/formations";

function FormationsSection() {
  return (
    <section
      id="formations"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionTitle
              eyebrow="Nos formations"
              title="Apprendre aujourd'hui. Construire demain."
              description="Des formations pratiques pour développer les compétences dont vous avez besoin."
            />

            <div className="mt-8 h-px w-24 bg-[#F4B400]" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {formations.map((formation) => (
              <FormationCard
                key={formation.id}
                formation={formation}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FormationsSection;