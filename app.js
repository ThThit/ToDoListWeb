const inputTask = document.getElementById('taskInput');
const taskDate = document.getElementById('dateInput');
const btnAdd = document.getElementById('btnAdd');
const btnFinish = document.getElementById('btnFinish');
const ulList = document.getElementById('taskList');

const taskList = [];

btnAdd.addEventListener('click', () => {
    if (inputTask.value === '') {
        return;
    } 

    const newTask = {
        title: inputTask.value,
        date: taskDate.value
    }

    taskList.push(newTask);
    console.log(taskList);

    renderTasks();

    // Clear inputs
    inputTask.value = '';
    taskDate.value = '';
});

function renderTasks() {
    ulList.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span class="title">${task.title}</span>
            <span class="date">${task.date}</span>
            <button id="btnFinish" onClick="finishTask(${index})">Done</button>`;
        
        ulList.prepend(li);
    });
}

function finishTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}