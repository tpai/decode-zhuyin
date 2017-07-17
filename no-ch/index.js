'use strict';

/**
 * Output without special characters
 * @param {string} input
 * @return {string}
 */
module.exports = input => require('../index.js')(input).replace(/[\,,\.,\;,\/,\-, ]/ig, '');
