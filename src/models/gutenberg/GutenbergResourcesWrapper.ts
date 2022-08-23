import { ClassType } from '~/src/utils/axios-transformer/src';
import { Accounts } from '~src/models/resources/Accounts';
import { Broker } from '~src/models/resources/Broker';
import { CardReader } from '~src/models/resources/CardReader';
import { CreditCard } from '~src/models/resources/CreditCard';
import { Loan } from '~src/models/resources/Loan';
import { RealState } from '~src/models/resources/RealState';
import { Vehicle } from '~src/models/resources/Vehicle';

/**
 * Register here all Gutenberg Resources models into 'resources' field
 */
export abstract class GutenbergResourcesWrapper {
	static resources: Array<ClassType<any>> = [
		CreditCard,
		Loan,
		Vehicle,
		RealState,
		Accounts,
		CardReader,
		Broker,
	];
}
