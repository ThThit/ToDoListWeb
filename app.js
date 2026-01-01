const inputTask = document.getElementById('taskInput');
const taskDate = document.getElementById('dateInput');
const taskTime = document.getElementById('taskTime');
const btnAdd = document.getElementById('btnAdd');
const btnFinish = document.getElementById('btnFinish');
const ulList = document.getElementById('taskList');

let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

renderTasks();

btnAdd.addEventListener('click', () => {
    if (inputTask.value === '') {
        return;
    } 

    const newTask = {
        title: inputTask.value,
        date: taskDate.value,
        time: taskTime.value
    }

    taskList.push(newTask);
    console.log(taskList);

    console.log(newTask);

    // save the lsit to the local 
    localStorage.setItem(
        'taskList', JSON.stringify(taskList)
    );

    renderTasks();

    // Clear inputs
    inputTask.value = '';
    taskDate.value = '';
    taskTime.value = '';
});

function renderTasks() {
    ulList.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span class="title">${task.title}</span>
            <span class="date">${task.date}</span>
            <span class="time">${task.time}</span>
            <button id="btnFinish" onClick="finishTask(${index})">Done</button>`;
        
        ulList.prepend(li);
    });
}

function finishTask(index) {
    taskList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    renderTasks();
}