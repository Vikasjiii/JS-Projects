const span = document.querySelector("span");
const wordArray = ["Vikas", "Student", "Developer", "Learner"];

let characterIndex = 0;
let reverseType = false;
let wordIndex = 0;
const id = setInterval(() => {
  if (
    wordIndex < wordArray.length &&
    characterIndex < wordArray[wordIndex].length
  ) {
    span.innerText = `${span.innerText}${wordArray[wordIndex][characterIndex]}`;
    characterIndex++;
  } else {
    reverseType = true;
  }

  if (reverseType) {
    span.innerText = span.innerText.slice(0, span.innerText.length - 1);
    console.log(span.innerText);

    if (span.innerText.length === 0) {
      characterIndex = 0;
      wordIndex++;
      reverseType=false
    }



    if(wordArray.length === wordIndex){
        wordIndex=0
    }
  }
}, 200);
