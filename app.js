// window.addEventListener('load', listTask);
document.addEventListener('DOMContentLoaded', listTask);

function addTask() {
  let taskInput = document.getElementById("taskInput").value;
  if (_.isEmpty(taskInput) || taskInput.trim().length <= 1) {
    document.getElementById("bao_loi").style.display = "block";
  } else {
    document.getElementById('bao_loi').innerHTML = '';
    let task = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];
    task.push({
      task: taskInput,
    });
    localStorage.setItem("task", JSON.stringify(task));
    this.listTask();
  }
}

function listTask() {
  let task = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];
  if (task.length === 0) return false;
  let UpTask = "";
  task.forEach((input, index) => {
    // console.log(input);
    let taskID = index;
    index++;
    const lastIndex = task.length;
    if(lastIndex > 1){
        document.getElementById('count').innerHTML = 'You have ' + lastIndex + ' tasks';
    }else{
    document.getElementById('count').innerHTML = 'You have ' + lastIndex + ' task';
    }
    UpTask += `<ul>
                <li>
                    <input id="${index}" type="checkbox" name="${index}" />
                    <label for="${index}">
                    <td>${input.task}</td>
                    <a href="#" onclick="deleteTask(${taskID})"><i class="trash fas fa-trash" style="color:${randomColor()}"></i></a>
                    </label>
                </li>
            </ul>`;
            
    // console.log(UpTask)
    // <input id="${index}" type="checkbox" name="${index}" onchange="toggleStrikethrough(this, ${taskId})" />
    //     <label for="${index}">
    //       <td class="col-md-9" id="task-text-${taskId}">${input.task}</td>
    //       <a href="#" onclick="deleteTask(${taskID})"><i class="trash fas fa-trash" style="color:${randomColor()}"></i></a>
    //     </label>
  });
  document.getElementById("upTasks").innerHTML = UpTask;

}

function deleteTask(id){
    console.log(id)
    let task = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];
    task.splice(id,1);
    localStorage.setItem("task",JSON.stringify(task))
    listTask();
}
function clearALL(){
    localStorage.removeItem("task");
    location.reload();
}

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = 0.7;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  
  