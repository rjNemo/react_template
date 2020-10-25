import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';

import TodoList from './TodoList';
import { Button } from '../../components/button';
import { Container } from '../../components/container';

const LIST_TODOS = gql`
  query ListAll {
    listTodos {
      todoId
      title
      isDone
    }
  }
`;

export const Home: FC = () => {
  // const todos: Todo[] = listTodos();
  const { loading, error, data } = useQuery(LIST_TODOS);
  if (error) {
    return <p>Sorry...</p>;
  }

  return (
    <Container>
      <h1>Your tasks</h1>
      <p>Hi there!</p>
      {!loading && <TodoList todos={data.listTodos} />}
      <Button primary onClick={() => console.log('Clicked Normal Button')}>
        Normal Button
      </Button>
      <Button primary onClick={() => console.log('Clicked Primary Button')}>
        Primary Button
      </Button>
    </Container>
  );
};
