// validateDates.test.ts
import { StatusEnum } from "@/enums/status";
import { ICampaign } from "@/interfaces/ICampaign";
import { toast } from "react-hot-toast";
import { formatDate } from "../utils";
import { validateDates } from "../validateDates";

jest.mock("react-hot-toast", () => ({
  toast: {
    error: jest.fn(),
  },
}));

jest.mock("../utils", () => ({
  formatDate: jest.fn(),
}));

describe("validateDates", () => {
  const currentDateString = "2024-06-07";

  beforeEach(() => {
    (formatDate as jest.Mock).mockReturnValue(currentDateString);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should return false and show error if endDate is less than startDate and startDate is in the future", () => {
    const data: ICampaign = {
      startDate: "2024-06-08",
      endDate: "2024-06-07",
    };

    const result = validateDates(data);

    expect(result).toBe(false);
    expect(toast.error).toHaveBeenCalledWith("A data final deve ser maior que data inicial");
  });

  it("Should return false and show error if startDate is less than current date and endDate is greater or equal to current date", () => {
    const data: ICampaign = {
      startDate: "2024-06-06",
      endDate: "2024-06-07",
    };

    const result = validateDates(data);

    expect(result).toBe(false);
    expect(toast.error).toHaveBeenCalledWith("A data Inicial não pode ser menor que a data atual");
  });

  it("Should return StatusEnum.expired if endDate is less than current date", () => {
    const data: ICampaign = {
      startDate: "2024-06-05",
      endDate: "2024-06-06",
    };

    const result = validateDates(data);

    expect(result).toBe(StatusEnum.expired);
  });

  it("Should return true if dates are valid", () => {
    const data: ICampaign = {
      startDate: "2024-06-08",
      endDate: "2024-06-09",
    };

    const result = validateDates(data);

    expect(result).toBe(true);
  });
});
