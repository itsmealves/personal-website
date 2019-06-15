/**
* Configure your Gatsby site with this file.
*
* See: https://www.gatsbyjs.org/docs/gatsby-config/
*/

module.exports = {
	siteMetadata: {
		title: 'Gabriel Alves',
		description: 'Placeholder description',
		author: 'Gabriel Alves'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/settings/typography`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `posts`,
			  path: `${__dirname}/src/`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
			  	name: `gatsby-starter-default`,
			  	short_name: `starter`,
			  	start_url: `/`,
			  	background_color: `#663399`,
			  	theme_color: `#663399`,
			  	display: `minimal-ui`,
				icon: `src/assets/images/icon.png`
			}
		},
		{
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/layouts/index`)
            }
        },
		`gatsby-plugin-offline`,
		`gatsby-transformer-remark`
	],
}
