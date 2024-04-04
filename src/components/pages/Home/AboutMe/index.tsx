export const AboutMe: React.FC = () => {
  return (
    <section
      id={"about-me"}
      className={"flex flex-col justify-center items-center px-8"}
    >
      <h1 className={"text-section-title mb-7"}>ABOUT ME</h1>

      <p className={"text-secondary text-center text-base"}>
        Front-end Engineer with 2 years of hands-on experience in web and mobile
        development with ReactJS and React Native, and integration with Firebase
        and crash/performance monitoring. I have created and published an
        e-commerce app from scratch with 5000+ users. I also have experience
        with back-end development with NestJS, databases such as PostgreSQL and
        MongoDB and with the message broker software RabbitMQ.
      </p>
    </section>
  );
};
