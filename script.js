let text = document.getElementById("input");
let myBtn = document.getElementById("myBtn");
let container = document.getElementById("container");

myBtn.addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.textContent = input.value;
    container.appendChild(newDiv);
    input.value = "";
})

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("myBtn").click()
    }
});