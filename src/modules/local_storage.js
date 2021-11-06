/* eslint-disable no-unused-vars */

function setLocalStorage(arr) {
  if (!localStorage.getItem('toDoList')) {
    const toDoList = localStorage.setItem('toDoList', JSON.stringify(arr));
  }
}

function updateLocalStorage(arr) {
  localStorage.setItem('toDoList', JSON.stringify(arr));
}

export { setLocalStorage, updateLocalStorage };
