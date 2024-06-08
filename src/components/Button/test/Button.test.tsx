import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button Component", () => {
  it("Should renders button with label", () => {
    render(<Button label="Click me" />);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
  it('Should renders button with children', () => {
    render(<Button>Click me</Button>);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('Should applies className prop', () => {
    render(<Button className="custom-class" label="Click me" />);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('Should calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should renders button with label and children, but prioritizes label', () => {
    render(<Button label="Label" className="custom-class">Children</Button>);

    const buttonElement = screen.getByText(/label/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('custom-class');
    expect(screen.queryByText(/children/i)).toBeNull();
  });
});
