import { useState } from 'react';
import { Calculadora } from '~/src/types/wp-graphql';
import CalculatorWorkingDays, {
	InputWorkingDays,
} from '~src/tools/calculators/calcWorkingDays';
import { useContext } from './Context';
import { date, object, ref } from 'yup';
import { Box, Container, Grid, Heading, Input, Stack, VStack } from '../Theme';
import { Field, Form, Formik } from 'formik';
import { FormField } from '../Utils/Forms/FormField';
import { parseValue } from '~/src/tools/calculators/helpers/parseValue';

import 'react-datepicker/dist/react-datepicker.css';
import { SVGAddon } from './Addons';

export const CalcWorkingDays: React.FC = () => {
	const { data } = useContext<Calculadora>();

	const initialValues: InputWorkingDays = {
		initialDate: null,
		finalDate: null,
	};

	const [resultsTable, setResultsTable] = useState({
		workingDays: 0,
		days: 0,
		sundays: 0,
		saturdays: 0,
		holidays: 0,
	});

	const handleSubmit = (values: InputWorkingDays) => {
		const calcWorkingDays = new CalculatorWorkingDays();

		const result = calcWorkingDays.calculate(values);
		setResultsTable(result);
	};

	const schema = object({
		initialDate: date()
			.typeError('Data inicial deve ser uma data válida.')
			.required('Esse campo é obrigatório'),
		finalDate: date()
			.min(ref('initialDate'), 'Data inicial deve ser menor que a data final.')
			.typeError('Data final deve ser uma data válida.')
			.required('Esse campo é obrigatório'),
	});

	return (
		<Container for='calculator-form'>
			<Formik<InputWorkingDays>
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				{() => (
					<Form>
						<VStack>
							<Heading as='h2' size='xl' align='center'>
								{data?.customFieldCalculadoras?.tituloFormulario ?? data?.title}
							</Heading>

							<Grid
								css={{
									gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
									gridGap: '1rem',
									marginTop: '2rem',
									'@sm': {
										gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
									},
								}}
							>
								<Box>
									<FormField
										label='Data de início'
										inputRightAddon={<SVGAddon icon='calendar' />}
									>
										{context => (
											<Input
												variant='calculator-form'
												placeholder='dd / mm / aaaa'
											/>
										)}
									</FormField>
								</Box>
								<Box>
									<FormField
										label='Data final'
										inputRightAddon={<SVGAddon icon='calendar' />}
									>
										{context => (
											<Input
												variant='calculator-form'
												placeholder='dd / mm / aaaa'
												onChange={e => {
													context.form.setFieldValue(
														context.field.name,
														parseValue(e.currentTarget.value)
													);
												}}
											/>
										)}
									</FormField>
								</Box>
							</Grid>
						</VStack>
					</Form>
				)}
			</Formik>
		</Container>
	);
};
