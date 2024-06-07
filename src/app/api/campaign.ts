import { ENDPOINT } from "@/common/contants";
import { StatusEnum } from "@/enums/status";
import { ICampaign } from "@/interfaces/ICampaign";
import { validateDates } from "@/utils/validateDates";
import { toast } from "react-hot-toast";

export const getCampaign = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/campaigns`);
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getCampaignById = async (id?: string | string[]) => {
  try {
    const response = await fetch(`${ENDPOINT}/campaigns/${id}`);
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const postCampaign = async (data: ICampaign) => {
  const isDatesValid = validateDates(data)
  if(!isDatesValid) return
  if(isDatesValid === StatusEnum.expired) data.status = StatusEnum.expired

  try {
    const response = await fetch(`${ENDPOINT}/campaigns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: self.crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        ...data,
      }),
    });
    toast.success("Campanha adicionada!!!");
    return response;
  } catch (error) {
    toast.error("Error ao adicionar uma campanha");
    return error;
  }
};

export const updateCampaign = async (
  data: ICampaign,
  id: string | string[]
) => {
  const isDatesValid = validateDates(data)
  if(!isDatesValid) return
  if(isDatesValid === StatusEnum.expired) data.status = StatusEnum.expired

  try {
    const response = await fetch(`${ENDPOINT}/campaigns/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });

    toast.success("Campanha atualizada!!!");
    return response;
  } catch (error) {
    toast.error("Error ao atualizar uma campanha");
    return error;
  }
};

export const deleteCampaign = async (id: string) => {
  try {
    const response = await fetch(`${ENDPOINT}/campaigns/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    toast.success("Campanha deletada com sucesso!");
    return response;
  } catch (error) {
    toast.success("Error ao deletar uma campanha");
    return error;
  }
};
