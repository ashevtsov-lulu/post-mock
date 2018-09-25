var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 1080).mockAnyResponse({
    "httpRequest": {
        "method": "POST",
        "path": "/random"
    },
    "httpResponse": {
        "statusCode": 200,
        "body": "{\"status\": \"success\"}"
    }
});
