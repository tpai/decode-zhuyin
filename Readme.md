# Decode Zhuyin

Decode Zhuyin password from Chinese words.

## Features

* Output full text.
* Output without spaces.
* Output without special characters.

## Usage

```
require('./')('我難過') // output: 'ji3s06eji4'
require('./no-space')('垃圾不分藍綠') // output: 'x8ru1j4zpx064'
require('./no-special-characters')('這我一定吉') // output: '5k4ji3u2u4ru6'
```
