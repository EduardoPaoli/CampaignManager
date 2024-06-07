"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Table from "@/components/Table";
import { deleteCampaign, getCampaign } from "../api/campaign";
import {
  CloseCircleOutlined,
  EditOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { IIdRow } from "@/interfaces/ICampaign";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const campaignsList = await getCampaign();
        setCampaigns(campaignsList);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, [campaigns]);

  const columns = [
    { header: "Nome", accessor: "name" },
    { header: "Data Início", accessor: "startDate" },
    { header: "Data Fim", accessor: "endDate" },
    { header: "Status", accessor: "status" },
  ];

  const actions = [
    {
      label: "View",
      icon: (
        <FileSearchOutlined className="py-2 px-3 mx-2 bg-gray-300 text-center text-sm font-semibold rounded-md shadow" />
      ),
      onClick: (row: IIdRow) => router.push(`/campaigns/details/${row.id}`),
    },
    {
      label: "Edit",
      icon: (
        <EditOutlined className="py-2 px-3 mx-2 bg-gray-300 text-center text-sm font-semibold rounded-md shadow" />
      ),
      onClick: (row: IIdRow) => router.push(`/campaigns/${row.id}`),
    },
    {
      label: "Delete",
      icon: (
        <CloseCircleOutlined className="py-2 px-3 mx-2 bg-red-600 text-white text-center text-sm font-semibold rounded-md shadow" />
      ),
      onClick: (row: IIdRow) => deleteCampaign(row.id),
    },
  ];

  return (
    <div className="flex flex-col items-end">
      {!!campaigns.length ? (
        <Table rows={campaigns} columns={columns} actions={actions} />
      ) : (
        <main className="bg-slate-100 rounded-sm w-96 py-10 text-center">
          <p>Adiciona uma Camapanha</p>
        </main>
      )}
    </div>
  );
}
