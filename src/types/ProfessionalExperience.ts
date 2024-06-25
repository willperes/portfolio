import { RichText } from "./RichText";

export type ProfessionalExperience = {
  companyLogo: string;
  companyName: string;
  linkedinURL: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  description: RichText[];
  keywords: string[];
};
