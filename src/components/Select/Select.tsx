import { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  options: string[];
}

const Select = ({ label, name, register, options }: Props) => {
  return (
    <label className="relative block">
      <span className="mb-2">{label}</span>

      <select
      className="block bg-white w-full border border-slate-300 rounded-md py-2 px-3 my-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
       {...register(name)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
