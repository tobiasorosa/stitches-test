import { useAmp } from 'next/amp';
import NextImage from 'next/image';
import React from 'react';

interface ICustomWpImage {
	src: string | undefined;
	alt: string | undefined;
}

const CustomWpImage: React.FC<ICustomWpImage> = ({ src, alt }) => {
	const isAmp = useAmp();

	if (isAmp) {
		return (
			<amp-img
				src={src || ''}
				alt={alt || ''}
				layout={'fill'}
				margin={'auto'}
				class={'custom-image-amp'}
			/>
		);
	}

	return (
		<NextImage
			src={src || ''}
			alt={alt || ''}
			layout={'fill'}
			objectFit={'contain'}
		/>
	);
};

export default CustomWpImage;
