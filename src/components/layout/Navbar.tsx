import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { EDUNOVA } from "../../lib/constants";

const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Formations", href: "#formations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky left-0 top-0 z-50 w-full bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#accueil"
          className="flex items-center"
          aria-label="EduNova Fondation - Accueil"
        >
          <img
            src="/images/logo/edunova-logo.jpeg"
            alt="EduNova Fondation"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors ${
                index === 0
                  ? "text-[#0B3D91]"
                  : "text-slate-700 hover:text-[#0B3D91]"
              }`}
            >
              {item.label}

              {index === 0 && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#27B33E]" />
              )}
            </a>
          ))}
        </div>

        {/* WhatsApp desktop */}
        <a
          href={`https://wa.me/${EDUNOVA.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-[#27B33E] px-5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#209634] lg:inline-flex"
        >
          <FaWhatsapp size={18} />
          Nous écrire
        </a>

        {/* Mobile menu */}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B3D91] lg:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="mx-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl lg:hidden">
          <div className="flex flex-col">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#F4F8FC] hover:text-[#0B3D91]"
              >
                {item.label}
              </a>
            ))}

            <a
              href={`https://wa.me/${EDUNOVA.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-[#27B33E] px-5 text-sm font-semibold text-white"
            >
              Nous écrire sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;