import * as core from "@project/core";
import { act, renderHook } from "@testing-library/react-hooks";

import useCalculator from "../hook";

jest.mock("@project/core");

describe("useCalculator", () => {
  it("should render without errors", () => {
    expect(() => renderHook(() => useCalculator())).not.toThrow();
  });

  it("should have display text set to 0 by default", () => {
    const { result } = renderHook(() => useCalculator());
    expect(result.current.state.display).toBe("0");
  });

  describe("on clear", () => {
    it("should call reset function", () => {
      const mock = jest.fn();
      core.onClear.mockImplementationOnce(mock);

      const { result } = renderHook(() => useCalculator());

      act(() => {
        result.current.onClear(expect.anything());
      });

      expect(mock).toHaveBeenCalled();
    });
  });

  describe("on digit", () => {
    it("should call character setter", () => {
      const mock = jest.fn();
      core.onCharacter.mockImplementationOnce(mock);

      const { result } = renderHook(() => useCalculator());

      act(() => {
        result.current.onDigit(expect.anything(), 3);
      });

      expect(mock).toHaveBeenCalledWith(expect.anything(), 3);
    });
  });

  describe("on dot", () => {
    it("should call character setter", () => {
      const mock = jest.fn();
      core.onCharacter.mockImplementationOnce(mock);

      const { result } = renderHook(() => useCalculator());

      act(() => {
        result.current.onDot(expect.anything(), ".");
      });

      expect(mock).toHaveBeenCalledWith(expect.anything(), ".");
    });
  });

  describe("on operator", () => {
    it("should call operator setter", () => {
      const mock = jest.fn();
      core.onOperator.mockImplementationOnce(mock);

      const { result } = renderHook(() => useCalculator());

      act(() => {
        result.current.onOperator(expect.anything(), "+");
      });

      expect(mock).toHaveBeenCalledWith(expect.anything(), "+");
    });
  });

  describe("on submit", () => {
    it("should call submit function", () => {
      const mock = jest.fn();
      core.onSubmit.mockImplementationOnce(mock);

      const { result } = renderHook(() => useCalculator());

      act(() => {
        result.current.onSubmit(expect.anything());
      });

      expect(mock).toHaveBeenCalled();
    });
  });
});
