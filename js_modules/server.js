const http = require("http");

function start() {

	function onRequest(request, response) {
		console.log("Odebrano zapytanie");
		response.writeHead(200, {"Content-type": "text/plain"});
		response.write("works");
		response.end();
	}

	let server = http.createServer(onRequest);
	server.listen(9010);

	console.log("uruchomionos serwer");
}

exports.start = start;