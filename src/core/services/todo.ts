import Todo from '../models/todo';

export const listTodos = (): Todo[] => {
  console.log('create list');
  return [
    {
      id: '1',
      title: 'test',
      isDone: false
    },
    {
      id: '2',
      title: 'second',
      isDone: true
    }
  ];
};
