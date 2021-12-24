function findMean(nums) {
    return nums.reduce((a, b) => a + b) / nums.length;
}

function findMedian(numbers) {
    let median = 0,
    numsLen = numbers.length;
    numbers.sort();

  if (numsLen % 2 === 0 ) {
    median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
  } else { 
    median = numbers[(numsLen - 1) / 2];
  }
    return median;
}

function findMode(arr) {
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }

  return +mostFrequent;
}

function createFrequencyCounter(arr) {
  return arr.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

function convertAndValidateNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]);

    if (Number.isNaN(valToNumber)) {
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valToNumber);
  }
  return result;
}