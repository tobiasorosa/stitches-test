import { useAmp } from 'next/amp';

import { useRawContentInserter } from '~src/utils/hooks/useRawContentInserter';
import { Box } from '../Theme';

export interface WpContentProps {
	html?: string;
	meta?: WordPressMetaData;
}

export function WpContent(props: WpContentProps) {
	const { html, meta, ...rest } = props;
	const isAmp = useAmp();

	const content = useRawContentInserter(html ?? '', { meta, isAmp });

	return (
		<Box className={'wp-content'} data-testid={'wp-content'} {...rest}>
			{content}
		</Box>
	);
}
