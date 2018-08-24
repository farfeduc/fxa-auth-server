/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict'

const assert = require('assert')
const random = require('./random')

const ALPHABET = '0123456789'

// some sanity checks, hard to test, private to this mdoule
assert.equal(ALPHABET.length, 10, 'ALPHABET is 10 digits')

function base10(len) {
  return random(len)
    .then(bytes => {
      const out = []

      for (let i = 0; i < len; i++) {
        out.push(ALPHABET[bytes[i] % 10])
      }

      return out.join('')
    })
}

module.exports = (len) => {
  return () => {
    return base10(len)
  }
}
