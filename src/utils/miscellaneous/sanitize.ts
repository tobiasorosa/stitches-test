import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content?: string | null) => {
	if (content) {
		return DOMPurify.sanitize(content);
	}

	return '';
};
