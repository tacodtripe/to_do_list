function addTask(arr, taskDescription, taskIndex) {
  arr.push({ description: taskDescription, completed: false, index: taskIndex });
}

function editDescription(element, newDescription) {
  element.description = newDescription;
}

export { addTask, editDescription };