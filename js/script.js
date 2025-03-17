// links menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);
// itens orcamento
const parametros = new URLSearchParams(location.search);
function ativProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativProduto);
//perguntas
const perguntas = document.querySelectorAll(".perguntas button");
function ativardd(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("arai-expanded", ativa);
}
function evntPerguntas(pergunta) {
  pergunta.addEventListener("click", ativardd);
}
perguntas.forEach(evntPerguntas);
//galeria
const galeria = document.querySelectorAll(".bicicleta-imgs img");
const galeriaContainer = document.querySelector(".bicicleta-imgs");
function trocarImg(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 920px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}
function evntGaleria(img) {
  img.addEventListener("click", trocarImg);
}
galeria.forEach(evntGaleria);
console.log(galeria);
//plugin
if (window.SimpleAnime) {
  new SimpleAnime();
}
