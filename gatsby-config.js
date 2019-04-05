require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Poetic Docs`,
    description: `Google Docs as CMS experiment`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0b0c0d`,
        theme_color: `#0b0c0d`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-google-docs",
      options: {
        // Mandatory
        // --------
        foldersIds: [
          "1sohWLGcO3vOi1DgsWHf2iZP7VufP5Cac",
          "118zWm79cCJoRC3S-CCBjLYlUdUFkUeH5",
          "1M6wqCJXjOUAcaOTO4H4sgyk8hwPP7_Mf",
          "1bQRyZv6WoYqtTg-qDTqlorWVeltzXLEJ",
        ], // folders Ids can be found in Google Drive URLs
        config: {
          api_key: process.env.GOOGLE_API_KEY,
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          // Optional
          access_type: "offline",
          redirect_uris: ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"],
          scope: [
            "https://www.googleapis.com/auth/documents.readonly", // GoogleDocs API read access
            "https://www.googleapis.com/auth/drive.metadata.readonly", // GoogleDrive API read access
          ],
          token_path: "google-docs-token.json",
          // Optional
          // --------
          fields: ["createdTime"], // https://developers.google.com/drive/api/v3/reference/files#resource
          // fieldsMapper: { createdTime: "date", name: "title" }, // To rename fields
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
