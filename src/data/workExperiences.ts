import { RichText } from "@/types/RichText";
import { WorkExperience } from "@/types/WorkExperience";

export const workExperiences: WorkExperience[] = [
    {
        companyName: "Frexco",
        companyLogo: "/images/frexco.jpg",
        position: "Full-stack Engineer",
        startDate: new Date(2022, 8, 1),
        endDate: new Date(2024, 2, 31),
        description: [
            {
                type: RichText.Type.UnorderedList,
                content: [
                    "Developed and published an e-commerce mobile application using React Native from scratch with more than 5000 users.",
                    "Maintained and implemented new features in a mobile application with React Native and libraries such as React Navigation, Redux, Styled-Components.",
                    "Pull requests reviews.",
                    "Implemented a digital wallet for receiving refunds and extra credits, and integrated it for product purchases.",
                    "Maintained and implemented microservices crucial for e-commerce, including ordering, payments and refunds."
                ]
            }
        ],
        keywords: ["React Native", "React JS", "NestJS", "Microservices", "PostgreSQL", "MongoDB", "RabbitMQ", "Firebase", "App Store Connect", "Google Play Console"]
    },
    {
        companyName: "Frexco",
        companyLogo: "/images/frexco.jpg",
        position: "Front-end Engineer",
        startDate: new Date(2022, 2, 1),
        endDate: new Date(2024, 7, 30),
        description: [
            {
                type: RichText.Type.UnorderedList,
                content: [
                    "Implemented new features for an e-commerce application with ReactJS, Redux, Styled-Components.",
                    "Maintained and implemented features of a dashboard platform with ReactJS."
                ]
            }
        ],
        keywords: ["ReactJS", "Redux", "Material UI (MUI), Styled-Components"]
    }
];