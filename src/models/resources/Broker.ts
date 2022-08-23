import axiosT, {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import { currencyFormatter } from '~/src/utils/currencyFormatter';
import { Cons } from '~src/models/fragments/Cons';
import { OutboundLink } from '~src/models/fragments/OutboundLink';
import { Pros } from '~src/models/fragments/Pros';
import { IResource } from '~src/models/interfaces/IResource';

import { FundInvestment } from '../fragments/Brokers/FundInvestment';
import { IncomeFixedPrivate } from '../fragments/Brokers/IncomeFixedPrivate';
import { IncomeFixedPublic } from '../fragments/Brokers/IncomeFixedPublic';
import { IncomeVariable } from '../fragments/Brokers/IncomeVariable';
import { InvestmentsProducts } from '../fragments/Brokers/InvestmentsProducts';
import { Services } from '../fragments/Brokers/Services';
import { CustomerProfile } from '../fragments/CustomerProfile';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Broker implements IResource {
	readonly __type = 'brokers';

	readonly __typename = 'Broker';

	@AxiosExpose()
	node?: any;

	@AxiosExpose()
	id?: string;

	@AxiosExpose('urlImagem')
	urlImage?: string;

	@AxiosExpose()
	name?: string;

	@AxiosExpose()
	description?: string;

	@AxiosExpose('linkExternal')
	externalLink?: string;

	@AxiosExpose('linkInternal')
	linkInternal?: string;

	@AxiosExpose('linkTable')
	tableLink?: string;

	@AxiosExpose()
	note?: string;

	@AxiosExpose()
	evaluation?: string;

	@AxiosExpose()
	privatePension?: string;

	@AxiosExpose()
	lifeInsurance?: string;

	@AxiosExpose()
	publicOffer?: string;

	@AxiosExpose()
	coe?: string;

	@AxiosExpose()
	cashback?: string;

	@AxiosExpose()
	observationCashback?: string;

	@AxiosExpose()
	accountOpeningAndMaintenance?: number;

	@AxiosExpose()
	selectAccountOpeningAndMaintenance?: string;

	@AxiosExpose()
	custodyFee?: number;

	@AxiosExpose()
	selectCustodyFee?: string;

	@AxiosExpose()
	custodyTransfer?: number;

	@AxiosExpose()
	selectCustodyTransfer?: string;

	@AxiosExpose()
	adminFeeDirectTreasure?: number;

	@AxiosExpose()
	selectAdminFeeDirectTreasure?: string;

	@AxiosExpose()
	transferResources?: string;

	@AxiosExpose()
	tedTrasnferResources?: number;

	@AxiosExpose()
	selectTedTrasnferResources?: string;

	@AxiosExpose()
	docTrasnferResources?: number;

	@AxiosExpose()
	selectDocTrasnferResources?: string;

	@AxiosExpose()
	pixTrasnferResources?: number;

	@AxiosExpose()
	selectPixTrasnferResources?: string;

	@AxiosExpose()
	futureAction?: string;

	@AxiosExpose()
	dayTradeFutureAction?: number;

	@AxiosExpose()
	selectDayTradeFutureAction?: string;

	@AxiosExpose()
	swingTradeFutureAction?: number;

	@AxiosExpose()
	selectSwingTradeFutureAction?: string;

	@AxiosExpose()
	rentActionTaker?: number;

	@AxiosExpose()
	selectRentActionTaker?: string;

	@AxiosExpose()
	rentActionDonor?: number;

	@AxiosExpose()
	selectRentActionDonor?: string;

	@AxiosExpose()
	margin?: number;

	@AxiosExpose()
	selectMargin?: string;

	@AxiosExpose()
	brokerageFee?: string;

	@AxiosExpose()
	brokerageFeeValue?: number;

	@AxiosExpose()
	brokerageFeeObservation?: string;

	@AxiosExpose()
	futureContract?: string;

	@AxiosExpose()
	futureContractValue?: number;

	@AxiosExpose()
	futureContractObservation?: string;

	@AxiosExpose()
	exerciseOfOptions?: string;

	@AxiosExpose()
	exerciseOfOptionsValue?: number;

	@AxiosExpose()
	exerciseOfOptionsObservation?: string;

	@AxiosExpose()
	miniContract?: string;

	@AxiosExpose()
	exemptionRlp?: string;

	@AxiosExpose()
	exemptionRlpValue?: number;

	@AxiosExpose()
	exemptionRlpObservation?: string;

	@AxiosExpose('cons')
	@AxiosTransform(Cons)
	cons?: Cons[];

	@AxiosExpose('pro')
	@AxiosTransform(Pros)
	pros?: Pros[];

	@AxiosExpose('customerProfiles')
	@AxiosTransform(CustomerProfile)
	customerProfile?: CustomerProfile[];

	@AxiosExpose('services')
	service?: Services[];

	@AxiosExpose('fundInvestments')
	@AxiosTransform(FundInvestment)
	fundInvestment?: FundInvestment[];

	@AxiosExpose('incomeFixedPublics')
	@AxiosTransform(IncomeFixedPublic)
	incomeFixedPublic?: IncomeFixedPublic[];

	@AxiosExpose('incomeFixedPrivates')
	@AxiosTransform(IncomeFixedPrivate)
	incomeFixedPrivate?: IncomeFixedPrivate[];

	@AxiosExpose('incomeVariables')
	@AxiosTransform(IncomeVariable)
	incomeVariable?: IncomeVariable[];

	@AxiosExpose()
	@AxiosTransform(InvestmentsProducts)
	investmentsProducts?: InvestmentsProducts[];

	@AxiosExpose()
	@AxiosTransform(OutboundLink)
	outboundLink?: OutboundLink;

	get tag() {
		return this.name;
	}

	get coeText() {
		return this.coe && this.coe === 'Não' ? 'Não oferece' : 'Sim, oferece';
	}

	get privatePensionText() {
		return this.privatePension && this.privatePension === 'Não'
			? 'Não oferece'
			: 'Sim, oferece';
	}

	get lifeInsuranceText() {
		return this.lifeInsurance && this.lifeInsurance === 'Não'
			? 'Não oferece'
			: 'Sim, oferece';
	}

	getBrokerageFee() {
		if (this.brokerageFee) {
			if (this.brokerageFee === 'Não é cobrado') {
				return 'Não é cobrada';
			} else {
				return this.brokerageFee;
			}
		} else if (this.brokerageFeeValue) {
			return currencyFormatter(this.brokerageFeeValue);
		} else {
			return 'Não encontrado';
		}
	}

	getBrokerageFeeWithObs() {
		let brokerageFeeFixed;
		if (this.brokerageFee) {
			brokerageFeeFixed =
				this.brokerageFee === 'Não é cobrado'
					? 'Não é cobrada'
					: this.brokerageFee;
		}
		if (this.brokerageFeeObservation) {
			if (this.brokerageFee)
				return `${brokerageFeeFixed}. ${this.brokerageFeeObservation}`;
			if (this.brokerageFeeValue)
				return `${currencyFormatter(this.brokerageFeeValue)}. ${
					this.brokerageFeeObservation
				}`;
		} else {
			if (this.brokerageFee) return brokerageFeeFixed;
			if (this.brokerageFeeValue)
				return currencyFormatter(this.brokerageFeeValue);
		}
	}

	getProfiles() {
		if (this.customerProfile && this.customerProfile.length > 0) {
			return this.customerProfile.map(it => it.name).join(', ');
		}
	}

	getListNames(lists?: List[]) {
		if (lists && lists.length > 0) {
			return lists.map(it => it.name).join(', ');
		}
	}

	getProducts() {
		let products: string[] | string = [];

		if (this.incomeFixedPrivate && this.incomeFixedPrivate?.length > 0) {
			products.push('Renda fixa');
		}

		if (this.fundInvestment && this.fundInvestment?.length > 0) {
			products.push('Fundos de investimento');
		}

		if (this.incomeVariable && this.incomeVariable?.length > 0) {
			products.push('Renda variável');
		}

		products = products.join(', ');

		return products;
	}

	getServices() {
		if (!this.service) return [];
		return this.service.map(it => it?.name || '');
	}

	getOpeningAndMaintenance() {
		if (this.selectAccountOpeningAndMaintenance)
			return this.selectAccountOpeningAndMaintenance;
		if (this.accountOpeningAndMaintenance)
			return currencyFormatter(this.accountOpeningAndMaintenance);
	}

	getFutureContract() {
		if (this.futureContractObservation) {
			if (this.futureContract)
				return `${this.futureContract}. ${this.futureContractObservation}`;
			if (this.futureContractValue)
				return `${currencyFormatter(this.futureContractValue)}. ${
					this.futureContractObservation
				}`;
		} else {
			if (this.futureContract) return this.futureContract;
			if (this.futureContractValue)
				return currencyFormatter(this.futureContractValue);
		}
	}

	getMiniContract() {
		if (this.miniContract === 'Não') return 'Não oferece';
		if (this.miniContract) return this.miniContract;
	}

	getMiniContractText() {
		let exemptionRlpText = '';

		if (this.miniContract === 'Não') {
			exemptionRlpText = 'Não oferece';
		}
		if (this.miniContract === 'Sim') {
			if (this.exemptionRlp === 'Sim') {
				if (this.exemptionRlpValue && this.exemptionRlpValue !== 0.0) {
					exemptionRlpText = `Isenção com RLP ativo ou ${currencyFormatter(
						this.exemptionRlpValue
					)} sem RLP ativo`;
				} else {
					exemptionRlpText = 'Isenção com RLP ativo';
				}
			} else {
				if (this.exemptionRlpValue && this.exemptionRlpValue !== 0.0) {
					exemptionRlpText = `${currencyFormatter(
						this.exemptionRlpValue
					)}, não oferece isenção com RLP ativo`;
				}
			}
		}
		if (this.exemptionRlpObservation) {
			if (exemptionRlpText) {
				return `${exemptionRlpText}. ${this.exemptionRlpObservation}`;
			}
			return this.exemptionRlpObservation;
		} else {
			return exemptionRlpText;
		}
	}

	getOptionsExercisesText() {
		if (this.exerciseOfOptionsObservation) {
			if (this.exerciseOfOptions)
				return `${this.exerciseOfOptions}. ${this.exerciseOfOptionsObservation}`;
			if (this.exerciseOfOptionsValue)
				return `${currencyFormatter(this.exerciseOfOptionsValue)}. ${
					this.exerciseOfOptionsObservation
				}`;
		} else {
			if (this.exerciseOfOptions) return this.exerciseOfOptions;
			if (this.exerciseOfOptionsValue)
				return currencyFormatter(this.exerciseOfOptionsValue);
		}
	}

	get publicOfferingsText() {
		return this.publicOffer && this.publicOffer === 'Sim'
			? 'Sim, oferece'
			: 'Não oferece';
	}

	get brokerageFeeValueText() {
		if (this.brokerageFeeValue && this.brokerageFeeValue > 0)
			return `R$ ${this.brokerageFeeValue}`;
	}

	get brokerageFeeObservationText() {
		if (this.brokerageFeeObservation && this.brokerageFeeObservation !== '')
			return this.brokerageFeeObservation;
	}

	get evaluationText() {
		return this.evaluation ? `${this.evaluation} de 5` : 'Não possui avaliação';
	}

	get noteText() {
		return this.note ? `${this.note} de 10` : 'Não possui avaliação';
	}

	get futureContractSelectText() {
		if (this.futureContract && this.futureContract != '')
			return this.futureContract;
	}

	get futureContractValueText() {
		if (this.futureContractValue !== undefined && this.futureContractValue > 0)
			return `R$ ${this.futureContractValue}`;
	}

	get futureContractObsText() {
		if (
			this.futureContractObservation &&
			String(this.futureContractObservation) !== ''
		)
			return this.futureContractObservation;
	}

	get futureContractText() {
		if (
			this.futureContractValue === 0 ||
			this.futureContractValue === undefined
		)
			return 'Não é cobrado';
	}

	get exerciseOfOptionsValueText() {
		if (
			this.exerciseOfOptionsValue !== undefined &&
			this.exerciseOfOptionsValue > 0
		)
			return `R$ ${this.exerciseOfOptionsValue}`;
	}

	get exerciseOfOptionsText() {
		if (
			this.exerciseOfOptionsValue === 0 ||
			this.exerciseOfOptionsValueText === undefined
		)
			return 'Informação não disponível';
	}

	get miniContractText() {
		if (this.miniContract && this.miniContract === 'Não') return 'Não oferece';
	}

	get exemptionRlpText() {
		return this.exemptionRlp && this.exemptionRlp === 'Sim'
			? 'Sim, oferece'
			: 'Não oferece';
	}

	get exemptionRlpValueText() {
		if (this.exemptionRlpValue !== undefined && this.miniContract == 'Sim') {
			if (this.exemptionRlp == 'Sim' && this.exemptionRlpValue == 0) {
				return 'Isenção com RLP ativo.';
			}
			if (this.exemptionRlp == 'Sim' && this.exemptionRlpValue > 0) {
				return `Isenção com RLP ativo ou ${currencyFormatter(
					this.exemptionRlpValue
				)} sem RLP ativo.`;
			}
			if (this.exemptionRlp == 'Não' && this.exemptionRlpValue > 0) {
				return `${currencyFormatter(
					this.exemptionRlpValue
				)} não oferece isenção com RLP ativo.`;
			}
			if (this.exemptionRlp == 'Não' && this.exemptionRlpValue == 0) {
				return 'Não oferece isenção com RLP ativo.';
			}
		}
	}

	get custodyFeeText() {
		if (this.selectCustodyFee) return this.selectCustodyFee;
		if (this.custodyFee) return currencyFormatter(this.custodyFee);

		return 'Nada encontrado';
	}

	get tedTrasnferResourcesText() {
		if (
			this.transferResources &&
			this.transferResources === 'Sim' &&
			this.selectTedTrasnferResources
		)
			return `TED: ${this.selectTedTrasnferResources}`;
	}

	get docTrasnferResourcesText() {
		if (
			this.transferResources &&
			this.transferResources === 'Sim' &&
			this.selectDocTrasnferResources
		)
			return `DOC: ${this.selectDocTrasnferResources}`;
	}

	get pixTrasnferResourcesText() {
		if (
			this.transferResources &&
			this.transferResources === 'Sim' &&
			this.selectPixTrasnferResources
		)
			return `Pix: ${this.selectPixTrasnferResources}`;
	}

	static async fetchOne(id: string) {
		if (!id) {
			return;
		}

		return await axiosT
			.get(`/api/brokers/${id}`)
			.withName('fetchOne@Broker')
			.as(Broker)
			.fetchData();
	}
}
