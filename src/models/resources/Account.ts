import axiosT, {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import tedDocFormatter from '~/src/utils/data-formatters/accounts/tedDocFormatter';
import { AccountCons } from '~src/models/fragments/AccountCons';
import { AccountPros } from '~src/models/fragments/AccountPros';
import { AccountType } from '~src/models/fragments/AccountType';
import { AccountWithDraw } from '~src/models/fragments/AccountWithDraw';
import { Services } from '~src/models/fragments/Brokers/Services';
import { Channel } from '~src/models/fragments/Channel';
import { Institution } from '~src/models/fragments/Institution';
import { OutboundLink } from '~src/models/fragments/OutboundLink';
import { Service } from '~src/models/fragments/Service';
import { TedDocElectronic } from '~src/models/fragments/TedDocElectronic';
import { IResource } from '~src/models/interfaces/IResource';

import { AccountChannel } from '../fragments/AccountChannel';
import { InvestmentProduct } from '../fragments/InvestmentProduct';

@AxiosExclude()
export class Account implements IResource {
	readonly __type = 'accounts';

	@AxiosExpose()
	id?: string;

	@AxiosExpose()
	urlImagem?: string;

	@AxiosExpose()
	name?: string;

	@AxiosExpose()
	evaluation?: string;

	@AxiosExpose()
	accountNoFee?: string;

	@AxiosExpose()
	accountType?: AccountType;

	@AxiosExpose()
	linkWithBankTwentyFourHours?: string;

	@AxiosExpose('urlImagem')
	urlImage?: string;

	@AxiosExpose()
	@AxiosTransform(OutboundLink)
	outboundLink?: OutboundLink;

	@AxiosExpose('typeCard')
	cardType?: string;

	@AxiosExpose()
	withdraw?: AccountWithDraw;

	@AxiosExpose()
	tedDocElectronic?: TedDocElectronic;

	@AxiosExpose()
	maintenanceValueMin?: number;

	@AxiosExpose()
	maintenanceValueMax?: number;

	@AxiosExpose()
	linkExternal?: string;

	@AxiosExpose()
	linkInternal?: string;

	@AxiosExpose()
	typeCard?: string;

	@AxiosExpose()
	@AxiosTransform(Institution)
	institution?: Institution;

	@AxiosExpose()
	@AxiosTransform(Channel)
	channel?: Channel[];

	@AxiosExpose()
	@AxiosTransform(Service)
	service?: Service[];

	@AxiosExpose()
	income?: string;

	@AxiosExpose()
	interestRateIncome?: number;

	@AxiosExpose()
	descriptionInterestRateIncome?: string;

	@AxiosExpose('service')
	services?: Services[];

	@AxiosExpose('channel')
	channels?: AccountChannel[];

	@AxiosExpose()
	acceptedMinor?: string;

	@AxiosExpose()
	permitJointAccount?: string;

	@AxiosExpose('pro')
	@AxiosTransform(AccountPros)
	pros?: AccountPros[];

	@AxiosExpose()
	@AxiosTransform(AccountCons)
	cons?: AccountCons[];

	@AxiosExpose()
	accountClassification?: string;

	@AxiosExpose('investmentProduct')
	investmentProducts?: InvestmentProduct[];

	get accountTypeText() {
		return this.accountType?.name ? this.accountType?.name : 'Nenhum';
	}

	get cardTypeText() {
		return this.cardType ? this.cardType : 'Sem cartão';
	}

	get maintenanceText() {
		if (this.maintenanceValueMin === 0 && this.maintenanceValueMax === 0)
			return 'Gratuita';

		return `R$ ${this.maintenanceValueMin} - R$ ${this.maintenanceValueMax}`;
	}

	get withDrawText() {
		const withdrawFreeValue = 99999;
		const freeAndUnlimited = 'Gratuitos e ilimitados';

		if (
			this.withdraw?.freeOccurrence &&
			this.withdraw?.freeOccurrence >= withdrawFreeValue
		)
			return freeAndUnlimited;

		const freeWithdrawText =
			this.withdraw?.freeOccurrence && this.withdraw?.freeOccurrence !== 0
				? `com ${this.withdraw?.freeOccurrence} gratuitos`
				: '';
		const withDrawCoinText =
			this.withdraw?.coin === 0
				? freeAndUnlimited
				: `${this.withdraw?.coin?.toLocaleString('pt-br', {
						style: 'currency',
						currency: 'BRL',
				  })}`;

		return `${withDrawCoinText} ${freeWithdrawText}`;
	}

	get tedDocText() {
		return tedDocFormatter(
			this.tedDocElectronic?.coin,
			this.tedDocElectronic?.freeOccurrence
		);
	}

	get acceptedMinorText() {
		return this.acceptedMinor?.toUpperCase() === 'SIM' ? 'Sim' : 'Não';
	}

	get permitJointAccountText() {
		return this.permitJointAccount?.toUpperCase() === 'SIM' ? 'Sim' : 'Não';
	}

	get linkWithBankTwentyFourHoursText() {
		return this.linkWithBankTwentyFourHours?.toUpperCase() === 'SIM'
			? 'Sim'
			: 'Não';
	}

	get incomeText() {
		return this.income?.toUpperCase() === 'SIM' ? 'Sim' : 'Não';
	}

	get tag() {
		return this.name;
	}

	get accountClassificationText() {
		return this.accountClassification ? this.accountClassification : '-';
	}

	static async fetchOne(id: string) {
		if (!id) {
			return;
		}

		return await axiosT
			.get(`/api/accounts/${id}`)
			.withName('fetchOne@Account')
			.as(Account)
			.fetchData();
	}

	static async fetchList() {
		return await axiosT
			.get('api/accounts')
			.withName('fetch@Account')
			.asArrayOf(Account)
			.fetchData();
	}
}
