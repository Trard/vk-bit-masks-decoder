const { perms, decodeBitMask } = require('vk-bit-masks-decoder');

const bitMask = 244236287;

console.log(decodeBitMask(bitMask, perms.user));
