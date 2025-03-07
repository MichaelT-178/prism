Prism.languages.customsql = {
	"sql-purple": {
		pattern: /\b(?!SCHEMA\b|PUBLIC\b|INFORMATION_SCHEMA|USERS|use\b)[A-Z]+\b/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	"sql-green": {
		pattern: /['"].*?['"]/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	"sql-comment": {
		pattern: /(--.*?$|\/\*[\s\S]*?\*\/)/m,
		greedy: true,
		alias: 'comment'
	}
};
