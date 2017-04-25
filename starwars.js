// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

let filmes = document.getElementById('movies').firstChild;

$.ajax({
  	url: 'https://swapi.co/api/films',
  	method: 'GET',      // opcional: 'GET' é o valor padrão
	success: function(resposta) {
    	  // veja a resposta no terminal
    	filmes.innerHTML = resposta.results[1];
    	for(let muv of resposta.results){
    		console.dir(muv.opening_crawl);
    		filmes.append(muv.);
    	}
	}
});