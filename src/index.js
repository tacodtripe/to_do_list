/* eslint-disable no-unused-vars */
import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const toDoListCointainer = document.getElementById('toDoListContainer');

const toDoList = [
  { description: 'demo 1', completed: true, index: 0 },
  { description: 'demo 2', completed: false, index: 1 },
  { description: 'demo 3', completed: false, index: 2 },
  { description: 'demo 4', completed: true, index: 3 },
];

function displayList(arr) {
  arr.forEach((e) => {
    const elementContainer = document.createElement('div');
    elementContainer.classList.add('row', 'justify-content-center', 'align-items-baseline');
    toDoListCointainer.appendChild(elementContainer);

    const statusCheckBox = document.createElement('input');
    statusCheckBox.setAttribute('type', 'checkbox');
    statusCheckBox.classList.add('col-1', 'justify-self-center', 'align-self-center');
    elementContainer.appendChild(statusCheckBox);

    const description = document.createElement('p');
    description.innerText = e.description;
    description.classList.add('col-4', 'justify-self-center', 'align-self-center');
    elementContainer.appendChild(description);

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-ellipsis-v', 'col-1', 'justify-self-center', 'align-self-center');
    elementContainer.appendChild(icon);
  });
}

displayList(toDoList);