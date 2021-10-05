import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('body');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());