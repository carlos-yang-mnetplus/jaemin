import { css } from '@emotion/css';
import { useUsers } from '../query/useUsers';

export function UserList() {
  const { data: users } = useUsers();

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul
        className={css({
          listStyle: 'none',
          padding: 0,
          margin: 0,
        })}
      >
        {users.map((user) => (
          <li
            key={user.id}
            className={css({
              padding: '1rem',
              borderBottom: '1px solid #eee',
            })}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} 