"use client";
import { useEffect, useState } from "react";
import { getCampaignById } from "@/app/api/campaign";
import { useParams } from "next/navigation";
import { ICampaign } from "@/interfaces/ICampaign";
import { formatDate, formatDateAndTime } from "@/utils/utils";

const UpdateCampaign = () => {
  const [campaign, setCampaign] = useState<ICampaign>();
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

  return (
    <main className="bg-slate-100 rounded-sm w-2/4">
      <header className="px-5 py-3 border-b-2 border-slate-200">
        <h2 className="text-xl">Detalhes</h2>
      </header>
      <section className="divide-y divide-slate-200">
        <div className="p-5">
          <span className="font-semibold">Id:</span>
          <span className="px-2">{campaign?.id}</span>
        </div>
        <div className="p-5">
          <span className="font-semibold">Nome da Camapanha:</span>
          <span className="px-2">{campaign?.name}</span>
        </div>
        <div className="p-5">
          <span className="font-semibold">Data Início:</span>
          <span className="px-2">{formatDate(campaign?.startDate)}</span>
        </div>
        <div className="p-5">
          <span className="font-semibold">Data Fim:</span>
          <span className="px-2">{formatDate(campaign?.endDate)}</span>
        </div>
        <div className="p-5">
          <span className="font-semibold">Data de Criação:</span>
          <span className="px-2">{formatDateAndTime(campaign?.createdAt)}</span>
        </div>
        <div className="p-5">
          <span className="font-semibold">Status:</span>
          <span className="px-2">{campaign?.status}</span>
        </div>
      </section>
    </main>
  );
};

export default UpdateCampaign;
