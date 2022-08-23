import { useRouter } from 'next/router';
import { useContext } from 'react';
import useBoolean from '~/src/utils/hooks/useBoolean';
import { Box, Stack } from '../Theme';
import { Context, ContextCalculator } from './Context';

interface CalculatorContainerProps {
	children: React.ReactElement | React.ReactElement[];
}

export const CalculatorContainer = ({ children }: CalculatorContainerProps) => {
	const { value, setTrue, setFalse } = useBoolean();
	const { meta, customFieldCalculator } = useContext(Context);

	const state = {
		value,
		setTrue,
		setFalse,
	};

	const slot = meta?.configAd?.Calculadora?.result?.id_block;

	const router = useRouter();
	const isIframe = router?.query?.widget_calc === 'true';

	return (
		<ContextCalculator.Provider value={state}>
			<Stack variant='calculator-form'>
				{children}

				{/* {flag && !isIframe && (
          <Adsense
            mt={8}
            mx={'auto'}
            slot={slot}
            w={'full'}
            height={'320px'}
            format={'auto'}
          />
        )} */}

				{customFieldCalculator?.conteudoComplementar && !value && !isIframe && (
					<Box
						dangerouslySetInnerHTML={{
							__html: customFieldCalculator?.conteudoComplementar,
						}}
					/>
				)}
			</Stack>
		</ContextCalculator.Provider>
	);
};
