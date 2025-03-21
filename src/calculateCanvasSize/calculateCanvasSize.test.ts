import calculateCanvasSize from "./calculateCanvasSize";
describe("calculateCanvasSize", () => {
  test("should return correct area for valid positive integer inputs", () => {
    // 10 * 100 = 1000
    expect(calculateCanvasSize("10", "100")).toEqual(1000);
  });
  test("should return 0 when one of the dimensions is zero", () => {
    // 0 * 100 = 0
    expect(calculateCanvasSize("0", "100")).toEqual(0);
    // 100 * 0 = 0
    expect(calculateCanvasSize("100", "0")).toEqual(0);
  });
  test("should return a negative area when one input is negative", () => {
    // -10 * 5 = -50
    expect(calculateCanvasSize("-10", "5")).toEqual(-50);
  });
  test("should return a positive area when both inputs are negative", () => {
    // -10 * -5 = 50 (Negative × Negative = Positive)
    expect(calculateCanvasSize("-10", "-5")).toEqual(50);
  });
});
