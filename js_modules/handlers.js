const fs = require("fs");


function upload(request, response) {
	console.log("Rozpoczęcie obsługi ządania upload");
	response.write("Rozpoczęcie ładowania");
	response.end();
}

function welcome(request, response) {
	console.log("Rozpoczęcie obsługi żadania welcome");
	fs.readFile("../templates/form.html", function(err, template){
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(template);
        response.end();
	});
}

function error(request,response) {
	console.log("Błędny adres");
	response.write("404");
	response.end;
}

module.exports = {
	upload: upload,
	welcome: welcome,
	error: error
}