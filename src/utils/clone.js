/** Used to generate unique IDs. */
let idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  let id = ++idCounter;
  return toString(prefix) + id;
}

function toString(sth) {
  return sth === null || !sth ? "" : String(sth);
}

function deepCloneJson(json) {
  return JSON.parse(JSON.stringify(json));
}

export { uniqueId, deepCloneJson };
