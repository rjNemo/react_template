import React, { FC } from 'react';

import TodoList from './TodoList';
import { Button } from '../../components/button';
import { Container } from '../../components/container';

import { useListTodos } from '../../core/services/todo';

export const Home: FC = () => {
  const { loading, error, data } = useListTodos();

  if (error) {
    return <p>Sorry...</p>;
  }

  return (
    <Container>
      <h1>Your tasks</h1>
      <p>Hi there!</p>
      {!loading && !!data && <TodoList todos={data.listTodos} />}
      <Button primary onClick={() => console.log('Clicked Normal Button')}>
        Normal Button
      </Button>
      <Button primary onClick={() => console.log('Clicked Primary Button')}>
        Primary Button
      </Button>
    </Container>
  );
};
