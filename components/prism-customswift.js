Prism.languages.customswift = {
    'cust-swift-comment': {
		pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
		lookbehind: true,
		greedy: true
	},
    "cust-swift-light-purple": {
        pattern: /@Bindable|@State|@Environment|\bView\b|\bdestination|String|\bDate\b|Int|Form|TextField|DatePicker|Section|Picker|\bText|ForEach|HStack|VStack|Button|ModelConfiguration|ModelContainer|(?<!.)List(?!.)|NavigationLink|Query|NavigationStack|Menu|WindowGroup|App|Scene|SortDescriptor|(?<=\[)(Destination|Friends)(?=\])|(?<=<)(Destination|Friends)(?=>)/,
        lookbehind: true,
        alias: 'light-purple',
        greedy: true
    },
    "cust-swift-pink": {
        pattern: /import|struct|var|private|some|true|false|if|else|func|return|guard|let |do|(?<!\()for(?=\s)|\bin\b|self|catch|\sinit|@main|class/,
        lookbehind: true,
        alias: 'pink',
        greedy: true
    },
    "cust-swift-purple": {
        pattern: /(text|selection|isStoredInMemoryOnly|axis|action|(?<=\()for|navigationDestination|configurations|order|sort|value|time alignment|perform|filter|path|systemImage)(?=:)|(?<=\.)(vertical|(?<!\.)date|tag|segmented|pickerStyle|navigationTitle|navigationBarTitleDisplayMode|inline|isEmpty|append|modelContainer|reverse|leading|headline|font|fomatted|long|shortened|onDelete|delete|insert|now|cascade)|withAnimation|#Preview|fatalError|@Query|#Predicate|searchable|navigationDestination|toolbar|localizedStandardContains|@Model|@Relationship|(?<=\\)modelContext|(?<!\\)\.modelContext|(?<=\.)name(?=\.)|deleteRule/,
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
        pattern: /\b(destination|newSightName|sort)(?=:)|body|\b(name|details|date|priority)(?=:)|(?<=func\s)\w+(?=\s*\()|\bsearchString(?=:\s*String\b)|\s+(path|sortOrder|searchText|sights)\s*(?==)|\s\b(modelContext)(?!\.)/,
        lookbehind: true,
        alias: 'blue',
        greedy: true 
    },
    "cust-swift-green": {
        pattern: /\$destination|(?<!\=\s)(name|details|date|priority)|\$newSightName|\$searchText|addDestination|\$path|\$sortOrder|searchString|_destinations|destination|newSightName|deleteDestinations|(?<=\.)\b(details|sights|init)\b|\.name\)\"|\.name\)\"|\baddSight(?=\))|\b(name|details|sort)(?=:)|(?<=\()destinations(?=\))|(?<=\.)priority(?=,)|\bmodelContext(?=\.(delete|insert))|\b(destinations)(?=\[)|\b(sortOrder)(?=,)|(?<=Destination\.)(searchString|name|priority|date)|\bPath(?=\s+=)/,
        lookbehind: true,
        alias: 'green',
        greedy: true 
    },
    "cust-swift-light-green": {
        pattern: /\bEditDestinationView|\bDestinationListingView|\bDestination|\bContentView|\bDestination(?=\.)|(?<=\[)Sight(?=\])/,
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
        pattern: /[:.=,\{\}\(\)\[\]\\<>]|SwiftUI|\sindex\s|\sindexSet\s|Foundation|SwiftData|\\\.|(?<=let\s+)\w+(?=\s*=)|(?<=\()(sight\.name|sight|container|destination\.name|destination|searchString)(?=\))|(?<=\{ )\w+(?= in)|(?<=:\s*)(config|example|destination)(?=\))|(?<=Text\()destination\.date|\bsearchString(?=\.isEmpty)|\$0|\[(sort|index)\]|for\s+(\w+)\s+in\s+(\w+)\s*\{|(?<=\= )(name|details|date|priority)/,
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
        pattern: /(?<=\()(for|destination)(?=:)|(?<=\\\.)modelContext|path(?=\:)/,
        lookbehind: true,
        alias: 'purple-other',
        greedy: true
    },
    'cust-swift-green-other': {
        pattern: /name|details|date|priority|searchText(?=\))|for/,
        lookbehind: true,
        alias: 'purple-other',
        greedy: true
    }
}