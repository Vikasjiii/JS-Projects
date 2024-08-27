const input = document.querySelector("input");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

input.addEventListener("input", () => {
  if (input.value.length > 16) {
    return;
  }

  const regex = /^\d+$/;

  if (input.value.length === 3 && regex.test(input.value)) {
    const first3Num = `+(${input.value}) - `;
    console.log(first3Num);
    input.value = first3Num;
  }
});

input.addEventListener("keydown", (e) => {
  if (e.code === "Backspace") {
const data=input.value.slice(0,input.value.length-1)
    if (input.value.length <= 11) {
      const numbersOnly = input.value.match(/\d+/g, "");
      input.value=numbersOnly
    }
  }
});
