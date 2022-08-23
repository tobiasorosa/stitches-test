import { CardFlag } from '~/src/models/fragments/CardFlag';
import axiosT, {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import { Cons } from '~src/models/fragments/Cons';
import { Institution } from '~src/models/fragments/Institution';
import { OutboundLink } from '~src/models/fragments/OutboundLink';
import { Product } from '~src/models/fragments/Product';
import { Pros } from '~src/models/fragments/Pros';
import { Resource } from '~src/models/fragments/Resource';
import { IResource } from '~src/models/interfaces/IResource';
import { currencyFormatter } from '~src/utils/currencyFormatter';
import { percentFormatter } from '~src/utils/percentFormatter';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class CardReader implements IResource {
	readonly __type = 'cardReader';

	@AxiosExpose()
	id?: string;

	@AxiosExpose('urlImagem')
	urlImage?: string;

	@AxiosExpose()
	name?: string;

	@AxiosExpose()
	description?: string;

	@AxiosExpose()
	institutionId?: string;

	@AxiosExpose()
	evaluation?: string;

	@AxiosExpose()
	sortPriority?: string;

	@AxiosExpose()
	linkExternal?: string;

	@AxiosExpose()
	linkInternal?: string;

	@AxiosExpose()
	termsAndConditions?: string;

	@AxiosExpose()
	rateDebit?: number;

	@AxiosExpose()
	rateCreditSight?: number;

	@AxiosExpose()
	rateCreditTerm?: number;

	@AxiosExpose()
	ratePromotionalPeriod?: boolean;

	@AxiosExpose()
	detailsPromotionRate?: string;

	@AxiosExpose()
	termDebit?: number;

	@AxiosExpose()
	termCreditSight?: number;

	@AxiosExpose()
	termCreditTerm?: number;

	@AxiosExpose()
	otherTerm?: string;

	@AxiosExpose()
	priceSelect?: string;

	@AxiosExpose()
	typePurchase?: string;

	@AxiosExpose()
	priceInitial?: number;

	@AxiosExpose()
	valueRent?: number;

	@AxiosExpose()
	numberInstallments?: number;

	@AxiosExpose()
	pricePromotional?: boolean;

	@AxiosExpose()
	detailsPromotionPrice?: string;

	@AxiosExpose()
	@AxiosTransform(Product)
	product?: Product;

	@AxiosExpose()
	@AxiosTransform(Institution)
	institution?: Institution;

	@AxiosExpose()
	@AxiosTransform(CardFlag)
	flags?: CardFlag[];

	@AxiosExpose()
	@AxiosTransform(Resource)
	brand?: Resource;

	@AxiosExpose()
	@AxiosTransform(Resource)
	connections?: Resource[];

	@AxiosExpose()
	@AxiosTransform(Resource)
	characteristics?: Resource[];

	@AxiosExpose()
	@AxiosTransform(Resource)
	profiles?: Resource[];

	@AxiosExpose('pro')
	@AxiosTransform(Pros)
	pros?: Pros[];

	@AxiosExpose()
	@AxiosTransform(Cons)
	cons?: Cons[];

	@AxiosExpose()
	@AxiosTransform(OutboundLink)
	outboundLink?: OutboundLink;

	@AxiosExpose()
	@AxiosTransform(Resource)
	customerProfile?: Resource[];

	get tag() {
		return this.name;
	}

	get conditionsText() {
		if (!this.ratePromotionalPeriod && !this.pricePromotional) return '';

		if (!this.ratePromotionalPeriod) return this.detailsPromotionPrice;

		if (!this.pricePromotional) return this.detailsPromotionRate;

		return `${this.detailsPromotionPrice} ${this.detailsPromotionRate}`;
	}

	get taxText() {
		const creditTerm = this.rateCreditTerm
			? percentFormatter(this.rateCreditTerm)
			: null;
		const creditSight = this.rateCreditSight
			? percentFormatter(this.rateCreditSight)
			: null;
		const rateDebit = this.rateDebit ? percentFormatter(this.rateDebit) : null;

		const termDebit = this.termDebit ? ` em ${this.termDebit} dias.` : '';
		const termCreditSight = this.termCreditSight
			? ` em ${this.termCreditSight} dias.`
			: '';
		const termCreditTerm = this.termCreditTerm
			? ` em ${this.termCreditTerm} dias.`
			: '';

		return {
			Débito: rateDebit ? `${rateDebit}${termDebit}` : 'Não divulgado',
			'Crédito à vista': creditSight
				? `${creditSight}${termCreditSight}`
				: 'Não divulgado',
			'Crédito a prazo': creditTerm
				? `${creditTerm}${termCreditTerm}`
				: 'Não divulgado',
		};
	}

	get debitRatesText() {
		if (!this.rateDebit) return 'Não divulgado';

		let days = 'na hora';
		if (this.termDebit && this.termDebit === 1) days = 'em 1 dia';
		if (this.termDebit && this.termDebit > 1)
			days = `em ${this.termDebit} dias`;

		return `${percentFormatter(this.rateDebit)} ${days}`;
	}

	get creditSightRatesText() {
		if (!this.rateDebit) return 'Não divulgado';

		let days = 'na hora';
		if (this.termCreditSight && this.termCreditSight === 1) days = 'em 1 dia';
		if (this.termCreditSight && this.termCreditSight > 1)
			days = `em ${this.termCreditSight} dias`;

		return `${percentFormatter(this.rateCreditSight)} ${days}`;
	}

	get creditTermRatesText() {
		if (!this.rateDebit) return 'Não divulgado';

		let days = 'na hora';
		if (this.termCreditTerm && this.termCreditTerm === 1) days = 'em 1 dia';
		if (this.termCreditTerm && this.termCreditTerm > 1)
			days = `em ${this.termCreditTerm} dias`;

		return `${percentFormatter(this.rateCreditTerm)} ${days}`;
	}

	get connectionsText() {
		if (!this.connections) return [];
		return this.connections.map(it => it?.name || '');
	}

	get characteristicsText() {
		if (!this.characteristics) return [];
		return this.characteristics.map(it => it?.name || '');
	}

	get flagsText() {
		if (!this.flags)
			return [
				{ Crédito: 'Nenhuma bandeira' },
				{ Débito: 'Nenhuma bandeira' },
				{ Benefícios: 'Nenhuma bandeira' },
			];

		const credit = this.flags
			.filter(flag => flag.credit)
			.map(flag => flag.name)
			.join(', ');
		const debit = this.flags
			.filter(flag => flag.debit)
			.map(flag => flag.name)
			.join(', ');
		const benefits = this.flags
			.filter(flag => flag.benefits)
			.map(flag => flag.name)
			.join(', ');

		return [
			{ Crédito: credit ? credit : 'Nenhuma bandeira' },
			{ Débito: debit ? debit : 'Nenhuma bandeira' },
			{ Benefícios: benefits ? benefits : 'Nenhuma bandeira' },
		];
	}

	get profilesText(): string {
		if (!this.profiles) return '';
		return this.profiles.map(it => it?.name || '').join(', ') || '';
	}

	get costMain() {
		const rentBRL = currencyFormatter(this.valueRent);
		const initialBRL = currencyFormatter(this.priceInitial);

		if (this.typePurchase === 'Não divulgado') {
			return {
				price: 'Não divulgado',
				info: 'consulte a empresa',
			};
		}

		if (this.typePurchase === 'Venda') {
			return {
				price: `${this.numberInstallments} x ${rentBRL}`,
				info: `ou ${initialBRL} à vista`,
			};
		}

		if (this.typePurchase === 'Aluguel') {
			return {
				price: rentBRL,
				info: this.priceInitial
					? `${initialBRL} para instalação`
					: 'sem adesão',
			};
		}
		return {
			price: 'Grátis',
			info: 'consulte condições',
		};
	}

	get costText() {
		const rentBRL = currencyFormatter(this.valueRent);
		const initialBRL = currencyFormatter(this.priceInitial);

		if (this.pricePromotional) {
			return {
				price: this.detailsPromotionPrice,
				info: '',
			};
		}

		if (this.typePurchase === 'Não divulgado') {
			return {
				price: 'Não divulgado',
				info: 'consulte a empresa',
			};
		}

		if (this.typePurchase === 'Venda') {
			return {
				price: `${this.numberInstallments} x ${rentBRL}`,
				info: `ou ${initialBRL} à vista`,
			};
		}

		if (this.typePurchase === 'Aluguel') {
			return {
				price: rentBRL,
				info: this.priceInitial
					? `${initialBRL} para instalação`
					: 'sem adesão',
			};
		}
		return {
			price: 'Grátis',
			info: 'consulte condições',
		};
	}

	get brandText() {
		if (!this.brand) return '';
		return this.brand?.name;
	}

	static async fetchOne(id: string) {
		if (!id) {
			return;
		}
		return await axiosT
			.get(`/api/cardReader/${id}`)
			.withName('fetchOne@CardReader')
			.as(CardReader)
			.fetchData();
	}

	static async fetchList() {
		return await axiosT
			.get('/api/cardReader')
			.withName('fetchList@CardReader')
			.asArrayOf(CardReader)
			.fetchData();
	}
}
