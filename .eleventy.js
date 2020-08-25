module.exports = function(eleventyConfig) {
  
    eleventyConfig.addPassthroughCopy("style/");
    eleventyConfig.addPassthroughCopy("img/");

 	eleventyConfig.addPassthroughCopy({"pages/**/*.jpg": "img"});
 	eleventyConfig.addPassthroughCopy({"pages/**/*.jpeg": "img"});
 	eleventyConfig.addPassthroughCopy({"pages/**/*.png": "img"});
 	eleventyConfig.addPassthroughCopy({"pages/**/*.gif": "img"});
  
    return {
    
	    dir: {
	      input: ".",
		  data: "_data",
	      includes: "_includes",
	      output: "_site"
	    }
    };
  
};