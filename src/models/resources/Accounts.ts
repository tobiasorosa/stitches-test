import axiosT, {
	AxiosExclude,
	AxiosExpose,
	AxiosTransform,
} from '~/src/utils/axios-transformer/src';
import { currencyFormatter } from '~/src/utils/currencyFormatter';
import { Service } from '~src/models/fragments/Service';
import { TedDoc } from '~src/models/fragments/TedDoc';
import { IResource } from '~src/models/interfaces/IResource';
import { FinancingProducts } from '~src/models/resources/FinancingProducts';

import { InvestmentProduct } from '../fragments/InvestmentProduct';

@AxiosExclude() // Excludes all fields unless otherwise specified
export class Accounts extends FinancingProducts implements IResource {
	readonly __type = 'accounts';

	@AxiosExpose()
	typeCard?: string;

	@AxiosExpose()
	maintenanceValueMin?: number;

	@AxiosExpose()
	maintenanceValueMax?: number;

	@AxiosExpose()
	@AxiosTransform(Service)
	accountType?: Service;

	@AxiosExpose()
	@AxiosTransform(Service)
	channel?: Service[];

	@AxiosExpose()
	@AxiosTransform(Service)
	service?: Service[];

	@AxiosExpose()
	accountNoFee?: string;

	@AxiosExpose()
	key?: string;

	@AxiosExpose()
	income?: string;

	@AxiosExpose()
	interestRateIncome?: number;

	@AxiosExpose()
	descriptionInterestRateIncome?: string;

	@AxiosExpose()
	@AxiosTransform(TedDoc)
	withdraw?: TedDoc;

	@AxiosExpose()
	@AxiosTransform(TedDoc)
	tedDocElectronic?: TedDoc;

	@AxiosExpose()
	linkWithBankTwentyFourHours?: string;

	@AxiosExpose()
	minimumEntry?: number;

	@AxiosExpose()
	amortization?: string;

	@AxiosExpose()
	cetNotDisclosed?: boolean;

	@AxiosExpose('investmentProduct')
	investmentProducts?: InvestmentProduct[];

	get accountFeeText() {
		const min = currencyFormatter(this.maintenanceValueMin);
		const max = currencyFormatter(this.maintenanceValueMax);

		if (this.accountNoFee === 'Sim') {
			return `De ${min} até ${max}`;
		}

		return 'Gratuita';
	}

	get withDrawText() {
		if (!this.withdraw?.coin) {
			return 'Gratuitos e ilimitados';
		}

		if (!this.withdraw.freeOccurrence) {
			return currencyFormatter(this.withdraw.coin);
		}

		return `${currencyFormatter(this.withdraw.coin)} com ${
			this.withdraw.freeOccurrence
		} gratuitos`;
	}

	get tedDocText() {
		if (!this.tedDocElectronic?.coin) {
			return 'Gratuitos e ilimitados';
		}

		if (!this.tedDocElectronic.freeOccurrence) {
			return currencyFormatter(this.tedDocElectronic.coin);
		}

		return `${currencyFormatter(this.tedDocElectronic.coin)} com ${
			this.tedDocElectronic.freeOccurrence
		} gratuitos`;
	}

	static async fetchOne(id: string) {
		return await axiosT
			.get(`/api/accounts/${id}`)
			.withName('fetchOne@RealStateFinancing')
			.as(Accounts)
			.fetchData();
	}

	static async fetchList() {
		return await axiosT
			.get('/api/accounts')
			.withName('fetchList@RealStateFinancing')
			.asArrayOf(Accounts)
			.fetchData();
	}
}
