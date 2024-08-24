const generateMemeButton = document.querySelector(".generate-meme-button");
const memeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector(".meme-img-container img");
const memeAuthor = document.querySelector(".meme-author");
generateMemeButton.addEventListener("click", () => {
  fetch("https://meme-api.com/gimme")
    .then((res) => res.json())
    .then((data) => {
      const { title, url, author } = data;
      memeAuthor.innerText = author;
      memeTitle.innerText = title;
      memeImg.src = url;
    });
});
generateMemeButton.click();
