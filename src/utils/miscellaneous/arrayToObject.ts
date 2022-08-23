export type ObjectMap = {
	key: number | string;
	value: number | string;
};

export function arrayToObject(arr: ObjectMap[]) {
	if (!Array.isArray(arr)) return {};
	const output: any = {};
	arr.forEach(({ key, value }: ObjectMap) => {
		output[`${key}`] = value;
	});

	return output;
}
