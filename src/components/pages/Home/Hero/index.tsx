import Button, { ButtonSize, ButtonVariant } from "@/components/shared/Button";
import { handleRedirectToMail } from "@/utils/handleRedirectToMail";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <section
      id={"hero"}
      className={"flex flex-col justify-center items-center"}
    >
      <div className={"relative h-60 w-60 min-[400px]:h-64 min-[400px]:w-64"}>
        <Image
          alt={"Willian Peres profile picture"}
          src={"/images/profile-picture.png"}
          fill
          priority
          sizes={"(min-width: 400px) 256px, 240px"}
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
        dedicated to crafting elegant and user-friendly mobile and web
        applications.
      </p>

      <Button variant={ButtonVariant.PRIMARY} onClick={handleRedirectToMail}>
        Contact Me
      </Button>
    </section>
  );
};
