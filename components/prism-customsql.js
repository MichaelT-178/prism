Prism.languages.customsql = {
	"sql-purple": {
		pattern: /\b(?!SCHEMA\b|PUBLIC\b)[A-Z]+\b/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	"sql-green": {
		pattern: /['"].*?['"]/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	}
}