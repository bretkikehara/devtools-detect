import { assert } from 'chai';
import { describe, it } from 'mocha';
import { isDevtoolsOpen } from './detect';

describe('js-console', () => {
  it('closed', () => {
    assert.equal(isDevtoolsOpen(window), false);
  });
});
