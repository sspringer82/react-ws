import { describe, expect, it } from 'vitest';
import { add } from './add';

describe('add():', () => {
  it('should add 1 and 1 and return 2', () => {
    // arrange
    // act
    const result = add(1, 1);
    // assert
    expect(result).toBe(2);
  });
});
