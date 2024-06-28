Prism.languages.swiftcustom = {
    'cust-swift-comment': {
		pattern: /hello/,
		lookbehind: true,
		greedy: true
	},
    "cust-swift-light-purple": {
        pattern: /hello/,
        lookbehind: true,
        alias: 'light-purple',
        greedy: true
    },
    "cust-swift-pink": {
        pattern: /hello/,
        lookbehind: true,
        alias: 'pink',
        greedy: true
    },
    "cust-swift-purple": {
        pattern: /hello/,
        lookbehind: true,
        alias: 'purple',
        greedy: true  
    },
    "cust-swift-light-blue": {
        pattern: /hello/,
        lookbehind: true,
        alias: 'light-blue',
        greedy: true 
    },
    "cust-swift-blue": {
        pattern: /hello/,
        lookbehind: true,
        alias: 'blue',
        greedy: true 
    },
    "cust-swift-green": {
        pattern: /hello/,
        lookbehind: true,
        alias: 'green',
        greedy: true 
    },
    "cust-swift-light-green": {
        pattern: /hello/,
        lookbehind: true,
        alias: 'light-green',
        greedy: true 
    },
    "cust-swift-dark-yellow": {
        pattern: /hello/,
        lookbehind: true,
        alias: 'dark-yellow',
        greedy: true  
    },
    "cust-swift-white": {
        pattern: /hello/,
        lookbehind: true,
        alias: 'dark-yellow',
        greedy: true  
    },
    'cust-swift-string': [
		// https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
		{
			pattern: RegExp(
				/(^|[^"#])/.source
				+ '(?:'
				// single-line string
				+ /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source
				+ '|'
				// multi-line string
				+ /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source
				+ ')'
				+ /(?!["#])/.source
			),
			lookbehind: true,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
					lookbehind: true,
					inside: null // see below
				},
				'interpolation-punctuation': {
					pattern: /^\)|\\\($/,
					alias: 'punctuation'
				},
				'punctuation': /\\(?=[\r\n])/,
				'swift-string': /[\s\S]+/
			}
		}
    ],
    'cust-swift-purple-other': {
        pattern: /hello/,
        lookbehind: true,
        alias: 'purple-other',
        greedy: true
    },
    'cust-swift-light-purple-other': {
        pattern: /hello/,
        lookbehind: true,
        alias: 'light-purple-other',
        greedy: true
    },
    'cust-swift-green-other': {
        pattern: /hello/,
        lookbehind: true,
        alias: 'green-other',
        greedy: true
    },
    'cust-swift-white-other': {
        pattern: /hello/,
        lookbehind: true,
        alias: 'white-other',
        greedy: true
    }
}