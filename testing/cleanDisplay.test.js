import cleanDisplay from '../src/modules/cleanDisplay.js';

describe('DOM element manipulated', () => {
  document.body.innerHTML = '<div id="toDoListContainer">'
    + ' <div>'
    + ' </div>'
    + ' <div>'
    + ' </div>'
    + '</div>';

  const dom = document.querySelector('#toDoListContainer');

  test('Task container cleared', () => {
    expect(cleanDisplay(dom).childNodes).toHaveLength(0);
  });
});