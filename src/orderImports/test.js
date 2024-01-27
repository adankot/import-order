import { it, describe } from 'node:test';
import assert from 'node:assert';

import orderImports from "./index.js";

// language=javascript
const testFile =
  `
    import temp1 from 'temp1';
    import lib1 from 'lib1';

    export { temp1, lib1 };
  `;

// language=javascript
const testResult =
  `
    import lib1 from 'lib1';
    import temp1 from 'temp1';

    export { temp1, lib1 };
  `;

describe('orderImports', () => {
  it('should order global imports', () => {
    const result = orderImports(testFile);
    return assert.strictEqual(result.trim(), testResult.trim());
  })
});


