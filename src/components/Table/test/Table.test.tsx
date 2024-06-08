// Table.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "../Table";

// Mock the Button component
jest.mock("../../Button/Button", () => ({ children, ...props }) => (
  <button {...props}>{children}</button>
));

describe("Table Component", () => {
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
  ];

  const rows = [
    { id: 1, name: "Felix", age: 90 },
    { id: 2, name: "Tom", age: 100 },
  ];

  const actions = [
    {
      label: "Edit",
      icon: <span>Edit</span>,
      onClick: jest.fn(),
    },
    {
      label: "Delete",
      icon: <span>Delete</span>,
      onClick: jest.fn(),
    },
  ];

  it("Should renders table with columns and rows", () => {
    render(<Table columns={columns} rows={rows} />);

    columns.forEach((column) => {
      expect(screen.getByText(column.header)).toBeInTheDocument();
    });

    rows.forEach((row) => {
      expect(screen.getByText(row.name)).toBeInTheDocument();
      expect(screen.getByText(row.age.toString())).toBeInTheDocument();
    });
  });

  it("Should renders actions if provided", () => {
    render(<Table columns={columns} rows={rows} actions={actions} />);

    expect(screen.getByText("Ações")).toBeInTheDocument();

    rows.forEach((row) => {
      actions.forEach((action) => {
        expect(screen.getAllByText(action.label)).toHaveLength(rows.length);
      });
    });
  });

  it("Should calls action onClick when action button is clicked", () => {
    render(<Table columns={columns} rows={rows} actions={actions} />);

    const editButtons = screen.getAllByText("Edit");
    const deleteButtons = screen.getAllByText("Delete");

    fireEvent.click(editButtons[0]);
    fireEvent.click(deleteButtons[1]);

    expect(actions[0].onClick).toHaveBeenCalledWith(rows[0]);
    expect(actions[1].onClick).toHaveBeenCalledWith(rows[1]);
  });
});
