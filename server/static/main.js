console.log("loaded main.js!");

WebAssembly.instantiateStreaming(fetch('/wasm'))
  .then(wasm_module => {
    console.log("got here.", wasm_module);
    console.log(`2 + 1 = ${wasm_module.instance.exports.add_one(2)}`);
  });