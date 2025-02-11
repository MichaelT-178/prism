Prism.languages.fxml = {
    "fxml-orange": {
        pattern: /version|encoding|alignment|spacing|prefWidth|prefHeight|xmlns:fx|xmlns|fx:controller|fx:id|text|style|onAction|bottom|2005|.yaml-red|.yaml-gray|.yaml-green|.yaml-orange|#(?!\s*DB_ENV)/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    "fxml-red": {
        pattern: /VBox.margin|VBox|Label|Button|Insets|xml|import|DATABASE_URL|CLIENT_ID|CLIENT_SECRET|(?<!YOUR_|new_username )(USERNAME|PASSWORD)|USER_AGENT|SENDER_EMAIL|SENDER_PASSWORD|EMAIL_RECIPIENT|REFRESH_TOKEN|SPOTIFY_CLIENT_ID|SPOTIFY_CLIENT_SECRET|REDIRECT_URI|OPENAI_API_KEY|YOUTUBE_API_KEY|CHANNEL_ID|AUTH_CODE|DB_URL|DB_USERNAME|DB_PASSWORD|FLASK_ENV|DEV_DATABASE_URI|TEST_DATABASE_URI|PROD_DATABASE_URI|SPRING_ENV|JWT_SECRET_KEY|FRONTEND_URL|S3_BUCKET|DB_ENV|DEFAULT_NAME|DEFAULT_USER|DEFAULT_PASSWORD|DEFAULT_HOST|TEST_NAME|TEST_USER|TEST_PASSWORD|TEST_HOST|PROD_NAME|PROD_USER|PROD_PASSWORD|PROD_HOST|PORT|SECRET_KEY|ALLOWED_HOST|DB_USER|DB_PASSWORD|DB_HOST|DB_NAME|VITE_STRIPE_PUBLIC_KEY|STRIPE_SECRET_KEY|ALLOWED_FRONTEND_LINK|VITE_FRONTEND_HOST/,
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
        pattern: /\bSELECT\b|\bDISTINCT\b|\bFROM\b|\bWHERE\b|\bCREATE\b|\bUSER\b|(?<=SELECT )\*/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    'fxml-teal': {
        pattern: /E06C75|ABB2BF|98C379|D19A66/,
		lookbehind: true,
		alias: 'white',
		greedy: true
    },
    'fxml-comment': {
        pattern: /# DB_ENV can be default, test, or production/,
        lookbehind: true,
		alias: 'white',
		greedy: true
    }
}