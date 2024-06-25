module.exports = {
  siteMetadata: {
    title: `Fileo`,
    description: `Fileo helps small business owners manage their accounting with ease. Get started today and simplify your tax returns and financial statements.`,
    author: `James Roper`,
    siteUrl: `https://fileo.co.uk`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fileo`,
        short_name: `Fileo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3182CE`,
        display: `standalone`,
        icon: `src/images/fileologo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`, // Optional: For making your site work offline and more robust.
  ],
};
