Prism.languages.sh = {
    "sh-green": {
        pattern: /".*?"|'.*?'|stop_spring_boot(?!\()|INT TERM|spring-boot:run/,
		lookbehind: true,
		greedy: true,
        inside: {
            'red-highlight': {
                pattern: /\$\{.*?\}|\$SPRING_BOOT_PID/,
                alias: 'important'
            }
        }
    },
    "sh-blue": {
        pattern: /mvn|clear|stop_spring_boot(?=\()|sleep/,
		lookbehind: true,
		greedy: true
    },
    "sh-red": {
        pattern: /YELLOW|BLUE|NC|SPRING_BOOT_PID|\$\!/,
		lookbehind: true,
		greedy: true  
    },
    "sh-orange": {
        pattern: /0\.1|--quiet/,
		lookbehind: true,
		greedy: true  
    },
    "sh-teal": {
        pattern: /echo|kill|trap|wait/,
		lookbehind: true,
		greedy: true  
    },
    "sh-purple": {
        pattern: /=/,
		lookbehind: true,
		greedy: true  
    },
    "comment": {
        pattern: /(^|[^\\])#.*/,
		lookbehind: true,
		greedy: true
    }
}