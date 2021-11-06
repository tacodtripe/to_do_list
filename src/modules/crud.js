function addTask(arr, taskDescription, taskIndex) {
  arr.push({ description: taskDescription, completed: false, index: taskIndex });
}

export { addTask };