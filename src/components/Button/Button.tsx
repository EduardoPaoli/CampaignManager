interface Props {
  label: string;
  className: string;
}

const Button = ({ label, className }: Props) => {
  return (
    <>
      <button className={className}>{label}</button>
    </>
  );
};

export default Button;
