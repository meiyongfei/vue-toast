const path = require("path");
function resolve(dir) {
	return path.join(__dirname, "./", dir);
}

module.exports = {
	//基础 vue.config.js
	publicPath:"./",
	productionSourceMap: false,
	css: {
		extract: false,
		sourceMap: false,
		loaderOptions: {},
		modules: false
	}
};
