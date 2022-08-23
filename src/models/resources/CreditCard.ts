import { formatCurrency } from '@brazilian-utils/brazilian-utils';

import { Brand } from '~/src/models/fragments/Brand';
import axiosT, {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import { currencyFormatter } from '~/src/utils/currencyFormatter';
import { Annuity } from '~src/models/fragments/Annuity';
import { Cashback } from '~src/models/fragments/Cashback';
import { Cons } from '~src/models/fragments/Cons';
import { IdealProfile } from '~src/models/fragments/IdealProfile';
import { OutboundLink } from '~src/models/fragments/OutboundLink';
import { Partnership } from '~src/models/fragments/Partnership';
import { Price } from '~src/models/fragments/Price';
import { Pros } from '~src/models/fragments/Pros';
import { Reward } from '~src/models/fragments/Reward';
import { RewardCreditCard } from '~src/models/fragments/RewardCreditCard';
import { ScoreProgramme } from '~src/models/fragments/ScoreProgramme';
import { IResource } from '~src/models/interfaces/IResource';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class CreditCard implements IResource {
	readonly __type = 'credit-cards';

	@AxiosExpose('anuidade')
	@AxiosTransform(Annuity)
	annuity?: Annuity;

	@AxiosExpose()
	@AxiosTransform(Cashback)
	cashback?: Cashback;

	@AxiosExpose('programaDePontos')
	@AxiosTransform(ScoreProgramme)
	scoreProgramme?: ScoreProgramme;

	@AxiosExpose()
	@AxiosTransform(Price)
	revolvingInterest?: Price;

	@AxiosExpose()
	@AxiosTransform(Price)
	invoiceInstallment?: Price;

	@AxiosExpose()
	revolvingInterestSelect?: string;

	@AxiosExpose()
	invoiceInstallmentSelect?: string;

	@AxiosExpose('withDraw')
	@AxiosTransform(Price)
	withdraw?: Price;

	@AxiosExpose()
	@AxiosTransform(Price)
	secondCopy?: Price;

	@AxiosExpose()
	@AxiosTransform(Price)
	paymentAccounts?: Price;

	@AxiosExpose()
	@AxiosTransform(Price)
	evaluationLimitEmergency?: Price;

	@AxiosExpose('bandeira')
	@AxiosTransform(Brand)
	brand?: Brand;

	@AxiosExpose('bandeiras')
	@AxiosTransform(Brand)
	brands?: Brand[];

	@AxiosExpose('perfisIdeais')
	@AxiosTransform(IdealProfile)
	customerProfile?: IdealProfile[];

	@AxiosExpose('recompensas')
	@AxiosTransform(Reward)
	rewards?: Reward[];

	@AxiosExpose('cartaoDeCreditoRecompensas')
	@AxiosTransform(RewardCreditCard)
	rewardCreditCard?: RewardCreditCard[];

	@AxiosExpose('emissor')
	@AxiosTransform(Annuity)
	issuer?: Annuity;

	@AxiosExpose()
	@AxiosTransform(Annuity)
	cobranded?: Annuity;

	@AxiosExpose('parcerias')
	@AxiosTransform(Partnership)
	partnerships?: Partnership[];

	@AxiosExpose()
	@AxiosTransform(Pros)
	pros?: Pros[];

	@AxiosExpose('contras')
	@AxiosTransform(Cons)
	cons?: Cons[];

	@AxiosExpose()
	@AxiosTransform(OutboundLink)
	outboundLink?: OutboundLink;

	@AxiosExpose()
	id?: string;

	@AxiosExpose('nome')
	name?: string;

	@AxiosExpose('descricao')
	description?: string;

	@AxiosExpose('urlImagem')
	urlImage?: string;

	@AxiosExpose('cobertura')
	coverage?: string;

	@AxiosExpose('rendaMinima')
	minIncome?: number;

	@AxiosExpose('rendaMinimaObservacao')
	minIncomeObs?: string;

	@AxiosExpose('linkExterno')
	externalLink?: string;

	@AxiosExpose('linkInterno')
	linkInternal?: string;

	@AxiosExpose()
	createdAt?: string;

	@AxiosExpose()
	updatedAt?: string;

	@AxiosExpose()
	isSuggestedPartner?: boolean;

	@AxiosExpose()
	suggestedPartnerOrder?: number;

	@AxiosExpose()
	evaluation?: number;

	@AxiosExpose()
	incomeMinimumSelect?: string;

	get tag() {
		return this.name;
	}

	get annuityText() {
		if (!this.annuity?.amount) {
			return this.annuity?.observation ? this.annuity?.observation : 'Gratuita';
		}

		return `${this.annuity?.installments} parcelas de ${currencyFormatter(
			this.annuity?.amountInstallment
		)}`;
	}

	get cashbackObsText() {
		const creditCardCashback = this.rewards?.find(
			reward => reward.description?.toLowerCase() === 'cashback'
		);
		let hasCashbackDefaultText = 'Oferece cashback';

		if (creditCardCashback !== undefined && creditCardCashback?.observation)
			hasCashbackDefaultText = creditCardCashback?.observation;

		return creditCardCashback !== undefined
			? hasCashbackDefaultText
			: 'Não oferece cashback';
	}

	get scoreProgrammeObsText() {
		const scoreProgrammeObs = this.rewards?.find(
			reward => reward.description?.toLowerCase() === 'programa de pontos'
		);

		return this.scoreProgramme?.active &&
			scoreProgrammeObs !== undefined &&
			scoreProgrammeObs?.observation
			? scoreProgrammeObs.observation
			: 'Não oferece programa de pontos';
	}

	get cashbackText() {
		return this.cashback?.active ? 'Sim' : 'Não';
	}

	get scoreProgrammeText() {
		return this.scoreProgramme?.active ? 'Sim' : 'Não';
	}

	observationReward(reward: string) {
		const observation = this.rewardCreditCard
			?.filter(it => it.reward?.description === reward)
			.map(it => it.observation);

		return observation?.toString();
	}

	hasReward(reward: string) {
		const found = this.rewardCreditCard?.some(
			it => it.reward?.description === reward
		);

		return found ? 'Sim' : 'Não';
	}

	get minIncomeObservation() {
		return this.minIncomeObs ? this.minIncomeObs : '';
	}

	get minIncomeSelectText() {
		const income =
			this.incomeMinimumSelect &&
			this.incomeMinimumSelect === 'Não exige renda mínima'
				? 'Não exige'
				: this.incomeMinimumSelect;

		return this.incomeMinimumSelect ? income : '';
	}

	get minInComeText() {
		return this.minIncome && this.minIncome > 0
			? `R$ ${formatCurrency(this.minIncome)}`
			: '';
	}

	get withouMinComeText() {
		if (
			this.minIncomeObservation === '' &&
			this.minIncomeSelectText === '' &&
			this.minInComeText === ''
		)
			return 'Nenhuma observação ou valor encontrado';
	}

	get revolvingInterestText() {
		if (
			!this.revolvingInterest?.value &&
			!this.revolvingInterest?.observation &&
			!this.revolvingInterestSelect
		) {
			return 'Não cobrado';
		}

		if (!this.revolvingInterest?.value) {
			if (!this.revolvingInterest?.observation) {
				return this.revolvingInterestSelect;
			}
			return this.revolvingInterest?.observation;
		}

		return `${this.revolvingInterest?.value}% a.m.`;
	}

	get invoiceInstallmentText() {
		if (
			!this.invoiceInstallment?.value &&
			!this.invoiceInstallment?.observation &&
			!this.invoiceInstallmentSelect
		) {
			return 'Não cobrado';
		}

		if (!this.invoiceInstallment?.value) {
			if (!this.invoiceInstallment?.observation) {
				return this.invoiceInstallmentSelect;
			}
			return this.invoiceInstallment?.observation;
		}

		return `${this.invoiceInstallment?.value}% a.m.`;
	}

	get coverageText() {
		if (this.coverage && this.coverage !== '') {
			const strCoverage = `${this.coverage
				.charAt(0)
				.toUpperCase()}${this.coverage.slice(1)}`;

			return strCoverage;
		}
		return 'Nenhuma observação ou valor encontrado';
	}

	get brandText() {
		return this.brand?.name
			? this.brand?.name
			: 'Nenhuma observação ou valor encontrado';
	}

	get brandsText() {
		if (!this.brands || !this.brands.length) {
			return this.brandText;
		}
		return this.brands.map(it => it.name).join(', ');
	}

	static async fetchOne(id: string) {
		if (!id) {
			return;
		}
		return await axiosT
			.get(`/api/credit-cards/${id}`)
			.withName('fetchOne@CreditCard')
			.as(CreditCard)
			.fetchData();
	}

	static async fetchList() {
		return await axiosT
			.get('/api/credit-cards')
			.withName('fetchList@CreditCard')
			.asArrayOf(CreditCard)
			.fetchData();
	}
}
