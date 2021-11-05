/* eslint-disable no-unused-vars */
import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const toDoListCointainer = document.getElementById('toDoListContainer');

const toDoList = [
  { description: 'demo 1 index 2', completed: true, index: 2 },
  { description: 'demo 2 index 1', completed: false, index: 1 },
  { description: 'demo 3 index 0', completed: false, index: 0 },
  { description: 'demo 4 index 3', completed: true, index: 3 },
];

function orderToDisplay(arr) {
  const orderedList = [];
  for (let i = 0; i < arr.length; i += 1) {
    arr.forEach((e) => {
      if (i === e.index) {
        orderedList.push(e);
      }
    });
  }
  return orderedList;
}

function displayElement(arr) {
  const orderedList = orderToDisplay(arr);
  orderedList.forEach((e) => {
    const elementContainer = document.createElement('div');
    elementContainer.classList.add('row', 'justify-content-center', 'align-items-baseline');
    toDoListCointainer.appendChild(elementContainer);

    const checkBoxContainer = document.createElement('div');
    const statusCheckBox = document.createElement('input');
    checkBoxContainer.classList.add('col-1', 'justify-self-center', 'align-self-center');
    statusCheckBox.setAttribute('type', 'checkbox');
    statusCheckBox.classList.add('align-self-center');
    checkBoxContainer.appendChild(statusCheckBox);
    elementContainer.appendChild(checkBoxContainer);

    const description = document.createElement('p');
    description.innerText = e.description;
    description.classList.add('col-2', 'align-self-center');
    elementContainer.appendChild(description);

    const iconContainer = document.createElement('div');
    const icon = document.createElement('i');
    iconContainer.classList.add('col-1', 'd-flex', 'justify-content-end');
    icon.classList.add('fas', 'fa-ellipsis-v', 'mt-1');
    iconContainer.appendChild(icon);
    elementContainer.appendChild(iconContainer);
  });
  const clearAllButtonContainer = document.createElement('div');
  const clearAllButton = document.createElement('button');
  clearAllButtonContainer.classList.add('row', 'justify-content-center');
  clearAllButton.classList.add('col-4');
  clearAllButton.id = 'clearAllButton';
  clearAllButton.innerText = 'Clear all completed';
  toDoListCointainer.appendChild(clearAllButtonContainer);
  clearAllButtonContainer.appendChild(clearAllButton);
}

displayElement(toDoList);
