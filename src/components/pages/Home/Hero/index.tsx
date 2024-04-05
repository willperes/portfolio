import Button, { ButtonSize, ButtonVariant } from "@/components/shared/Button";
import Image from "next/image";

export const Hero: React.FC = () => {
  function handleRedirectToMail(): void {
    window.open("mailto:will.peres@outlook.com", "_blank");
  }

  return (
    <section
      id={"hero"}
      className={"flex flex-col justify-center items-center"}
    >
      <div className={"relative h-64 w-64 max-[400px]:h-60 max-[400px]:w-60"}>
        <Image
          alt={"Willian Peres profile picture"}
          src={"https://github.com/willperes.png"}
          fill
          className={"rounded-full"}
        />
      </div>

      <h1
        className={
          "font-poppins font-bold text-primary responsive-text-5xl sm:text-6xl text-center mt-9 mb-5"
        }
      >
        Willian Peres
      </h1>

      <p className={"text-secondary responsive-text-sm text-center mb-8"}>
        Passionate Software Engineer with a focus on React Native development,
        dedicated to crafting elegant and user-friendly mobile applications.
      </p>

      <Button variant={ButtonVariant.SECONDARY} onClick={handleRedirectToMail}>
        Contact Me
      </Button>
    </section>
  );
};
