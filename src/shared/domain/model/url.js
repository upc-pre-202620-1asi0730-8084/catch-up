import {StringValidator} from "@/shared/domain/model/string-validator.js";

/**
 * Value object representing a URL within the domain.
 *
 * @remarks
 * This value object ensures that URL values are well-formed according to
 * RFC standards and provides a consistent way to handle URLs. It is immutable.
 */
export class Url {
    /** @type {string} */
    #value;

    /**
     * Creates a new Url instance.
     *
     * @param {string} value - The URL string.
     */
    constructor(value) {
        this.#value = StringValidator.isValidUrl(value) ? value : '';
        Object.freeze(this);
    }

    /**
     * Returns the string representation of the URL.
     * @returns {string}
     */
    toString() {
        return this.#value;
    }

    /**
     * Checks if the URL is empty.
     * @returns {boolean}
     */
    isEmpty() {
        return this.#value === '';
    }

    /**
     * Returns the primitive value of the Url.
     * @returns {string}
     */
    valueOf() {
        return this.#value;
    }

    /**
     * Checks for equality with another Url instance.
     * @param {Url} other - The other Url to compare.
     * @returns {boolean}
     */
    equals(other) {
        return other instanceof Url && this.#value === other.toString();
    }
}
