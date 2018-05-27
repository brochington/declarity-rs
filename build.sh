#!/bin/bash
cargo +nightly build --target wasm32-unknown-unknown --release
wasm-gc target/wasm32-unknown-unknown/release/declarity_rs.wasm -o server/static/declarity_rs.wasm