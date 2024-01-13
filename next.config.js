module.exports = {
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS && "/photo-australia",

  // for static export
  output: "export",
};
