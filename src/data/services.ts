import {
    BookOpen,
    FileText,
    Laptop,
    PenLine,
    Printer,
    Camera,
    type LucideIcon,
  } from "lucide-react";
  
  export interface Service {
    id: string;
    title: string;
    description: string;
    details: string;
    icon: LucideIcon;
  }
  
  export const services: Service[] = [
    {
      id: "soutien-scolaire",
      title: "Cours de soutien",
      description:
        "Un accompagnement adapté pour renforcer les connaissances et progresser.",
      details: "Brevet • Baccalauréat • Tous niveaux",
      icon: BookOpen,
    },
    {
      id: "bureautique",
      title: "Formation bureautique",
      description:
        "Développez les compétences essentielles pour travailler efficacement avec les outils bureautiques.",
      details: "Word • Excel • PowerPoint",
      icon: Laptop,
    },
    {
      id: "services-rapides",
      title: "Services rapides",
      description:
        "Des services pratiques pour vos besoins scolaires, professionnels et administratifs.",
      details: "Impression • Photocopie • Scan",
      icon: Printer,
    },
    {
      id: "photo-minute",
      title: "Photo minute",
      description:
        "Réalisez rapidement vos photos d'identité pour vos différents besoins.",
      details: "Photos d'identité rapides",
      icon: Camera,
    },
    {
      id: "redaction",
      title: "Rédaction professionnelle",
      description:
        "Un accompagnement pour préparer des documents professionnels clairs et soignés.",
      details: "CV • Lettre de motivation",
      icon: PenLine,
    },
    {
      id: "papeterie",
      title: "Papeterie",
      description:
        "Retrouvez les fournitures essentielles pour l'école, les études et le bureau.",
      details: "Fournitures scolaires et bureau",
      icon: FileText,
    },
  ];