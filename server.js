//Criando webservice de basico.
 
 //Carrega dependencia http
 var http = require('http');
 
 //Carrega dependencia que le arquivos.
 var fs = require('fs');
 
 var opcao = 'html';

if(opcao == 'text'){
	 //Webservice retorno plan/text
	  http.createServer(function(req,res){
			res.writeHead(200,{'Content-type': 'text/plain'});
			res.end("Ola mundo!");
	}).listen(9090);
	console.log("Servidor no ar");
	
}else{
	//Webservice retorno HTML
	http.createServer(function(req,res){
		fs.readFile('index.html', function(err,data){
			res.writeHead(200,{'Content-type': 'text/html'});
			res.end(data);
	})
	}).listen(9090);
	console.log("Servidor no ar");
}






