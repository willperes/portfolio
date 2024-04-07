import NextHead from "next/head";

type Props = {
  title: string;
  description: string;
};

export const Head: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
  description,
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      {children}
    </NextHead>
  );
};
