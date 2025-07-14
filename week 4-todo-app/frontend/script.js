function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  date = date[1] + " " + date[2] + " " + date[3];
  document.querySelector("#date").innerHTML = date;
}
displayDate();

const toDoListContainer = document.querySelector(".to-do-list");
const input = document.getElementById("item");
const enterButton = document.getElementById("enter");

async function fetchTodos() {
  try {
    const response = await fetch("http://localhost:3000/todos");
    const todos = await response.json();
    renderTodos(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

function renderTodos(todos) {
  toDoListContainer.innerHTML = "";
  todos.forEach(todo => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
      <div class="input-controller">
        <textarea disabled>${todo.name}</textarea>
        <div class="edit-controller">
          <i class="fa-solid fa-pen-to-square edit"></i>
          <i class="fa-solid fa-trash delete"></i>
        </div>
      </div>
    `;

    // Edit button logic
    const editBtn = itemDiv.querySelector(".edit");
    const deleteBtn = itemDiv.querySelector(".delete");
    const textarea = itemDiv.querySelector("textarea");

    let editMode = false;

    editBtn.addEventListener("click", async () => {
      if (!editMode) {
        editMode = true;
        textarea.disabled = false;
        textarea.focus();
        editBtn.classList.remove("fa-pen-to-square");
        editBtn.classList.add("fa-check");
      } else {
        // Save edited text
        editMode = false;
        textarea.disabled = true;
        editBtn.classList.remove("fa-check");
        editBtn.classList.add("fa-pen-to-square");

        await updateTodo(todo.id, textarea.value);
        fetchTodos();
      }
    });

    // Delete button logic
    deleteBtn.addEventListener("click", async () => {
      await deleteTodo(todo.id);
      fetchTodos();
    });

    toDoListContainer.appendChild(itemDiv);
  });
}

async function addTodo() {
  const task = input.value.trim();
  if (!task) return;

  try {
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: task, completed: false }),
    });
    input.value = "";
    fetchTodos();
  } catch (error) {
    console.error("Error adding todo:", error);
  }
}

async function deleteTodo(id) {
  try {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

async function updateTodo(id, newName) {
  try {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName, completed: false }),
    });
  } catch (error) {
    console.error("Error updating todo:", error);
  }
}

enterButton.addEventListener("click", addTodo);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Initial fetch
fetchTodos();
