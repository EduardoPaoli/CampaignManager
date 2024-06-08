// campaignApi.test.ts
import fetchMock from "fetch-mock";
import { getCampaign, getCampaignById } from "../campaign";
import { ENDPOINT } from "../../../common/contants";

describe("campaignApi", () => {
  afterEach(() => {
    fetchMock.restore();
    jest.clearAllMocks();
  });

  describe("getCampaign", () => {
    it("Should fetch campaigns successfully", async () => {
      const mockCampaigns = [{ id: 1, name: "Campaign 1" }];
      fetchMock.getOnce(`${ENDPOINT}/campaigns`, {
        body: mockCampaigns,
      });

      const result = await getCampaign();

      expect(result).toEqual(mockCampaigns);
    });

    it("Should handle fetch error", async () => {
      fetchMock.getOnce(`${ENDPOINT}/campaigns`, {
        throws: new Error("Network error"),
      });

      const result = await getCampaign();

      expect(result).toEqual(new Error("Network error"));
    });
  });

  describe("getCampaignById", () => {
    it("Should fetch campaign by id successfully", async () => {
      const mockCampaign = { id: 1, name: "Campaign 1" };
      fetchMock.getOnce(`${ENDPOINT}/campaigns/1`, {
        body: mockCampaign,
      });

      const result = await getCampaignById("1");

      expect(result).toEqual(mockCampaign);
    });

    it("Should handle fetch error", async () => {
      fetchMock.getOnce(`${ENDPOINT}/campaigns/1`, {
        throws: new Error("Network error"),
      });

      const result = await getCampaignById("1");

      expect(result).toEqual(new Error("Network error"));
    });
  });
});
