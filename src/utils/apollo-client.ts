import {
	ApolloClient,
	createHttpLink,
	DefaultOptions,
	InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const defaultOptions: DefaultOptions = {
	watchQuery: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'ignore',
	},
	query: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'all',
	},
};

const cache = new InMemoryCache({
	resultCaching: false,
});

export const client = new ApolloClient({
	uri: 'https://www.idinheiro.com.br/graphql',
	cache: new InMemoryCache(),
	connectToDevTools: true,
	defaultOptions,
});

/**
 * The credentials: 'include' allows cookies to be automatically sent
 * along with the request 'include' because backend is on another domain.
 *
 * @see https://www.apollographql.com/docs/react/networking/authentication/#cookie
 */
const link = createHttpLink({
	uri: `${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT}`.replace(
		/^(.+?)\/*?$/,
		'$1'
	),
});

export const authenticatedClient = (token: string) => {
	const authLink = setContext((_, { headers }) => {
		// // get the authentication token from local storage if it exists
		// const token = localStorage.getItem('token')
		// return the headers to the context so httpLink can read them
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : '',
			},
		};
	});

	return new ApolloClient({
		link: authLink.concat(link),
		cache,
		defaultOptions,
	});
};
