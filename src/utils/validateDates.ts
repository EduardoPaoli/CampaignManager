import { StatusEnum } from "@/enums/status";
import { ICampaign } from "@/interfaces/ICampaign";
import { toast } from "react-hot-toast";
import { formatDate } from "./utils";

export const validateDates = (data: ICampaign) => {
  const { startDate, endDate } = data;
  const currentDate = formatDate(new Date().toISOString(), "YYYY-MM-DD");

  if (endDate < startDate && startDate > currentDate) {
    toast.error("A data final deve ser maior que data inicial");
    return false;
  }

  if (startDate < currentDate && endDate >= currentDate) {
    toast.error("A data Inicial não pode ser menor que a data atual");
    return false;
  }

  if (endDate < currentDate) {
    return StatusEnum.expired;
  }

  return true;
};
