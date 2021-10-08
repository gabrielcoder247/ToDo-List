import { saveAndReload } from './tasks.js';

const editTask = (arr) => {
  const editImg = document.querySelectorAll('.dot-menu img');
  editImg.forEach((item) => {
    item.addEventListener('click', () => {
      const hiddenInput = item.parentNode.parentNode.querySelector('.hidden-edit-input');
      const visiableInput = item.parentNode.parentNode.querySelector('.visiable-input');

      item.src = 'https://img.icons8.com/material-outlined/24/000000/trash--v2.png';

      visiableInput.style.display = 'none';
      hiddenInput.style.display = 'block';
      hiddenInput.setSelectionRange(hiddenInput.value.length, hiddenInput.value.length);
      hiddenInput.focus();
      item.parentNode.parentNode.style.backgroundColor = '#FFFF99';

      // waiting for being edited
      hiddenInput.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          visiableInput.querySelector('label').textContent = hiddenInput.value;
          const itemIndex = visiableInput.querySelector('input').id;
          arr[itemIndex - 1].description = hiddenInput.value;
          saveAndReload(arr);
        }
      });
      // waiting for be removed
      item.addEventListener('click', (e) => {
        const itemIndex = e.target.parentNode.parentNode.querySelector('.visiable-input').querySelector('input').id;
        let count = 1;
        const remainingTask = [];
        arr.forEach((item) => {
          if (item.index !== parseInt(itemIndex, 10)) {
            item.index = count;
            remainingTask.push(item);
            count += 1;
          }
        });
        arr = remainingTask;
        saveAndReload(arr);
      });
    });
  });
};

export default editTask;