const showToastButton = document.querySelector(".show-toast-button");
const direction = document.querySelector("#direction");
const position = document.querySelector("#position");
const result = document.querySelector("#result");
const input = document.querySelector("#input");
const duration = document.querySelector("#duration");
const infoAboutDifferentToast = {
  success: {
    backgroundColor: "green",
    icon: "./images/check_icon.svg",
  },
  error: {
    backgroundColor: "red",
    icon: "./images/close-icon.svg",
  },
  warning: {
    backgroundColor: "orange",
    icon: "./images/warning-icon.svg",
  },
  info: {
    backgroundColor: "light-yellow",
    icon: "./images/info-icon.svg",
  },
};

const showToast = () => {
  const toastInfo = infoAboutDifferentToast[result.value];
  const toastContainer = document.createElement("div");
  toastContainer.classList.add(`${direction.value}`);
  toastContainer.classList.add(`${position.value}`);
  toastContainer.classList.add(`${result.value}`);
  toastContainer.classList.add("toast-container");
  toastContainer.classList.add(`${toastInfo.backgroundColor}`);
  toastContainer.innerHTML = `
<img  src="${toastInfo.icon}" alt="" />

<span>${input.value}</span>
<img class="close-icon" src="./images/close-icon.svg" alt="" />
`;
  toastContainer.classList.add("show");

  document.body.append(toastContainer);


  const closeToastIcon=toastContainer.querySelector('.close-icon')
  closeToastIcon.addEventListener('click',()=>{
    toastContainer.remove()
  })
  setTimeout(() => {
    toastContainer.remove();
  }, +duration.value * 100);
};

showToastButton.addEventListener("click", showToast);
input.addEventListener("input", () => {
  if (input.value.length == 0) {
    showToastButton.disabled = true;
  } else {
    showToastButton.disabled = false;
  }
});
