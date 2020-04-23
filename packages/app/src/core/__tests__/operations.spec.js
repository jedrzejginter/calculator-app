import { add, divide, multiply, subtract } from "../operations";

describe("operations", () => {
  describe("add", () => {
    it("should add two numbers", () => {
      expect(add(10, 20)).toBe(30);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      expect(subtract(10, 20)).toBe(-10);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers", () => {
      expect(multiply(10, 20)).toBe(200);
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      expect(divide(20, 10)).toBe(2);
    });

    it("should throw for division by 0", () => {
      expect(() => divide(1, 0)).toThrow();
    });
  });
});
