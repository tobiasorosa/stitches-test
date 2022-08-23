import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude()
export class InvestmentProduct {
	@AxiosExpose()
	id?: string;

	@AxiosExpose()
	name?: string;
}
