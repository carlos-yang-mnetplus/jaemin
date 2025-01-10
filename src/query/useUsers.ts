import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/users';
import { queryKey } from './queryKey';

export function useUsers() {
  return useSuspenseQuery({
    queryKey: queryKey.users,
    queryFn: fetchUsers,
  });
} 