#!/usr/bin/env node

import fs from 'node:fs';

/** This is the main function */
const main = () => {
  /** @type {string} */
  const filePath = process.argv[2];
  /** @type {string} */
  const testFile = fs.readFileSync(filePath).toString();
  /** @type {string[]} */
  const lines = testFile.split(/\n/);
  /** @type {string[]} */
  const imports = lines.filter(line => /.*import.*/.exec(line));
  /** @type {string[]} */
  const localImports = imports.filter(line => /'.*\.\/.*';/.exec(line));
  /** @type {string[]} */
  const globalImports = imports.filter(line => !localImports.includes(line));
  /** @type {string[]} */
  const requires = lines.filter(line => /.*require.*/.exec(line));
  /** @type {string[]} */
  const localRequires = requires.filter(line => /'.*\.\/.*';/.exec(line));
  /** @type {string[]} */
  const globalRequires = requires.filter(line => !localRequires.includes(line));
  /** @type {string[]} */
  const rest = lines.filter(line => !imports.includes(line) && !requires.includes(line));
  /** @type {string} */
  let actualLine = '';

  /** Removing empty lines before the rest of the code */
  do {
    actualLine = rest.shift();
  } while (actualLine !== null && actualLine !== undefined && actualLine.length === 0);
  /** @type {string[]} */
  const orderedLines = [
    globalImports
      .sort((a, b) => a.length - b.length)
      .join('\n'),
      ...(globalImports.length ? ['\n\n'] : []),
    localImports
      .sort((a, b) => a.length - b.length)
      .join('\n'),
    ...(localImports.length ? ['\n\n'] : []),
    globalRequires
      .sort((a, b) => a.length - b.length)
      .join('\n'),
    ...(globalRequires.length ? ['\n\n'] : []),
    localRequires
      .sort((a, b) => a.length - b.length)
      .join('\n'),
    ...(localRequires.length ? ['\n\n'] : []),
    [actualLine, ...rest]
      .join('\n')
  ];
  /** @type {string} */
  const orderedFile = orderedLines.join('');

  fs.writeFileSync(filePath, orderedFile);
}

main();
