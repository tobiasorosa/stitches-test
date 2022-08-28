import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createWrapperAndAppendToBody } from '~/src/utils/style/wrapper';

interface ReactPortalProps {
	children: React.ReactNode;
	wrapperId: string;
}

export const Portal = ({
	children,
	wrapperId = 'react-portal-wrapper',
}: ReactPortalProps) => {
	const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
		null
	);

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);
		let systemCreated = false;
		// if element is not found with wrapperId or wrapperId is not provided,
		// create and append to body
		if (!element) {
			systemCreated = true;
			element = createWrapperAndAppendToBody(wrapperId);
		}
		setWrapperElement(element);

		return () => {
			// delete the programatically created element
			if (systemCreated && element!.parentNode) {
				element!.parentNode.removeChild(element!);
			}
		};
	}, [wrapperId]);

	if (wrapperElement === null) return null;

	return createPortal(children, wrapperElement);
};
