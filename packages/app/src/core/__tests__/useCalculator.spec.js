import { act, renderHook } from "@testing-library/react-hooks";

import useCalculator from "../useCalculator";

describe("useCalculator", () => {
  it("should render without errors", () => {
    expect(() => renderHook(() => useCalculator())).not.toThrow();
  });

  it("should have display text set to 0 by default", () => {
    const { result } = renderHook(() => useCalculator());
    expect(result.current.state.display).toBe("0");
  });

  it("should update display by appending a digit", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.onDigit("2");
    });

    expect(result.current.state.display).toBe("2");

    act(() => {
      result.current.onDigit("1");
    });

    expect(result.current.state.display).toBe("21");
  });

  it("should update display by appending a trailing dot", () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.onDigit(0);
      result.current.onDot();
    });

    expect(result.current.state.display).toBe("0.");
  });

  it("should not allow many leading zeros", () => {
    const { result } = renderHook(() => useCalculator());

    // Trying to do "00".
    act(() => {
      result.current.onDigit(0);
      result.current.onDigit(0);
    });

    expect(result.current.state.display).toBe("0");
  });

  it("should not allow multiple dots", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCalculator());

    // We are typing "." twice here (trying to do "0.." which is invalid).
    await act(async () => {
      result.current.onDigit(1);
      await waitForNextUpdate();
      result.current.onDot();
      result.current.onDot();
    });

    expect(result.current.state.display).toBe("1.");
  });
});
