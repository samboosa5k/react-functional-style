const { createWebpackAliases } = require('./webpack.helpers');

module.exports = createWebpackAliases({
    '@apps': 'apps',
    '@assets': 'src/assets',
    '@/assets': 'src/assets',
    '@src': 'src',
    '@/animation': 'src/animation',
    '@/atoms': 'src/atoms',
    '@/molecules': 'src/molecules',
    '@/organisms': 'src/organisms',
    '@/templates': 'src/templates',
    '@/theme': 'src/theme',
});
