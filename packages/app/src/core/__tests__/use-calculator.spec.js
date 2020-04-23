import { renderHook, act } from "@testing-library/react-hooks";

import useCalculator from "../use-calculator";

describe("useCalculator", () => {
  it("should render without errors", () => {
    expect(() => renderHook(useCalculator)).not.toThrow();
  });

  it("should update accumulator", () => {
    const { result } = renderHook(useCalculator);

    act(() => {
      result.current.setAcc(1);
    });

    expect(result.current.acc).toBe(1);
  });

  it("should update result", () => {
    const { result } = renderHook(useCalculator);

    act(() => {
      result.current.setResult(1);
    });

    expect(result.current.result).toBe(1);
  });

  it("should update result", () => {
    const { result } = renderHook(useCalculator);

    act(() => {
      result.current.setResult(1);
      result.current.setOp("+");
      result.current.setAcc(2);
    });

    expect(result.current.result).toBe(1);
    expect(result.current.op).toBe("+");
    expect(result.current.acc).toBe(2);

    act(() => {
      result.current.reset();
    });

    expect(result.current.result).toBe(0);
    expect(result.current.op).toBe(undefined);
    expect(result.current.acc).toBe(0);
  });

  it("should not throw on submit when no operation is chosen", () => {
    const { result } = renderHook(useCalculator);

    expect(() =>
      act(() => {
        result.current.submit();
      }),
    ).not.toThrow();
  });

  it("should handle submit for addition", async () => {
    const { result, waitForNextUpdate } = renderHook(useCalculator);

    await act(async () => {
      result.current.setResult(321);
      result.current.setOp("+");
      result.current.setAcc(123);

      await waitForNextUpdate();

      result.current.submit();
    });

    expect(result.current.result).toBe(444);
  });

  it("should handle submit for subtraction", async () => {
    const { result, waitForNextUpdate } = renderHook(useCalculator);

    await act(async () => {
      result.current.setResult(444);
      result.current.setOp("-");
      result.current.setAcc(321);

      await waitForNextUpdate();

      result.current.submit();
    });

    expect(result.current.result).toBe(123);
  });

  it("should handle multiplication after submit", async () => {
    const { result, waitForNextUpdate } = renderHook(useCalculator);

    await act(async () => {
      result.current.setResult(3);
      result.current.setOp("*");
      result.current.setAcc(4);

      await waitForNextUpdate();

      result.current.submit();
    });

    expect(result.current.result).toBe(12);
  });

  it("should handle division after submit", async () => {
    const { result, waitForNextUpdate } = renderHook(useCalculator);

    await act(async () => {
      result.current.setResult(10);
      result.current.setOp("/");
      result.current.setAcc(2);

      await waitForNextUpdate();

      result.current.submit();
    });

    expect(result.current.result).toBe(5);
  });

  it("should set error when dividing by zero", async () => {
    const { result, waitForNextUpdate } = renderHook(useCalculator);

    await act(async () => {
      result.current.setResult(1);
      result.current.setOp("/");
      result.current.setAcc(0);

      await waitForNextUpdate();

      result.current.submit();
    });

    expect(result.current.err).toBe("div0");
  });
});
