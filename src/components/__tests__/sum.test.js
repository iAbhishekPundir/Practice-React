import { sum } from "../sum";

test("Sum function should calculate the sum of two numberrs", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(4, 5)).toBe(9);
});
