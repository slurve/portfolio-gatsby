module.exports = {
  siteMetadata: {
    title: `Tom Rose, Philadelphia WordPress Developer`,
    description: `Tom Rose is a Philadelphia-based freelance WordPress developer with over 20 years experience building websites with HTML, CSS and JavaScript.`,
    author: `@slurve`,
    siteUrl: `https://tomrose.dev`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WordPress",
        fieldName: "wp",
        url: "https://slurved.wpengine.com/graphql",
        refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tom Rose`,
        short_name: `tomrose`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ff2d00`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139394121-1",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
