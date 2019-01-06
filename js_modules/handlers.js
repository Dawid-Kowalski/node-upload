function upload(request, response) {
	console.log("Rozpoczęcie obsługi ządania upload");
	response.write("Rozpoczęcie ładowania");
	response.end();
}

function welcome(request, response) {
	console.log("Rozpoczęcie obsługi żadania welcome");
	response.write("Strona główna");
	response.end();
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