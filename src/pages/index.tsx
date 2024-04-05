import Head from "next/head";
import { Inter } from "next/font/google";
import { Hero } from "@/components/pages/Home/Hero";
import { AboutMe } from "@/components/pages/Home/AboutMe";
import { Experience } from "@/components/pages/Home/Experience";
import { Footer } from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Willian Peres | Home</title>
        <meta
          name="description"
          content="Welcome to Willian Peres's portfolio. Explore my experiences, projects, and learn more about me. Contact me to discuss collaboration opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"flex justify-center"}>
        <div
          className={
            "content-max-width flex flex-col gap-20 sm:gap-24 px-8 my-20 sm:my-24"
          }
        >
          <Hero />
          <AboutMe />
          <Experience />
        </div>
      </main>
      <Footer />
    </>
  );
}
