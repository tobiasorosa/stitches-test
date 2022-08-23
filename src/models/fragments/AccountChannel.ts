import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude()
export class AccountChannel {
	@AxiosExpose()
	id?: string;

	@AxiosExpose()
	name?: string;
}
