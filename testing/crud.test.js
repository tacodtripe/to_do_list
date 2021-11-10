import { addTask, deleteTask } from "../src/modules/crud";

describe('Add task is working', () => {
  let tasks = [];
  tasks = addTask(tasks, 'example1', tasks.length);
  tasks = addTask(tasks, 'example2', tasks.length);

  test('Task added to Tasks Array', () => {
    expect(tasks).toHaveLength(2);
  })
  test('Task description is added', () => {
    expect(tasks[0].description).toBe('example1');
  })
  test('Task Completed Status is false', () => {
    expect(tasks[0].completed).toBe(false);
  })
  test('Task Index is added', () => {
    expect(tasks[1].taskindex).toBe(1);
  })
})

describe('Delete task from Array', ()  => {
  let tasks = [];
  tasks = addTask(tasks, 'example1', tasks.length);
  tasks = addTask(tasks, 'example2', tasks.length);

  test('Task deleted from Tasks Array', () => { 
  expect(deleteTask(tasks, 0)).toHaveLength(1)
  })


 });