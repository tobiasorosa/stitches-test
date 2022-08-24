import { isObject } from './isObject';

export function mapResponsive(prop: any, mapper: (val: any) => any) {
	if (Array.isArray(prop)) {
		return prop.map(item => (item === null ? null : mapper(item)));
	}

	if (isObject(prop)) {
		return Object.keys(prop).reduce((result: Record<string, any>, key) => {
			result[key] = mapper(prop[key]);
			return result;
		}, {});
	}

	if (prop != null) {
		return mapper(prop);
	}

	return null;
}
