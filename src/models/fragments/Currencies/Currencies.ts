import { AxiosExclude, AxiosExpose } from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Currencies {
	@AxiosExpose('USD')
	USD?: number;

	@AxiosExpose('BRL')
	BRL?: number;

	@AxiosExpose('EUR')
	EUR?: number;

	@AxiosExpose('GBP')
	GBP?: number;

	@AxiosExpose('CAD')
	CAD?: number;

	@AxiosExpose('AUD')
	AUD?: number;

	@AxiosExpose('NZD')
	NZD?: number;

	@AxiosExpose('JPY')
	JPY?: number;

	@AxiosExpose('CNY')
	CNY?: number;

	@AxiosExpose('CHF')
	CHF?: number;

	@AxiosExpose('ARS')
	ARS?: number;

	@AxiosExpose('CLP')
	CLP?: number;

	@AxiosExpose('MXN')
	MXN?: number;
}
