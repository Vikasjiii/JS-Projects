const stringInput = document.querySelector(".string-input");
const upperCaseValue = document.querySelector(".upper-case div");
const lowerCaseValue = document.querySelector(".lower-case div");
const trimValue = document.querySelector(".trim div");
const camelCaseValue = document.querySelector(".camel-case div");
const pascalCaseValue = document.querySelector(".pascal-case div");
const snakeCaseValue = document.querySelector(".snake-case div");
const kebabCaseValue = document.querySelector(".kebab-case div");

stringInput.addEventListener("input", () => {
  //lower-case

  lowerCaseValue.innerText = stringInput.value.toLowerCase();
  upperCaseValue.innerText = stringInput.value.toUpperCase();
  trimValue.innerText = stringInput.value.trim();
  camelCaseValue.innerText = camelCase(stringInput.value, " ");
  pascalCaseValue.innerText =
    camelCase(stringInput.value, " ")[0].toUpperCase() +
    camelCase(stringInput.value, " ").slice(1);

  snakeCaseValue.innerText=changeSpace(stringInput.value,"_")
  kebabCaseValue.innerText=changeSpace(stringInput.value,"-")
});

function camelCase(str, x) {
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === x && str[i + 1] != undefined) {
      str = str.replace(str[i], str[i + 1].toUpperCase());
      console.log(str);

      str = str.slice(0, i + 1) + str.slice(i + 2);
    }
  }

  return str;
}

function changeSpace(str, x) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str = str.replace(str[i], x);
      console.log(str);
    }
  }
  return str
}
