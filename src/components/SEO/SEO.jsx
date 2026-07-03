import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical = "/",
  image = "/images/trioa.png",
  type = "website",
  noIndex = false,
  schema,
}) {
  const siteName = "The Recovery Institute of Arkansas";
  const baseUrl = "https://therecoveryinstituteofarkansas.com";

  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const canonicalUrl = `${baseUrl}${canonical}`;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      <meta name="author" content={siteName} />
      <meta name="theme-color" content="#0d4d73" />


      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;