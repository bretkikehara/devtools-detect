import { assert } from 'chai';
import { describe, it } from 'mocha';
import { initDevtools } from './detect';

describe('js-console', () => {
  it('closed', () => {
    assert.equal(initDevtools(window), false);
  });
});
