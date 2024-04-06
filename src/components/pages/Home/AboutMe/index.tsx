export const AboutMe: React.FC = () => {
  return (
    <section
      id={"about-me"}
      className={"flex flex-col justify-center items-center"}
    >
      <h1 className={"text-section-title mb-8 sm:mb-12"}>ABOUT ME</h1>

      <p className={"text-secondary text-center responsive-text-sm"}>
        Mobile Engineer/Frontend Developer with more than 2 years of hands-on
        experience in web and mobile development with ReactJS and React Native,
        and integration with Firebase and crash/performance monitoring. I have
        created and published an e-commerce app from scratch with more than 5000
        users. I also have experience with backend development with NestJS,
        databases such as PostgreSQL and MongoDB and with the message broker
        software RabbitMQ.
      </p>
    </section>
  );
};
