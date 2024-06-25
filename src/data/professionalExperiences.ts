import { RichText } from "@/types/RichText";
import { ProfessionalExperience } from "@/types/ProfessionalExperience";

export const professionalExperiences: ProfessionalExperience[] = [
  {
    companyName: "ModalGR",
    companyLogo: "/images/modalgr.jpg",
    linkedinURL: "https://www.linkedin.com/company/modalgr/",
    position: "Mid-level Frontend Developer",
    startDate: new Date(2024, 5, 1),
    endDate: null,
    description: [
      {
        type: RichText.Type.Paragraph,
        content:
          "Development of credit related front-end and back-end solutions",
      },
    ],
    keywords: [
      "React Native",
      "GraphQL",
      "TypeScript",
      "React.js",
      "Node.js",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    companyName: "Frexco",
    companyLogo: "/images/frexco.jpg",
    linkedinURL: "https://www.linkedin.com/company/frexcoalimentosbr/",
    position: "Frontend Developer",
    startDate: new Date(2022, 2, 1),
    endDate: new Date(2024, 2, 31),
    description: [
      {
        type: RichText.Type.Paragraph,
        content:
          "I collaborated closely with the product team to innovate and develop solutions for an e-commerce application, aiming to enhance user experience and streamline the purchasing process on both mobile and web platforms.",
      },
      {
        type: RichText.Type.UnorderedList,
        content: [
          "Spearheaded the development and publication of an e-commerce mobile application from start to finish using React Native, utilized by more than 5000 users.",
          "Spearheaded the development of advanced features in React Native, such as deep navigation and push notifications, enhancing user interaction. Additionally, I maintained and improved existing functionalities, leveraging libraries including Redux, React Navigation, Firebase (Analytics, Performance Monitoring), Sentry, and Styled-Components.",
          "Developed and maintained various web applications with React.js, including e-commerce platforms, dashboards, and landing pages, delivering value through intuitive and responsive interfaces.",
          "Conducted code reviews ensuring code quality and that best practices are being applied.",
          "Maintained and developed crucial microservices, utilizing Node.js, for an e-commerce application in vital areas such as orders, payments, digital wallets, and refunds, ensuring system reliability and scalability.",
        ],
      },
    ],
    keywords: [
      "TypeScript",
      "React Native",
      "React.js",
      "HTML",
      "CSS",
      "Node.js",
      "NestJS",
      "Microservices",
      "RabbitMQ",
      "PostgreSQL",
      "MongoDB",
      "Agile methodologies (Scrum)",
      "Version Control",
      "Git",
      "Code Review",
      "Jest",
      "React Testing Library",
      "Firebase",
      "App Store Connect",
      "Google Play Console (Play Store)",
      "Redux",
    ],
  },
];
