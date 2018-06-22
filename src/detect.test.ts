import { initDevtools } from './detect';
import { describe, it } from 'mocha';
import { assert } from 'chai';

describe('js-console', () => {
  it('closed', () => {
    assert.equal(initDevtools(window), false);
  });
});
