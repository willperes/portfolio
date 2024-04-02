import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["700"],
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
        }`,
        }}
      />
    </>
  );
};
