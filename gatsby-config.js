module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Adam's Website`,
                short_name: `website`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#02b0aa`,
                display: `standalone`,
                icon: `static/favicon.png`,
            },
        },
    ],
};
