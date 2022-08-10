import { instanceToPlain } from 'class-transformer';

export const extractData = (data: unknown) => {
	return JSON.parse(JSON.stringify(instanceToPlain(data)));
};
