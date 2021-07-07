function bubbleSort(arr) {
  const n = arr.length;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      if (arr[j - 1] > arr[j]) {
        //swap elements
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
module.exports = bubbleSort;
