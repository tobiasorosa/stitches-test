import React from 'react';
import {
	Calculadora,
	Calculadora_Customfieldcalculadoras,
	Category,
	Noticia,
	Post,
	Tabela,
} from '~/src/types/wp-graphql';

export interface ContextProps<
	T = Post | Noticia | Calculadora | Tabela | Category
> {
	data?: T;
	meta?: WordPressMetaData;
	customFieldCalculator?: Calculadora_Customfieldcalculadoras | null;
}

export const Context = React.createContext<ContextProps>({});

export function useContext<T = Post | Noticia | Calculadora>() {
	return React.useContext<ContextProps<T>>(Context as any);
}
