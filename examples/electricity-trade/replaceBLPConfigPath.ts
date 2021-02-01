/*
 * Copyright 2020 Hyperledger Cactus Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * ReplacePath.js
 */
const fs = require('fs')

const targetFile = '../../dist/packages/config/BLP_config.js';
const srcStr = '"../BusinessLogicElectricityTrade"';
const distStr = '"../../examples/electricity-trade/BusinessLogicElectricityTrade"';

fs.readFile(targetFile, 'utf8', (readErr, data) => {
  if (readErr) {
    return console.log(readErr);
  }
  const result = data.replace(srcStr, distStr);

  fs.writeFile(targetFile, result, 'utf8', (writeErr) => {
     if (writeErr) return console.log(writeErr);
  });
});