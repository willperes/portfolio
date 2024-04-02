import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section
      id={"hero"}
      className={"min-h-screen flex flex-col justify-center items-center px-8"}
    >
      <div className={"relative h-64 w-64"}>
        <Image
          alt={"Willian Peres profile picture"}
          src={"https://github.com/willperes.png"}
          fill
          className={"rounded-full"}
        />
      </div>

      <h1
        className={"font-poppins text-primary text-6xl text-center mt-9 mb-5"}
      >
        Willian Peres
      </h1>

      <p className={"font-inter text-secondary text-center"}>
        Passionate Software Engineer with a focus on React Native development,
        dedicated to crafting elegant and user-friendly mobile applications.
      </p>
    </section>
  );
};
