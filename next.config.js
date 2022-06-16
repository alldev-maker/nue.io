const withVideos = require('next-videos')

module.exports = {
    trailingSlash: true,
    // https://github.com/aws-amplify/amplify-hosting/issues/1987#issuecomment-885217940
    env: {
        BUILD_ENV: process.env.BUILD_ENV,
        GTM_ID: process.env.GTM_ID,
        DEMO_BOOK_URL: process.env.DEMO_BOOK_URL,
        SENDGRID_CONTENT_DOWNLOAD_FORM: process.env.SENDGRID_CONTENT_DOWNLOAD_FORM
    },
    async rewrites() {
        return [
            {
                source: '/revops',
                destination: '/revops/articles'
            }
        ]
    }
};

module.exports = withVideos(module.exports);