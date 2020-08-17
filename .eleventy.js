module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("style/");
  
  return {
    
    dir: {
      input: ".",
	  data: "_data",
      includes: "_includes",
      output: "_site"
    }
  };
  
};