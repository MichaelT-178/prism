Prism.languages.customswift = {
    'cust-swift-comment': {
		pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
		lookbehind: true,
		greedy: true
	},
    "cust-swift-light-purple": {
        pattern: /@Bindable|@State|@Environment|(?<!.)View(?!.)|destination|String|Date|Int|Form|TextField|DatePicker|Section|Picker|(?<!.)Text(?!.)|ForEach|HStack|VStack|Button|ModelConfiguration|ModelContainer|(?<!.)List(?!.)|NavigationLink|Query|NavigationStack|Menu|WindowGroup|App|Scene|SortDescriptor|(?<=\[)(Destination|Friends)(?=\])|(?<=<)(Destination|Friends)(?=>)/,
        lookbehind: true,
        alias: 'light-purple',
        greedy: true
    },
    "cust-swift-pink": {
        pattern: /import|struct|var|private|some|true|false|if|else|func|return|guard|let |do|(?<!\()for(?=\s)|\bin\b|self|catch|init|@main|class/,
        lookbehind: true,
        alias: 'pink',
        greedy: true
    },
    "cust-swift-purple": {
        pattern: /(text|selection|isStoredInMemoryOnly|axis|action|(?<=\()for|searchable|navigationDestination|toolbar|configurations|order|sort|value|time alignment|perform|filter|path|systemImage|deleteRule)(?=:)|(?<=\.)(vertical|date|tag|segmented|pickerStyle|navigationTitle|navigationBarTitleDisplayMode|inline|isEmpty|append|modelContainer|reverse|leading|headline|font|fomatted|long|shortened|onDelete|delete|insert|now|cascade)|withAnimation|#Preview|fatalError|@Query|#Predicate|localizedStandardContains|@Model|@Relationship|(?<=\\)modelContext|(?<=\.)name(?=\.)/,
        lookbehind: true,
        alias: 'purple',
        greedy: true  
    },
    "cust-swift-light-blue": {
        pattern: /(?<=struct\s)\w+(?=:)|(?<=class\s)\w+(?=\s*{)/,
        lookbehind: true,
        alias: 'light-blue',
        greedy: true 
    },
    "cust-swift-blue": {
        pattern: /\b(destination|newSightName|sort)(?=:)|body|\b(name|details|date|priority)(?=:)|(?<=func\s)\w+(?=\s*\()|\bsearchString(?=:\s*String\b)|\s+(path|sortOrder|searchText|sights)\s*(?==)/,
        lookbehind: true,
        alias: 'blue',
        greedy: true 
    },
    "cust-swift-green": {
        pattern: /$destination|name|details|date|priority|$newSightName|addDestination|$path|$sortOrder|searchString|_destinations|destination|newSightName|deleteDestinations|(?<=\.)\b(details|sights|init)\b|\.name\)\"|\.name\)\"|\baddSight(?=\))|\b(name|details|sort)(?=:)|(?<=\()destinations(?=\))|(?<=\.)priority(?=,)|\bmodelContext(?=\.(delete|insert))|\b(destinations)(?=\[)|\b(sortOrder)(?=,)|(?<=Destination\.)(searchString|name|priority|date)|\bPath(?=\s+=)/,
        lookbehind: true,
        alias: 'green',
        greedy: true 
    },
    "cust-swift-light-green": {
        pattern: /Destination|EditDestinationView|DestinationListingView|ContentView|\bDestination(?=\.)|(?<=\[)Sight(?=\])/,
        lookbehind: true,
        alias: 'light-green',
        greedy: true 
    },
    "cust-swift-dark-yellow": {
        pattern: /(?<!\$)\b\d+\b/,
        lookbehind: true,
        alias: 'dark-yellow',
        greedy: true  
    },
    "cust-swift-white": {
        pattern: /[:.=,\{\}\(\)\[\]\\<>]|SwiftUI|Foundation|SwiftData|\\\.|(?<=let\s+)\w+(?=\s*=)|(?<=\()(sight\.name|sight|container|destination\.name|destination|searchString)(?=\))|(?<=\{ )\w+(?= in)|(?<=:\s*)(config|example|destination)(?=\))|(?<=Text\()destination\.date|\bsearchString(?=\.isEmpty)|$0|\[(sort|index)\]|for\s+(\w+)\s+in\s+(\w+)\s*\{|(?<=\= )(name|details|date|priority)/,
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