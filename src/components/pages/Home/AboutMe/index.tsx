export const AboutMe: React.FC = () => {
  return (
    <section
      id={"about-me"}
      className={"flex flex-col justify-center items-center"}
    >
      <h1 className={"text-section-title mb-8 sm:mb-12"}>ABOUT ME</h1>

      <p className={"text-secondary text-center responsive-text-sm"}>
        Mobile and Frontend Developer with more than 2 years of hands-on
        experience in mobile development using React Native, experienced in
        Firebase integration and crash/performance monitoring, and web
        development with ReactJS and NextJS. I have created and published an
        e-commerce app using React Native from scratch with more than 5000
        users. I also have experience with backend development using NodeJS
        along with the framework NestJS.
      </p>
    </section>
  );
};
