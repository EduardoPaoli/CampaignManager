import { ReactNode } from "react";

interface Props {
  className?: string;
  label?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({ label, className, children, onClick }: Props) => {
  return (
    <>
      {label ? (
        <button onClick={onClick} className={className}>{label}</button>
      ) : (
        <button onClick={onClick} className={className}>{children}</button>
      )}
    </>
  );
};

export default Button;
