#!/usr/bin/env node

const decodeZhuyin = require('./');

process.argv.splice(2).forEach(input => {
    console.log(decodeZhuyin(input).replace(/[\,,\.,\;,\/,\-, ]/ig, ''));
});
