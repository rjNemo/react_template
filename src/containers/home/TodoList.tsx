import React, { memo } from 'react';

import Todo from '../../core/models/todo';

type Props = {
  todos: Todo[];
};

const TodoList = ({ todos }: Props) => (
  <div>
    <ul>
      {todos.map((todo) => (
        <li key={todo.todoId}>
          {todo.title}, status: {todo.isDone ? 'Done' : 'In Progress'}
        </li>
      ))}
    </ul>
  </div>
);

export default memo(TodoList);
