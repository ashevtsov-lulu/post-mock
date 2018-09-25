from mockserver import MockServerClient, request, response

client = MockServerClient("http://localhost:1080")

client.stub(
    request(
        method="POST",
        path="/random"
    ),
    response(
        code=200,
        body="{\"status\": \"success\"}"
    )
)
