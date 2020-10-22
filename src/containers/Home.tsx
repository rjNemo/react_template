import React, { FC } from 'react';

import { listTodos } from '../core/services/todo';
import { TodoList } from '../components/TodoList';

export const Home: FC = () => {
  const todos = listTodos();
  return <TodoList todos={todos} />;
};
