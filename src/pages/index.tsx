import { Inter } from "next/font/google";
import { Hero } from "@/components/pages/Home/Hero";
import { AboutMe } from "@/components/pages/Home/AboutMe";
import { Experience } from "@/components/pages/Home/Experience";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/pages/Home/Projects";
import { Head } from "@/components/shared/Head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head
        title={"Willian Peres | Home"}
        description={
          "Welcome to Willian Peres's portfolio. Explore my experiences, projects, and learn more about me. Contact me to discuss collaboration opportunities"
        }
      />
      <Header />
      <main className={"flex justify-center header-padding"}>
        <div
          className={
            "content-max-width content-padding flex flex-col gap-20 sm:gap-24 my-20 sm:my-24"
          }
        >
          <Hero />
          <AboutMe />
          <Experience />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
