import { StatusEnum } from "@/enums/status";

export interface ICampaign {
  id?: string;
  createdAt?: string
  name: string;
  status: StatusEnum;
  startDate: string;
  endDate: string;
}

export interface IIdRow {
  id: string
}
