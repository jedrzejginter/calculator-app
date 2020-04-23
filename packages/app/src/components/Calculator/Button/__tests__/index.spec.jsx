import { fireEvent, render, screen } from "@testing-library/react";

import Component from "../index";

describe("Calculator/Button", () => {
  it("should render without errors", () => {
    expect(() => render(<Component onClick={jest.fn()} />)).not.toThrow();
  });

  it("should render children", () => {
    render(
      <Component data-testid="Component" onClick={jest.fn()}>
        Text
      </Component>,
    );
    expect(screen.getByTestId("Component")).toHaveTextContent("Text");
  });

  it("should forward props to inner element", () => {
    render(<Component data-testid="Button" onClick={jest.fn()} />);
    expect(screen.getByTestId("Button")).toBeInTheDocument();
  });

  it("should execute callback with data on click", () => {
    const callback = jest.fn();
    const { container } = render(<Component onClick={callback} onClickData={{ foo: "bar" }} />);

    fireEvent.click(container.firstChild);

    expect(callback).toBeCalledTimes(1);
    expect(callback).toBeCalledWith({ foo: "bar" });
  });
});
