import Head from "next/head";
import { Inter } from "next/font/google";
import { Hero } from "@/components/pages/Home/Hero";
import { AboutMe } from "@/components/pages/Home/AboutMe";

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
        <div className={"content-max-width flex flex-col gap-24"}>
          <Hero />
          <AboutMe />
        </div>
      </main>
    </>
  );
}
