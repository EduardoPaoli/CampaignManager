// dateUtils.test.ts
import { formatDateAndTime, formatDate } from '../utils';

describe('utils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('formatDateAndTime', () => {
    it('Should format date and time correctly', () => {
      const date = '2024-06-07T12:34:56';
      const formattedDate = '07-06-2024 12:34:56';
      const result = formatDateAndTime(date);

      expect(result).toBe(formattedDate);
    });
  });

  describe('formatDate', () => {
    it('Should format date correctly with default format', () => {
      const date = '2024-06-07';
      const formattedDate = '07/06/2024';
      const result = formatDate(date);

      expect(result).toBe(formattedDate);
    });

    it('Should format date correctly with custom format', () => {
      const date = '2024-06-07';
      const customFormat = 'YYYY-MM-DD';
      const formattedDate = '2024-06-07';
      const result = formatDate(date, customFormat);

      expect(result).toBe(formattedDate);
    });
  });
});
