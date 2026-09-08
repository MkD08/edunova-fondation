import { ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Container from "../common/Container";
import { EDUNOVA } from "../../lib/constants";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Formations", href: "#formations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B3D91] text-white">
      {/* Courbe verte supérieure */}
      <div
        className="absolute left-1/2 top-0 h-24 w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#27B33E]"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 border-t border-white/10 pt-14 pb-10 sm:pt-16 sm:pb-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {/* Brand */}
            <div>
            <a
                href="#accueil"
                className="inline-flex overflow-hidden rounded-2xl border-2 border-white/80 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                >
                <img
                    src="/images/logo/edunova-logo.jpeg"
                    alt="EduNova Fondation"
                    className="h-16 w-auto object-contain"
                />
                </a>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
                Centre & Services éducatifs et professionnels à Nouakchott.
              </p>

              <p className="mt-5 text-sm font-semibold text-white">
                Éduquer • Innover • Transformer
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F4B400]">
                Navigation
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="w-fit text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F4B400]">
                Retrouvez-nous
              </p>

              <div className="mt-5 flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:bg-white hover:text-[#0B3D91]"
                >
                  <FaFacebookF size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:bg-white hover:text-[#0B3D91]"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:bg-white hover:text-[#0B3D91]"
                >
                  <FaYoutube size={18} />
                </a>
              </div>

              <a
                href={EDUNOVA.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Suivez notre chaîne
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} EduNova Fondation. Tous droits
              réservés.
            </p>

            <p>{EDUNOVA.location}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;