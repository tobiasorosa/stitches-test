import {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import { currencyFormatter } from '~/src/utils/currencyFormatter';
import { percentFormatter } from '~/src/utils/percentFormatter';
import { Cons } from '~src/models/fragments/Cons';
import { Institution } from '~src/models/fragments/Institution';
import { MinMaxValue } from '~src/models/fragments/MinMaxValue';
import { OutboundLink } from '~src/models/fragments/OutboundLink';
import { Pros } from '~src/models/fragments/Pros';
import { Resource } from '~src/models/fragments/Resource';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class FinancingProducts implements IResource {
	@AxiosExpose()
	id?: string;

	@AxiosExpose()
	name?: string;

	@AxiosExpose('urlImagem')
	urlImage?: string;

	@AxiosExpose()
	description?: string;

	@AxiosExpose()
	@AxiosTransform(Institution)
	institution?: Institution;

	@AxiosExpose()
	@AxiosTransform(Resource)
	customerProfile?: Resource[];

	@AxiosExpose('pro')
	@AxiosTransform(Pros)
	pros?: Pros[];

	@AxiosExpose()
	@AxiosTransform(Cons)
	cons?: Cons[];

	@AxiosExpose()
	@AxiosTransform(MinMaxValue)
	releasePeriod?: MinMaxValue;

	@AxiosExpose()
	@AxiosTransform(MinMaxValue)
	paymentPeriod?: MinMaxValue;

	@AxiosExpose()
	interestRateSelect?: string;

	@AxiosExpose()
	@AxiosTransform(MinMaxValue)
	interestRate?: MinMaxValue;

	@AxiosExpose()
	valuePermittedSelect?: string;

	@AxiosExpose()
	@AxiosTransform(MinMaxValue)
	valuePermited?: MinMaxValue;

	@AxiosExpose()
	evaluation?: number;

	@AxiosExpose()
	cetSelect?: string;

	@AxiosExpose()
	linkSolicitar?: string;

	@AxiosExpose()
	linkInternal?: string;

	@AxiosExpose()
	hasPartnership?: boolean;

	@AxiosExpose()
	@AxiosTransform(MinMaxValue)
	cet?: MinMaxValue;

	@AxiosExpose()
	@AxiosTransform(OutboundLink)
	outboundLink?: OutboundLink;

	@AxiosExpose()
	createdAt?: string;

	@AxiosExpose()
	updatedAt?: string;

	get interestRateText() {
		const min = percentFormatter(this.interestRate?.valueMin);
		const max = percentFormatter(this.interestRate?.valueMax);

		if (!this.interestRateSelect) {
			return `De ${min} at?? ${max} a.m.`;
		}

		if (this.interestRateSelect === 'Taxa ??nica') {
			return `${min} a.m.`;
		}

		if (this.interestRateSelect === 'A partir de') {
			return `A partir de ${min} a.m.`;
		}

		if (this.interestRateSelect === 'N??o divulgado') {
			return 'A empresa n??o divulga taxa';
		}

		return 'Nada cadastrado';
	}

	get cetFeeText() {
		const min = percentFormatter(this.cet?.valueMin);
		const max = percentFormatter(this.cet?.valueMax);

		if (!this.cetSelect) {
			return `De ${min} at?? ${max} a.a.`;
		}

		if (this.cetSelect === 'Taxa ??nica') {
			return `${min} a.a.`;
		}

		if (this.cetSelect === 'A partir de') {
			return `A partir de ${min} a.a.`;
		}

		if (this.cetSelect === 'N??o divulgado') {
			return 'A empresa n??o divulga taxa';
		}

		return 'Nada cadastrado';
	}

	get paymentPeriodText() {
		if (!this.paymentPeriod?.valueMin && !this.paymentPeriod?.valueMax) {
			return 'N??o divulgado';
		}

		if (this.paymentPeriod?.valueMin && this.paymentPeriod?.valueMax) {
			return `De ${this.paymentPeriod?.valueMin} at?? ${this.paymentPeriod?.valueMax} meses`;
		}

		if (this.paymentPeriod?.valueMin) {
			return `A partir de ${this.paymentPeriod?.valueMin} meses`;
		}

		if (this.paymentPeriod?.valueMax) {
			return `at?? ${this.paymentPeriod?.valueMax} meses`;
		}

		return 'Nada cadastrado';
	}

	get loanValues() {
		const min = currencyFormatter(this.valuePermited?.valueMin);
		const max = currencyFormatter(this.valuePermited?.valueMax);

		if (this.valuePermittedSelect === 'N??o divulgado pela institui????o') {
			return 'N??o divulgado';
		}

		if (this.valuePermittedSelect === 'Valores vari??veis') {
			return 'Flex??veis';
		}

		if (!min && !max) {
			return 'Nada cadastrado';
		}

		if (!max) {
			return `A partir de ${min}`;
		}

		if (!min) {
			return `At?? ${max}`;
		}

		return `De ${min} at?? ${max}`;
	}

	get releaseDeadlineText() {
		const min = this.releasePeriod?.valueMin;
		const max = this.releasePeriod?.valueMax;

		if (!min && !max) {
			return 'N??o divulgado';
		}

		if (!max) {
			return `A partir de ${min} dias`;
		}

		if (!min) {
			return `At?? ${max} dias`;
		}

		return `De ${min} at?? ${max} dias`;
	}
}
