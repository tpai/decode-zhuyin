'use strict';

/**
 * Decode Zhuyin password from Chinese words
 * @param {string} input whatever you input in Chinese
 * @return {string}
 */
module.exports = input => {
    const dict = require('./data/dict.js');
    const zhuyin = require('./lib/cjst.js').cjst.chineseToZhuyin(input);
    return zhuyin.toString().replace(/,/ig, '').split('').reduce((res, val) => res + dict[val], '');
};
