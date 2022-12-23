const eleventyOptions = require( "./_eleventy/config/options" );

/* eslint-disable-next-line valid-jsdoc */
/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
module.exports = ( eleventyConfig ) =>
{
	// Passthrough
	eleventyConfig.addPassthroughCopy( { "src/static": "/" } );

	// Plugins
	eleventyConfig.addPlugin( require( "@11ty/eleventy-plugin-webc" ) );

	return eleventyOptions;
};
