import { CSS } from '@stitches/react';
import React, { useEffect } from 'react';

import { useScript } from '~src/utils/hooks/useScript';
import { Box, Text } from '../Theme';

export interface AdsenseProps {
	slot: string;
	format?: string | null;
	ratio?: number;
	showInfo?: boolean;
	fullWithResponsive?: boolean;
	customClass?: string;
	css?: CSS;
}

export function Adsense(props: AdsenseProps) {
	const {
		slot,
		format = 'auto',
		ratio,
		customClass,
		showInfo = false,
		fullWithResponsive = true,
		css,
		...rest
	} = props;

	useScript({
		url: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1602723282047782',
	});

	useEffect(() => {
		if (typeof window === 'object') {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		}
	}, []);

	return (
		<Box css={css}>
			{showInfo && <Text variant='before-ad'>CONTINUA APÓS A PUBLICIDADE</Text>}

			<Box>
				<ins
					className={`adsbygoogle${customClass ? customClass : ''}`}
					style={{ display: 'block' }}
					data-adtest={process.env.NODE_ENV !== 'production' ? 'on' : undefined}
					data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT}
					data-ad-slot={slot}
					data-ad-format={format}
					data-full-width-responsive={fullWithResponsive}
				/>
			</Box>
		</Box>
	);
}
