
import editTask from '../__mocks__/editTask.js';
import localStorageMock from '../__mocks__/localStorage.js';

describe('Edit ToDo', () => {
  const arr = [{
    description: 'something to do 1',
    completed: true,
    index: 1,
  },
  {
    description: 'something to do 2',
    completed: false,
    index: 2,
  },
  {
    description: 'something to do 3',
    completed: true,
    index: 3,
  },
  ];

  test('Should return object with new 
