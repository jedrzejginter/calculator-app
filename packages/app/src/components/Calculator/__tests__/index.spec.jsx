import { fireEvent, render, screen } from "@testing-library/react";

import Component from "../index";

const props = Object.freeze({
  display: "0",
  error: undefined,
  onClear: jest.fn(),
  onDigit: jest.fn(),
  onDot: jest.fn(),
  onOperator: jest.fn(),
  onSubmit: jest.fn(),
});

describe("Calculator", () => {
  it("should render without errors", () => {
    render(<Component {...props} />);
    expect(screen.getByTestId("Calculator")).toBeInTheDocument();
  });

  it("should render passed display text", () => {
    render(<Component {...props} display="123.45" />);

    const element = screen.getByTestId("Calculator_ResultDisplay");

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("123.45");
  });

  it("should render error", () => {
    render(<Component {...props} error="Custom error" />);

    const element = screen.getByTestId("Calculator_ErrorDisplay");

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Custom error");
  });

  it("should execute callback on reset", () => {
    const callback = jest.fn();
    render(<Component {...props} onClear={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_ResetBtn"));

    expect(callback).toBeCalledTimes(1);
  });

  it("should execute callback on submit", () => {
    const onSubmit = jest.fn();
    render(<Component {...props} onSubmit={onSubmit} />);

    fireEvent.click(screen.getByTestId("Calculator_EqualBtn"));

    expect(onSubmit).toBeCalledTimes(1);
  });

  it("should call for addition", () => {
    const callback = jest.fn();
    render(<Component {...props} onOperator={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_AddBtn"));

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith("+");
  });

  it("should call for subtraction", () => {
    const callback = jest.fn();
    render(<Component {...props} onOperator={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_SubBtn"));

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith("-");
  });

  it("should call for subtraction", () => {
    const callback = jest.fn();
    render(<Component {...props} onOperator={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_SubBtn"));

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith("-");
  });

  it("should call for multiplication", () => {
    const callback = jest.fn();
    render(<Component {...props} onOperator={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_MultBtn"));

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith("*");
  });

  it("should call for division", () => {
    const callback = jest.fn();
    render(<Component {...props} onOperator={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_DivBtn"));

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith("/");
  });

  it("should execute callbacks for digit buttons", () => {
    const { rerender } = render(<Component {...props} />);

    for (let i = 0; i <= 9; i += 1) {
      const callback = jest.fn();

      rerender(<Component {...props} onDigit={callback} />);

      fireEvent.click(screen.getByTestId(`Calculator_${i}Btn`));

      expect(callback).toBeCalledWith(i);
    }
  });
});
