const { files } = require("../src/walk");

test("should give all test.js files", (assert) => {
  assert.deepEqual(files, [__filename]);
});
