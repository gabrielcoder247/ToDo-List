import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, Now has imported new script
  element.innerHTML = _.join([], ' ');

  return element;
}

document.body.appendChild(component());

const data = [{
  index: 1,
  description: 'Attend a meeting',
  completed: true,
}, {
  index: 4,
  description: 'Go shopping in the supermarket',
  completed: true,
}, {
  index: 2,
  description: 'Go to the gym',
  completed: false,
}, {
  index: 3,
  description: 'Go to the club and have some drinks',
  completed: true,
},

];
let toDoItem = '';
const itemList = document.querySelector('#list-container');

data.forEach((item, index) => {
  toDoItem += `
    <li class="items" id="${index}">
    <input type="checkbox" id="check-b" name="checkbox" value="">
    <p id="item-list">${item.description}</p> <a href="#"><i id="fa-ellipsis-v" class="fas fa-ellipsis-v"></i></a>
    </li>
    <div class="line"></div>
    `;
});
itemList.innerHTML = toDoItem;