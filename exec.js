#!/usr/bin/env node

const decodeZhuyin = require('./no-ch');

process.argv.splice(2).forEach(input => {
    console.log(decodeZhuyin(input));
});
