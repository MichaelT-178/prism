(function (Prism) {


	//MICHAELT-178 REMOVED BOOLEAN AND INT
	var keywords = /\b(?:abstract|assert|break|byte|case|catch|char|(?<!\.)\bclass\b(?!\.)|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|volatile|while|with|yield|(?<=@)FXML|(?<=@)Override)\b/;

	// full package (optional) + parent classes (optional)
	var classNamePrefix = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;

	// based on the java naming conventions
	var className = {
		pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /(?!\bOverride\b)[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
		lookbehind: true,
		inside: {
			'namespace': {
				pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
				inside: {
					'punctuation': /\./
				}
			},
			'punctuation': /\./
		}
	};

	Prism.languages.java = Prism.languages.extend('clike', {
		'string': {
			pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
			lookbehind: true,
			greedy: true
		},
		'primitive-type': {
			pattern: /\b(?:boolean|int|void)\b/,
			lookbehind: true,
			greedy: true
		},
		'keyword': keywords,
		'class-name': [
			className,
			{
				// variables, parameters, and constructor references
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
				lookbehind: true,
				inside: className.inside
			},
			{
				// class names based on keyword
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + classNamePrefix + /[A-Z]\w*\b/.source),
				lookbehind: true,
				inside: className.inside
			}
		],
		'function': [
			Prism.languages.clike.function,
			{
				pattern: /(::\s*)[a-z_]\w*/,
				lookbehind: true
			}
		],
		'number': /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		'operator': {
			pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: true
		},
		'constant': /\b[A-Z][A-Z_\d]+\b/
	});

	Prism.languages.insertBefore('java', 'string', {
		'punctuation': {
			pattern: /application;|javafx\.application\.Application;|javafx\.fxml\.FXMLLoader;|javafx\.scene\.Parent;|javafx\.scene\.Scene;|javafx\.stage\.Stage;|javafx\.fxml\.FXML;|javafx\.scene\.control\.Label;/,
			lookbehind: true,
			alias: 'white',
			greedy: true
		},
		'triple-quoted-string': {
			// http://openjdk.java.net/jeps/355#Description
			pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
			greedy: true,
			alias: 'string'
		},
		'char': {
			pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
			greedy: true
		}
	});

	Prism.languages.insertBefore('java', 'class-name', {
		// 'annotation': {
		// 	pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
		// 	lookbehind: true,
		// 	alias: 'punctuation'
		// },
		'generics': {
			pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
			inside: {
				'class-name': className,
				'keyword': keywords,
				'punctuation': /[<>(),.:]/,
				'operator': /[?&|]/
			}
		},
		// 'import': [
		// 	{
		// 		pattern: RegExp(/(\bimport\s+)/.source + classNamePrefix + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
		// 		lookbehind: true,
		// 		inside: {
		// 			'namespace': className.inside.namespace,
		// 			'punctuation': /\./,
		// 			'operator': /\*/,
		// 			'class-name': /\w+/
		// 		}
		// 	},
		// 	{
		// 		pattern: RegExp(/(\bimport\s+static\s+)/.source + classNamePrefix + /(?:\w+|\*)(?=\s*;)/.source),
		// 		lookbehind: true,
		// 		alias: 'static',
		// 		inside: {
		// 			'namespace': className.inside.namespace,
		// 			'static': /\b\w+$/,
		// 			'punctuation': /\./,
		// 			'operator': /\*/,
		// 			'class-name': /\w+/
		// 		}
		// 	}
		// ],
		// 'namespace': {
		// 	pattern: RegExp(
		// 		/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/
		// 			.source.replace(/<keyword>/g, function () { return keywords.source; })),
		// 	lookbehind: true,
		// 	inside: {
		// 		'punctuation': /\./,
		// 	}
		// }
	});
}(Prism));
