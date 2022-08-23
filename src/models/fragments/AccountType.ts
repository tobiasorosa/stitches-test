import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude()
export class AccountType {
	@AxiosExpose()
	id?: string;

	@AxiosExpose()
	name?: string;
}
