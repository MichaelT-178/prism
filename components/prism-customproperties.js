Prism.languages.customproperties = {
    "prop-orange": {
        pattern: /^\s*[^=\s]+/m,
        lookbehind: true,
        alias: 'orange',
        greedy: true,
    },
	"prop-green": {
		pattern: /(?<==).*/,
		lookbehind: true,
		alias: 'green',
		greedy: true
	},
    'prop-comment': {
		pattern: /(^|[^\\])#.*/,
		lookbehind: true,
		greedy: true
	}
}