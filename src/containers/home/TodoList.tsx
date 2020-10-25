import React, { FC, memo } from 'react';

import Todo from '../../core/models/todo';

interface Props {
  todos: Todo[];
}

const TodoList: FC<Props> = ({ todos }) => (
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
