// Input.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../Input';

const mockRegister = jest.fn();

describe('Input Component', () => {
  it('Should renders input with label', () => {
    render(
      <Input
        label="Email"
        type="email"
        name="email"
        register={mockRegister}
        placeholder="Enter your email"
        isRequired
      />
    );

    const labelElement = screen.getByText('Email');
    const inputElement = screen.getByPlaceholderText('Enter your email');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('Should renders input without required attribute when isRequired is false', () => {
    render(
      <Input
        label="Username"
        type="text"
        name="username"
        register={mockRegister}
        placeholder="Enter your username"
        isRequired={false}
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter your username');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).not.toHaveAttribute('required');
  });
});
