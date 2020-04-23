import { initialState, onClear, onAccUpdate, onSetOperation, onSubmit } from "../manager";

describe("CalculatorManager", () => {
  describe("onClear", () => {
    it("should restore all values to initial ones", () => {
      expect(onClear({ ...initialState, acc: "1", result: 2 })).toStrictEqual(initialState);
    });
  });

  describe("onAccUpdate", () => {
    it("should update accumulator value", () => {
      expect(onAccUpdate({ ...initialState }, "100")).toStrictEqual({
        ...initialState,
        acc: "100",
      });
    });
  });

  describe("onSetOperation", () => {
    const state = Object.freeze({
      ...initialState,
      acc: "20",
      result: 10,
    });

    it("should update operation", () => {
      expect(onSetOperation(state, "/").op).toBe("/");
    });

    it("should reset accumulator value", () => {
      expect(onSetOperation(state, "/").acc).toBe("");
    });

    it("should copy accumulator value to result", () => {
      expect(onSetOperation(state, "/").result).toBe(20);
    });
  });

  describe("onSubmit", () => {
    const state = Object.freeze({
      ...initialState,
      acc: "30",
      result: 150,
    });

    it("should return state when no operation is selected", () => {
      expect(onSubmit(state)).toStrictEqual(state);
    });

    it("should work for addition", () => {
      expect(onSubmit({ ...state, op: "+" })).toStrictEqual({
        err: undefined,
        op: undefined,
        acc: "",
        result: 180,
      });
    });

    it("should work for subtraction", () => {
      expect(onSubmit({ ...state, op: "-" })).toStrictEqual({
        err: undefined,
        op: undefined,
        acc: "",
        result: 120,
      });
    });

    it("should work for multiplication", () => {
      expect(onSubmit({ ...state, op: "*" })).toStrictEqual({
        err: undefined,
        op: undefined,
        acc: "",
        result: 4500,
      });
    });

    it("should work for division", () => {
      expect(onSubmit({ ...state, op: "/" })).toStrictEqual({
        err: undefined,
        op: undefined,
        acc: "",
        result: 5,
      });
    });

    it("should work for division by 0", () => {
      expect(onSubmit({ ...state, result: 1, acc: 0, op: "/" })).toStrictEqual({
        err: "Cannot divide by 0",
        op: undefined,
        acc: "",
        result: 0,
      });
    });
  });
});
