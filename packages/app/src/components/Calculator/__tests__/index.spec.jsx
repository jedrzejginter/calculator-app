import { fireEvent, render, screen } from "@testing-library/react";

import Component from "../index";

const props = Object.freeze({
  display: "0",
  onOperationCall: jest.fn(),
  onReset: jest.fn(),
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
    render(<Component {...props} onReset={callback} />);

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
    render(<Component {...props} onOperationCall={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_AddBtn"));

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith("+");
  });

  it("should call for subtraction", () => {
    const callback = jest.fn();
    render(<Component {...props} onOperationCall={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_SubBtn"));

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith("-");
  });

  it("should call for subtraction", () => {
    const callback = jest.fn();
    render(<Component {...props} onOperationCall={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_SubBtn"));

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith("-");
  });

  it("should call for multiplication", () => {
    const callback = jest.fn();
    render(<Component {...props} onOperationCall={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_MultBtn"));

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith("*");
  });

  it("should call for division", () => {
    const callback = jest.fn();
    render(<Component {...props} onOperationCall={callback} />);

    fireEvent.click(screen.getByTestId("Calculator_DivBtn"));

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith("/");
  });
});
