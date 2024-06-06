Prism.languages.sh = {
    "sh-green": {
        pattern: /".*?"/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    "sh-blue": {
        pattern: /mvn/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    }
}