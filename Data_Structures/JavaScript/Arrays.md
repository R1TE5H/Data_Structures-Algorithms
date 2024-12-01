# JavaScript Arrays

In JavaScript, Arrays are dynamic in data type and size. This means that the data can be of any type, and can change after creation.

1. **Creating Arrays**

   - Because arrays are dynamic and mutable, they can be created with or without initial values.

   ```javascript
   const arr1 = []; // Creates an empty array
   const arr2 = [1, "A", true, { name: "John" }]; // Creates an array with initial values
   const arr3 = [1, 2, 3, ...arr2]; //  Creates an array with initial values, and spreads the values from arr2
   ```

2. **Accessing Elements**

   - `at(index)` returns the element at the index parameter.

   ```javascript
   const arr = [1, 2, 3, 4];
   const val = arr.at(2);

   // val --> 3
   ```

   - `indexOf(element)` returns the index of the element parameter. If the parameter is not in the array, it returns -1.

   ```javascript
   const arr = [1, 2, 3, 4];
   const val_1 = arr.indexOf(2);
   const val_2 = arr.indexOf(7);

   // val_1 --> 1
   // val_2 ---> -1
   ```

   - `includes(element)` returns a boolean based on whether the element parameter is in the array.

   ```javascript
   const arr = [1, 2, 3, 4];
   const val_1 = arr.includes(1);
   const val_2 = arr.includes(9);

   // val_1 --> true
   // val_2 --> false
   ```

   - `lastIndexOf(element)` returns the index of the last occurrence of the element parameter.

   ```javascript
   const arr = [1, 2, 3, 4, 3];
   const val = arr.lastIndexOf(3);

   // val --> 4
   ```

3. **Adding and Removing Elements**

   - `push(element_1, element_2, ...)` adds the parameter element(s) to the end of the array.

   ```javascript
   const arr = ["First Element"];
   arr.push("New Element");

   // arr --> ["First Element", "New Element"]
   ```

   - `pop()` removes the element in the last index of the array.

   ```javascript
   const arr = ["First", "Second"];
   arr.pop();

   // arr --> ["First"]
   ```

   - `unshift(element_1, element_2, ...)` adds the parameter element(s) to the start of the array.

   ```javascript
   const arr = [1, 2, 3, 4];
   arr.unshift(5, 6, 7, 8);

   // arr --> [5, 6, 7, 8, 1, 2, 3, 4]
   ```

   - `shift()` removes the first element of the array.

   ```javascript
   const arr = [1, 2, 3, 4];
   arr.shift();

   // arr --> [2, 3, 4]
   ```

   - `concat(array)` adds the array parameter to the array.

   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = ["a", "b", "c"];
   arr1.concat(arr2);

   // arr1 --> [1, 2, 3, "a", "b", "c"]
   ```

4. **Modifying Arrays**

   - `splice(start, end)` deletes elements in the array starting at the start parameter index and ending at the end parameter index (not inclusive).
   - The method will return a new array containing the deleted elements.

   ```javascript
   const arr1 = [1, 2, 3, 4];
   const arr2 = arr.splice(1, 3);

   // arr1 --> [1]
   // arr2 --> [2, 3, 4]
   ```

   - `slice(start, end)` returns a new array containing the elements from the current array starting at the start parameter index and ending at the end parameter index (not inclusive).
   - The end parameter can be negative numbers where -1 indicates the last element (not inclusive).
   - If only one parameter is passed, the method will return an array containing the elements up to the passed parameter (the parameter will be considered the end index).

   ```javascript
   const arr1 = [1, 2, 3, 4];
   const arr2 = arr.slice(1, 3);
   const arr3 = arr.slice(1);

   // arr1 --> [1, 2, 3, 4]
   // arr2 --> [2, 3]
   // arr3 --> [2, 3, 4]
   ```

   - `reverse()` reverses the order of the elements in the array.

   ```javascript
   const arr = [1, 2, 3, 4];
   arr.reverse();

   // arr4 --> [4, 3, 2, 1]
   ```

   - `join(separator)` returns a string containing each element of the array separated by the separator parameter.

   ```javascript
   const arr = [1, 2, 3, 4];
   const val = arr.join("-");

   // val --> "1-2-3-4"
   ```

5. **Iterating Arrays**

   - `map((element, index, array) => (...))` applies a callback function to each element in the array and returns an new array with the transformed elements.
   - The `element`, `index`, and `array` arguments enable the callback to access the elements and their indexes, as well as the original array. `index` and `array` are optional parameters.

   ```javascript
   const arr1 = [1, 2, 3, 4];
   const arr2 = arr1.map((element) => (element += 3));
   const arr3 = arr1.map((element, index) => ({ element, index }));
   // arr1 --> [1, 2, 3, 4]
   // arr2 --> [4, 5, 6, 7]
   // arr3 --> [{element: 1, index: 0}, {element: 2, index: 1}, ...]
   ```

   - `forEach((element, index, array) => (...))` applies a callback function to each element in the array and mutates the original array.
   - The `element`, `index`, and `array` arguments enable the callback to access the elements and their indexes, as well as the original array. This allows the array to be edited in place. `index` and `array` are optional parameters.

   ```javascript
   const arr1 = [1, 2, 3, 4];
   arr1.forEach((element) => console.log(element));
   arr1.forEach((element, index, array) => (array[index] = element + 4));

   // arr1 --> [5, 6, 7, 8]
   ```

   - `for of` is a type of loop that iterates through an array.
   - This makes it easier to work with large datasets and is preferred when complex processes need to occur by improving readability compared to callback functions.

   ```javascript
   const arr = [1, 2, 3, 4];
   const arr2 = [];
   for (element of arr) arr2.push(element + 2);

   // arr2 --> [3, 4, 5, 6]
   ```

6. **Filtering and Searching Arrays**

   - `filter((element, index) => (filtering conditions))` returns an array of elements that pass the filtering conditions.
   - The `element` and `index` arguments enable the callback to access the elements and their indexes. `index` is an optional parameter.

   ```javascript
   const arr = [1, 2, 3, 4];
   const filtered = arr.filter((element) => element < 3);

   // filtered --> [1, 2]
   ```

   - `find((element, index) => (conditions))` returns the first element in the array that meets the callback's conditions.
   - The `element` and `index` arguments enable the callback to access the elements and their indexes. `index` is an optional parameter.

   ```javascript
   const arr = [1, 2, 3, "Hello"];
   const val = arr.find((element) => Number.isInteger(element) == false);

   // val --> "Hello"
   ```

7. **Destructuring and Spread Operator**
   - The Spread Operator (`...arr`) is
   - Array Destructuring ([element_1, element_2]) is
   - `reduce()`
