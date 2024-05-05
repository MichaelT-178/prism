Prism.languages.python = {
    'always-blue': {
        pattern: /(\badd_car\b|@routes_blueprint|\bappend\b|\bjoin\b|\bremove_car_by_id\b|\bremove\b|\bmain\b|\bCar(?=\()|\bCarList(?=\())|\bitems(?=\(\))|connect(?=\()|cursor(?=\()|execute(?=\()|commit(?=\()|close(?=\()|read(?=\()|loads(?=\()/,
        alias: 'blue'
    },
    'always-blue-two': {
        pattern: /\b(Flask|SQLAlchemy|.route|from_object|init_db|CORS|register_blueprint|create_app|run|abspath|dirname|get|init_app|app_context|create_all|Column|String|Blueprint|add|User|jsonify|filter_by|first|drop)(?=\()/,
        alias: 'blue'
    },
    'self-orange': {
        pattern: /(?<=\()\bself\b(?=[),])|\b(resources|debug|primary_key|unique|nullable|firstname|lastname|methods)(?==)/,
        alias: 'orange'
    },
    'self-red': {
        pattern: /self(?=\.)|\{(?=self|new_car|car_id|len|key|value|'Michael')|}(?!\s*(for key|return)|[})])|(?<=self\.)\w+\b|(?<=\.)\w+\b/,
        alias: 'red',
    },
    'teal-highlight': {
        pattern: /ValueError|__str__|__len__|__init__/,
        alias: 'teal'
    },
    'always-yellow': {
        pattern: /User(db.Model)/,
        alias: 'yellow'
    },
    'comment': {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true,
        greedy: true
    },
    'file-name': {
        pattern: /file/,
        lookbehind: true,
        greedy: true
    },
    'python-print-stmt': {
        pattern: /\bprint\b(?=\()/,
        lookbehind: true,
        greedy: true
    },
    'string-interpolation': {
        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: true,
        inside: {
            'interpolation': {
                // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: true,
                inside: {
                    'format-spec': {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: true
                    },
                    'conversion-option': {
                        pattern: /![sra](?=[:}]$)/,
                        alias: 'punctuation'
                    },
                    rest: null
                }
            },
            'string': /[\s\S]+/
        }
    },
    'triple-quoted-string': {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: true,
        alias: 'string'
    },
    'string': {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: true
    },
    'function': {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: true
    },
    'class-name': {
        pattern: /(\bclass\s+)\w+/i,
        lookbehind: true
    },
    'decorator': {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: true,
        alias: ['annotation', 'punctuation'],
        inside: {
            'punctuation': /\./
        }
    },
    'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    'boolean': /\b(?:False|None|True)\b/,
    'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    'punctuation': /[{}[\];(),.:]/
};

Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;

Prism.languages.py = Prism.languages.python;