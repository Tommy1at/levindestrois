const { handleImage } = require('./config/eleventy/image');

module.exports = (cfg) => {
  cfg.addPassthroughCopy({ 'src/assets/fonts': 'fonts' });
  cfg.addPassthroughCopy('src/**/*.{gif,svg}');
  //  cfg.addPassthroughCopy('src/assets/images');
  cfg.addPassthroughCopy('src/assets/favicon.ico');
  cfg.addPassthroughCopy('src/assets/manifest.json');
  cfg.addPassthroughCopy('src/assets/styles');

  if (process.env.NODE_ENV === 'development') {
    cfg.addPassthroughCopy('src/**/*.{jpg,jpeg,png,webp}');
  }

  cfg.addCollection('d3', function (collectionApi) {
    return collectionApi.getFilteredByGlob('d3/');
  }); // adfrol

  /* Filters */
  cfg.addFilter('jsAsset', (name) => {
    return manifest[name];
  });

  /* shortcodes */
  cfg.addNunjucksAsyncShortcode('Image', handleImage);

  return {
    // use nunjucks as the main template engine.
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    // change default inputs and output directories.
    dir: {
      input: 'src',
      //      styles: "styles",
      //      images: "images",
      //      d3: "d3",
      output: '_site',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
  };
};
