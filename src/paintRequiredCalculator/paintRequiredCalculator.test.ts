import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return 0 if the area to be painted is 0", () => {
    // If no area to paint, no paint should be required
    expect(paintRequiredCalculator(0, 10)).toEqual(0);
  });
});
