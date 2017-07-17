# Decode Zhuyin

Decode Chinese words to Zhuyin password.

## Features

* Output full text.
* Output without space.
* Output without special character.
* Support [npx](https://www.npmjs.com/package/npx)

## Usage

node.js require

```
// output full text
require('decode-zhuyin')('安安你好正') // '0 0 su3cl35/4'

// output without space
require('decode-zhuyin/no-sp')('安安你好正') // '00su3cl35/4'

// output without special character
require('decode-zhuyin/no-ch')('安安你好正') // '00su3cl354'
```

npx (built-in after `npm 5.2.0`)

```
$ npx decode-zhuyin 安安你好正
00su3cl354
```
