const addTaskButton = document.querySelector(".add-task-btn");
const userTaskInput = document.querySelector(".user-input-container input");
const allToDoContainer = document.querySelector(".all-todos-container");
const warningTextForEmptyTask = document.querySelector(
  ".warning-for-empty-task"
);
let taskCount = 0;

function addTaskInTheList() {
  const oneToDoContainer = document.createElement("div");
  oneToDoContainer.classList.add("one-todo-container");
  oneToDoContainer.innerHTML = `<span class="todo-number">${++taskCount})</span>
        <input type="text" disabled="disabled"  value="${
          userTaskInput.value
        }" />
        <div class="controls">
          <div class="complete-btn">complete</div>
          <div class="edit-btn">edit</div>
          <div class="delete-btn">delete</div>`;

  allToDoContainer.appendChild(oneToDoContainer);
  userTaskInput.value = "";
  const deleteBtn = oneToDoContainer.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.parentElement.remove();
    taskCount--;
    updateToDoSerialNumber();
  });

  const completeBtn = oneToDoContainer.querySelector(".complete-btn");
  completeBtn.addEventListener("click", () => {
    completeBtn.parentElement.previousElementSibling.classList.toggle(
      "cross-task-text"
    );
    console.log(completeBtn.parentElement.previousElementSibling);

    completeBtn.classList.toggle("change-bg");
  });

  const editBtn = oneToDoContainer.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    editBtn.parentElement.previousElementSibling.disabled = false;
    console.log(editBtn.parentElement.previousElementSibling);

    editBtn.parentElement.previousElementSibling.focus();
  });
}

function updateToDoSerialNumber() {
  const allSpanForSerailNumber = document.querySelectorAll(".todo-number");

  allSpanForSerailNumber.forEach((spanForSerailNumber, i) => {
    spanForSerailNumber.innerText = `${++i})`;
  });
}

addTaskButton.addEventListener("click", () => {
  if (userTaskInput.value.length === 0) {
    warningTextForEmptyTask.classList.add("show");
    return;
  } else {
    addTaskInTheList();
  }
});

userTaskInput.addEventListener("focus", () => {
  warningTextForEmptyTask.classList.remove("show");
});

for (let i = 0; i < 7; i++) {
  userTaskInput.value = `${"vikassahni".slice(i)}`;
  addTaskButton.click();
}
