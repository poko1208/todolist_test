document.addEventListener("DOMContentLoaded", function () {
  const addition = document.getElementById("addition");
  const inputText = document.getElementById("inputText");
  const todoList = document.getElementById("todo-list");
  const deletion = document.getElementById("deletion");
  const edit = document.getElementById("edit");
  const completion = document.getElementById("completion");

  addition.addEventListener("click", function () {
    const input = inputText.value;
    if (input.trim() === "") {
      alert("入力しろ殺すぞ");
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = input;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.onclick = function () {
      todoList.removeChild(listItem);
    };

    const completionButton = document.createElement("button");
    completionButton.textContent = "完了";
    completionButton.onclick = function () {
      if (listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "none";
      } else {
        listItem.style.textDecoration = "line-through";
      }
    };

    listItem.appendChild(deleteButton);
    listItem.appendChild(completionButton);
    todoList.appendChild(listItem);

    inputText.value = "";
  });
});
