Prism.languages.customswift = {
    'cust-swift-comment': {
		pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
		lookbehind: true,
		greedy: true
	},
    "cust-swift-light-purple": {
        pattern: /^@\S* $|TextField|Form|DatePicker|Section|HStack|ForEach|Button|Picker/,
        lookbehind: true,
        alias: 'light-purple',
        greedy: true
    },
    "cust-swift-pink": {
        pattern: /import/,
        lookbehind: true,
        alias: 'pink',
        greedy: true
    },
    "cust-swift-purple": {
        pattern: /axis/,
        lookbehind: true,
        alias: 'purple',
        greedy: true  
    },
    "cust-swift-light-blue": {
        pattern: /EditDestinationView/,
        lookbehind: true,
        alias: 'light-blue',
        greedy: true 
    },
    "cust-swift-blue": {
        pattern: /newSightName/,
        lookbehind: true,
        alias: 'blue',
        greedy: true 
    },
    "cust-swift-green": {
        pattern: /\$\destination/,
        lookbehind: true,
        alias: 'green',
        greedy: true 
    },
    "cust-swift-light-green": {
        pattern: /import/,
        lookbehind: true,
        alias: 'light-green',
        greedy: true 
    },
    "cust-swift-dark-yellow": {
        pattern: /1/,
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
    ]
}