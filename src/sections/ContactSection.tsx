import { ArrowRight, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "../components/common/Container";
import { EDUNOVA } from "../lib/constants";

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B3D91] pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28"
    >
      {/* ================================
          COURBURE SUPÉRIEURE
          ================================ */}

      {/* Bande verte ondulée */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[95px] w-[125%] -translate-x-1/2 -translate-y-[52%] rotate-[-3deg] bg-[#27B33E]"
      />

      {/* Fine séparation blanche */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[105px] w-[125%] -translate-x-1/2 -translate-y-[68%] rotate-[-3deg] rounded-[50%] bg-white"
      />

      {/* Cercle décoratif vert en haut à droite */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#27B33E]"
      />

      {/* Cercle décoratif en bas à gauche */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-[50px] border-white/5"
      />

      <Container>
        <div className="relative z-10">
          {/* Introduction */}
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4B400]">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Besoin d'un service ou d'une formation ?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Contactez EduNova Fondation directement sur WhatsApp ou
              retrouvez-nous à Nouakchott.
            </p>
          </div>

          {/* Informations */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <MapPin className="text-[#27B33E]" size={24} />

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-white/50">
                Localisation
              </p>

              <p className="mt-2 text-sm leading-6 text-white">
                Entre carrefour Kossovo et Kandahar
                <br />
                Nouakchott
              </p>
            </div>

            <a
              href={`tel:${EDUNOVA.phone.replace(/\s/g, "")}`}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <Phone className="text-[#27B33E]" size={24} />

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-white/50">
                Téléphone
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                {EDUNOVA.phone}
              </p>
            </a>

            <a
              href={`https://wa.me/${EDUNOVA.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <FaWhatsapp className="text-[#27B33E]" size={24} />

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-white/50">
                WhatsApp
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                {EDUNOVA.phone}
              </p>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${EDUNOVA.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#27B33E] px-7 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#209634]"
            >
              <FaWhatsapp size={19} />
              Nous contacter sur WhatsApp
            </a>

            <a
              href={EDUNOVA.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Suivre notre chaîne WhatsApp
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;