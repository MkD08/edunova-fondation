import {
    FileSpreadsheet,
    GraduationCap,
    MoreHorizontal,
    type LucideIcon,
  } from "lucide-react";
  
  export interface Formation {
    id: string;
    title: string;
    description: string;
    details: string;
    icon: LucideIcon;
  }
  
  export const formations: Formation[] = [
    {
      id: "bureautique",
      title: "Formation bureautique",
      description:
        "Apprenez à utiliser les principaux outils bureautiques pour vos études et votre activité professionnelle.",
      details: "Word • Excel • PowerPoint",
      icon: FileSpreadsheet,
    },
    {
      id: "soutien",
      title: "Cours de soutien",
      description:
        "Un accompagnement pour consolider vos connaissances et préparer efficacement vos examens.",
      details: "Brevet • Baccalauréat",
      icon: GraduationCap,
    },
    {
      id: "autres",
      title: "Autres formations",
      description:
        "Découvrez progressivement d'autres formations conçues pour développer des compétences utiles.",
      details: "Nouvelles formations à venir",
      icon: MoreHorizontal,
    },
  ];