import { ClassType } from '~/src/utils/axios-transformer/src';
import { IShortcode } from '~src/models/interfaces/IShortcode';
import { ButtonShortcode } from '~src/models/shortcode/ButtonShortcode';
import { ProductLinkShortcode } from '~src/models/shortcode/ProductLinkShortcode';

/**
 * Register here all Shortcode models into 'shortcodes' field
 */
export abstract class ShortcodeWrapper {
	static shortcodes: Array<ClassType<IShortcode>> = [
		ProductLinkShortcode,
		ButtonShortcode,
	];
}
