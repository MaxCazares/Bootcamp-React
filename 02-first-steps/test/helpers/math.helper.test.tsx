import { describe, expect, test } from "vitest";
import { add, multiply, substract } from "../../src/helpers/math.helper";

describe("Add", () => {
	test("It should add two positive numbers", () => {
		const a = 6;
		const b = 7;

		const result = add(a, b);
		console.log(result);
		expect(result).toBe(a + b);
	});
	test("It should add two negative numbers", () => {
		const a = -6;
		const b = -7;

		const result = add(a, b);
		console.log(result);
		expect(result).toBe(a + b);
	});
});

describe("Substract", () => {
	test("It should substract two positive numbers", () => {
		const a = 6;
		const b = 7;

		const result = substract(a, b);
		console.log(result);
		expect(result).toBe(a - b);
	});
	test("It should substract two negative numbers", () => {
		const a = -6;
		const b = -7;

		const result = substract(a, b);
		console.log(result);
		expect(result).toBe(a - b);
	});
});
describe("Multiply", () => {
	test("It should multiply two positive numbers", () => {
		const a = 6;
		const b = 7;

		const result = multiply(a, b);
		console.log(result);
		expect(result).toBe(a * b);
	});
	test("It should multiply two negative numbers", () => {
		const a = -6;
		const b = -7;

		const result = multiply(a, b);
		console.log(result);
		expect(result).toBe(a * b);
	});
});
