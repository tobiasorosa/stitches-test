import React from 'react';

import { Loan } from '~/src/models/resources/Loan';
import type { ModelGenericCallBlock } from '~src/models/gutenberg/ModelGenericCallBlock';
import { Accounts } from '~src/models/resources/Accounts';
import { Broker } from '~src/models/resources/Broker';
import { CardReader } from '~src/models/resources/CardReader';
import type { CreditCard } from '~src/models/resources/CreditCard';
import { RealState } from '~src/models/resources/RealState';
import { Vehicle } from '~src/models/resources/Vehicle';

export interface ContextProps {
	data?: ModelGenericCallBlock;
	product?:
		| CreditCard
		| Loan
		| Vehicle
		| RealState
		| Accounts
		| CardReader
		| Broker;
}

export const Context = React.createContext<ContextProps>({});
