import React, { FC } from 'react';

import { TodoList } from './TodoList';
import { Button } from '../../components/button';

import Todo from '../../core/models/todo';
import { listTodos } from '../../core/services/todo';
import { Container } from '../../components/container';

export const Home: FC = () => {
  const todos: Todo[] = listTodos();

  return (
    <div>
      <h1>Your tasks</h1>
      <p>Hi there!</p>
      <TodoList todos={todos} />
      <Container>
        <Button primary onClick={() => console.log('Clicked Normal Button')}>
          Normal Button
        </Button>
        <Button primary onClick={() => console.log('Clicked Primary Button')}>
          Primary Button
        </Button>
      </Container>
    </div>
  );
};
