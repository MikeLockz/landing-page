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
        endpoint: 'https://Mikelock.us19.list-manage.com/subscribe/post?u=4fc8f5643bc55f08ed4e49be0&amp;id=1b198137d5',
      },
    },
  ],
};
