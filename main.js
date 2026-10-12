const loadTasksBtn = document.getElementById("loadTasksBtn");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("statusMessage");

const manager = new TaskManager();

function renderTasks() {
  taskList.textContent = "";

  manager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) {
      taskDiv.classList.add("completed");
    }

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(toggleBtn);
    taskDiv.appendChild(deleteBtn);

        toggleBtn.addEventListener("click", () => {
      manager.toggleTask(task.id);
      renderTasks();
    });

    deleteBtn.addEventListener("click", () => {
      manager.removeTask(task.id);
      renderTasks();
    });
    taskList.appendChild(taskDiv);
  });
}

async function loadTasks() {
  statusMessage.textContent = "Loading tasks...";

  try {
    const rawTasks = await fetchTasks();

    // JSON requirement: stringify, then parse
    const json = JSON.stringify(rawTasks);
    const parsedTasks = JSON.parse(json);

    const taskInstances = parsedTasks.map(
      (item) => new Task(item.id, item.title, item.completed)
    );

    manager.setTasks(taskInstances);
    renderTasks();
    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = "Error: Failed to load tasks.";
  }
}

loadTasksBtn.addEventListener("click", loadTasks);