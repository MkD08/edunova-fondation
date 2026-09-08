import { FaWhatsapp } from "react-icons/fa";
import { EDUNOVA } from "../../lib/constants";

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${EDUNOVA.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter EduNova sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#27B33E] text-white shadow-[0_10px_30px_rgba(39,179,62,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#209634] sm:bottom-7 sm:right-7"
    >
      <FaWhatsapp size={27} />
    </a>
  );
}

export default WhatsAppButton;