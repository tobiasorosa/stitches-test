import { useFormikContext } from 'formik';
import { useContext } from 'react';
import { Box, Button, Stack, VStack } from '../Theme';
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
				<Button
					onClick={setFalse}
					variant='calculator-result'
					border='rounded'
					color='transparent'
				>
					Limpar
				</Button>
				<Button
					onClick={setTrue}
					disabled={!(isValid && dirty)}
					type={'submit'}
					variant='calculator-result'
					color='blue'
					border='rounded'
					css={{
						marginInlineStart: '0.5rem',
					}}
				>
					Calcular
				</Button>
			</Stack>

			<Stack
				css={{
					display: `${value ? '' : 'none'}`,
				}}
			>
				{customFieldCalculator?.conteudoCalcularResultado && (
					<Box
						css={{
							marginBottom: '5px',
						}}
						dangerouslySetInnerHTML={{
							__html: customFieldCalculator?.conteudoCalcularResultado,
						}}
					/>
				)}

				<VStack data-testid={'result-table-calculator'} css={{ width: '100%' }}>
					{children}
				</VStack>

				{customFieldCalculator?.conteudoResultadoAnuncio && (
					<Box
						css={{
							marginTop: '1.25rem',
						}}
						dangerouslySetInnerHTML={{
							__html: customFieldCalculator?.conteudoResultadoAnuncio,
						}}
					/>
				)}
			</Stack>
		</>
	);
};
