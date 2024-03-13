const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const listEl = document.getElementById("items");

function addItem() {
  // Create a new list item when clicking on the "Add" button
  const itemEl = document.createElement("li");
  const checkbox = document.createElement("input");
  const deleteButton = document.createElement("button");
  const titleEl = document.createElement("span");
  const iconElement = document.createElement("i");
  titleEl.innerText = inputEl.value;
  checkbox.setAttribute("type", "checkbox");
  // Add classes
  iconElement.classList.add("fa-solid");
  iconElement.classList.add("fa-trash");
  deleteButton.classList.add("delete");
  // Add event listeners
  deleteButton.addEventListener("click", deleteItem);

  // Create a task element
  deleteButton.appendChild(iconElement);
  itemEl.appendChild(checkbox);
  itemEl.appendChild(titleEl);
  itemEl.appendChild(deleteButton);

  // Add task to list
  listEl.appendChild(itemEl);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
});

function deleteItem() {
  // Find the items list
  // Find which item is clicked
  // Find the parent element of the delete button

  //let listItem = this.parentNode;
  //let list = listItem.parentNode;
  //list.removeChild(listItem);

  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
    };
  });
}
