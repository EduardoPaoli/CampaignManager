"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { useForm, SubmitHandler } from "react-hook-form";

enum StatusEnum {
  active = "Ativa",
  paused = "Pausada",
  expired = "Expirada",
}

interface IFormInput {
  name: string;
  status: StatusEnum;
  startDate: string;
  endDate: string;
}

const NewCampaign = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const options = ['Ativa', 'Pausada', 'Expirada']

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96">
      <Input label="Nome" type="text" name="name" register={register} />
      <Select label="Status" name="status" register={register} options={options} />
      <Input label="Data Início" type="date" name="startDate" register={register} />
      <Input label="Data Fim" type="date" name="endDate" register={register} />
      
      <Button label="Salvar" className="mt-5 py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none" />
    </form>
  );
};

export default NewCampaign;
