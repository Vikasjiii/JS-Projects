const generateMemeButton = document.querySelector(".generate-meme-button");
const memeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector(".meme-img-container img");
const memeAuthor = document.querySelector(".meme-author");
const loadingText = document.querySelector(".loading");

generateMemeButton.addEventListener("click", () => {
  fetch("https://meme-api.com/gimme")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { title, postLink, author } = data;

      memeAuthor.innerText = author;
      memeTitle.innerText = title;

      memeImg.src = postLink;
      loadingText.style.display = "none";
    });
});

generateMemeButton.click();
