const tasks = [{
  index: 1,
  description: 'Play Music',
  completed: false,
},
{
  index: 2,
  description: 'write codes',
  completed: false,
},
{
  index: 3,
  description: 'Play Game',
  completed: false,
},
];

function task(t) {
  const completeClass = t.completed ? 'strike' : '';
  const completeChecked = t.completed ? 'checked' : '';
  return `<ul class="list">
        <li class="items">
        <div class="details">
        <input type="checkbox" class="checkbox" name="option" id="${t.index}" ${completeChecked} >
        <label for="option1" id="item-list" class="${completeClass}">${t.description}</label>
        </div>
        <div class="icon">
        <i class="fas fa-ellipsis-v color"></i>
        </div>
       </li>
       </ul>
       <div class="line"></div>`;
}

export { tasks, task };