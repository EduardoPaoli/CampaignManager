"use client";
import { useEffect, useState } from "react";
import { getCampaignById, updateCampaign } from "@/app/api/campaign";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "next/navigation";
import { STATUS_CAMPAIGN } from "@/common/contants";
import { ICampaign } from "@/interfaces/ICampaign";

const UpdateCampaign = () => {
  const [campaign, setCampaign] = useState<ICampaign>();
  const { register, handleSubmit, reset } = useForm<ICampaign>();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const currentCampaign = await getCampaignById(id);
        setCampaign(currentCampaign);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  useEffect(() => {
    reset(campaign);
  }, [campaign]);

  const onSubmit: SubmitHandler<ICampaign> = async (data) => {
    await updateCampaign(data, id);
  };

  return (
    <main className="bg-slate-100 p-10 rounded-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <Input
          label="Nome da Campanha"
          type="text"
          name="name"
          register={register}
        />
        <Select
          label="Status"
          name="status"
          register={register}
          options={STATUS_CAMPAIGN}
        />
        <Input
          label="Data Início"
          type="date"
          name="startDate"
          register={register}
        />
        <Input
          label="Data Fim"
          type="date"
          name="endDate"
          register={register}
        />

        <Button
          label="Atualizar"
          className="mt-5 py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
        />
      </form>
    </main>
  );
};

export default UpdateCampaign;
