import { useSuspenseQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPosts } from '../api/posts';
import { queryKey } from './queryKey';

interface Post {
  id: number;
}

export function usePosts({ id }: Post) {
  const queryClient = useQueryClient();

  const query = useSuspenseQuery({
    queryKey: queryKey.posts,
    queryFn: () => fetchPosts({ id }),
    staleTime: 0,
    gcTime: 0,
  });

  const refetchPosts = () => {
    queryClient.invalidateQueries({
      queryKey: queryKey.posts,
    });
  };

  return {
    ...query,
    refetchPosts,
  };
} 