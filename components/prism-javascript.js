Prism.languages.javascript = Prism.languages.extend('clike', {
	'yellow-js': {
		pattern: /(?<=<)RouterBtn|Router(?=>)|Router(?= basename)|Routes(?=>)|(?<=<)Route|(?<=<)HomePage|(?<=<)AppRouter|(?<=<)SecondPage|(?<=<)\bLink\b(?!Btn)|(?<=\/)Link(?!Btn)/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	'blue-js': {
		pattern: /#root/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	'red-js': {
		pattern: /(?<=\.)\b(?:baseURL|defaults|common|headers|lastname|firstname|value|data)\b|input|table|thead|(?<=<|\/)tr|(?<=<|\/)th|(?<=<|\/)td|tbody|base(?=:)|defineConfig|(?<=import\s)vue|(?<=import\s)react|AppRouter|buttonText(?=:)|router(?=;)|SecondPage(?=;)|(?<=\/)button|RouterBtn|path(?=:)|(?<= default) axios|style|router-link|router-view|createRouter|createWebHistory|component(?=:)|history|default|createApp|(?<!\()\bApp\b|type|required|script|LinkBtn|Home(?=\s+from)|SecondPage(?=\s+from)|(?<=<)p|p(?=>)|(?<=import\s+)router|content|theme|extend|fontFamily|sans(?![\-])|plugins|ReactDOM(?!\.)|React(?!DOM)|HomePage|Router|Routes|Route|BrowserRouter|Link(?=\s\})|div|languages|customyaml|useState|(?<=<)button|(?<=\\)button|SecondPage(?=:)/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	'red-js-two': {
		pattern: /\b(?:pattern|lookbehind|alias|greedy)(?=:)/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	'green-js': {
		pattern: /"yaml-red"|"yaml-gray"|"yaml-green"|"yaml-orange"/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	'orange-js': {
		pattern: /buttonText(?==)|basename|setup|scoped|class(?=\s*=)|to(?=\s*=)|10px 20px|white|path(?==)|#|4px|16px|.home-title|red|Arial|sans-serif|purple|.test-header|(?<=:)buttonText|\.button|:hover|element|className|onClick|1280px|2rem|v-model(?==)|placeholder(?==)|key(?==)|(?<=@)click/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	'gray-js': {
		pattern: /(?<=v-model=)(firstName|lastName|searchFirstName)|(?<=click=)(createUser|searchUser)|user(?= in)|(?<=in )users|router(?=\s*=\s*)|router|path(?=[,}])|(?<=class)=|:(?=\s*to)|display:|padding:|color:|background-color:|border:|border-radius:|text-align:|text-decoration:|App|font-size:|inline-block|<|font-family:|App|:(?=path|buttonText|to|class)|max-width:|margin:|padding:|text-align:/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	'teal-js': {
		pattern: /:|007bff|0056b3|\/\/.*?\/\//,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	'purple-js': {
		pattern: /=(?=>)|(?<==)>|@tailwind|@import|v-if|(?<=user )in|v-for/,
		lookbehind: true,
		alias: 'red',
		greedy: true
	},
	'html-comment': {
		pattern: /<!-- Search section -->|<!-- Display results in a table -->|<!-- Drop Tables Button -->/,
		lookbehind: true,
		alias: 'grey',
		greedy: true
	},
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|const|continue|debugger|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': {
		pattern: RegExp(
			/(^|[^\w$])/.source +
			'(?:' +
			(
				// constant
				/NaN|Infinity/.source +
				'|' +
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source +
				'|' +
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
				'|' +
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
				'|' +
				// decimal bigint
				/\d+(?:_\d+)*n/.source +
				'|' +
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			) +
			')' +
			/(?![\w$])/.source
		),
		lookbehind: true
	},
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
});

Prism.languages.javascript['punctuation'] = /[{}[\];(),]/
Prism.languages.javascript['operator'] = /[!=](?!=?>)=?|&&?|\|\|?|[?*~^%]/,

Prism.languages.javascript['class-name'][0].pattern = /(\b(extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;


Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: RegExp(
			// lookbehind
			// eslint-disable-next-line regexp/no-dupe-characters-character-class
			/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
			// Regex pattern:
			// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
			// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
			// with the only syntax, so we have to define 2 different regex patterns.
			/\//.source +
			'(?:' +
			/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
			'|' +
			// `v` flag syntax. This supports 3 levels of nested character classes.
			/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
			')' +
			// lookahead
			/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
		),
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|const|continue|debugger|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string-property': {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?!yaml-red["'])(?!yaml-orange["'])(?!yaml-green["'])(?!yaml-gray["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	}
});


// Prism.languages.insertBefore('javascript', 'operator', {
// 	'literal-property': {
// 		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
// 		lookbehind: true,
// 		alias: 'property'
// 	},
// });

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;
