import { css } from "@emotion/css";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { PostList } from "./PostList";
import { TodoList } from "./TodoList";
import { UserList } from "./UserList";

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div
      className={css({
        padding: '1rem',
        color: 'red',
        textAlign: 'center',
        backgroundColor: '#fff3f3',
        borderRadius: '4px',
      })}
    >
      <h2>문제가 발생했습니다!</h2>
      <pre>{error.message}</pre>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className={css({
          padding: '0.5rem 1rem',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#cc0000',
          },
        })}
      >
        다시 시도
      </button>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div
      className={css({
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
      })}
    >
      로딩 중...
    </div>
  );
}

export function Main() {
  return (
    <div
      className={css({
        backgroundColor: 'white',
        padding: '1.5rem',
        fontSize: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderRadius: '4px',
        margin: '0 1rem',
        minHeight: '200px',
      })}
    >
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
        })}
      >
        {/* 정상 동작하는 컴포넌트 */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingFallback />}>
            <UserList />
          </Suspense>
        </ErrorBoundary>

        {/* 에러가 발생하는 컴포넌트 */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingFallback />}>
            <TodoList />
          </Suspense>
        </ErrorBoundary>

        {/* 정상 동작하는 컴포넌트 */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingFallback />}>
            <PostList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
