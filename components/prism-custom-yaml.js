Prism.languages.fxml = {
    "yaml-red": {
        pattern: /.*:/,
		lookbehind: true,
		alias: 'red',
		greedy: true
    },
    "yaml-gray": {
        pattern: /[:\-]/,
		lookbehind: true,
		alias: 'gray',
		greedy: true
    },
    "yaml-green": {
        pattern: /: (?!true|false\b)(.*)/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
     "yaml-orange": {
        pattern: /: (true|false)/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    }
}