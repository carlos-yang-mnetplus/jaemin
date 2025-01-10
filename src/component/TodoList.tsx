import { css } from '@emotion/css';
import { useTodos } from '../query/todo/useTodos';

export function TodoList() {
  const { data: todos, invalidateTodos, updateTodoCache } = useTodos();

  // 수동 새로고침
  const handleRefresh = () => {
    invalidateTodos();
  };

  // Todo 완료 상태 변경
  const handleToggleTodo = async (id: number, completed: boolean) => {
    try {
      // 낙관적 업데이트
      updateTodoCache(id, { completed });

      // API 호출
      await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed }),
      });

      // 성공 시 캐시 무효화하여 최신 데이터 가져오기
      invalidateTodos();
    } catch (error) {
      // 실패 시 캐시 무효화하여 원래 상태로 복구
      invalidateTodos();
      console.error('Todo 업데이트 실패:', error);
    }
  };

  return (
    <div>
      <div className={css({ marginBottom: '1rem' })}>
        <button type="button" onClick={handleRefresh}>새로고침</button>
      </div>
      <h2>할 일 목록</h2>
      <ul
        className={css({
          listStyle: 'none',
          padding: 0,
          margin: 0,
        })}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={css({
              padding: '1rem',
              borderBottom: '1px solid #eee',
              opacity: todo.completed ? 0.5 : 1,
            })}
            onClick={() => handleToggleTodo(todo.id, !todo.completed)}
          >
            <span
              className={css({
                textDecoration: todo.completed ? 'line-through' : 'none',
              })}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
} 