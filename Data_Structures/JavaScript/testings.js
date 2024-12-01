const arr1 = [1, 2, 3, 4];
arr1.forEach((element) => console.log(element));
arr1.forEach((element, index, array) => (array[index] = element + 4));

console.log(arr1);
