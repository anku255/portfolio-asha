module.exports = {
  siteMetadata: {
    title: `Asha Sharma - Sketch Artist`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Asha Sharma - Sketch Artist`,
        short_name: `Asha Sharma`,
        start_url: `/`,
        background_color: `#eb78b4`,
        theme_color: `#eb78b4`,
        display: `minimal-ui`,
        icon: `src/images/svg/logo-name.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
