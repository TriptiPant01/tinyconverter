module.exports = function tiny(string) {
	if(typeof string !== "string") throw new TypeError("It must be a string");
		return string.replace(/\s/g, '')
}