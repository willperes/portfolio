const aboutMeParagraphs: string[] = [
  "I am a Frontend Developer with over 2 years of experience, specialized in mobile development with React Native and web development with React and NextJS.",
  "Currently, I work as a Mid-level Frontend Developer, where I have been exploring and implementing solutions using micro frontends, expanding my skills and contributing to the development of more scalable and efficient applications. Additionally, I adopt Atomic Design as a design pattern to ensure a reusable and well-organized component structure.",
  "My skills encompass creating robust solutions for both mobile and web, combining modern technology and front-end development best practices. Additionally, I have solid experience in backend development with Node.js, NestJS, GraphQL, PostgreSQL, MongoDB and RabbitMQ.",
];

export const AboutMe: React.FC = () => {
  return (
    <section
      id={"about-me"}
      className={"flex flex-col justify-center items-center"}
    >
      <h1 className={"text-section-title mb-8 sm:mb-12"}>ABOUT ME</h1>

      {aboutMeParagraphs.map((paragraph, index) => {
        let className = "text-secondary text-center responsive-text-sm";
        if (index !== 0) {
          className += " mt-4";
        }
        return (
          <p key={`about-me-paragraph-${index}`} className={className}>
            {paragraph}
          </p>
        );
      })}
    </section>
  );
};
