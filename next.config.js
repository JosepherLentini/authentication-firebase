/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
        @import "./src/styles/SASS/Typography.scss";
        @import "./src/styles/SASS/colors.scss";
        @import "./src/styles/SASS/mixins.scss";
        @import "./src/styles/SASS/dimensions.scss";
        @import "./src/styles/SASS/standards.scss";
        `,
  },
};

module.exports = nextConfig;
