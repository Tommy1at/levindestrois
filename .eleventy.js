module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('*.css');
  
  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
      data: '_data'
    }
  };
};
