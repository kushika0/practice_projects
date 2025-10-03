let add = document.querySelector(".btn");
let input = document.querySelector(".inp");
let task = document.querySelector(".list");

add.addEventListener("click", function() {
    const taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText; 
    span.addEventListener("click", function() {
        span.classList.toggle("completed"); 
    });

    // Delete button
    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete"; 
    delbtn.addEventListener("click", function() {
        li.remove(); 
    });

    li.append(span);
    li.append(delbtn);

    task.append(li);

    input.value = ""; 
});
