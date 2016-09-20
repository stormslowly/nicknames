var assert = require('assert');
var names  = require('./index.js')

assert.ok(names.getRandomNickName)
assert.ok(names.getRandomNickName())

// console.log(names.getRandomNickName())
