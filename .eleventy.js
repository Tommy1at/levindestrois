module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("d3", function(collectionApi) {
    return collectionApi.getFilteredByGlob("d3/");
  });
  eleventyConfig.addPassthroughCopy('*.css');
  
  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "src/_includes",
      output: "_site",
      data: "src/_data",
//      d3: "d3",
      images: "src/_images"
    }
  };
};
