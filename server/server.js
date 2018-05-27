const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3025;
const app = express();

app.get('/wasm', (req, res) => {
  const wasmPath = path.join(__dirname, './static/declarity_rs.wasm');
  const wasm = fs.readFileSync(wasmPath);

  res.set('Content-Type', 'application/wasm');
  res.send(wasm);
});

app.use(express.static('static'));

app.listen(PORT, () => {
  console.log(`running app on port ${PORT}`);
});