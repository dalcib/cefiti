const {
  override,
  addDecoratorsLegacy,
  useEslintRc,
  enableEslintTypescript,
  //addBundleVisualizer,
  //addWebpackAlias,
} = require('customize-cra')

module.exports = override(
  // config => console.log(config.module.rules),
  addDecoratorsLegacy(),
  useEslintRc(),
  enableEslintTypescript()
  /*
  config => (process.env.BUNDLE_VISUALIZE == 1 ? addBundleVisualizer()(config) : config),
  addWebpackAlias({ ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js") }
  */
)
