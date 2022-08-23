import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude()
export class AccountWithDraw {
	@AxiosExpose()
	coin?: number;

	@AxiosExpose()
	freeOccurrence?: number;
}
