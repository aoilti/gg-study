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
    for (let i = 0; i < arr.length; i++) {

    }
}

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