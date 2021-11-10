function addTask(arr, taskDescription, taskIndex) {
  arr.push({ description: taskDescription, completed: false, taskindex: taskIndex });
  return arr;
}

function editDescription(element, newDescription) {
  element.description = newDescription;
}

function deleteTask(arr, elementId) {
   return arr.filter((task, index, array) => array[index] !== arr[elementId]);
}

function updateTaskIndex(arr) {
  let i = 0;
  arr.forEach((element) => {
    element.taskindex = i;
    i += 1;
  });
}

function toogleBoolean(element) {
  element.completed = !element.completed;
}

export {
  addTask, editDescription, deleteTask, updateTaskIndex, toogleBoolean,
};