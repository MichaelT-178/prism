Prism.languages.sh = {
    "sh-green": {
        pattern: /".*?"|'.*?'/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    "sh-blue": {
        pattern: /mvn|stop_spring_boot|sleep/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    "sh-red": {
        pattern: /GREENISH|BLUE|NC|\$SPRING_BOOT_PID|\$\!|/,
		lookbehind: true,
		alias: 'white',
		greedy: true  
    },
    "sh-orange": {
        pattern: /0\.1|--quiet/,
		lookbehind: true,
		alias: 'white',
		greedy: true  
    },
    "sh-teal": {
        pattern: /echo|kill|trap/,
		lookbehind: true,
		alias: 'white',
		greedy: true  
    },
    "sh-purple": {
        pattern: /=/,
		lookbehind: true,
		alias: 'white',
		greedy: true  
    },
    "comment": {
        pattern: /(^|[^\\])#.*/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    }
}