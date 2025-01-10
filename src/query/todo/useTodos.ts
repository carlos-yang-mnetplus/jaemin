import { useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, Todo } from '../../api/todos';
import { queryKey } from '../queryKey';

export function useTodos() {
  const queryClient = useQueryClient();

  // 캐시 무효화 함수
  const invalidateTodos = () => {
    queryClient.invalidateQueries({
      queryKey: queryKey.todos,
    });
  };

  // 특정 ID의 Todo 캐시 업데이트
  const updateTodoCache = (id: number, newData: Todo) => {
    queryClient.setQueryData(queryKey.todos, (oldData: Todo[]) => {
      return oldData.map((item: Todo) => 
        item.id === id ? { ...item, ...newData } : item
      );
    });
  };

  return {
    ...useSuspenseQuery({
      queryKey: queryKey.todos,
      queryFn: fetchTodos,
    }),
    invalidateTodos,
    updateTodoCache,
  };
}