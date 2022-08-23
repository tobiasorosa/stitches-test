export const percentFormatter = (value: number | undefined) => {
	if (!value || !Number(value)) return '0,00 %';

	if (value) {
		const option = {
			style: 'percent',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		};
		const formatter = new Intl.NumberFormat('pt-BR', option);
		const discountFormat = formatter.format(value / 100);

		return `${discountFormat}`;
	}
};
