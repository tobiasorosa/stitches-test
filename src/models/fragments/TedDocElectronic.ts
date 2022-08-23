import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude()
export class TedDocElectronic {
	@AxiosExpose()
	coin?: number;

	@AxiosExpose()
	freeOccurrence?: number;
}
