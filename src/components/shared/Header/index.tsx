import Button, { ButtonVariant, ButtonSize } from "@/components/shared/Button";
import { handleRedirectToMail } from "@/utils/handleRedirectToMail";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header
      className={
        "fixed header-height w-full content-padding flex flex-row items-center justify-center bg-neutral-50/40 dark:bg-neutral-950/40 backdrop-blur-sm z-10"
      }
    >
      <div
        className={
          "w-full max-w-[1024px] flex flex-row justify-between items-center"
        }
      >
        <Link href={"/"}>
          <h1
            className={
              "font-praise text-primary responsive-text-3xl select-none"
            }
          >
            WP
          </h1>
        </Link>
        <Button
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.SMALL}
          onClick={handleRedirectToMail}
        >
          Contact
        </Button>
      </div>
    </header>
  );
};
