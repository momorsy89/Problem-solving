function sortArray(array) {
  // Return a sorted array.
  let odd = array.filter((i) => i % 2 !== 0);
  let j = 0;

  odd = odd.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1 || array[i] % 2 == -1) {
      array[i] = odd[j];
      j++;
    }
  }
  return array;
}
