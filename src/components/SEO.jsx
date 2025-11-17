import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = 'RagusaWeb',
  description = 'Portale della Provincia di Ragusa: scopri i 12 comuni, cosa vedere e dove alloggiare con Maltese16 e Correri125.',
  canonical = 'https://www.ragusaweb.com/',
  image = 'https://www.ragusaweb.com/og-image.jpg',
  type = 'website',
  locale = 'it_IT',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="RagusaWeb" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}
