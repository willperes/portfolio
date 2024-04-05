import { RichText } from "./RichText";

export type WorkExperience = {
    companyLogo: string;
    companyName: string;
    position: string;
    startDate: Date;
    endDate: Date | null;
    description: RichText[];
    keywords: string[];
}
