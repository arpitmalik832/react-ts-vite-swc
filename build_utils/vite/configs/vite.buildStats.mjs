import buildStats from '../customPlugins/buildStatsPlugin.mjs';

const timestamp = new Date().toISOString().replace(/:/g, '-');
const path = `distInfo/${process.env.IS_STORYBOOK === 'true' ? 'storybook' : 'main'}/${process.env.APP_ENV}/buildStats`;

const config = {
  plugins: [buildStats(`${path}/${timestamp}.json`)],
};

export default config;
