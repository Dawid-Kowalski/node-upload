const http = require("http");
const handlers = require("./handlers.js");

function start() {

	function onRequest(request, response) {
		console.log("Odebrano zapytanie " + request.url + " zapytanie");
		response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});

		switch(request.url) {
			case "/":
			case "/start":
				handlers.welcome(request, response);
				break;
			case "/upload":
				handlers.upload(request, response);
				break;
			case "/show":
				handlers.show(request, response);
				break;
			default:
				handlers.error(request, response);
		}

	}

	let server = http.createServer(onRequest);
	server.listen(9010);

	console.log("uruchomiono serwer");
}

exports.start = start;