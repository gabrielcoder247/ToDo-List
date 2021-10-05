import _ from 'lodash';
import './style.css';

import * as Task from './task.js';

function component() {
  const element = document.createElement('div');

  // Lodash, Now has imported new script
  element.innerHTML = _.join([], ' ');

  return element;
}

document.body.appendChild(component());

Task.displayTasks();