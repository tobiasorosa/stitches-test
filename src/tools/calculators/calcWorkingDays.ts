import { compareAsc, eachDayOfInterval, isSaturday, isSunday } from 'date-fns';

import {
	CalculatorInput,
	CalculatorResult,
	CalculatorError,
	ICalculator,
} from '~/src/tools/calculators/types';

import isHoliday from './helpers/isHoliday';
import isWorkingDay from './helpers/isWorkingDay';

export type InputWorkingDays = CalculatorInput & {
	initialDate: Date | null;
	finalDate: Date | null;
};

export type ResultWorkingDays = CalculatorResult & {
	workingDays: number;
	days: number;
	sundays: number;
	saturdays: number;
	holidays: number;
};

export type ICalculatorWorkingDays = ICalculator<
	InputWorkingDays,
	ResultWorkingDays
>;

export default class CalculatorWorkingDays implements ICalculatorWorkingDays {
	calculate(input: InputWorkingDays): ResultWorkingDays {
		const { initialDate, finalDate } = input;

		if (!initialDate || !finalDate)
			throw new CalculatorError('É necessário inserir datas válidas');

		const isInitialGreaterFinal = compareAsc(initialDate, finalDate);
		if (isInitialGreaterFinal === 1)
			throw new CalculatorError('Data final deve ser maior que data inicial.');

		const result = {
			workingDays: 0,
			days: 0,
			sundays: 0,
			saturdays: 0,
			holidays: 0,
		};

		const days = eachDayOfInterval({
			start: initialDate,
			end: finalDate,
		});

		days.forEach(day => {
			result.days += 1;

			if (isSaturday(day)) result.saturdays += 1;
			if (isSunday(day)) result.sundays += 1;
			if (isHoliday(day)) result.holidays += 1;
			if (isWorkingDay(day)) result.workingDays += 1;
		});

		return result;
	}
}
