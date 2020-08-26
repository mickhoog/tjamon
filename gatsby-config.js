/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/tjamon",
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Lora',
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './data/'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-sharp'
  ],
}
