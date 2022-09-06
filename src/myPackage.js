
// @ts-check
/**
 *
 * @param {object} config
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
  return true;
}

/**
 *
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}