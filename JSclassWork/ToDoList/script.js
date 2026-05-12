function addNewTask() {
    const taskInput = document.getElementById("taskInput");
    const LI = document.createElement("li");
    LI.classList.add("my-3");

    const DIV = document.createElement("div");
    DIV.classList.add("d-flex", "align-items-center")

    const SPAN = document.createElement("span");
    SPAN1.innerText = taskToAdd;

    const BUTTON = document.createElement("button");
    BUTTON.classList.add("btn", "btn-danger", "ms-4", "d-flex", "gap-3", "align-items-center", "justify-content-center",);

    BUTTON.onclick = function () 
    {
        LI.remove();
    }

    




    const SPAN2 = document.createElement("span");
    SPAN1.InnerText = "DELETE";


}