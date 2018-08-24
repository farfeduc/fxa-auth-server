/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict'

const assert = require('insist')
const base10 = require('../../../lib/crypto/base10')

describe('base10', () => {
  it('takes 1 integer argument, returns a function', () => {
    assert.equal(typeof base10, 'function')
    assert.equal(base10.length, 1)
    const gen = base10(10)
    assert.equal(typeof gen, 'function')
    assert.equal(gen.length, 0)
  })

  it('should have correct output', () => {
    const gen = base10(10)
    return gen().then(code => {
      assert.equal(code.length, 10, 'matches length')
      assert.ok(/^[0-9]+$/.test(code), 'only digits')
    })
  })
})
