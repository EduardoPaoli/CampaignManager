import dayjs from "dayjs";

export const formatDateAndTime = (date?: string): string => {
  return dayjs(date).format("DD-MM-YYYY HH:mm:ss");
};

export const formatDate = (date?: string, format = "DD/MM/YYYY"): string => {
  return dayjs(date).format(format);
};
