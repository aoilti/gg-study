function bubbleSort(arr) {
  let tempVal;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        tempVal = arr[i];
        arr[i] = arr[j];
        arr[j] = tempVal;
      }
    }
  }

  return arr;
}

bubbleSort([2, 31, 45, 1, -1]);

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const midIndex = parseInt(arr.length / 2);
  const midVal = arr[midIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (i === midIndex) {
      continue;
    }
    if (item <= midVal) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return [...quickSort(left), midVal, ...quickSort(right)];
}

quickSort([2, 1, 4, 6, 82, 3, 7, 9, 1]);

function selectSort(arr) {
  let tempValue;
  for (let i = 0; i < arr.length; i++) {
    let minValue = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minValue = arr[j];
      }
    }
  }
}
