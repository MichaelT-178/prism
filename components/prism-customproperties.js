Prism.languages.customproperties = {
    "prop-orange": {
        pattern: /^\s*[^=\s]+/,
        lookbehind: true,
        alias: 'orange',
        greedy: true,
    },
	"prop-green": {
		pattern: /(?<==).*/,
		lookbehind: true,
		alias: 'green',
		greedy: true
	}
}