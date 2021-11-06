/* eslint-disable no-unused-vars */
import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { setLocalStorage, updateLocalStorage } from './modules/local_storage.js';
import {
  addTask, editDescription, deleteTask, updateTaskIndex,
} from './modules/crud.js';

const toDoListCointainer = document.getElementById('toDoListContainer');
const newTaskInput = document.getElementById('newTaskInput');
const toDoList = [];

function orderToDisplay(arr) {
  const orderedList = [];
  for (let i = 0; i < arr.length; i += 1) {
    arr.forEach((e) => {
      if (i === e.taskindex) {
        orderedList.push(e);
      }
    });
  }
  return orderedList;
}

function cleanDisplay(arr) {
  while (arr.firstChild) {
    arr.removeChild(arr.firstChild);
  }
}

function displayElement(arr) {
  let orderedList = orderToDisplay(arr);
  cleanDisplay(toDoListCointainer);
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
    const newDescription = document.createElement('input');
    description.innerText = e.description;
    description.classList.add('col-10', 'align-self-center');
    newDescription.classList.add('col-10', 'align-self-center');
    newDescription.style.display = 'none';
    elementContainer.appendChild(description);
    elementContainer.appendChild(newDescription);

    description.addEventListener('click', () => {
      description.style.display = 'none';
      newDescription.style.display = 'block';
    });

    newDescription.addEventListener('keypress', (n) => {
      if (n.key === 'Enter') {
        editDescription(e, newDescription.value);
        newDescription.style.display = 'none';
        description.style.display = 'block';
        updateLocalStorage(orderedList);
        displayElement(JSON.parse(localStorage.getItem('toDoList')));
      }
    });

    const iconContainer = document.createElement('div');
    const moveIcon = document.createElement('i');
    const deleteIcon = document.createElement('i');
    iconContainer.classList.add('col-1', 'd-flex', 'justify-content-end');
    moveIcon.classList.add('fas', 'fa-ellipsis-v', 'mt-1', 'me-3');
    deleteIcon.classList.add('fas', 'fa-trash-alt', 'mt-1');
    iconContainer.appendChild(moveIcon);
    iconContainer.appendChild(deleteIcon);
    elementContainer.appendChild(iconContainer);

    deleteIcon.addEventListener('click', () => {
      const filteredList = deleteTask(orderedList, e.taskindex);
      updateTaskIndex(filteredList);
      orderedList = filteredList;
      updateLocalStorage(orderedList);
      displayElement(JSON.parse(localStorage.getItem('toDoList')));
    });
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

newTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask(toDoList, newTaskInput.value, toDoList.length);
    updateLocalStorage(toDoList);
    displayElement(JSON.parse(localStorage.getItem('toDoList')));
  }
});

setLocalStorage(toDoList);
displayElement(JSON.parse(localStorage.getItem('toDoList')));
