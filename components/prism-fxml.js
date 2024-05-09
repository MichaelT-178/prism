Prism.languages.fxml = {
    "fxml-orange": {
        pattern: /version|encoding|alignment|spacing|prefWidth|prefHeight|xmlns:fx|xmlns|fx:controller|fx:id|text|style|onAction|bottom|2005|.yaml-red|.yaml-gray|.yaml-green|.yaml-orange|#/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    "fxml-red": {
        pattern: /VBox.margin|VBox|Label|Button|Insets|xml|import/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    "fxml-gray": {
        pattern: /(<\? \?>|=|\<|\>|\/>)|javafx\.geometry\.Insets|javafx\.scene\.control\.*|javafx\.scene\.layout\.*|>(?= 2005)|,(?= Year)|(?<=2005);|Maker|Year|Cars/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    "fxml-green": {
        pattern: /".*?"/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    'fxml-purple': {
        pattern: /SELECT|DISTINCT|FROM|WHERE/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    'fxml-teal': {
        pattern: /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g,
		lookbehind: true,
		alias: 'white',
		greedy: true
    }
}