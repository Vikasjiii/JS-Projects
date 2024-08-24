const addTaskButton = document.querySelector(".add-task-btn");
const userTaskInput = document.querySelector(".user-input-container input");
const allToDoContainer = document.querySelector(".all-todos-container");
const warningTextForEmptyTask = document.querySelector(
  ".warning-for-empty-task"
);
const statsContainer = document.querySelector(".stats");
const totalTaskCountSpan = document.querySelector(".total-task-count");
const completedTaskCountSpan = document.querySelector(".completed-task-count");
const remainingTaskCountSpan = document.querySelector(".remaining-task-count");

let taskCount = 0;
let completedTaskCount = 0;
const allSpanofSerailNumberforToDos = [];

function addTaskInTheList() {
  const oneToDoContainer = document.createElement("div");
  oneToDoContainer.classList.add("one-todo-container");
  oneToDoContainer.innerHTML = `<span class="todo-number">${++taskCount})</span>
        <input type="text" spellcheck="false" disabled="disabled"  value="${
          userTaskInput.value
        }" />
        
        <div class="controls">
          <div title="complete" class="complete-btn"><img src="./check-icon.svg" alt=""></div>
          <div title="edit" class="edit-btn"><img src="./edit-icon.png" alt="" style="width: 20px;"></div>
          <div title="delete" class="delete-btn"><img src="./delete_img.svg" alt=""></div>
          
          `;
  // <div title="setting" class="setting"><img src="./three-dots-icon.svg" alt=""></div>

  userTaskInput.value = "";
  statsContainer.classList.add("show");
  totalTaskCountSpan.innerText = taskCount;
  allToDoContainer.appendChild(oneToDoContainer);

  //Adding span element of newly created onetodocontainer in the  allSpanofSerailNumberforToDos Array
  allSpanofSerailNumberforToDos.push(
    oneToDoContainer.querySelector(".todo-number")
  );

  const deleteBtn = oneToDoContainer.querySelector(".delete-btn");
  attachClickEventListenerToDeleteBtn(deleteBtn, oneToDoContainer);

  const completeBtn = oneToDoContainer.querySelector(".complete-btn");

  attachClickEventListenerToCompleteBtn(completeBtn, oneToDoContainer);

  const editBtn = oneToDoContainer.querySelector(".edit-btn");
  attachClickEventListenerToEditBtn(editBtn, oneToDoContainer, completeBtn);

  // const settingIcon=oneToDoContainer.querySelector('.setting')
  // attachClickEventListenerToSettingIcon(settingIcon,oneToDoContainer)
}

function attachClickEventListenerToCompleteBtn(
  completeButton,
  oneToDoContainerHTML
) {
  completeButton.addEventListener("click", () => {
    const todoText = oneToDoContainerHTML.children[1];
    todoText.classList.toggle("cross-task-text");
    completeButton.classList.toggle("change-bg");

    if (todoText.classList.contains("cross-task-text")) {
      ++completedTaskCount;
      completedTaskCountSpan.innerText = completedTaskCount;
      remainingTaskCountSpan.innerText = taskCount - completedTaskCount;
    } else {
      --completedTaskCount;
      completedTaskCountSpan.innerText = completedTaskCount;
      remainingTaskCountSpan.innerText = taskCount - completedTaskCount;
    }
  });
}

function attachClickEventListenerToEditBtn(
  editButton,
  oneToDoContainerHTML,
  completeButton
) {
  editButton.addEventListener("click", () => {
    editButton.classList.add("edit-bg");
    const todoText = oneToDoContainerHTML.children[1];
    if (todoText.classList.contains("cross-task-text")) {
      --completedTaskCount;
      completedTaskCountSpan.innerText = completedTaskCount;
      remainingTaskCountSpan.innerText = taskCount - completedTaskCount;
    }
    todoText.classList.remove("cross-task-text");
    completeButton.classList.remove("change-bg");
    todoText.disabled = false;
    todoText.focus();

    oneToDoContainerHTML.children[1].addEventListener("blur", () => {
      todoText.disabled = true;
      editButton.classList.remove("edit-bg");
    });
  });
}
function updateToDoSerialNumber(allSpanForToDoSerailNumber) {
  allSpanForToDoSerailNumber.forEach((spanForToDoSerailNumber, i) => {
    spanForToDoSerailNumber.innerText = `${i + 1})`;
  });
}

function attachClickEventListenerToDeleteBtn(
  deleteButton,
  oneToDoContainerHTML
) {
  deleteButton.addEventListener("click", () => {
    deleteButton.classList.add("red-bg");
    const deleteTodoSerialNumberSpan = oneToDoContainerHTML.children[0];

    --taskCount;
    totalTaskCountSpan.innerText = taskCount;
    //remove delete todo serail span
    const deleteTodoSerialNumberSpanIndex =
      allSpanofSerailNumberforToDos.findIndex(
        (todoSerialNumberSpan) =>
          todoSerialNumberSpan === deleteTodoSerialNumberSpan
      );
    allSpanofSerailNumberforToDos.splice(deleteTodoSerialNumberSpanIndex, 1);
    console.log(oneToDoContainerHTML);

    if (
      oneToDoContainerHTML.children[1].classList.contains("cross-task-text")
    ) {
      --completedTaskCount;
      completedTaskCountSpan.innerText = completedTaskCount;
      remainingTaskCountSpan.innerText = taskCount - completedTaskCount;
    }
    setTimeout(() => {
      oneToDoContainerHTML.remove();
    }, 100);
    updateToDoSerialNumber(allSpanofSerailNumberforToDos);
  });
}

function attachClickEventListenerToSettingIcon(
  settingIcon,
  oneToDoContainerHTML
) {
  settingIcon.addEventListener("click", () => {
    oneToDoContainerHTML.classList.add("show-setting");
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

//remove  warning Text For Empty Task when user focus on input
userTaskInput.addEventListener("focus", () => {
  warningTextForEmptyTask.classList.remove("show");
});
