const modal = document.querySelector(".modal");
const trailerButton = document.querySelector(".trailer-button");
const closeModalButton = document.querySelector(".close-modal");
const video = document.getElementById("video");
const videoLink = video.src;
function alternateModal(){
  modal.classList.toggle("open");
}

closeModalButton.addEventListener("click", () => {
  alternateModal();
  video.setAttribute("src", "");
})

trailerButton.addEventListener("click", () => {
  alternateModal();
  video.setAttribute("src", videoLink);
})






// /*OBJETIVO 1 - Quando o usuario clicar no botão Veja o Trailer, devemos abrir a modal com o vídeo do trailer
//   - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
//   - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
//   - passo 3 - dar um jeito de pegar o elemento da modal no js
//   - passo 4 - abrir a modal na tela

// OBJETIVO 2 -  Quando o Usuário clicar no botão X devemos fechar a modal
//   - passo 1 - dar um jeito de pegar o elemento de fechar a modal usando js
//   - passo 2 - dar um jeito de identificar quando o usuário clicar no X
//   - passo 3 - fechar a modal*/

// /*objeto.método('parametro/argumento', informação)*/
// // variavel constante, atribuir o valor ao elemento definindo a variavel para uso no codigo js

// //1


// // passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
// const trailerButton = document.querySelector(".trailer-button");

// // passo 2 - dar um jeito de identificar quando o usuário clicar no botão
// trailerButton.addEventListener("click", () => {
//   // passo 4 - abrir a modal na tela
//   modal.classList.add("open");
//   video.setAttribute("src", videoLink);
// });

// // passo 3 - dar um jeito de pegar o elemento da modal no js
// const modal = document.querySelector(".modal");

// //2

// // passo 1 - dar um jeito de pegar o elemento de fechar a modal usando js

// const closeModalButton = document.querySelector(".close-modal");

// //passo 2 - dar um jeito de identificar quando o usuário clicar no X
// closeModalButton.addEventListener("click", () => {
//   //passo 3 - fechar a modal
//   modal.classList.remove("open");
//   video.setAttribute("src", "")
// });

// // pode substituir o add e remove pelo metodo toggle que substitui a informação, se ela não estiver presente ele a adiciona, se ela estiver ele a remove. Para evitar repetição da mesma função no código [toggle("open")], pode-se criar uma função especifica após as constantes e referencia-la nas funções desejadas

// const video = document.getElementById("video");
// const videoLink = video.src;
