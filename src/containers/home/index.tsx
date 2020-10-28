import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import TodoList from './TodoList';
import { Button } from '../../components/button';
import { Container } from '../../components/container';

import { useListTodos } from '../../core/services/listTodo';
import { useCreateTodo } from '../../core/services/createTodo';

export const Home: FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>('');
  const { loading, error, data } = useListTodos();
  const { createTodo } = useCreateTodo(todoTitle);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(() => e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo();
  };

  return (
    <Container>
      <h1>Your tasks</h1>
      <p>Hi there!</p>
      {error ? (
        <h3>{error.message}. Sorry...</h3>
      ) : (
        !loading &&
        !!data && (
          <>
            <TodoList todos={data.listTodos} />
            <form onSubmit={handleSubmit}>
              <input type="text" value={todoTitle} onChange={handleChange} />
              <Button
                primary={false}
                onClick={() => console.log('Clicked Normal Button')}
              >
                Normal Button
              </Button>
              <Button
                primary
                onClick={() => console.log('Clicked Primary Button')}
              >
                Primary Button
              </Button>
            </form>
          </>
        )
      )}
    </Container>
  );
};
