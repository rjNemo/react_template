import Todo from '../models/todo';

export const listTodos = (): Todo[] => {
  return [
    {
      todoId: '1',
      title: 'test',
      isDone: false
    },
    {
      todoId: '2',
      title: 'second',
      isDone: true
    }
  ];
};
