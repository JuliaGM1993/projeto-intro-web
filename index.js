let filmes = [
  {
    titulo: "O Chamado",
    sinopse:
      "A jornalista Rachel Keller decide investigar a morte de sua sobrinha e descobre que quatro adolescentes morreram misteriosamente sete dias depois de assistir a um vídeo com imagens assustadoras. Agora ela tenta solucionar o mistério e impedir que a profecia se realize, já que ela e seu filho também assistiram ao vídeo.",
    duracao: "1h55min",
    ano: "2002",
    genero: "Terror",
    remake: true,
    outros:
      "Círculos,O Chamado 2,O Chamado 3,Sadako - Capítulo Final,Sadako DX",
    nota: Number(7.1),
  },
  {
    titulo: "O Grito",
    sinopse:
      "Uma enfermeira americana que mora e trabalha em Tóquio é exposta a uma maldição misteriosa em que um espírito se apodera da pessoa, desencadeando um violento surto de raiva, antes de clamar sua vida e passar à próxima vítima.",
    duracao: "1h32min",
    ano: "2004",
    genero: "Terror",
    remake: true,
    outros: "O Grito 2,O Grito 3",
    nota: Number(4.4),
  },
  {
    titulo: "Sinais",
    sinopse:
      "No condado de Bucks, Pensilvânia, vive o viúvo Graham Hess e seus dois filhos, Morgan e Bo. Ele costumava ser o pastor da região, mas se recusa a ser chamado assim desde que sua mulher, Colleen, morreu atropelada por Ray Reddy, um de seus vizinhos. Os Hess ficam intrigados com o aparecimento de misteriosos círculos em sua plantação sem que haja o menor vestígio de quem os fez ou por qual motivo teriam sido feitos.",
    duracao: "1h46min",
    ano: "2002",
    genero: "Ficção científica/Terror",
    remake: false,
    outros: [],
    nota: Number(6.8),
  },
  {
    titulo: "Hereditário",
    sinopse:
      "Após a morte da reclusa avó, a família Graham começa a desvendar algumas coisas. Mesmo após a partida da matriarca, ela permanece como se fosse uma sombra sobre a família, especialmente sobre a solitária neta adolescente, Charlie, por quem ela sempre manteve uma fascinação não usual. Com um crescente terror tomando conta da casa, a família explora lugares mais escuros para escapar do infeliz destino que herdaram.",
    duracao: "2h07min",
    ano: "2018",
    genero: "Terror/Drama",
    remake: false,
    outros: [],
    nota: Number(7.3),
  },
  {
    titulo: "Invocação do mal",
    sinopse:
      "Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.",
    duracao: "1h52min",
    ano: "Number 2013",
    genero: "Terror/Thriller",
    remake: false,
    outros:
      "Invocação do Mal (2013), Invocação do Mal 2 (2016), Annabelle (2014), Annabelle 2 - A Criação do Mal (2017), A Freira (2018), A Maldição da Chorona (2019), Annabelle 3: De Volta para Casa (2019), Invocação do Mal 3: A Ordem do Demônio (2021).",
    nota: Number(7.5),
  },
];

let remake = Boolean()
let media = Number()
let filmesRemake = []

for (i in filmes) {
    filmes[i].titulo = filmes[i].titulo.toUpperCase();
}

for (i in filmes) {
media = media += filmes[i].nota;
}

for (i in filmes){
    if(filmes[i].remake === true) {
    filmesRemake.push(filmes[i])
}else{
    let nome = filmes[i].titulo
    console.log(`O item ${nome} não foi adicionado.`)
}
}

media = media / filmes.length
console.log(`Média: ${media.toFixed(1)}`)

function objeto(filmes){
    for(nomeDoFilme of filmes){
        for (i in nomeDoFilme){
            console.log(`${i}: ${nomeDoFilme[i].toString()}`)
    }
         console.log("----------------------");
}
}
objeto(filmes)

function recebeArray (filmes, nomeDoFilme){
    const filmesFiltrados = [];
    for(let i in filmes){
     if(filmes[i].titulo === nomeDoFilme.toUpperCase()){
       filmesFiltrados.push(filmes[i]);
    }
}
if(filmesFiltrados == ""){
    alert("Nenhum item foi encontrado")
}
return {
    filmes: filmesFiltrados
}
};

console.log(recebeArray(filmes, "Sinais"))

//Pesquisa utilizando DOM
const lista = document.getElementById("lista");

const pesquisa = document.getElementById("pesquisa");
const button = document.getElementById("btn");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let filterFilmes = filmes.filter((nomeFilme) => {
    return nomeFilme.titulo
      .toLowerCase()
      .includes(pesquisa.value.toLowerCase());
  });
  lista.innerHTML = "";
  let render = "";
  for (let i of filterFilmes) {
    render += `<div class = i> 
        <h3>Título: ${i.titulo}</h3>
        <p>Sinopse: ${i.sinopse}</p>
        <p>Duração: ${i.duracao}</p>
        <p>Ano: ${i.ano}</p>
        <p>Gênero: ${i.genero}</p>
        <p>Duração: ${i.duracao}</p>
        <p>Remake: ${i.remake ? "sim" : "não"}</p>
        <p>Outros: ${i.outros}</p>
        <p>Nota: ${i.nota}</p>
        `;
  }
  lista.innerHTML = render;
});
