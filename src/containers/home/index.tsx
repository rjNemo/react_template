import React, { FC } from 'react';

import TodoList from './TodoList';
import { Button } from '../../components/button';
import { Container } from '../../components/container';

import Todo from '../../core/models/todo';
import { listTodos } from '../../core/services/todo';

export const Home: FC = () => {
  const todos: Todo[] = listTodos();

  return (
    <Container>
      <h1>Your tasks</h1>
      <p>Hi there!</p>
      <TodoList todos={todos} />
      <Button primary onClick={() => console.log('Clicked Normal Button')}>
        Normal Button
      </Button>
      <Button primary onClick={() => console.log('Clicked Primary Button')}>
        Primary Button
      </Button>
    </Container>
  );
};
