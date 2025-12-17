const input = document.getElementById("symptom-input");
const suggestionsBox = document.getElementById("suggestions");
const resultsBox = document.getElementById("results");
const checkBtn = document.getElementById("check-btn");

input.addEventListener("keyup", () => {
    const text = input.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    const filtered = allSymptoms.filter(s => s.startsWith(text));

    filtered.forEach(sym => {
        const div = document.createElement("div");
        div.className = "suggestion";
        div.textContent = sym;
        div.onclick = () => {
            input.value = sym;
            suggestionsBox.innerHTML = "";
        };
        suggestionsBox.appendChild(div);
    });
});

checkBtn.addEventListener("click", () => {
    const symptom = input.value.toLowerCase();
    resultsBox.innerHTML = "";

    if (!symptom) {
        alert("Please Enter a Symptom.");
        return;
    }

    const conditions = conditionData[symptom];

    if (!conditions) {
        resultsBox.innerHTML = "<p>No data available.</p>";
        return;
    }

    // Save history
    let history = JSON.parse(localStorage.getItem("history") || "[]");
    history.push(symptom);
    localStorage.setItem("history", JSON.stringify(history));

    conditions.forEach(cond => {
        const div = document.createElement("div");
        div.className = "result-card";
        div.textContent = cond;
        resultsBox.appendChild(div);
    });
});
