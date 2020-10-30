import { gql, useQuery } from '@apollo/client';

import Todo from '../models/todo';

const LIST_TODOS = gql`
  query ListAll {
    listTodos {
      ... on TodoListResponseField {
        todos {
          todoId
          title
          isDone
        }
      }
    }
  }
`;

export const useListTodos = () => {
  const { loading, error, data } = useQuery<{ listTodos: { todos: Todo[] } }>(
    LIST_TODOS
  );
  return { loading, error, data };
};
