const addButton = document.getElementById("add-button");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
    const task = input.value;
    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.classList.add("delete-button");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
});

// ページ読み込み時に保存されたタスクを復元
window.onload = function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const list = document.getElementById('todo-list');
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
    });
};

// タスクを保存
function saveTasks() {
    const tasks = [];
    document.querySelectAll('#todo-list li').forEach(li => {
        tasks.push(li.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// タスク追加後に保存
document.getElementById('add-button').addEventListener('click', () => {
    saveTasks();
});