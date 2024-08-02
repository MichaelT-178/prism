Prism.languages.fxml = {
    "fxml-orange": {
        pattern: /version|encoding|alignment|spacing|prefWidth|prefHeight|xmlns:fx|xmlns|fx:controller|fx:id|text|style|onAction|bottom|2005|.yaml-red|.yaml-gray|.yaml-green|.yaml-orange|#/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    "fxml-red": {
        pattern: /VBox.margin|VBox|Label|Button|Insets|xml|import|DATABASE_URL|CLIENT_ID|CLIENT_SECRET|(?<!YOUR_)(?:USERNAME|PASSWORD)|USER_AGENT|SENDER_EMAIL|SENDER_PASSWORD|EMAIL_RECIPIENT|REFRESH_TOKEN|SPOTIFY_CLIENT_ID|SPOTIFY_CLIENT_SECRET|REDIRECT_URI|OPENAI_API_KEY|YOUTUBE_API_KEY|CHANNEL_ID|AUTH_CODE|DB_URL|DB_USERNAME|DB_PASSWORD/,
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
        pattern: /SELECT|DISTINCT|FROM|WHERE|(?<=SELECT )\*/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    'fxml-teal': {
        pattern: /E06C75|ABB2BF|98C379|D19A66/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    }
}