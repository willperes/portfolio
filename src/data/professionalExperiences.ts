import { RichText } from "@/types/RichText";
import { ProfessionalExperience } from "@/types/ProfessionalExperience";

export const professionalExperiences: ProfessionalExperience[] = [
  {
    companyName: "Frexco",
    companyLogo: "/images/frexco.jpg",
    position: "Mobile Developer",
    startDate: new Date(2022, 5, 1),
    endDate: new Date(2024, 2, 31),
    description: [
      {
        type: RichText.Type.Paragraph,
        content:
          "Collaborated closely with the product team to innovate and develop solutions for an e-commerce application, enhancing the user experience and streamlining the purchase process across web and mobile platforms.",
      },
      {
        type: RichText.Type.UnorderedList,
        content: [
          "Spearheaded the development and publication of an e-commerce mobile application from start to finish using React Native, utilized by more than 5000 users.",
          "Implemented deep navigation and push notification functionalities to a React Native application.",
          "Continuously maintained and extended features within the React Native mobile application using libraries such as React Navigation, Redux, and Styled-Components.",
          "Conducted code reviews ensuring code quality and that best practices are being applied.",
          "Implemented a digital wallet for receiving refunds and extra credits, and integrated it for product purchases.",
          "Maintained and implemented microservices crucial for e-commerce, including ordering, payments and refunds using NestJS, PostgreSQL, MongoDB, Docker e RabbitMQ.",
        ],
      },
    ],
    keywords: [
      "TypeScript",
      "React Native",
      "ReactJS",
      "HTML",
      "CSS",
      "Agile methodologies (Scrum)",
      "Version Control",
      "Git",
      "Code Review",
      "Jest",
      "React Testing Library",
      "NestJS",
      "Microservices",
      "PostgreSQL",
      "MongoDB",
      "RabbitMQ",
      "Firebase",
      "App Store Connect",
      "Google Play Console",
      "Redux",
    ],
  },
  {
    companyName: "Frexco",
    companyLogo: "/images/frexco.jpg",
    position: "Front-end Developer",
    startDate: new Date(2022, 2, 1),
    endDate: new Date(2024, 4, 31),
    description: [
      {
        type: RichText.Type.UnorderedList,
        content: [
          "Implemented new features for an e-commerce application with ReactJS, Redux, Styled-Components.",
          "Maintained and implemented features of a dashboard platform with ReactJS.",
          "Created the company website with multiple pages from start to finish using NextJS, Sass, Material UI.",
        ],
      },
    ],
    keywords: [
      "TypeScript",
      "ReactJS",
      "HTML",
      "CSS",
      "Agile methodologies (Scrum)",
      "Version Control",
      "Git",
      "Redux",
      "Material UI (MUI)",
      "Styled-Components.",
    ],
  },
];
