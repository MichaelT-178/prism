Prism.languages.fxml = {
    "fxml-orange": {
        pattern: /version|encoding|alignment|spacing|prefWidth|prefHeight|xmlns|xmlns:fx|fx:controller|fx:id|text|style|onAction|bottom/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    "fxml-red": {
        pattern: /VBox|Label|Button|VBox\.margin|Insets|xml|import/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    "fxml-gray": {
        pattern: /(<\? \?>|=|\<|\>|\/>)|javafx\.geometry\.Insets|javafx\.scene\.control\.*|javafx\.scene\.layout\.*/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    }
    // "fxml-green": {
    //     pattern: /".*?"/,
	// 	lookbehind: true,
	// 	alias: 'white',
	// 	greedy: true
    // }

}