import GitHubIcon from "../../../../public/icons/github.svg";
import InstagramIcon from "../../../../public/icons/instagram.svg";
import LinkedInIcon from "../../../../public/icons/linkedin.svg";

export const Footer: React.FC = () => {
  return (
    <footer
      className={
        "flex flex-row gap-10 justify-center items-center pt-6 pb-16 sm:pt-10 sm:pb-20 bg-white dark:bg-black"
      }
    >
      <a
        href={"https://github.com/willperes"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className={"relative h-4 w-4 text-red"}>
          <GitHubIcon
            aria-label={"Willian Peres on GitHub"}
            className={"text-primary"}
          />
        </div>
      </a>
      <a
        href={"https://instagram.com/willperes_"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className={"relative h-4 w-4"}>
          <InstagramIcon
            aria-label={"Willian Peres on Instagram"}
            className={"text-primary"}
          />
        </div>
      </a>
      <a
        href={"https://github.com/willperes"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className={"relative h-4 w-4"}>
          <LinkedInIcon
            aria-label={"Willian Peres on LinkedIn"}
            className={"text-primary"}
          />
        </div>
      </a>
    </footer>
  );
};
