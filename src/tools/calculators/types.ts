export type CalculatorInput = unknown;
export type CalculatorResult = unknown;

export interface ICalculator<
	E extends CalculatorInput,
	R extends CalculatorResult
> {
	calculate(input: E): R;
}

export class CalculatorError extends Error {
	constructor(msg: string) {
		super(msg);
		Object.setPrototypeOf(this, CalculatorError.prototype);
	}
}
