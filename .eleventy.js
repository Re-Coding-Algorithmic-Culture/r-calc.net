module.exports = function(eleventyConfig) {
  
    eleventyConfig.addPassthroughCopy("assets/");
    eleventyConfig.addPassthroughCopy("img/");

 	eleventyConfig.addPassthroughCopy({"pages/**/*.jpg": "img"});
 	eleventyConfig.addPassthroughCopy({"pages/**/*.jpeg": "img"});
 	eleventyConfig.addPassthroughCopy({"pages/**/*.png": "img"});
 	eleventyConfig.addPassthroughCopy({"pages/**/*.gif": "img"});
 	eleventyConfig.addPassthroughCopy({"pages/**/*.mp4": "img"});
 	eleventyConfig.addPassthroughCopy({"pages/**/*.mov": "img"});
	
	const slugify = require("slugify");
	eleventyConfig.addFilter("slug", (input) => {
	  const options = {
	    replacement: "-",
	    remove: /[\/&,+()$~%.'":*?<>{}]/g,
	    lower: true
	  };
	  return slugify(input, options);
	});
  
    return {
    
	    dir: {
	      input: ".",
		  data: "_data",
	      includes: "_includes",
	      output: "_site"
	    }
    };
  
};

