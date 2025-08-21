const addButton = document.getElementById("add-button");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// ページ読み込み時：保存されたタスクを復元
window.onload = function () {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTaskToList(task);
    });
};

// タスク追加
addButton.addEventListener("click", () => {
    const task = input.value;
    if (task === "") return;
    addTaskToList(task);
    input.value = "";
    saveTasks();
});

// タスクをリストに追加する関数
function addTaskToList(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.classList.add("delete-button");
    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
}

// タスクを localStorage に保存する関数
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#todo-list li").forEach(li => {
        const text = li.firstChild.textContent; // 削除ボタンを除く
        tasks.push(text);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}