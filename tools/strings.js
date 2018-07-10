import { compose } from 'ramda';

export const trim = (x) => x.trim();
export const toLower = (x) => x.toLowerCase();
export const toUpper = (x) => x.toUpperCase();

/**
 * Lowers and trims the given string
 */
export const purify = compose(toLower, trim);
