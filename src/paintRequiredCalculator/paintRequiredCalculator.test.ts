import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return 0 if the area to be painted is 0", () => {
    // If no area to paint, no paint should be required
    expect(paintRequiredCalculator(0, 10)).toEqual(0);
  });
  test("should return correct value when coverage per liter is greater than the area", () => {
    // If 1 liter covers 100 square meters, and the area is only 50, we need 0.5 liters
    expect(paintRequiredCalculator(50, 100)).toEqual(0.5);
  });
  test("should return correct result for large areas", () => {
    // Large numbers should not break the calculation
    expect(paintRequiredCalculator(10000, 500)).toEqual(20);
  });
});
