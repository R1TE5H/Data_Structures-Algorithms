const arr1 = [1, 2, 3, 4];
const arr2 = arr1.map((element) => (element += 3));
const arr3 = arr1.map((element, index) => ({ element, index }));

console.log(arr3);
