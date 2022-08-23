import {
	AxiosExclude,
	AxiosResponseExpose,
} from '~/src/utils/axios-transformer/src';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class IPVAitem {
	@AxiosResponseExpose()
	state?: string;

	@AxiosResponseExpose()
	particular?: number;

	@AxiosResponseExpose()
	caminhonetes?: number;

	@AxiosResponseExpose()
	transporte?: number;

	@AxiosResponseExpose()
	motocicletas?: number;

	@AxiosResponseExpose()
	locadoras?: number;

	@AxiosResponseExpose()
	onibus?: number;

	@AxiosResponseExpose()
	quota?: number;

	@AxiosResponseExpose()
	discount?: number;
}
