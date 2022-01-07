const ffi = require('ffi-napi')

// Declares the rust module for the Node FFI
const rustModule = ffi.Library('../target/release/libffi_node', {
  sum_range: ['int', ['int']],
  say_hello: ['void', ['string']],
})

// src/io/stdout.rs
rustModule.say_hello('Eder')

// src/numbers/range.rs
const sum = rustModule.sum_range(1_000_000)
console.log('Sum from 0 to 1.000.000 is: %d', sum)
