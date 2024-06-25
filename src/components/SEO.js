import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, lang = 'en', meta = [], keywords = [], image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title || "Fileo";
  const metaImage = image || `${site.siteMetadata.siteUrl}/images/fileologo.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": site.siteMetadata.siteUrl,
    "name": site.siteMetadata.title,
    "description": metaDescription,
    "logo": metaImage,
  };

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={defaultTitle}
      meta={[
        { name: 'description', content: metaDescription },
        { property: 'og:title', content: defaultTitle },
        { property: 'og:description', content: metaDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: metaImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: site.siteMetadata?.author || '' },
        { name: 'twitter:title', content: defaultTitle },
        { name: 'twitter:description', content: metaDescription },
        { name: 'twitter:image', content: metaImage },
      ]
        .concat(
          keywords.length > 0 ? { name: 'keywords', content: keywords.join(', ') } : []
        )
        .concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <link rel="canonical" href={site.siteMetadata.siteUrl} />
    </Helmet>
  );
};

export default SEO;
