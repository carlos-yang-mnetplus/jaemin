import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchTodos } from '../../api/todos';
import { queryKey } from '../queryKey';

export function useTodos() {
  return useSuspenseQuery({
    queryKey: queryKey.todos,
    queryFn: fetchTodos,
    select: (todos) => {
        return {...todos, category: 'todos'}
    },
  });
} 