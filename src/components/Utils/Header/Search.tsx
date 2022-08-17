import { Field, FieldProps, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import SearchIcon from '~public/img/icons/search-icon.svg';
import { Box, Button, Input } from '../../Theme';

export const Search = () => {
	const router = useRouter();

	const submitEvent = (query: string) => {
		if (query) {
			const queryEncoded = encodeURIComponent(query).replace('%20', '+');
			router.push({
				pathname: '/busca',
				query: { busca: queryEncoded },
			});
		}
	};

	return (
		<Formik
			initialValues={{ query: '' }}
			onSubmit={values => submitEvent(values.query)}
		>
			{() => (
				<Form target='_top'>
					<Field name='query'>
						{(context: FieldProps) => (
							<Box for='input-group'>
								<Input
									type='text'
									variant='search'
									placeholder='Pesquise no iDinheiro'
									{...context.field}
								/>
								<Box for='right-addon'>
									<Button
										size='sm'
										color='transparent'
										border='rounded'
										css={{
											marginRight: '0.5rem',
										}}
									>
										<SearchIcon />
									</Button>
								</Box>
							</Box>
						)}
					</Field>
				</Form>
			)}
		</Formik>
	);
};
