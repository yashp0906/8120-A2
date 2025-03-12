import calculateCanvasSize from "./calculateCanvasSize";
describe("calculateCanvasSize", () => {
  test("should return correct area for valid positive integer inputs", () => {
    // 10 * 100 = 1000
    expect(calculateCanvasSize("10", "100")).toEqual(1000);
  });
});
