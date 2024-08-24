const count = document.querySelector(".count");
const decreaseButton = document.querySelector(".decrease-btn");
const increaseButton = document.querySelector(".increase-btn");
const resetButton = document.querySelector(".reset-button");
const input = document.querySelector("input");
increaseButton.addEventListener("click", () => {
  count.innerText = Number(input.value) + Number(count.innerText);
});
decreaseButton.addEventListener("click", () => {
  count.innerText = Number(count.innerText) - Number(input.value);
});

resetButton.addEventListener("click", () => {
  count.innerText = 0;
});

document.addEventListener("keypress", (e) => {
  console.log(e.code);

  if (e.code === "NumpadAdd" || e.code === "Equal") {
    count.innerText = Number(input.value) + Number(count.innerText);
  } else if (e.code === "NumpadSubtract" || e.code === "Minus") {
    count.innerText = Number(count.innerText) - Number(input.value);
  }
});
