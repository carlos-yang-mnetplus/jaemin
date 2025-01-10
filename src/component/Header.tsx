import { css } from "@emotion/css";

export function Header() {
  return (
    <div
      className={css({
        backgroundColor: '#2196f3',
        color: 'white',
        padding: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
      })}
    >
      Header
    </div>
  );
}
