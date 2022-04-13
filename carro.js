// código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [3.3, 4, 3, 5, 3.2, 4.2];
let comprimentoCarro = 70;
let alturaCarro = 38;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
 }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i]
    }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600
  }
 }
}

function passouTodaATela(xCarro){
  return xCarro < -63;
}