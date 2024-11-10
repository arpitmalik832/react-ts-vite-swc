import { defineConfig, mergeConfig } from 'vite';

import commonConfig from './build_utils/vite/configs/vite.common.mjs';
import buildStatsConfig from './build_utils/vite/configs/vite.buildStats.mjs';
import visualizerConfig from './build_utils/vite/configs/vite.visualizer.mjs';
import { ERR_NO_APP_ENV_FLAG } from './build_utils/config/logs.mjs';

function getAddons() {
  const addVisualizer = process.env.INCLUDE_VISUALIZER === 'true';
  const addBuildStats = process.env.INCLUDE_BUILD_STATS === 'true';

  const configs = [];
  if (addVisualizer) configs.push(visualizerConfig);
  if (addBuildStats) configs.push(buildStatsConfig);

  let result = {};
  if (configs.length > 1) {
    result = configs.reduce((acc, config) => mergeConfig(acc, config));
  } else if (configs.length === 1) {
    [result] = configs;
  }

  return result;
}

function getConfig() {
  if (!process.env.APP_ENV) {
    throw new Error(ERR_NO_APP_ENV_FLAG);
  }

  return defineConfig(mergeConfig(commonConfig, getAddons()));
}

export default getConfig;
