const box = document.querySelector(".box");

let stepToMoveX = 0;
let stepToMoveY = 0;
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    stepToMoveX -= 10;

    box.style.transform = `translate(${stepToMoveX}px,${stepToMoveY}px)`;
  } else if (e.key === "ArrowRight") {
    stepToMoveX += 10;
    console.log(stepToMoveX);

    box.style.transform = `translate(${stepToMoveX}px,${stepToMoveY}px)`;
  } else if (e.key === "ArrowUp") {


    stepToMoveY-=10
    box.style.transform = `translate(${stepToMoveX}px,${stepToMoveY}px)`;
  } else if (e.key === "ArrowDown") {
    stepToMoveY+=10
    box.style.transform = `translate(${stepToMoveX}px,${stepToMoveY}px)`;
  }
});
