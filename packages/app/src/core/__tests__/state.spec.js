import { cleanVal, initialState, onCharacter, onClear, onOperator, onSubmit } from "../state";

describe("state", () => {
  describe("initialState", () => {
    it("should have input set to empty string", () => {
      expect(initialState.input).toBe("");
    });

    it("should have result set to 0", () => {
      expect(initialState.result).toBe(0);
    });

    it("should have no error set", () => {
      expect(initialState.error).toBeUndefined();
    });

    it("should have no operator set", () => {
      expect(initialState.operator).toBeUndefined();
    });
  });

  describe("cleanVal", () => {
    it("should replace leading zeros in int values", () => {
      expect(cleanVal("00")).toBe("0");
      expect(cleanVal("01")).toBe("1");
      expect(cleanVal("001")).toBe("1");
    });

    // If it would be removed, used wouldn't be able to type floats.
    it("should leave trailing dot", () => {
      expect(cleanVal("0.")).toBe("0.");
    });

    it("should remove multiple trailing dots", () => {
      expect(cleanVal("0..")).toBe("0.");
    });

    it("should replace multiple consencutive dots with one", () => {
      expect(cleanVal("1..234")).toBe("1.234");
    });
  });

  describe("onCharacter", () => {
    it("should append character to input", () => {
      expect(onCharacter({ ...initialState, input: "1" }, 4)).toStrictEqual({
        ...initialState,
        input: "14",
      });
    });
  });

  describe("onClear", () => {
    it("should restore all values to initial ones", () => {
      expect(onClear({ ...initialState, input: "1", result: 2 })).toStrictEqual(initialState);
    });
  });

  describe("onOperator", () => {
    const state = Object.freeze({
      ...initialState,
      input: "20",
      result: 10,
    });

    it("should update operator", () => {
      expect(onOperator(state, "/").operator).toBe("/");
    });

    it("should reset input value", () => {
      expect(onOperator(state, "/").input).toBe("");
    });

    it("should copy input value to result", () => {
      expect(onOperator(state, "/").result).toBe(20);
    });

    it("should not overwrite result if input is empty", () => {
      expect(onOperator({ ...state, input: "", result: 1 }, "/")).toStrictEqual({
        ...state,
        input: "",
        result: 1,
        operator: "/",
      });
    });
  });

  describe("onSubmit", () => {
    const state = Object.freeze({
      ...initialState,
      input: "30",
      result: 150,
    });

    it("should return state when no operation is selected", () => {
      expect(onSubmit(state)).toStrictEqual(state);
    });

    it("should work for addition", () => {
      expect(onSubmit({ ...state, operator: "+" })).toStrictEqual({
        error: undefined,
        operator: undefined,
        input: "",
        result: 180,
      });
    });

    it("should work for subtraction", () => {
      expect(onSubmit({ ...state, operator: "-" })).toStrictEqual({
        error: undefined,
        operator: undefined,
        input: "",
        result: 120,
      });
    });

    it("should work for multiplication", () => {
      expect(onSubmit({ ...state, operator: "*" })).toStrictEqual({
        error: undefined,
        operator: undefined,
        input: "",
        result: 4500,
      });
    });

    it("should work for division", () => {
      expect(onSubmit({ ...state, operator: "/" })).toStrictEqual({
        error: undefined,
        operator: undefined,
        input: "",
        result: 5,
      });
    });

    it("should work for division by 0", () => {
      expect(onSubmit({ error: undefined, result: 1, input: "0", operator: "/" })).toStrictEqual({
        error: "Cannot divide by 0",
        operator: undefined,
        input: "",
        result: 0,
      });
    });

    it("should treat result as input if input is empty", () => {
      expect(onSubmit({ ...state, result: 20, input: "", operator: "/" })).toStrictEqual({
        error: undefined,
        operator: undefined,
        input: "",
        result: 1,
      });
    });
  });
});
