const { equal, doesNotMatch } = require('assert');
const { expect, assert } = require('chai');
const { getLengths, getSum } = require('../src/ops');
const fetchData = require('../src/rainfall');

describe('ops', () => {
  describe('#getLengths()', () => {
    it('array of non-empty strings', () => {
      expect(getLengths(['hello', 'there'])).to.deep.equal([5, 5]);
    });

    it('array of empty strings', () => {
      expect(getLengths(['', ''])).to.deep.equal([0, 0]);
    });

    it('empty array', () => {
      expect(getLengths([])).to.deep.equal([]);
    });

    it('should throw an error if input is not an array', () => {
      assert.throws(() => {
        getLengths(12);
      }, TypeError);
    });
  });

  describe('#getSum()', () => {
    it('positive integers', () => {
      equal(getSum([1, 2, 3]), 6);
    });

    it('negative integers', () => {
      equal(getSum([-1, -2, -3]), -6);
    });

    it('should return 0 for an empty array', () => {
      equal(getSum([]), 0);
    });

    it('single element array', () => {
      equal(getSum([3]), 3);
    });

    it('should throw an error if input is not an array', () => {
      assert.throws(() => {
        getSum(12);
      }, TypeError);
    });
  });
});

describe('rainfall', () => {
  describe('#fetchData()', () => {
    it('expect an array', () => {
      return fetchData(3680, { latest: true, _sorted: true }).then((data) =>
        expect(data[0]).that.includes.all.keys(['value', 'dateTime'])
      );
    });
  });

  describe('#fetchData()', () => {
    it('expect a bad request for incorrect options', (done) => {
      fetchData(3680, { sorted: true }).catch((err) => done());
    });
  });
});
