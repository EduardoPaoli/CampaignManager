import { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
  placeholder?: string;
}

const Input = ({ label, type, name, register, placeholder }: Props) => {
  return (
    <label className="relative block">
      <span>{label}</span>

      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 my-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
    </label>
  );
};

export default Input;
