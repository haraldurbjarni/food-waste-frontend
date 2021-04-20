import s from './Button.module.scss';


export function Button({ children, onClick, disabled = false }) {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}