const inputTask = document.getElementById('taskInput');
const taskDate = document.getElementById('dateInput');
const btnAdd = document.getElementById('btnAdd');
const btnDelete = document.getElementById('btnDelete');

const taskList = [];

btnAdd.addEventListener('click', () => {
    const id = Math.random().toString(36).substring(2, 8);

    const newTask = {
        id: id,
        title: inputTask.value,
        date: taskDate.value
    }

    taskList.push(newTask);
    console.log(taskList);

    // Clear inputs
    inputTask.value = '';
    taskDate.value = '';
});