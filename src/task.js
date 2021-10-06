import './style.css';
import { tasks, task } from './tasks.js';

let getTask;
if (localStorage.getItem('taskList') != null) {
    getTask = JSON.parse(window.localStorage.getItem('taskList'));
} else {
    getTask = tasks;
}
console.log(getTask)

const changeState = (e) => {
    const taskId = Number(e.id);
    const task = getTask.find((t) => t.index === taskId);
    task.completed = !task.completed;
    const updatedTasks = getTask.filter((t) => t.index !== taskId);
    updatedTasks.push(task);
    window.localStorage.setItem('taskList', JSON.stringify(updatedTasks));
};

function handleCheck() {
    const checkBoxes = document.querySelectorAll('.checkbox');
    checkBoxes.forEach((checkbox) => checkbox.addEventListener('change', () => {
        changeState(checkbox);
        // eslint-disable-next-line no-use-before-define
        displayTasks();
    }));
}

function displayTasks(taskArray = getTask) {
    const list = document.querySelector('#list-items');
    const sortTasks = taskArray.sort((a, b) => a.index - b.index);
    list.innerHTML = sortTasks.map((t) => task(t)).join(' ');
    handleCheck();
}
export { tasks, task, displayTasks };