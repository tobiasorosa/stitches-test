import { NextRouter } from 'next/router';

export const getCanonicalUrl = (router: NextRouter | undefined) => {
	if (!router) return '';

	const baseURL = 'https://www.idinheiro.com.br';

	const fullURL = baseURL + (router.asPath === '/' ? '' : router.asPath);

	const canonicalUrl = fullURL.split('?')[0];

	return canonicalUrl;
};
