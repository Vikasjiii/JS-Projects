const stringInput = document.querySelector(".string-input");
const upperCaseValue = document.querySelector(".upper-case div");
const lowerCaseValue = document.querySelector(".lower-case div");
const trimValue = document.querySelector(".trim div");
const camelCaseValue = document.querySelector(".camel-case div");
const pascalCaseValue = document.querySelector(".pascal-case div");
const snakeCaseValue = document.querySelector(".snake-case div");
const kebabCaseValue = document.querySelector(".kebab-case div");

function camelCase(str) {
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && str[i + 1] != undefined) {
      str = str.replace(str[i], str[i + 1].toUpperCase());
      str = str.slice(0, i + 1) + str.slice(i + 2);
    }
  }

  return str;
}

function replaceSpace(str, symbol) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str = str.replace(str[i], symbol);
    }
  }
  return str.toLowerCase();
}

stringInput.addEventListener("input", () => {
  const str = stringInput.value.trim();
  let spaceCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      ++spaceCount;
    }
  }

  if (spaceCount === str.length) {
    return;
  }

  lowerCaseValue.innerText = str.toLowerCase();
  upperCaseValue.innerText = str.toUpperCase();
  trimValue.innerText = str.replaceAll(" ", "");
  camelCaseValue.innerText = camelCase(str);
  pascalCaseValue.innerText =
    camelCase(str)[0].toUpperCase() + camelCase(str).slice(1);

  snakeCaseValue.innerText = replaceSpace(str, "_");
  kebabCaseValue.innerText = replaceSpace(str, "-");
});
