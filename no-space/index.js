'use strict';

/**
 * Output without spaces
 * @param {string} input
 * @return {string}
 */
module.exports = input => require('../index.js')(input).replace(/ /ig, '');
