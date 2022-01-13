const path = require(`path`);
const toPath = (filePath) => path.join(process.cwd(), filePath);

/**
 * @type {import('@storybook/react/types').StorybookConfig}
 **/
module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath(`node_modules/@emotion/react`),
          'emotion-theming': toPath(`node_modules/@emotion/react`),
        },
      },
    };
  },
};
