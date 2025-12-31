const form = document.getElementById("create-task-form");

form.addEventListener("submit", (event) => {
  const task = document.getElementById("new-task-description").value;
  buildToDo(task);
});

function buildToDo(task) {
  const ul = document.getElementById("tasks");
  const li = document.createElement("li");
  li.textContent = task;
  ul.appendChild(li);
}
