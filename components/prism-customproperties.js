Prism.languages.customproperties = {
	"prop-orange": {
		pattern: /^[^=]+/,
		lookbehind: true,
		alias: 'orange',
		greedy: true
	},
	"prop-green": {
		pattern: /(?<==).*/,
		lookbehind: true,
		alias: 'green',
		greedy: true
	}
}