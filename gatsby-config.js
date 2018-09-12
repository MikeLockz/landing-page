module.exports = {
  siteMetadata: {
    title: 'Consensys',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://consensys.us11.list-manage.com/subscribe/post?u=947c9b18fc27e0b00fc2ad055&amp;id=1cafe40383',
      },
    },
  ],
};
