import { strict as assert } from 'assert';
import { sum } from '../math.js';

describe('Function sum', function() {
  it('should return 5 when adding 2 and 3', function() {
    assert.equal(sum(2, 3), 5);
  });

  it('should return -1 when adding -2 and 1', function() {
    assert.equal(sum(-2, 1), -1);
  });

  it('should return 0 when adding 0 and 0', function() {
    assert.equal(sum(0, 0), 0);
  });
});
