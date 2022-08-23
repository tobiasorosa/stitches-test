const tedDocFormatter = (
	price: number | undefined,
	qtd: number | undefined
) => {
	if (!price) return 'Gratuitos e ilimitados';
	if (price === 0) return 'Gratuitos e ilimitados';
	return `${price.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})} ${qtdFree(qtd)}`;
};

const qtdFree = (qtd: number | undefined) => {
	if (!qtd) return '';
	if (qtd === 0) return '';
	return `com ${qtd} gratuitos`;
};

export default tedDocFormatter;
