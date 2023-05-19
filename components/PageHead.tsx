import Head from "next/head";

export default function PageHead() {
  const title = "Mahir Mahdi";
  const description = "Built by Mahir Mahdi";
  const ogTitle = "Mahir Mahdi";
  const ogUrl = "http://localhost:3000";
  const ogImage = "/logo-light-512.png";
  const ogType = "image/png";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="logo-light-512.png" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
}
