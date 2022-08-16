import { useState } from 'react';
import { Calculadora } from '~/src/types/wp-graphql';
import CalculatorWorkingDays, {
	InputWorkingDays,
} from '~src/tools/calculators/calcWorkingDays';
import { useContext } from './Context';
import { date, object, ref } from 'yup';
import { Container, Grid, Heading2, Stack } from '../Theme';
import { Field, Form, Formik } from 'formik';
import { FormField } from '../Utils/Forms/FormField';

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
		<Container>
			<Formik<InputWorkingDays>
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				{() => (
					<Form>
						<Stack>
							<Heading2>
								{data?.customFieldCalculadoras?.tituloFormulario ?? data?.title}
							</Heading2>
						</Stack>

						<Grid>
							<FormField>
								{context => <Field type='string' name='initialDate' />}
							</FormField>

							<FormField>
								{context => <Field type='string' name='finalDate' />}
							</FormField>
						</Grid>
					</Form>
				)}
			</Formik>
		</Container>
	);
};
