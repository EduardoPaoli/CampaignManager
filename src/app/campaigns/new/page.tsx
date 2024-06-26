"use client";
import { postCampaign } from "@/app/api/campaign";
import { STATUS_CAMPAIGN } from "@/common/contants";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { ICampaign } from "@/interfaces/ICampaign";
import { useForm, SubmitHandler } from "react-hook-form";

const NewCampaign = () => {
  const { register, handleSubmit, reset } = useForm<ICampaign>();
  const onSubmit: SubmitHandler<ICampaign> = async (data) => {
    await postCampaign(data);
    reset();
  };

  return (
    <main className="bg-slate-100 p-10 rounded-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <Input
          label="Nome da Campanha"
          type="text"
          name="name"
          register={register}
          isRequired
        />
        <Select
          label="Status"
          name="status"
          register={register}
          options={STATUS_CAMPAIGN}
          isRequired
        />
        <Input
          label="Data Início"
          type="date"
          name="startDate"
          register={register}
          isRequired
        />
        <Input
          label="Data Fim"
          type="date"
          name="endDate"
          register={register}
          isRequired
        />

        <Button
          label="Salvar"
          className="mt-5 py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
        />
      </form>
    </main>
  );
};

export default NewCampaign;
