const generateMemeButton = document.querySelector(".generate-meme-button");
const memeTitle = document.querySelector(".meme-title");
const memeImg = document.querySelector(".meme-img-container img");
const memeAuthor = document.querySelector(".meme-author");
const previousMemeButton = document.querySelector(".left-arrow");
const nextMemeButton = document.querySelector(".right-arrow");
const memeData = [];
let memeCount = 0;
let currentMemeonScreenasMemeDataArr = -1;
function getMeme() {
  currentMemeonScreenasMemeDataArr = memeCount - 1;
  fetch("https://meme-api.com/gimme")
    .then((res) => res.json())
    .then((data) => {
      const { title, url, author } = data;
      memeAuthor.innerText = `Made by:${author}`;
      memeTitle.innerText = title;
      memeImg.src = url;
      memeCount++;
      currentMemeonScreenasMemeDataArr++;
      memeData.push({
        title,
        url,
        author,
        memeCount,
      });
      nextMemeButton.classList.remove("no-cursor");
      previousMemeButton.classList.remove("no-cursor");
    });
}

generateMemeButton.addEventListener("click", () => {
  getMeme();
});

previousMemeButton.addEventListener("click", () => {
  if (currentMemeonScreenasMemeDataArr >= 1) {
    --currentMemeonScreenasMemeDataArr;
    const { title, url, author } = memeData[currentMemeonScreenasMemeDataArr];
    memeAuthor.innerText = `Made by:${author}`;
    memeTitle.innerText = title;
    memeImg.src = url;
  } else {
    previousMemeButton.classList.add("no-cursor");
  }
});

nextMemeButton.addEventListener("click", () => {
  if (currentMemeonScreenasMemeDataArr < memeData.length - 1) {
    ++currentMemeonScreenasMemeDataArr;

    const { title, url, author } = memeData[currentMemeonScreenasMemeDataArr];
    memeAuthor.innerText = `Made by:${author}`;
    memeTitle.innerText = title;
    memeImg.src = url;
  } else {
    nextMemeButton.classList.add("no-cursor");
  }
});

getMeme();
