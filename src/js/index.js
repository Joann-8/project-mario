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
