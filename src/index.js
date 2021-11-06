/* eslint-disable no-unused-vars */
import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { setLocalStorage, updateLocalStorage } from './modules/local_storage.js';

const toDoListCointainer = document.getElementById('toDoListContainer');

const toDoList = [
  { description: 'demo 1 index 2', completed: false, index: 2 },
  { description: 'demo 2 index 1', completed: false, index: 1 },
  { description: 'demo 3 index 0', completed: false, index: 0 },
  { description: 'demo 4 index 3', completed: false, index: 3 },
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
    elementContainer.classList.add('row', 'justify-content-center', 'align-items-baseline', 'border-top');
    toDoListCointainer.appendChild(elementContainer);

    const checkBoxContainer = document.createElement('div');
    const checkBoxSpan = document.createElement('span');
    const checkBoxIcon = document.createElement('i');
    checkBoxContainer.classList.add('col-1', 'checkBoxContainer');
    checkBoxSpan.classList.add('checkBoxSpan');
    checkBoxIcon.classList.add('fas', 'fa-check');
    checkBoxContainer.appendChild(checkBoxSpan);
    checkBoxContainer.appendChild(checkBoxIcon);
    elementContainer.appendChild(checkBoxContainer);

    if (e.completed === true) {
      checkBoxSpan.style.display = 'none';
      checkBoxIcon.style.display = 'block';
    }
    if (e.completed === false) {
      checkBoxSpan.style.display = 'block';
      checkBoxIcon.style.display = 'none';
    }

    checkBoxSpan.addEventListener('click', () => {
      checkBoxSpan.style.display = 'none';
      checkBoxIcon.style.display = 'block';
      e.completed = true;
      updateLocalStorage(orderedList);
    });

    checkBoxIcon.addEventListener('click', () => {
      checkBoxSpan.style.display = 'block';
      checkBoxIcon.style.display = 'none';
      e.completed = false;
      updateLocalStorage(orderedList);
    });

    const description = document.createElement('p');
    description.innerText = e.description;
    description.classList.add('col-10', 'align-self-center');
    elementContainer.appendChild(description);

    const iconContainer = document.createElement('div');
    const icon = document.createElement('i');
    iconContainer.classList.add('col-1', 'd-flex', 'justify-content-end');
    icon.classList.add('fas', 'fa-ellipsis-v', 'mt-1', 'me-3');
    iconContainer.appendChild(icon);
    elementContainer.appendChild(iconContainer);
  });
  const clearAllButtonContainer = document.createElement('div');
  const clearAllButton = document.createElement('button');
  clearAllButtonContainer.classList.add('row', 'justify-content-center');
  clearAllButton.classList.add('col-12');
  clearAllButton.id = 'clearAllButton';
  clearAllButton.innerText = 'Clear all completed';
  toDoListCointainer.appendChild(clearAllButtonContainer);
  clearAllButtonContainer.appendChild(clearAllButton);
}

setLocalStorage(toDoList);
displayElement(JSON.parse(localStorage.getItem('toDoList')));
