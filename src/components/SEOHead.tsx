import Head from "next/head";
import { LOGO_URL, LOGO_ALT } from "@/data/nav";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
  imageAlt?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  url,
  image = LOGO_URL,
  imageAlt = LOGO_ALT,
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Space Coast Camera" />
      <meta name="language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Space Coast Camera" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
