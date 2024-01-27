import { it, describe } from 'node:test';
import assert from 'node:assert';

import removeEmptyLinesFromTheBeginning from "./index.js";

// language=javascript
/** @type {string[]} */
const lines = ['\n', '\n', '\n', '\n', 'export {};'];

describe('removeEmptyLinesFromTheBeginning', () => {
  it('should remove empty lines from the beginning of a text', () => {
    assert.deepEqual(removeEmptyLinesFromTheBeginning(lines), ['export {};']);
  });
});
