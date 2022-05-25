module.exports = {
  siteMetadata: {
    title: "0xZakk",
    siteUrl: "https://zkf.io",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Inter", "Newsreader"],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: "./content",
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        // path: "./src/pages/",
        path: "./content/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-obsidian",
            options: {
              //titleToUrl: (title) => `/${title}`,
              // markdownFolder: `${__dirname}/content`,
            },
          },
        ],
      },
    },
  ],
};
