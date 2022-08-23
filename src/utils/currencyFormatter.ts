export const currencyFormatter = (value?: number | undefined) => {
	if (!value || !Number(value)) return 'R$ 0,00';

	if (value) {
		const amount = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(value);

		return `${amount}`;
	}
};
