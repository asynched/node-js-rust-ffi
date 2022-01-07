# NODE-JS-RUST-FFI

A simple test on interacting between languages with JS and Rust.

## How to run

### Requirements

- nodejs
- rustc + cargo

### Compile

First compile the source code to a `.so` file.

```sh
$ cargo build --release # This flag is important, since it will generate the file that node will look for.
```

### Install Node packages

Install the `ffi-napi` module for NodeJS.

```sh
$ yarn
```

> Node, you'll need to be inside the `node` root folder

### Run the program

```sh
$ node index.js
```

## Author

| ![Eder Lima](https://github.com/asynched.png?size=100) |
| ------------------------------------------------------ |
| [Eder Lima](https://github.com/asynched)               |
