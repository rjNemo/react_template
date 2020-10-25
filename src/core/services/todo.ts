import { gql, useQuery } from '@apollo/client';

import Todo from '../models/todo';

const LIST_TODOS = gql`
  query ListAll {
    listTodos {
      todoId
      title
      isDone
    }
  }
`;

export const useListTodos = () => {
  const { loading, error, data } = useQuery<{ listTodos: Todo[] }>(LIST_TODOS);
  return { loading, error, data };
};
