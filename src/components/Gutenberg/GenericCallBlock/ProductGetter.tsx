import { useContext } from 'react';

import { Loan } from '~/src/models/resources/Loan';
import { Accounts } from '~src/models/resources/Accounts';
import { Broker } from '~src/models/resources/Broker';
import { CardReader } from '~src/models/resources/CardReader';
import { CreditCard } from '~src/models/resources/CreditCard';
import { RealState } from '~src/models/resources/RealState';
import { Vehicle } from '~src/models/resources/Vehicle';

import { Context } from './Context';
// import * as Products from './Products';

export const ProductGetter = () => {
	const { product } = useContext(Context);

	if (product instanceof CreditCard) return <></>;
	// return <Products.CreditCard creditCard={product} />;
	if (product instanceof Loan) return <></>;
	// return <Products.Loan loan={product} />;
	if (product instanceof Vehicle) return <></>;
	// return <Products.Vehicle vehicle={product} />;
	if (product instanceof CardReader) return <></>;
	// return <Products.CardReader cardReader={product} />;
	if (product instanceof Accounts) return <></>;
	// return <Products.Accounts accounts={product} />;
	if (product instanceof RealState) return <></>;
	// return <Products.RealState realState={product} />;
	if (product instanceof Broker) return <></>;
	// return <Products.Broker broker={product} />;
	return <></>;
};
