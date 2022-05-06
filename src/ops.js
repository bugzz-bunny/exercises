const getLengths = (words) => {
  return words.map((word) => word.length);
}

const getSum = (numbers) => {
  return numbers.reduce((sum, curr) => sum + curr, 0);
}

module.exports = { getLengths, getSum };
