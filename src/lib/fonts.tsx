import { Inter, Poppins, Praise } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const praise = Praise({
  variable: "--font-praise",
  weight: ["400"],
  subsets: ["latin"],
});

export const Fonts: React.FC = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-poppins: ${poppins.style.fontFamily};
          --font-praise: ${praise.style.fontFamily};
        }`,
        }}
      />
    </>
  );
};
