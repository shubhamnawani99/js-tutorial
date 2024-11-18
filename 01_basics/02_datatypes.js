"use strict"; // Treat all JS Code as newer version of JS

// alert("Hello") // ReferenceError: alert is not defined
// alert is available in browser by default, not in NodeJS

// ECMA Script writes the standards for JS
// https://tc39.es/ecma262/2023/multipage/
// MDN - Docs by Morzila firefox

// Data-types in JS
// Primitive
let name = "String" // string
let age = 19 // number
let isLoggedIn = true // boolean
let undef = undefined // undefined, type is not given
let nullVal = null // null, value is not given, but type is assigned
let obj = Object // object
let symbol = Symbol // symbol, to create unique elements/components, Eg: in Figma

console.table([name, age, isLoggedIn, undef, nullVal, symbol])

console.log('Type of null is', typeof null); // Object lmao
console.log('Type of undefined is', typeof undefined); // undefined

