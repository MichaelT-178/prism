Prism.languages.sh = {
    "sh-green": {
        pattern: /".*?"|'.*?'/,
		lookbehind: true,
		greedy: true
    },
    "sh-blue": {
        pattern: /mvn|stop_spring_boot|sleep/,
		lookbehind: true,
		greedy: true
    },
    "sh-red": {
        pattern: /GREENISH|BLUE|NC|SPRING_BOOT_PID|\$\!/,
		lookbehind: true,
		greedy: true  
    },
    "sh-orange": {
        pattern: /0\.1|--quiet/,
		lookbehind: true,
		greedy: true  
    },
    "sh-teal": {
        pattern: /echo|kill|trap/,
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