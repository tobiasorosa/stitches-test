import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class OutboundLink {
	@AxiosExpose()
	id?: string;

	@AxiosExpose()
	url?: string;

	@AxiosExpose()
	hasPartnership?: boolean;

	@AxiosExpose()
	queryStringParamName?: string;

	@AxiosExpose()
	queryStringParamValue?: string;
}
