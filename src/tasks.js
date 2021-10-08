export class TaskList {
    constructor(arr) {
        this.tasks = arr;
    }
}

export const saveAndReload = (arr) => {
    localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
    window.location.reload();
};

export const changeStatus = (arr) => {
    const checkBoxes = document.querySelectorAll('.form-item input');
    checkBoxes.forEach((item) => {
        item.addEventListener('click', (e) => {
            const targetid = e.target.id - 1;
            if (arr[parseInt(targetid, 10)].completed) {
                arr[parseInt(targetid, 10)].completed = false;
            } else {
                arr[parseInt(targetid, 10)].completed = true;
            }
            saveAndReload(arr);
        });
    });
};

export const removeCompletedTask = (arr) => {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', () => {
        const arr0 = arr.filter((item) => item.completed === false);
        arr0.forEach((item, i) => { item.index = i + 1; });
        saveAndReload(arr0);
    });
};


export const addNewTask = (arr) => {
    const inputBox = document.querySelector('#input-box');
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        const taskValue = inputBox.value;
        const item = {
            description: taskValue,
            completed: false,
            index: arr.length + 1,
        };
        arr.push(item);
        localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
        inputBox.value = '';
        e.preventDefault();
        window.location.reload();
    });
};