import { gql, useMutation } from '@apollo/client';

import Todo from '../models/todo';

const CREATE_TODO = gql`
  mutation CreateTodo($title: String!) {
    createTodo(title: $title) {
      todo {
        todoId
        title
        isDone
      }
    }
  }
`;

export const useCreateTodo = (todoTitle: string) => {
  const [createTodo, result] = useMutation<
    { createTodo: Todo },
    { title: string }
  >(CREATE_TODO, { variables: { title: todoTitle } });
  return { createTodo, result };
};
