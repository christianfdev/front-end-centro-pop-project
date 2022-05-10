import './styles.css';

export const Button = ({ text, onClick }: any) => (
  <button onClick={onClick} className="button">
    {text}
  </button>
)