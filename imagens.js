// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("estrada.png")
  imagemDoAtor = loadImage("ator-1.png")
  imagemCarro = loadImage("audi-rs7.png")
  imagemCarro2 = loadImage("meca-1.png")
  imagemCarro3 = loadImage("ranger-1.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("trilha.mp3");
  somDoPonto = loadSound("pontos.wav");
  somDaColisao = loadSound("colidiu.mp3");
}