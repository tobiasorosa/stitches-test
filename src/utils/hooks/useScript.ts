import { useEffect } from 'react';

export interface UseScriptProps {
	url: string;
}

export function useScript(props: UseScriptProps) {
	const { url } = props;

	useEffect(() => {
		const script = document.createElement('script');
		script.src = url;
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, [url]);
}
