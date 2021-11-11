import { addTask, deleteTask, toogleBoolean } from '../src/modules/crud.js';

describe('Add task is working', () => {
  let tasks = [];
  tasks = addTask(tasks, 'example1', tasks.length);
  tasks = addTask(tasks, 'example2', tasks.length);

  test('Task added to Tasks Array', () => {
    expect(tasks).toHaveLength(2);
  });
  test('Task description is added', () => {
    expect(tasks[0].description).toBe('example1');
  });
  test('Task Completed Status is false', () => {
    expect(tasks[0].completed).toBe(false);
  });
  test('Task Index is added', () => {
    expect(tasks[1].taskindex).toBe(1);
  });
});

describe('Delete task from Array', () => {
  let tasks = [];
  tasks = addTask(tasks, 'example1', tasks.length);
  tasks = addTask(tasks, 'example2', tasks.length);

  test('Task deleted from Tasks Array', () => {
    expect(deleteTask(tasks, 0)).toHaveLength(1);
  });

  test('Correct task deleted from Tasks Array', () => {
    expect(deleteTask(tasks, 0)).not.toContain({ description: 'example1', completed: false, taskindex: 0 });
  });
});

describe('Delete task from Array', () => {
  let tasks = [];
  tasks = addTask(tasks, 'example1', tasks.length);

  test('Task completed is toogled', () => {
    expect(toogleBoolean(tasks[0])).toStrictEqual({ description: 'example1', completed: true, taskindex: 0 });
  });

  test('Task completed is toogled back', () => {
    expect(toogleBoolean(tasks[0])).toStrictEqual({ description: 'example1', completed: false, taskindex: 0 });
  });
});