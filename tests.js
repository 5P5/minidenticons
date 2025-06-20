import assert from 'assert/strict'

import { randomString } from './benchmark/benchmark.js'

import { minidenticon as minidenticon_CE } from './minidenticons.min.js'
import { minidenticon as minidenticon_NO_CE } from './no-custom-element.min.js'


const COLLISION_TESTS_NUMBER = 10_000


function alternateTerribleHash(str) {
    return str.split('')
        .reduce((hash, char) => hash + char.charCodeAt(0), 123456)
}

console.time("\nTests duration")

// minidenticon tests

new Array(minidenticon_CE, minidenticon_NO_CE).forEach(minidenticon => {

    // non-integer hue normal for empty string
    assert.equal(
        minidenticon(""),
        '<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(40 95% 45%)"></svg>'
    )

    assert.equal(
        minidenticon("laurent"),
        '<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(160 95% 45%)"><rect x="0" y="0" width="1" height="1"/><rect x="0" y="2" width="1" height="1"/><rect x="0" y="3" width="1" height="1"/><rect x="1" y="1" width="1" height="1"/><rect x="2" y="2" width="1" height="1"/><rect x="2" y="3" width="1" height="1"/><rect x="4" y="0" width="1" height="1"/><rect x="4" y="2" width="1" height="1"/><rect x="4" y="3" width="1" height="1"/><rect x="3" y="1" width="1" height="1"/></svg>'
    )

    assert.equal(
        minidenticon("5P5", { padding: 0 }),
        '<svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg" fill="hsl(120 95% 45%)"><rect x="0" y="0" width="1" height="1"/><rect x="0" y="2" width="1" height="1"/><rect x="0" y="3" width="1" height="1"/><rect x="1" y="3" width="1" height="1"/><rect x="1" y="4" width="1" height="1"/><rect x="2" y="1" width="1" height="1"/><rect x="2" y="2" width="1" height="1"/><rect x="2" y="3" width="1" height="1"/><rect x="2" y="4" width="1" height="1"/><rect x="4" y="0" width="1" height="1"/><rect x="4" y="2" width="1" height="1"/><rect x="4" y="3" width="1" height="1"/><rect x="3" y="3" width="1" height="1"/><rect x="3" y="4" width="1" height="1"/></svg>',
        'padding'
    )

    assert.equal(
        minidenticon("5P5", { padding: 0, colors: 329 }),
        '<svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg" fill="hsl(39 95% 45%)"><rect x="0" y="0" width="1" height="1"/><rect x="0" y="2" width="1" height="1"/><rect x="0" y="3" width="1" height="1"/><rect x="1" y="3" width="1" height="1"/><rect x="1" y="4" width="1" height="1"/><rect x="2" y="1" width="1" height="1"/><rect x="2" y="2" width="1" height="1"/><rect x="2" y="3" width="1" height="1"/><rect x="2" y="4" width="1" height="1"/><rect x="4" y="0" width="1" height="1"/><rect x="4" y="2" width="1" height="1"/><rect x="4" y="3" width="1" height="1"/><rect x="3" y="3" width="1" height="1"/><rect x="3" y="4" width="1" height="1"/></svg>',
        'colors'
    )

    assert.equal(
        minidenticon("5P5", { padding: 0, colors: 12, saturation: 100, saturationSteps: 4, lightness: 50, lightnessSteps: 4 }),
        '<svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg" fill="hsl(270 33% 16%)"><rect x="0" y="0" width="1" height="1"/><rect x="0" y="2" width="1" height="1"/><rect x="0" y="3" width="1" height="1"/><rect x="1" y="3" width="1" height="1"/><rect x="1" y="4" width="1" height="1"/><rect x="2" y="1" width="1" height="1"/><rect x="2" y="2" width="1" height="1"/><rect x="2" y="3" width="1" height="1"/><rect x="2" y="4" width="1" height="1"/><rect x="4" y="0" width="1" height="1"/><rect x="4" y="2" width="1" height="1"/><rect x="4" y="3" width="1" height="1"/><rect x="3" y="3" width="1" height="1"/><rect x="3" y="4" width="1" height="1"/></svg>',
        'all options'
    )

    assert.equal(
        minidenticon("foo"),
        '<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(120 95% 45%)"><rect x="0" y="0" width="1" height="1"/><rect x="1" y="0" width="1" height="1"/><rect x="1" y="4" width="1" height="1"/><rect x="2" y="0" width="1" height="1"/><rect x="2" y="2" width="1" height="1"/><rect x="2" y="3" width="1" height="1"/><rect x="2" y="4" width="1" height="1"/><rect x="4" y="0" width="1" height="1"/><rect x="3" y="0" width="1" height="1"/><rect x="3" y="4" width="1" height="1"/></svg>'
    )

    assert.equal(
        minidenticon("foo", { saturation: 75 }),
        '<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(120 75% 45%)"><rect x="0" y="0" width="1" height="1"/><rect x="1" y="0" width="1" height="1"/><rect x="1" y="4" width="1" height="1"/><rect x="2" y="0" width="1" height="1"/><rect x="2" y="2" width="1" height="1"/><rect x="2" y="3" width="1" height="1"/><rect x="2" y="4" width="1" height="1"/><rect x="4" y="0" width="1" height="1"/><rect x="3" y="0" width="1" height="1"/><rect x="3" y="4" width="1" height="1"/></svg>'
    )

    assert.equal(
        minidenticon("foo", { lightness: 75 }),
        '<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(120 95% 75%)"><rect x="0" y="0" width="1" height="1"/><rect x="1" y="0" width="1" height="1"/><rect x="1" y="4" width="1" height="1"/><rect x="2" y="0" width="1" height="1"/><rect x="2" y="2" width="1" height="1"/><rect x="2" y="3" width="1" height="1"/><rect x="2" y="4" width="1" height="1"/><rect x="4" y="0" width="1" height="1"/><rect x="3" y="0" width="1" height="1"/><rect x="3" y="4" width="1" height="1"/></svg>'
    )

    assert.equal(
        minidenticon("foo", { hashFn: alternateTerribleHash }),
        '<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(120 95% 45%)"><rect x="0" y="2" width="1" height="1"/><rect x="1" y="2" width="1" height="1"/><rect x="1" y="3" width="1" height="1"/><rect x="1" y="4" width="1" height="1"/><rect x="2" y="3" width="1" height="1"/><rect x="2" y="4" width="1" height="1"/><rect x="4" y="2" width="1" height="1"/><rect x="3" y="2" width="1" height="1"/><rect x="3" y="3" width="1" height="1"/><rect x="3" y="4" width="1" height="1"/></svg>'
    )

    assert.notEqual(
        minidenticon("foo"),
        minidenticon("foo", { hashFn: alternateTerribleHash })
    )

    for (let saturation = 0; saturation < 100; saturation += 5) {
        for (let lightness = 0; lightness < COLLISION_TESTS_NUMBER; lightness += 5) {
            assert.equal(
                minidenticon("foo", { saturation, lightness }),
                `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(120 ${saturation}% ${lightness}%)"><rect x="0" y="0" width="1" height="1"/><rect x="1" y="0" width="1" height="1"/><rect x="1" y="4" width="1" height="1"/><rect x="2" y="0" width="1" height="1"/><rect x="2" y="2" width="1" height="1"/><rect x="2" y="3" width="1" height="1"/><rect x="2" y="4" width="1" height="1"/><rect x="4" y="0" width="1" height="1"/><rect x="3" y="0" width="1" height="1"/><rect x="3" y="4" width="1" height="1"/></svg>`
            )
        }
    }

})

// collision tests

const minidenticon = minidenticon_CE

const seeds = new Set() // to ensure no duplicate random seed
const minidenticons = new Set()
for (let i = 0; i < COLLISION_TESTS_NUMBER; i++) {
    const seed = randomString(15)
    seeds.add(seed)
    minidenticons.add(minidenticon(seed))
    if ((i + 1) % ~~(COLLISION_TESTS_NUMBER / (i < (COLLISION_TESTS_NUMBER / 10) ? 100 : 10)) === 0)
        console.log(`${seeds.size - minidenticons.size} collisions out of ${seeds.size}`,
                    `(${((seeds.size - minidenticons.size)/seeds.size * 100).toFixed(2)}%)`)
}

console.timeEnd("\nTests duration")
