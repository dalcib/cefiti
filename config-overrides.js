/* eslint-disable @typescript-eslint/no-var-requires */
const {
  override,
  addDecoratorsLegacy,
  useEslintRc,
  //disableChunk,
  enableEslintTypescript,
  //addBundleVisualizer,
  //addWebpackAlias,
} = require('customize-cra')

module.exports = override(
  // config => console.log(config.module.rules),
  addDecoratorsLegacy(),
  useEslintRc(),
  //disableChunk(),
  enableEslintTypescript()
  /*
  config => (process.env.BUNDLE_VISUALIZE == 1 ? addBundleVisualizer()(config) : config),
  addWebpackAlias({ ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js") }
  */
)
