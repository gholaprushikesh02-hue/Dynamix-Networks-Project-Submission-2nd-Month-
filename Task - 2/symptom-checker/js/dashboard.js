const list = document.getElementById("history-list");

let history = JSON.parse(localStorage.getItem("history") || "[]");

history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});
