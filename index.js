#!/usr/bin/env node

import fs from 'node:fs';
import orderImports from "./src/orderImports/index.js";

/** This is the main function */
const main = () => {
  /** @type {string} */
  const filePath = process.argv[2];
  /** @type {string} */
  const text = fs.readFileSync(filePath).toString();
  /** @type {string} */
  const orderedFile = orderImports(text);

  fs.writeFileSync(filePath, orderedFile);
}

main();
