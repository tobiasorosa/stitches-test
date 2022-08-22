import { useFormikContext } from 'formik';
import { useContext } from 'react';
import { Button, Stack } from '../Theme';
import { Context, ContextCalculator } from './Context';

interface ResultContainerProps {
	children: React.ReactElement | React.ReactElement[];
}

export const ResultContainer = ({ children }: ResultContainerProps) => {
	const { value, setTrue, setFalse } = useContext(ContextCalculator);
	const { customFieldCalculator } = useContext(Context);
	const { isValid, dirty } = useFormikContext();
	return (
		<>
			<Stack
				css={{
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: '2rem',
				}}
			>
				<Button onClick={setFalse} variant='calculator-reset'>
					Limpar
				</Button>
				<Button onClick={setTrue} disabled={!(isValid && dirty)}>
					Calcular
				</Button>
			</Stack>
		</>
	);
};
