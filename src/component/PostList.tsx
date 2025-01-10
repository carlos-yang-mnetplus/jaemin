import { css } from '@emotion/css';
import { usePosts } from '../query/usePosts';

export function PostList() {
  const { data: posts, refetchPosts } = usePosts({ id: 1 });

  return (
    <div>
      <div className={css({ marginBottom: '1rem' })}>
        <h2>게시글 목록</h2>
        <button 
          type="button"
          onClick={refetchPosts}
          className={css({
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#1976d2',
            },
          })}
        >
          새로운 데이터 불러오기
        </button>
      </div>
      <ul
        className={css({
          listStyle: 'none',
          padding: 0,
          margin: 0,
        })}
      >
        {posts.map((post) => (
          <li
            key={post.id}
            className={css({
              padding: '1rem',
              borderBottom: '1px solid #eee',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            })}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} 