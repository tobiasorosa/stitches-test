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
			return `De ${min} até ${max} a.m.`;
		}

		if (this.interestRateSelect === 'Taxa única') {
			return `${min} a.m.`;
		}

		if (this.interestRateSelect === 'A partir de') {
			return `A partir de ${min} a.m.`;
		}

		if (this.interestRateSelect === 'Não divulgado') {
			return 'A empresa não divulga taxa';
		}

		return 'Nada cadastrado';
	}

	get cetFeeText() {
		const min = percentFormatter(this.cet?.valueMin);
		const max = percentFormatter(this.cet?.valueMax);

		if (!this.cetSelect) {
			return `De ${min} até ${max} a.a.`;
		}

		if (this.cetSelect === 'Taxa única') {
			return `${min} a.a.`;
		}

		if (this.cetSelect === 'A partir de') {
			return `A partir de ${min} a.a.`;
		}

		if (this.cetSelect === 'Não divulgado') {
			return 'A empresa não divulga taxa';
		}

		return 'Nada cadastrado';
	}

	get paymentPeriodText() {
		if (!this.paymentPeriod?.valueMin && !this.paymentPeriod?.valueMax) {
			return 'Não divulgado';
		}

		if (this.paymentPeriod?.valueMin && this.paymentPeriod?.valueMax) {
			return `De ${this.paymentPeriod?.valueMin} até ${this.paymentPeriod?.valueMax} meses`;
		}

		if (this.paymentPeriod?.valueMin) {
			return `A partir de ${this.paymentPeriod?.valueMin} meses`;
		}

		if (this.paymentPeriod?.valueMax) {
			return `até ${this.paymentPeriod?.valueMax} meses`;
		}

		return 'Nada cadastrado';
	}

	get loanValues() {
		const min = currencyFormatter(this.valuePermited?.valueMin);
		const max = currencyFormatter(this.valuePermited?.valueMax);

		if (this.valuePermittedSelect === 'Não divulgado pela instituição') {
			return 'Não divulgado';
		}

		if (this.valuePermittedSelect === 'Valores variáveis') {
			return 'Flexíveis';
		}

		if (!min && !max) {
			return 'Nada cadastrado';
		}

		if (!max) {
			return `A partir de ${min}`;
		}

		if (!min) {
			return `Até ${max}`;
		}

		return `De ${min} até ${max}`;
	}

	get releaseDeadlineText() {
		const min = this.releasePeriod?.valueMin;
		const max = this.releasePeriod?.valueMax;

		if (!min && !max) {
			return 'Não divulgado';
		}

		if (!max) {
			return `A partir de ${min} dias`;
		}

		if (!min) {
			return `Até ${max} dias`;
		}

		return `De ${min} até ${max} dias`;
	}
}
