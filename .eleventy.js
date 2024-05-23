module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("d3", function(collectionApi) {
    return collectionApi.getFilteredByGlob("d3/");
  });
  eleventyConfig.addPassthroughCopy('*.css');
  
  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
      data: "_data"
//      d3: "d3",
//      images: "images"
    }
  };
};
