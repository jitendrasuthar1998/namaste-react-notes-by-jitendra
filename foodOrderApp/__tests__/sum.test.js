import { multiply, sum } from "../testing/sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //   assertion

  expect(result).toBe(7);
});


/*
test("Multiply function should calculate the muliplication of two numbers", () => {
    const result = multiply(3,4);
    expect(result).toBe(12);
})
*/