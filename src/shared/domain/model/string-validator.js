/**
 * Domain utility for string-based type validation.
 *
 * @remarks
 * Provides static methods to enforce string constraints across the domain.
 */
export class StringValidator {
    /**
     * Checks if a value is a string primitive or a String object.
     *
     * @param {*} value - The value to evaluate.
     * @returns {boolean} True if the value is a string, false otherwise.
     */
    static isString(value) {
        return typeof value === 'string' || value instanceof String;
    }

    /**
     * Checks if a value is a string that contains at least one non-whitespace character.
     *
     * @param {*} value - The value to evaluate.
     * @returns {boolean} True if the value is a non-empty string, false otherwise.
     */
    static isNotEmptyString(value) {
        return this.isString(value) && value.trim().length > 0;
    }

    /**
     * Validates if a string is a well-formed URL.
     *
     * @param {string} url - The URL string to validate.
     * @returns {boolean} True if the URL is valid, false otherwise.
     */
    static isValidUrl(url) {
        if (!this.isString(url)) return false;
        if (URL.canParse) {
            return URL.canParse(url);
        }
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }
}
