import cleanDisplay from '../src/index.js';
//import toDoListCointainer from './__mocks__/dom.js';
jest.mock('./__mocks__/dom.js')


describe('DOM elemented manupulated', () => {
  const dom = toDoListCointainer;

  test('Task container cleared', () => {
    expect(cleanDisplay(dom)).toStrictEqual('<div id="toDoListContainer"></div>');
  });
});