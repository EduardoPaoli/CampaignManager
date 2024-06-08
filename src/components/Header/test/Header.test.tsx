// Header.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { usePathname } from 'next/navigation';

// Mock the usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Header Component', () => {
  const siteName = 'My Site';

  it('should renders header with site name', () => {
    (usePathname as jest.Mock).mockReturnValue('/campaigns');

    render(<Header siteName={siteName} />);

    const siteNameElement = screen.getByText(siteName);
    expect(siteNameElement).toBeInTheDocument();
  });

  it('should shows "Nova Campanha" button when on /campaigns', () => {
    (usePathname as jest.Mock).mockReturnValue('/campaigns');

    render(<Header siteName={siteName} />);

    const button = screen.getByText('Nova Campanha');
    expect(button).toBeInTheDocument();
  });
});
