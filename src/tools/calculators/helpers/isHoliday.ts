import { addDays, getYear, isSameDay, subDays } from 'date-fns';

import getEaster from './getEaster';

const isHoliday = (date: Date) => {
	const year = getYear(date);

	const easter = getEaster(year);

	const carnival = subDays(easter, 47);
	const mondayCarnival = subDays(easter, 48);
	const corpusChristi = addDays(easter, 60);
	const goodFriday = subDays(easter, 2);

	const holidays = [
		{ date: new Date(year, 0, 1), description: 'Confraternização Universal' },
		{ date: mondayCarnival, description: 'Segunda-Feira de Carnaval' },
		{ date: carnival, description: 'Carnaval' },
		{ date: goodFriday, description: 'Sexta-Feira Santa' },
		{ date: new Date(year, 3, 21), description: 'Tiradentes' },
		{ date: new Date(year, 4, 1), description: 'Dia do Trabalhador' },
		{ date: corpusChristi, description: 'Corpus Christi' },
		{ date: new Date(year, 8, 7), description: 'Independência do Brasil' },
		{ date: new Date(year, 9, 12), description: 'Nossa Senhora Aparecida' },
		{ date: new Date(year, 10, 2), description: 'Finados' },
		{ date: new Date(year, 10, 15), description: 'Proclamação da República' },
		{ date: new Date(year, 11, 25), description: 'Natal' },
	];

	return holidays.find(holiday => isSameDay(holiday.date, date));
};

export default isHoliday;
