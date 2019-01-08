const fs = require("fs");
const formidable = require("formidable");

let fileName = "";

function upload(request, response) {
	console.log("Rozpoczęcie obsługi ządania upload");
	const form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files) {
		if(fields.title == "") {
			fileName = files.upload.name;
		} else {
			fileName = fields.title + ".jpg";
		}
		fs.renameSync(files.upload.path, fileName);
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write("przesłany obrazek:<br/>");
        response.write("<img src='/show' />");
        response.end();
	})
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

function show(request, response) {
	fs.readFile(fileName, "binary", function(error, file) {
		response.writeHead(200, {"Content-Type": "image/png"});
		response.write(file, "binary");
		response.end();
	})
}

module.exports = {
	upload: upload,
	welcome: welcome,
	error: error,
	show: show
}