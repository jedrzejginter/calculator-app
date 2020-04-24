module.exports = (api) => {
  const presets = ["next/babel", "@emotion/babel-preset-css-prop"];
  const plugins = ["emotion"];

  // It's important to keep data-testid's in CI environment,
  // because tests will fail if they're removed.
  if (api.env("production") && !api.env("test")) {
    plugins.unshift("babel-plugin-jsx-remove-data-test-id");
  }

  return { presets, plugins };
};
