// Task #1: The function returns the minimum, maximum and average values of the array:
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max = arr[i];
    }
    
    sum += arr[i];
  }
  
  const avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Task #2: 
// -the summation function of the elements:
function summElementsWorker(...arr) {
  if (arr.length === 0) 
    return 0;
  
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

// -the function of calculating the difference between the maximum and minimum elements:
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) 
    return 0;
  
  let min = Infinity;
  let max = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max =arr[i];
    }
  }

  return max - min;
}

// -the function of calculating the difference between the sums of even and odd elements:
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) 
    return 0;
  
  let sumEvenElements = 0;
  let sumOddElements = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
    } else {
        sumOddElements += arr[i];
    }
  }
 
  return sumEvenElements - sumOddElements;
}

// -the function of calculating the average value of even elements:
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) 
    return 0;
  
  let sumEvenElements = 0;
  let counterEvenElements = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
      counterEvenElements ++;
    }
  }
  
  if (counterEvenElements === 0)
    return 0;
  
  return Number((sumEvenElements / counterEvenElements).toFixed(2));
}

// Task #3: Сonverter aggregator:
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  
  return maxWorkerResult;
}
