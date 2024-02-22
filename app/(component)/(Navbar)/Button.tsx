"use client";

interface Props {
  style: string;
  buttName: string;
  onClick?: () => void;
}

const Button = ({ style, onClick, buttName }: Props) => {
  return (
    <button onClick={onClick} className={style}>
      {buttName}
    </button>
  );
};

export default Button;
