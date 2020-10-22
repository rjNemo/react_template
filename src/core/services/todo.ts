import Todo from '../models/todo';

export const listTodos = (): Todo[] => {
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
