function addTask() {
  let taskinput = document.getElementById("taskinput").value;
  let priority = document.getElementById("priority").value;
  let date = document.getElementById("date").value;
  let tasklist = document.getElementById("tasklist");

  tasklist.innerHTML = "";
  let existtask = JSON.parse(localStorage.getItem("data")) || [];

  if (taskinput.trim() !== "" && priority !== "" && date !== "") {
    let task = {
      name: taskinput,
      priority: priority,
      date: date,
    };

    existtask.push(task);
    localStorage.setItem("data", JSON.stringify(existtask));

    displayTasks(existtask);

    document.getElementById("taskinput").value = "";
    document.getElementById("priority").value = "";
    document.getElementById("date").value = "";
  } else {
    alert("All fields are mandatory");
    displayTasks(existtask);
  }
}

function deleteitem(index) {
  console.log(index);
  let existtask = JSON.parse(localStorage.getItem("data")) || [];
  existtask.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(existtask));

  displayTasks(existtask);
}

function markitem(index) {
  let completed = document.getElementById("completed");
  console.log(index);
  let existtask = JSON.parse(localStorage.getItem("data")) || [];

  let allcompletedtasks = JSON.parse(localStorage.getItem("completed")) || [];


  let completedtask = existtask[index];

  allcompletedtasks.push(completedtask);

 
  existtask.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(existtask));
  localStorage.setItem("completed", JSON.stringify(allcompletedtasks));

  displayTasks(existtask);
  displaycompleted(allcompletedtasks);

}

function displayTasks(tasks) {

  if(tasks)
  {
  let tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = "";

  tasks.forEach((task, index) => {
    let newtask = `
            <section>
                <span>${task.name}</span>
                <span>${task.priority}</span>
                <span>${task.date}</span>
                <button type='button' onclick="markitem(${index})">Mark as Complete</button>
                <button type='button' onclick="deleteitem(${index})">Delete Task</button>
            </section>`;
    tasklist.innerHTML += newtask;
  });

}
}


function displaycompleted(tasks) {

  if(tasks)
{
  let completed = document.getElementById("completed");
  completed.innerHTML = "";

  tasks.forEach((allcompletedtasks, index) => {
    let newtask = `
            <section>
                <span>${allcompletedtasks.name}</span>
                <span>${allcompletedtasks.priority}</span>
                <span>${allcompletedtasks.date}</span>
            </section>`;
            completed.innerHTML += newtask;
  });
}
}


function sortbypr() {
  let existtask = JSON.parse(localStorage.getItem("data")) || [];

  let lowPriorityTasks = existtask.filter((task) => task.priority === "Low");
  let mediumPriorityTasks = existtask.filter(
    (task) => task.priority === "Medium"
  );
  let highPriorityTasks = existtask.filter((task) => task.priority === "High");

  let sorted = lowPriorityTasks.concat(mediumPriorityTasks, highPriorityTasks);

  displayTasks(sorted);
}

function sortbydate() {
  let existtask = JSON.parse(localStorage.getItem("data")) || [];
  existtask.sort((a, b) => new Date(a.date) - new Date(b.date));
  console.log(existtask);

  displayTasks(existtask);
}


displaycompleted(JSON.parse(localStorage.getItem("completed")));
displayTasks(JSON.parse(localStorage.getItem("data")));