type Props = {
  title?: string;
  onClick: () => string;
};

const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button data-testid="button" onClick={onClick}>
      {title ? title : 'click me'}
    </button>
  );
};

export default Button;
