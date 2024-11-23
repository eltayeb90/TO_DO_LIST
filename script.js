const inputTask = document.getElementById
("input_task");

const taskContainer = document.getElementById("tasks_container");

function addTask(){
    if(inputTask.value === ''){
        alert("please fill out the task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        taskContainer.appendChild(li);
        /* alert("you have been added a new task") */

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        let edit = document.createElement("button")
        edit.innerHTML = "Edit";
        edit.classList.add("edit_task")
        li.appendChild(edit)


    }
    inputTask.value= "";
    saveData();
}


taskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
        alert("the task have been deleted")
    }
    else if(e.target.tagName ==="BUTTON"){
        inputTask.value = e.target.parentElement.innerHTML
        e.target.parentElement.remove();
        saveData()
        
    }
   


}, false)

function saveData(){
    localStorage.setItem("data", taskContainer.innerHTML);
}

function showTasks(){
    taskContainer.innerHTML = localStorage.getItem("data")
}
showTasks()