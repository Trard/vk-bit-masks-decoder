# VK bit masks decoder

Very simple script to decode vk bit masks

## Installation

using npm:
```shell
npm i vk-bit-masks-decoder
```

## Example usage:
```js
const { perms, decodeBitMask } = require('vk-bit-masks-decoder')

const bitMask = 244236287

console.log(decodeBitMask(bitMask, perms.user))
```
