import Button, { ButtonVariant, ButtonSize } from "@/components/shared/Button";
import { redirectToMail } from "@/utils/redirectToMail";

export const Header: React.FC = () => {
  return (
    <header
      className={
        "fixed h-16 sm:h-20 w-full px-8 flex flex-row items-center justify-center bg-neutral-50/40 dark:bg-neutral-950/40 backdrop-blur-sm z-10"
      }
    >
      <div
        className={
          "w-full max-w-[1024px] flex flex-row justify-between items-center"
        }
      >
        <h1
          className={
            "font-praise text-primary responsive-text-3xl cursor-default select-none"
          }
        >
          WP
        </h1>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.SMALL}
          onClick={redirectToMail}
        >
          Contact
        </Button>
      </div>
    </header>
  );
};
