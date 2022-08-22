export const parseValue = (value: string) => {
	if (!value) return '';
	const valueParsed = parseFloat(value.replace(/\./g, '').replace(',', '.'));
	return valueParsed;
};
