// Select.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from '../Select';

const mockRegister = jest.fn();

describe('Select Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  test('Should renders select with label and options', () => {
    render(
      <Select
        label="Choose an option"
        name="select"
        register={mockRegister}
        options={options}
        isRequired
      />
    );

    const labelElement = screen.getByText('Choose an option');
    const selectElement = screen.getByRole('combobox');
    const defaultOption = screen.getByText('Selecione uma opção');
    const optionElements = options.map(option => screen.getByText(option));

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(defaultOption).toBeInTheDocument();
    optionElements.forEach(optionElement => {
      expect(optionElement).toBeInTheDocument();
    });
    expect(selectElement).toHaveAttribute('required');
  });

  test('Should renders select without required attribute when isRequired is false', () => {
    render(
      <Select
        label="Choose an option"
        name="select"
        register={mockRegister}
        options={options}
        isRequired={false}
      />
    );

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).not.toHaveAttribute('required');
  });

  test('Should calls register function with name', () => {
    render(
      <Select
        label="Choose an option"
        name="select"
        register={mockRegister}
        options={options}
      />
    );

    expect(mockRegister).toHaveBeenCalledWith('select');
  });
});
